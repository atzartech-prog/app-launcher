// Database Management
const DB_KEY = 'appLauncherDB';
const CONFIG_KEY = 'appLauncherConfig';

const defaultConfig = {
    logo: 'https://via.placeholder.com/50?text=AL',
    headerTitle: 'App Launcher',
    headerColor: '#4a90e2',
    footerText: '© 2024 App Launcher. All rights reserved.',
    viewMode: 'grid',
    categories: [
        { id: 'productivity', name: 'Produktivitas', color: '#4a90e2' },
        { id: 'development', name: 'Development', color: '#50e3c2' },
        { id: 'design', name: 'Design', color: '#f5a623' },
        { id: 'social', name: 'Social Media', color: '#bd10e0' },
        { id: 'entertainment', name: 'Hiburan', color: '#e24a4a' }
    ]
};

const defaultApps = [
    {
        id: '1',
        name: 'Google Drive',
        description: 'Penyimpanan cloud dan kolaborasi dokumen',
        icon: 'https://upload.wikimedia.org/wikipedia/commons/1/12/Google_Drive_icon_%282020%29.svg',
        link: 'https://drive.google.com',
        category: 'productivity'
    },
    {
        id: '2',
        name: 'Trello',
        description: 'Manajemen proyek visual dengan papan kanban',
        icon: 'https://upload.wikimedia.org/wikipedia/en/8/8c/Trello_logo.svg',
        link: 'https://trello.com',
        category: 'productivity'
    },
    {
        id: '3',
        name: 'GitHub',
        description: 'Platform version control dan kolaborasi kode',
        icon: 'https://upload.wikimedia.org/wikipedia/commons/9/91/Octicons-mark-github.svg',
        link: 'https://github.com',
        category: 'development'
    },
    {
        id: '4',
        name: 'VS Code',
        description: 'Editor kode yang powerful dan extensible',
        icon: 'https://upload.wikimedia.org/wikipedia/commons/9/9a/Visual_Studio_Code_1.35_icon.svg',
        link: 'https://code.visualstudio.com',
        category: 'development'
    },
    {
        id: '5',
        name: 'Figma',
        description: 'Tool desain kolaboratif berbasis cloud',
        icon: 'https://upload.wikimedia.org/wikipedia/commons/3/33/Figma-logo.svg',
        link: 'https://figma.com',
        category: 'design'
    },
    {
        id: '6',
        name: 'Canva',
        description: 'Desain grafis dengan template siap pakai',
        icon: 'https://upload.wikimedia.org/wikipedia/commons/0/08/Canva_logo.svg',
        link: 'https://canva.com',
        category: 'design'
    },
    {
        id: '7',
        name: 'Twitter',
        description: 'Platform media sosial untuk berbagi berita',
        icon: 'https://upload.wikimedia.org/wikipedia/commons/6/6f/Logo_of_Twitter.svg',
        link: 'https://twitter.com',
        category: 'social'
    },
    {
        id: '8',
        name: 'LinkedIn',
        description: 'Jaringan profesional untuk karir dan bisnis',
        icon: 'https://upload.wikimedia.org/wikipedia/commons/c/ca/LinkedIn_logo_initials.png',
        link: 'https://linkedin.com',
        category: 'social'
    },
    {
        id: '9',
        name: 'YouTube',
        description: 'Platform berbagi video terbesar di dunia',
        icon: 'https://upload.wikimedia.org/wikipedia/commons/0/09/YouTube_full-color_icon_%282017%29.svg',
        link: 'https://youtube.com',
        category: 'entertainment'
    },
    {
        id: '10',
        name: 'Netflix',
        description: 'Streaming film dan series berkualitas tinggi',
        icon: 'https://upload.wikimedia.org/wikipedia/commons/0/08/Netflix_2015_logo.svg',
        link: 'https://netflix.com',
        category: 'entertainment'
    }
];

// Load Configuration
function loadConfig() {
    const stored = localStorage.getItem(CONFIG_KEY);
    return stored ? JSON.parse(stored) : defaultConfig;
}

// Save Configuration
function saveConfig(config) {
    localStorage.setItem(CONFIG_KEY, JSON.stringify(config));
}

// Load Apps
function loadApps() {
    const stored = localStorage.getItem(DB_KEY);
    if (stored) {
        try {
            return JSON.parse(stored);
        } catch (e) {
            console.error('Error parsing apps:', e);
            return defaultApps;
        }
    }
    return defaultApps;
}

// Save Apps
function saveApps(apps) {
    localStorage.setItem(DB_KEY, JSON.stringify(apps));
}

// Get App by ID
function getAppById(id) {
    const apps = loadApps();
    return apps.find(app => app.id === id);
}

// Add or Update App
function saveOrUpdateApp(app) {
    const apps = loadApps();
    const index = apps.findIndex(a => a.id === app.id);
    
    if (index > -1) {
        apps[index] = { ...apps[index], ...app };
    } else {
        if (!app.id) {
            app.id = Date.now().toString();
        }
        apps.push(app);
    }
    
    saveApps(apps);
    return app;
}

// Delete App
function deleteAppById(id) {
    const apps = loadApps();
    const filtered = apps.filter(app => app.id !== id);
    saveApps(filtered);
}

// Get Apps by Category
function getAppsByCategory(categoryId) {
    const apps = loadApps();
    return apps.filter(app => app.category === categoryId);
}

// Get All Categories
function getCategories() {
    const config = loadConfig();
    return config.categories;
}

// Add Category
function addCategory(category) {
    const config = loadConfig();
    if (!category.id) {
        category.id = 'cat_' + Date.now();
    }
    config.categories.push(category);
    saveConfig(config);
    return category;
}

// Update Category
function updateCategory(categoryId, categoryData) {
    const config = loadConfig();
    const index = config.categories.findIndex(c => c.id === categoryId);
    if (index > -1) {
        config.categories[index] = { ...config.categories[index], ...categoryData };
        saveConfig(config);
    }
}

// Delete Category
function deleteCategory(categoryId) {
    const config = loadConfig();
    config.categories = config.categories.filter(c => c.id !== categoryId);
    saveConfig(config);
}

// Export Database as JSON
function exportDatabase() {
    const config = loadConfig();
    const apps = loadApps();
    const data = {
        config,
        apps,
        exportDate: new Date().toISOString()
    };
    return JSON.stringify(data, null, 2);
}

// Import Database from JSON
function importDatabase(jsonString) {
    try {
        const data = JSON.parse(jsonString);
        if (data.config) saveConfig(data.config);
        if (data.apps) saveApps(data.apps);
        return true;
    } catch (e) {
        console.error('Error importing database:', e);
        return false;
    }
}

// Initialize Database with Defaults
function initializeDatabase() {
    if (!localStorage.getItem(CONFIG_KEY)) {
        saveConfig(defaultConfig);
    }
    if (!localStorage.getItem(DB_KEY)) {
        saveApps(defaultApps);
    }
}