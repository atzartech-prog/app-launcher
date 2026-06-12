// Application Data
const config = {
    logo: 'fa-rocket',
    headerTitle: 'App Launcher',
    footerText: '© 2024 App Launcher. All rights reserved.'
};

const categories = [
    { id: 'productivity', name: '📊 Produktivitas', color: '#4a90e2' },
    { id: 'development', name: '💻 Development', color: '#50e3c2' },
    { id: 'design', name: '🎨 Design', color: '#f5a623' },
    { id: 'social', name: '📱 Social Media', color: '#bd10e0' },
    { id: 'entertainment', name: '🎬 Hiburan', color: '#e24a4a' }
];

const apps = [
    {
        id: '1',
        name: 'Google Drive',
        description: 'Penyimpanan cloud dan kolaborasi dokumen',
        icon: 'fas fa-cloud',
        link: 'https://drive.google.com',
        category: 'productivity'
    },
    {
        id: '2',
        name: 'Trello',
        description: 'Manajemen proyek visual dengan papan kanban',
        icon: 'fas fa-tasks',
        link: 'https://trello.com',
        category: 'productivity'
    },
    {
        id: '3',
        name: 'Notion',
        description: 'Workspace all-in-one untuk notes dan database',
        icon: 'fas fa-book',
        link: 'https://notion.so',
        category: 'productivity'
    },
    {
        id: '4',
        name: 'GitHub',
        description: 'Platform version control dan kolaborasi kode',
        icon: 'fab fa-github',
        link: 'https://github.com',
        category: 'development'
    },
    {
        id: '5',
        name: 'VS Code',
        description: 'Editor kode yang powerful dan extensible',
        icon: 'fas fa-code',
        link: 'https://code.visualstudio.com',
        category: 'development'
    },
    {
        id: '6',
        name: 'Stack Overflow',
        description: 'Q&A untuk developer dan programmer',
        icon: 'fas fa-square',
        link: 'https://stackoverflow.com',
        category: 'development'
    },
    {
        id: '7',
        name: 'Figma',
        description: 'Tool desain kolaboratif berbasis cloud',
        icon: 'fas fa-pencil-ruler',
        link: 'https://figma.com',
        category: 'design'
    },
    {
        id: '8',
        name: 'Canva',
        description: 'Desain grafis dengan template siap pakai',
        icon: 'fas fa-palette',
        link: 'https://canva.com',
        category: 'design'
    },
    {
        id: '9',
        name: 'Adobe XD',
        description: 'Design dan prototyping UI/UX',
        icon: 'fas fa-edit',
        link: 'https://www.adobe.com/products/xd.html',
        category: 'design'
    },
    {
        id: '10',
        name: 'Twitter',
        description: 'Platform media sosial untuk berbagi berita',
        icon: 'fab fa-twitter',
        link: 'https://twitter.com',
        category: 'social'
    },
    {
        id: '11',
        name: 'LinkedIn',
        description: 'Jaringan profesional untuk karir dan bisnis',
        icon: 'fab fa-linkedin',
        link: 'https://linkedin.com',
        category: 'social'
    },
    {
        id: '12',
        name: 'Instagram',
        description: 'Platform berbagi foto dan video',
        icon: 'fab fa-instagram',
        link: 'https://instagram.com',
        category: 'social'
    },
    {
        id: '13',
        name: 'YouTube',
        description: 'Platform berbagi video terbesar di dunia',
        icon: 'fab fa-youtube',
        link: 'https://youtube.com',
        category: 'entertainment'
    },
    {
        id: '14',
        name: 'Netflix',
        description: 'Streaming film dan series berkualitas tinggi',
        icon: 'fas fa-play',
        link: 'https://netflix.com',
        category: 'entertainment'
    },
    {
        id: '15',
        name: 'Spotify',
        description: 'Platform streaming musik terbaik',
        icon: 'fab fa-spotify',
        link: 'https://spotify.com',
        category: 'entertainment'
    }
];