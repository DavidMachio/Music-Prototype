import { PrintAnimationVolume } from "../../components/MusicComponents/AnimationVolume/AnimationVolume";
import { printPortada } from "../../components/MusicComponents/PrintPortada/PrintPortada";
import { printReproduciendo } from "../../components/MusicComponents/PrintReproduciendo/PrintReproduciendo";

import { albums } from "../../data/albums";
import "./Music.css";

const divApp = document.querySelector("#app");
const mainMusic = document.createElement("main");
const contenedor = document.createElement("div");
const contenedorPortada = document.createElement("div");
contenedorPortada.className = "contendorPortada";
const contenedorAlbums = document.createElement("div");
contenedorAlbums.className = "contenedorAlbums";
const contenedorCanciones = document.createElement("div");
contenedorCanciones.className = "contenedorCanciones";
const contenedorReproduciedo = document.createElement("div");
contenedorReproduciedo.className = "contenedorReproduciendo";
contenedor.className = "containerMusic";
mainMusic.className = "mainmusic";


export const printMusic = () => {
    
  divApp.innerHTML = "";
  contenedor.innerHTML = "";
  contenedorPortada.innerHTML = ""
  contenedorReproduciedo.innerHTML = ""

  let currentPlaying = null;

  const printAlbums = (array) => {
    const discos = document.createElement("div");
    discos.className = "albums";

    for (const album of array) {
      const disco = document.createElement("article");
      const portada = document.createElement("img");
      const titulo = document.createElement("h2");

      disco.className = "disco";
      portada.className = "portadadisco";
      titulo.className = "titulodisco";

      portada.src = album.cover;
      titulo.textContent = album.title;
      disco.append(portada, titulo);
      discos.append(disco);

      disco.addEventListener("click", () => {
        const randomFoto = Math.floor(Math.random() * 4)
        contenedorReproduciedo.innerHTML = "";
        contenedorCanciones.innerHTML = "";
        contenedorPortada.innerHTML = "";
        console.log(randomFoto);
        printReproduciendo(album.songs[0], contenedorReproduciedo);
        printPortada(contenedorPortada, album);
        printCanciones(album);

      });
    }

    contenedorAlbums.innerHTML = "";
    contenedorAlbums.append(discos);
    contenedor.append(contenedorPortada, contenedorAlbums);
  };

  const printCanciones = (album) => {
    const canciones = document.createElement("ol");
    canciones.className = "canciones";
    let index = 1;

    for (const song of album.songs) {
      const containerCancion = document.createElement("li");
      containerCancion.className = "containerCancion";

      const songNumber = document.createElement("p");
      const portadaCancion = document.createElement("img");
      const tituloCancion = document.createElement("h3");
      const duration = document.createElement("h4");
      const play = document.createElement("div");
      const pista = document.createElement("audio");

      songNumber.textContent = index;
      portadaCancion.className = "portadaCancion";
      tituloCancion.className = "tituloCancion";
      duration.className = "duration";
      play.classList = "play";
      pista.className = "pista";

      portadaCancion.src = song.img;
      tituloCancion.textContent = song.title;
      duration.textContent = song.duration;
      pista.src = song.track;
      pista.controls = false;
      index = index + 1;

      PrintAnimationVolume(play);

      containerCancion.append(
        songNumber,
        portadaCancion,
        tituloCancion,
        pista,
        duration,
        play
      );
      canciones.append(containerCancion);

      containerCancion.addEventListener("click", () => {
        const currentPlayButton = document.querySelector(".play.playing");
        if (currentPlayButton) {
          currentPlayButton.classList.remove("playing");
          // También puedes cambiar el color del título de la canción anterior
          currentPlayButton.parentNode.querySelector(
            ".tituloCancion"
          ).style.color = "white";
        }
        tituloCancion.style.color = "greenyellow";
        if (currentPlaying && currentPlaying === pista) {
          console.log(play);
          if (currentPlaying.paused) {
            currentPlaying.play();
            play.classList.add("playing");
          } else {
            currentPlaying.pause();
            play.classList.remove("playing");
            tituloCancion.style.color = "white";
          }
        } else {
          contenedorReproduciedo.innerHTML = "";
          printReproduciendo(song, contenedorReproduciedo);
          if (currentPlaying) {
            currentPlaying.pause();
            play.classList.remove("playing");
            currentPlaying.currentTime = 0;
          }
          currentPlaying = pista;
          pista.play();
          tituloCancion.style.color = "greenyellow";
          play.classList.add("playing");
        }
        pista.addEventListener("ended", () => {
          play.classList.remove("playing");
        });
      });
    }

    contenedorCanciones.innerHTML = "";
    contenedorCanciones.append(canciones);
    contenedor.append(contenedorCanciones);
  };

  printPortada(contenedorPortada, albums[0]);
  console.log(albums[0].cover);
  printAlbums(albums);
  printCanciones(albums[0], contenedor);
  printReproduciendo(albums[0].songs[0], contenedorReproduciedo);

  mainMusic.append(contenedor);
  mainMusic.append(contenedorReproduciedo);
  divApp.append(mainMusic);
};
