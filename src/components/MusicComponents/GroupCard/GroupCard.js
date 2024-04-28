import fotosGrupo from '../../../data/fotosgrupo'
import './GroupCard.css'





export const printGroupCard = (parent) => {
    let random = Math.floor(Math.random()* 4)
    const card = document.createElement('div')
    card.className = 'cardgroup'
    const fotoGrupo = document.createElement('img')
    fotoGrupo.className = 'fotogrupo'
    fotoGrupo.src = fotosGrupo[random]





    card.append(fotoGrupo)
    parent.append(card)
}