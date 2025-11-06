
interface MenuItem {
    id: number;
    title: string;
    link: string;
    has_dropdown: boolean;
    sub_menus?: {
        link: string;
        title: string;
    }[];
}

const menu_data: MenuItem[] = [
    {
        id: 1,
        has_dropdown: false,
        title: "Home",
        link: "/",
    },
    {
        id: 2,
        has_dropdown: false,
        title: "About",
        link: "/about",
    },
    {
        id: 3,
        has_dropdown: false,
        title: "Services",
        link: "/service",
    },
    {
        id: 4,
        has_dropdown: false,
        title: "Portfolio",
        link: "/portfolio",
    },
    {
        id: 5,
        has_dropdown: false,
        title: "Team",
        link: "/team",
    },
    {
        id: 6,
        title: "Blog",
        link: "#",
        has_dropdown: true,
        sub_menus: [
            { link: "/blog", title: "Blog" },
            { link: "/blog-sidebar", title: "Blog Sidebar" },
            { link: "/blog-details", title: "Blog Details" },
        ],
    },
    {
        id: 7,
        has_dropdown: false,
        title: "Contact",
        link: "/contact",
    },
];

export default menu_data;