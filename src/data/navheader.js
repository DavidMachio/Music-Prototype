import { printAbout } from "../pages/About/About";
import { printHome } from "../pages/Home/Home";
import { printMusic } from "../pages/Music/Music";

export const arrayLinks = [
    {
        url: '#',
        texto: 'Home',
        page: printHome
    },
    {
        url: '#',
        texto: 'Music',
        page: printMusic
    },
    {
        url: '#',
        texto: 'About',
        page: printAbout
    },
]