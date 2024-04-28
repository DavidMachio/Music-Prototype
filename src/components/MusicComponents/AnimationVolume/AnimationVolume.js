import './AnimationVolume.css'

export const PrintAnimationVolume = (parent) => {
    const grafica = document.createElement('div')
    grafica.className = 'grafica'
    const barra1 = document.createElement('div');
    barra1.classList = 'barra1'
    const barra2 = document.createElement('div');
    barra2.classList = 'barra2'
    const barra3 = document.createElement('div');
    barra3.classList = 'barra3'
    const barra4 = document.createElement('div');
    barra4.classList = 'barra4'
    const barra5 = document.createElement('div');
    barra5.classList = 'barra5'





    grafica.append(barra1, barra2, barra3, barra4, barra5)
    parent.append(grafica)
}