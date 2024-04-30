import './About.css'

export const printAbout = () => {
    
    const divApp = document.querySelector('#app')
    divApp.innerHTML = '';
    const mainAbout = document.createElement('main')
    const divFoto = document.createElement('div')
    const fotoGrupo = document.createElement('img')
    const title = document.createElement('h2');

    mainAbout.className = 'mainabout'

    divFoto.className = 'divfoto'
    fotoGrupo.className = 'fotogrupo'
    title.className = 'titleabout'

    fotoGrupo.src = 'https://www.tacomalibrary.org/wp-content/uploads/sites/16/2017/04/iStock-476545960.jpg'
    title.textContent = 'About'

    divFoto.append(fotoGrupo)
    mainAbout.append(divFoto, title)
    divApp.appendChild(mainAbout)


}