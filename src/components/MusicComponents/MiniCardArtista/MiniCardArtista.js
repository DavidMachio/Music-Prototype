import './MiniCardArtista.css'


export const printMiniCardArtista = (parent, artista) => {
    const divArtista = document.createElement('div')
    divArtista.className = 'divArtista'
    const datos = document.createElement('div');
    const nombre = document.createElement ('h3')
    const instrumentos = document.createElement('h5')
    const fotoArtista = document.createElement('img');

    fotoArtista.src = artista.foto
    nombre.textContent = artista.nombre
    instrumentos.textContent = artista.instrumento
    fotoArtista.className = 'fotoArtista'
    datos.append(nombre, instrumentos)
    divArtista.append(fotoArtista, datos)
    parent.append(divArtista)
}