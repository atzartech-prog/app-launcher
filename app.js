// App Launcher Main Script

let searchQuery = '';
let collapsedCategories = new Set();

// Initialize on DOM ready
document.addEventListener('DOMContentLoaded', function() {
    loadConfiguration();
    renderApps();
    setupEventListeners();
});

// Setup Event Listeners
function setupEventListeners() {
    document.getElementById('searchInput').addEventListener('input', function(e) {
        searchQuery = e.target.value.toLowerCase();
        renderApps();
    });
}

// Load and Apply Configuration
function loadConfiguration() {
    const logoElement = document.getElementById('logo');
    const iconClasses = config.logo.split(' ');
    
    iconClasses.forEach(iconClass => {
        logoElement.classList.add(iconClass);
    });
    
    document.getElementById('headerTitle').textContent = config.headerTitle;
    document.getElementById('footerText').textContent = config.footerText;
}

// Render Apps with Categories and Accordion
function renderApps() {
    const container = document.getElementById('appsContainer');
    container.innerHTML = '';

    // Filter apps by search query
    const filteredApps = searchQuery 
        ? apps.filter(app => 
            app.name.toLowerCase().includes(searchQuery) ||
            app.description.toLowerCase().includes(searchQuery)
          )
        : apps;

    // Group apps by category
    const appsByCategory = {};
    categories.forEach(category => {
        appsByCategory[category.id] = [];
    });

    filteredApps.forEach(app => {
        if (appsByCategory.hasOwnProperty(app.category)) {
            appsByCategory[app.category].push(app);
        }
    });

    // Render categories with accordion
    categories.forEach(category => {
        const categoryApps = appsByCategory[category.id];
        
        if (categoryApps.length > 0) {
            const categoryGroup = document.createElement('div');
            categoryGroup.className = 'category-group';

            const title = document.createElement('div');
            title.className = 'category-title';
            if (collapsedCategories.has(category.id)) {
                title.classList.add('collapsed');
            }
            title.style.borderBottomColor = category.color;
            title.innerHTML = `
                <span>${category.name}</span>
                <span class="arrow">▼</span>
            `;
            title.addEventListener('click', () => toggleCategory(category.id));
            categoryGroup.appendChild(title);

            const appsList = document.createElement('div');
            appsList.className = 'apps-list';
            if (collapsedCategories.has(category.id)) {
                appsList.classList.add('hidden');
            }

            categoryApps.forEach(app => {
                const item = createAppItem(app, category.color);
                appsList.appendChild(item);
            });

            categoryGroup.appendChild(appsList);
            container.appendChild(categoryGroup);
        }
    });

    // Show message if no apps found
    if (container.children.length === 0) {
        const emptyMessage = document.createElement('div');
        emptyMessage.className = 'empty-state';
        emptyMessage.innerHTML = '<p>🔍 Tidak ada aplikasi ditemukan</p>';
        container.appendChild(emptyMessage);
    }
}

// Create App Item
function createAppItem(app, categoryColor) {
    const item = document.createElement('div');
    item.className = 'app-item';
    item.style.borderLeftColor = categoryColor;
    
    // Ambil semua class icon dari app.icon
    const iconClasses = app.icon.split(' ');
    
    // Create icon element
    const iconElement = document.createElement('i');
    iconElement.className = 'app-icon';
    iconClasses.forEach(cls => {
        iconElement.classList.add(cls);
    });
    
    // Create info element
    const infoElement = document.createElement('div');
    infoElement.className = 'app-info';
    infoElement.innerHTML = `
        <div class="app-name">${escapeHtml(app.name)}</div>
        <div class="app-description">${escapeHtml(app.description)}</div>
    `;
    
    item.appendChild(iconElement);
    item.appendChild(infoElement);
    
    // Add click handler to open app
    item.addEventListener('click', () => openApp(app.link));
    
    return item;
}

// Toggle Category
function toggleCategory(categoryId) {
    if (collapsedCategories.has(categoryId)) {
        collapsedCategories.delete(categoryId);
    } else {
        collapsedCategories.add(categoryId);
    }
    renderApps();
}

// Open App in New Tab
function openApp(link) {
    if (link && (link.startsWith('http://') || link.startsWith('https://'))) {
        window.open(link, '_blank');
    } else {
        alert('Link tidak valid');
    }
}

// Utility Functions
function escapeHtml(text) {
    const map = {
        '&': '&amp;',
        '<': '&lt;',
        '>': '&gt;',
        '"': '&quot;',
        "'": '&#039;'
    };
    return text.replace(/[&<>"']/g, m => map[m]);
}