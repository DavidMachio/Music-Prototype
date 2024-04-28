import './About.css'

export const printAbout = () => {
    
    const divApp = document.querySelector('#app')
    divApp.innerHTML = '';
    const mainAbout = document.createElement('main')
    const title = document.createElement('h2');

    mainAbout.className = 'mainabout'

    title.textContent = 'About'

    mainAbout.appendChild(title)
    divApp.appendChild(mainAbout)


}