// App Launcher Main Script

let currentEditingAppId = null;
let searchQuery = '';

// Initialize
document.addEventListener('DOMContentLoaded', function() {
    initializeDatabase();
    loadConfiguration();
    renderApps();
    setupEventListeners();
});

// Setup Event Listeners
function setupEventListeners() {
    // Search functionality
    document.getElementById('searchInput').addEventListener('input', function(e) {
        searchQuery = e.target.value.toLowerCase();
        renderApps();
    });

    // App icon preview
    document.getElementById('appIcon').addEventListener('input', function(e) {
        updateIconPreview(e.target.value);
    });

    // Close modals when clicking outside
    window.addEventListener('click', function(event) {
        const settingsModal = document.getElementById('settingsModal');
        const appEditorModal = document.getElementById('appEditorModal');
        
        if (event.target === settingsModal) {
            closeSettingsModal();
        }
        if (event.target === appEditorModal) {
            closeAppEditor();
        }
    });
}

// Load and Apply Configuration
function loadConfiguration() {
    const config = loadConfig();

    // Apply header
    document.getElementById('logo').src = config.logo;
    document.getElementById('headerTitle').textContent = config.headerTitle;
    document.querySelector('.header').style.background = `linear-gradient(135deg, ${config.headerColor} 0%, ${darkenColor(config.headerColor, 20)} 100%)`;

    // Apply footer
    document.getElementById('footerText').textContent = config.footerText;

    // Apply view mode
    setViewMode(config.viewMode, false);

    // Fill settings form
    document.getElementById('logoInput').value = config.logo;
    document.getElementById('headerTitleInput').value = config.headerTitle;
    document.getElementById('headerColorInput').value = config.headerColor;
    document.getElementById('footerTextInput').value = config.footerText;
}

// Render Apps with Categories and Search
function renderApps() {
    const container = document.getElementById('appsContainer');
    container.innerHTML = '';

    const config = loadConfig();
    const allApps = loadApps();

    // Filter apps by search query
    const filteredApps = searchQuery 
        ? allApps.filter(app => 
            app.name.toLowerCase().includes(searchQuery) ||
            app.description.toLowerCase().includes(searchQuery)
          )
        : allApps;

    // Group apps by category
    const appsByCategory = {};
    config.categories.forEach(category => {
        appsByCategory[category.id] = [];
    });

    filteredApps.forEach(app => {
        if (appsByCategory.hasOwnProperty(app.category)) {
            appsByCategory[app.category].push(app);
        }
    });

    // Render categories with apps
    config.categories.forEach(category => {
        const apps = appsByCategory[category.id];
        
        if (apps.length > 0) {
            const categoryGroup = document.createElement('div');
            categoryGroup.className = 'category-group';

            const title = document.createElement('div');
            title.className = 'category-title';
            title.style.borderBottomColor = category.color;
            title.textContent = category.name;
            categoryGroup.appendChild(title);

            const appsGrid = document.createElement('div');
            appsGrid.className = 'apps-grid';

            apps.forEach(app => {
                const card = createAppCard(app);
                appsGrid.appendChild(card);
            });

            categoryGroup.appendChild(appsGrid);
            container.appendChild(categoryGroup);
        }
    });

    // Show message if no apps found
    if (container.children.length === 0) {
        const emptyMessage = document.createElement('div');
        emptyMessage.style.textAlign = 'center';
        emptyMessage.style.padding = '2rem';
        emptyMessage.style.color = '#999';
        emptyMessage.innerHTML = '<p>📭 Tidak ada aplikasi ditemukan</p>';
        container.appendChild(emptyMessage);
    }
}

// Create App Card
function createAppCard(app) {
    const card = document.createElement('div');
    card.className = 'app-card';
    card.innerHTML = `
        <img src="${app.icon}" alt="${app.name}" class="app-icon" onerror="this.src='https://via.placeholder.com/60?text=${encodeURIComponent(app.name.substring(0,2))}'">
        <div class="app-info">
            <div class="app-name">${escapeHtml(app.name)}</div>
            <div class="app-description">${escapeHtml(app.description)}</div>
            <div class="app-actions">
                <button class="app-action-btn" onclick="event.stopPropagation(); openApp('${escapeHtml(app.link)}')" title="Buka aplikasi">🚀 Buka</button>
                <button class="app-action-btn edit" onclick="event.stopPropagation(); editApp('${app.id}')" title="Edit aplikasi">✏️ Edit</button>
            </div>
        </div>
    `;
    return card;
}

// Open App in New Tab
function openApp(link) {
    if (link && (link.startsWith('http://') || link.startsWith('https://'))) {
        window.open(link, '_blank');
    } else {
        alert('Link tidak valid');
    }
}

// Edit App
function editApp(appId) {
    currentEditingAppId = appId;
    const app = getAppById(appId);
    
    if (app) {
        document.getElementById('editorTitle').textContent = 'Edit Aplikasi';
        document.getElementById('appName').value = app.name;
        document.getElementById('appDescription').value = app.description;
        document.getElementById('appIcon').value = app.icon;
        document.getElementById('appLink').value = app.link;
        document.getElementById('appCategory').value = app.category;
        document.getElementById('deleteAppBtn').style.display = 'inline-block';
        updateIconPreview(app.icon);
    }
    
    populateCategorySelect();
    openAppEditor();
}

// Open App Editor Modal
function openAppEditor() {
    const modal = document.getElementById('appEditorModal');
    modal.classList.add('show');
}

// Close App Editor Modal
function closeAppEditor() {
    const modal = document.getElementById('appEditorModal');
    modal.classList.remove('show');
    currentEditingAppId = null;
    resetAppEditor();
}

// Reset App Editor Form
function resetAppEditor() {
    document.getElementById('appName').value = '';
    document.getElementById('appDescription').value = '';
    document.getElementById('appIcon').value = '';
    document.getElementById('appLink').value = '';
    document.getElementById('appCategory').value = '';
    document.getElementById('iconPreview').src = '';
    document.getElementById('deleteAppBtn').style.display = 'none';
}

// Save App
function saveApp() {
    const app = {
        id: currentEditingAppId,
        name: document.getElementById('appName').value.trim(),
        description: document.getElementById('appDescription').value.trim(),
        icon: document.getElementById('appIcon').value.trim(),
        link: document.getElementById('appLink').value.trim(),
        category: document.getElementById('appCategory').value
    };

    if (!app.name || !app.link || !app.category) {
        alert('Harap isi semua field yang diperlukan');
        return;
    }

    saveOrUpdateApp(app);
    closeAppEditor();
    renderApps();
    alert('Aplikasi berhasil disimpan!');
}

// Delete App
function deleteApp() {
    if (currentEditingAppId && confirm('Apakah Anda yakin ingin menghapus aplikasi ini?')) {
        deleteAppById(currentEditingAppId);
        closeAppEditor();
        renderApps();
        alert('Aplikasi berhasil dihapus!');
    }
}

// New App
function newApp() {
    currentEditingAppId = null;
    document.getElementById('editorTitle').textContent = 'Tambah Aplikasi Baru';
    resetAppEditor();
    populateCategorySelect();
    openAppEditor();
}

// Populate Category Select
function populateCategorySelect() {
    const select = document.getElementById('appCategory');
    const categories = getCategories();
    
    select.innerHTML = '';
    categories.forEach(category => {
        const option = document.createElement('option');
        option.value = category.id;
        option.textContent = category.name;
        select.appendChild(option);
    });
}

// Update Icon Preview
function updateIconPreview(url) {
    const preview = document.getElementById('iconPreview');
    if (url) {
        preview.src = url;
        preview.onerror = function() {
            this.src = 'https://via.placeholder.com/100?text=Invalid';
        };
    } else {
        preview.src = '';
    }
}

// Settings Modal
function openSettingsModal() {
    const modal = document.getElementById('settingsModal');
    modal.classList.add('show');
    openTab('general');
}

function closeSettingsModal() {
    const modal = document.getElementById('settingsModal');
    modal.classList.remove('show');
}

// Tab Management
function openTab(tabName) {
    const contents = document.querySelectorAll('.tab-content');
    const buttons = document.querySelectorAll('.tab-btn');

    contents.forEach(content => content.classList.remove('active'));
    buttons.forEach(btn => btn.classList.remove('active'));

    document.getElementById(tabName).classList.add('active');
    event.target.classList.add('active');

    if (tabName === 'categories') {
        renderCategoriesEditor();
    }
}

// Save General Settings
function saveGeneralSettings() {
    const config = loadConfig();
    
    config.logo = document.getElementById('logoInput').value;
    config.headerTitle = document.getElementById('headerTitleInput').value;
    config.headerColor = document.getElementById('headerColorInput').value;
    config.footerText = document.getElementById('footerTextInput').value;

    saveConfig(config);
    loadConfiguration();
    alert('Pengaturan berhasil disimpan!');
}

// Render Categories Editor
function renderCategoriesEditor() {
    const list = document.getElementById('categoriesList');
    const categories = getCategories();

    list.innerHTML = '';
    categories.forEach(category => {
        const group = document.createElement('div');
        group.className = 'category-input-group';
        group.innerHTML = `
            <input type="text" value="${escapeHtml(category.name)}" class="input-field" placeholder="Nama Kategori" data-id="${category.id}" data-type="name">
            <input type="color" value="${category.color || '#4a90e2'}" class="input-field" style="max-width: 80px;" data-id="${category.id}" data-type="color">
            <button class="btn btn-danger" onclick="removeCategory('${category.id}')">Hapus</button>
        `;
        list.appendChild(group);
    });
}

// Add Category
function addCategory() {
    const newCategory = {
        id: 'cat_' + Date.now(),
        name: 'Kategori Baru',
        color: '#' + Math.floor(Math.random()*16777215).toString(16)
    };
    
    const config = loadConfig();
    config.categories.push(newCategory);
    saveConfig(config);
    renderCategoriesEditor();
}

// Remove Category
function removeCategory(categoryId) {
    if (confirm('Apakah Anda yakin ingin menghapus kategori ini?')) {
        deleteCategory(categoryId);
        renderCategoriesEditor();
    }
}

// Save Category Settings
function saveCategorySettings() {
    const inputs = document.querySelectorAll('[data-type]');
    const categoriesData = {};

    inputs.forEach(input => {
        const id = input.dataset.id;
        const type = input.dataset.type;
        const value = input.value;

        if (!categoriesData[id]) {
            categoriesData[id] = {};
        }
        categoriesData[id][type] = value;
    });

    const config = loadConfig();
    config.categories = config.categories.map(cat => ({
        ...cat,
        ...categoriesData[cat.id]
    }));

    saveConfig(config);
    alert('Kategori berhasil disimpan!');
    renderApps();
}

// Toggle View Mode
function toggleViewMode() {
    const config = loadConfig();
    const newMode = config.viewMode === 'grid' ? 'vertical' : 'grid';
    setViewMode(newMode);
}

// Set View Mode
function setViewMode(mode, save = true) {
    const container = document.getElementById('appsContainer');
    const gridBtn = document.getElementById('gridViewBtn');
    const verticalBtn = document.getElementById('verticalViewBtn');

    if (mode === 'grid') {
        container.classList.remove('vertical-view');
        container.classList.add('grid-view');
        gridBtn.classList.add('active');
        verticalBtn.classList.remove('active');
    } else {
        container.classList.remove('grid-view');
        container.classList.add('vertical-view');
        verticalBtn.classList.add('active');
        gridBtn.classList.remove('active');
    }

    if (save) {
        const config = loadConfig();
        config.viewMode = mode;
        saveConfig(config);
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

function darkenColor(color, percent) {
    const num = parseInt(color.replace('#', ''), 16);
    const amt = Math.round(2.55 * percent);
    const R = (num >> 16) - amt;
    const G = (num >> 8 & 0x00FF) - amt;
    const B = (num & 0x0000FF) - amt;
    return '#' + (0x1000000 + (R < 255 ? R < 1 ? 0 : R : 255) * 0x10000 +
        (G < 255 ? G < 1 ? 0 : G : 255) * 0x100 +
        (B < 255 ? B < 1 ? 0 : B : 255))
        .toString(16).slice(1);
}