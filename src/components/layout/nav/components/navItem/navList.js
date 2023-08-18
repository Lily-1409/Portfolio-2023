import resume from 'Resume.pdf'

const navList = [
    {
        id: "01",
        link: "intro",
        title: "Главная",
        // target: "_blank",
    }, 
    {
        id: "02",
        link: "about",
        title: "Обо мне",
        // target: "_blank",
    },
    {
        id: "03",
        link: "skills",
        title: "Технические навыки",
        // target: "_blank",
    },
    {
        id: "04",
        link: "projects",
        title: "Проекты",
        // target: "_blank",
    },
    {
        id: "05",
        link: "contacts",
        title: "Контакты",
        // target: "_blank",
    },
    {
        id: "06",
        link: resume,
        title: "Резюме",
        target: "_blank",
        rel: "noreferrer",
    }
]

export default navList;