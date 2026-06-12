// Application Data
const config = {
    logo: 'https://via.placeholder.com/50?text=AL',
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
        name: 'Notion',
        description: 'Workspace all-in-one untuk notes dan database',
        icon: 'https://upload.wikimedia.org/wikipedia/commons/e/e9/Notion-logo.svg',
        link: 'https://notion.so',
        category: 'productivity'
    },
    {
        id: '4',
        name: 'GitHub',
        description: 'Platform version control dan kolaborasi kode',
        icon: 'https://upload.wikimedia.org/wikipedia/commons/9/91/Octicons-mark-github.svg',
        link: 'https://github.com',
        category: 'development'
    },
    {
        id: '5',
        name: 'VS Code',
        description: 'Editor kode yang powerful dan extensible',
        icon: 'https://upload.wikimedia.org/wikipedia/commons/9/9a/Visual_Studio_Code_1.35_icon.svg',
        link: 'https://code.visualstudio.com',
        category: 'development'
    },
    {
        id: '6',
        name: 'Stack Overflow',
        description: 'Q&A untuk developer dan programmer',
        icon: 'https://upload.wikimedia.org/wikipedia/commons/e/ef/Stack_Overflow_icon.svg',
        link: 'https://stackoverflow.com',
        category: 'development'
    },
    {
        id: '7',
        name: 'Figma',
        description: 'Tool desain kolaboratif berbasis cloud',
        icon: 'https://upload.wikimedia.org/wikipedia/commons/3/33/Figma-logo.svg',
        link: 'https://figma.com',
        category: 'design'
    },
    {
        id: '8',
        name: 'Canva',
        description: 'Desain grafis dengan template siap pakai',
        icon: 'https://upload.wikimedia.org/wikipedia/commons/0/08/Canva_logo.svg',
        link: 'https://canva.com',
        category: 'design'
    },
    {
        id: '9',
        name: 'Adobe XD',
        description: 'Design dan prototyping UI/UX',
        icon: 'https://via.placeholder.com/50?text=XD',
        link: 'https://www.adobe.com/products/xd.html',
        category: 'design'
    },
    {
        id: '10',
        name: 'Twitter',
        description: 'Platform media sosial untuk berbagi berita',
        icon: 'https://upload.wikimedia.org/wikipedia/commons/6/6f/Logo_of_Twitter.svg',
        link: 'https://twitter.com',
        category: 'social'
    },
    {
        id: '11',
        name: 'LinkedIn',
        description: 'Jaringan profesional untuk karir dan bisnis',
        icon: 'https://upload.wikimedia.org/wikipedia/commons/c/ca/LinkedIn_logo_initials.png',
        link: 'https://linkedin.com',
        category: 'social'
    },
    {
        id: '12',
        name: 'Instagram',
        description: 'Platform berbagi foto dan video',
        icon: 'https://upload.wikimedia.org/wikipedia/commons/a/a5/Instagram.svg',
        link: 'https://instagram.com',
        category: 'social'
    },
    {
        id: '13',
        name: 'YouTube',
        description: 'Platform berbagi video terbesar di dunia',
        icon: 'https://upload.wikimedia.org/wikipedia/commons/0/09/YouTube_full-color_icon_%282017%29.svg',
        link: 'https://youtube.com',
        category: 'entertainment'
    },
    {
        id: '14',
        name: 'Netflix',
        description: 'Streaming film dan series berkualitas tinggi',
        icon: 'https://upload.wikimedia.org/wikipedia/commons/0/08/Netflix_2015_logo.svg',
        link: 'https://netflix.com',
        category: 'entertainment'
    },
    {
        id: '15',
        name: 'Spotify',
        description: 'Platform streaming musik terbaik',
        icon: 'https://upload.wikimedia.org/wikipedia/commons/7/74/Spotify_App_Logo.svg',
        link: 'https://spotify.com',
        category: 'entertainment'
    }
];