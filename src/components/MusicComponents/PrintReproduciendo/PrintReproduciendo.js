import { printGroupCard } from '../GroupCard/GroupCard';
import { printMiniCardArtista } from '../MiniCardArtista/MiniCardArtista';
import './PrintReproduciendo.css'




export const printReproduciendo = (song, parent) => {
    const reproduciendo = document.createElement('div');
    reproduciendo.className = 'reproduciendo';
    const cover = document.createElement('img');
    const titleReproduciendo = document.createElement('h3');
    titleReproduciendo.className = 'titlereproduciendo'
    const vso = document.createElement('h4')
    vso.className = 'vso';
    const containerGroup = document.createElement('div');
    containerGroup.className = 'containergroup'
    const contenedorInfo = document.createElement('div');
    contenedorInfo.className = 'contenedorInfo'
    const artistasContainer = document.createElement('div')
    artistasContainer.className = 'artistasContainer '
    const masInfo = document.createElement('button');
    masInfo.className = 'masinfo'
    masInfo.textContent = 'Ver mas'
    printGroupCard(containerGroup)
    for (const artista of song.artistas) {
        printMiniCardArtista(artistasContainer, artista)
    }

    cover.className = 'coverplay';
    cover.id = 'cover';
    vso.className = 'vso';

    cover.src = song.img;
    titleReproduciendo.textContent = song.title
    vso.textContent = `Version original: ${song.vso}`

    contenedorInfo.append(containerGroup,artistasContainer)
    containerGroup.append(masInfo)
    reproduciendo.append(cover, titleReproduciendo, vso,contenedorInfo);

    masInfo.addEventListener('click', () => artistasContainer.classList.toggle('visible'))
    
    parent.append(reproduciendo);
};