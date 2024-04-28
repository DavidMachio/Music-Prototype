import { arrayLinks } from '../../data/navheader';
import './Header.css'




export const printHeader = () => {
    const header = document.querySelector('#header');
    const nav = document.createElement('nav');
    const ul = document.createElement('ul');



    for (const enlace of arrayLinks) {
        const li = document.createElement('li')
        const a = document.createElement('a');
        a.href = enlace.url;
        a.textContent = enlace.texto;
        a.addEventListener('click', enlace.page)
        li.append(a)
        ul.append(li)   
    }

    header.className = 'header'
    
    

    nav.append(ul)
    header.append(nav)
}