import './PrintPortada.css'

export const printPortada = (parent, album) => {

    parent.innerHtml = ''
    console.log(album.songs.length)
    const portada = document.createElement('div')
    const coverPortada = document.createElement('img')
    const titulo = document.createElement('h2')
    const numeroCanciones = document.createElement('h3')
    coverPortada.className = 'coverPortada'
    numeroCanciones.className = 'numeroCanciones'
    numeroCanciones.textContent = `${album.songs.length} Pistas `
    titulo.className = 'titulo'
    coverPortada.src = album.cover
    titulo.textContent = album.title
    portada.className = 'portada'

    portada.append(titulo, numeroCanciones, coverPortada)
    parent.append(portada)

}