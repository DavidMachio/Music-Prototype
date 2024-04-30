import "./Home.css";

export const printHome = () => {
  const divApp = document.querySelector('#app')
    divApp.innerHTML = '';
    const mainHome = document.createElement('main')
    const divFoto = document.createElement('div')
    const fotoGrupo = document.createElement('img')
    const title = document.createElement('h2');

    mainHome.className = 'mainhome'

    divFoto.className = 'divfoto'
    fotoGrupo.className = 'fotogrupo'
    title.className = 'titlehome'

    fotoGrupo.src = 'https://musicodiy.cdbaby.com/wp-content/uploads/2016/09/6-trucos-de-escenario-para-seducir-al-pu%CC%81blico.jpg'
    title.textContent = 'Home'

    divFoto.append(fotoGrupo)
    mainHome.append(divFoto, title)
    divApp.appendChild(mainHome)
};
