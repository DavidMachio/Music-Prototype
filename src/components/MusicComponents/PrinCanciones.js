
let currentPlaying = null;
const printCanciones = (album, parent) => {
        const canciones = document.createElement('div');
        canciones.className = 'canciones';

        for (const song of album.songs) {
            const containerCancion = document.createElement('div');
            containerCancion.className = 'containerCancion';

            const portadaCancion = document.createElement('img');
            const tituloCancion = document.createElement('h3');
            const duration = document.createElement('h4');
            const pista = document.createElement('audio');

            portadaCancion.className = 'portadaCancion';
            tituloCancion.className = 'tituloCancion';
            duration.className = 'duration';
            pista.className = 'pista';

            portadaCancion.src = song.img;
            tituloCancion.textContent = song.title;
            duration.textContent = song.duration;
            pista.src = song.track;
            pista.controls = false;

            containerCancion.append(portadaCancion, tituloCancion, pista, duration);
            canciones.append(containerCancion);

            portadaCancion.addEventListener('click', () => {
                if (currentPlaying && currentPlaying === pista) {
                    if (currentPlaying.paused) {
                        currentPlaying.play();
                    } else {
                        currentPlaying.pause();
                    }
                } else {
                    contenedorReproduciedo.innerHTML = '';
                    printReproduciendo(song, contenedorReproduciedo);
                    if (currentPlaying) {
                        currentPlaying.pause();
                        currentPlaying.currentTime = 0;
                    }
                    currentPlaying = pista;
                    pista.play();
                }
            });
        }

       /*  contenedorCanciones.innerHTML = '';
        contenedorCanciones.append(canciones); */
        parent.append(canciones);
    };