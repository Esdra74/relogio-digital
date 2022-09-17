const clockContainer = document.querySelector('.clock-container')

const updateClock = () => {
    const present = new Date()
    const horas = present.getHours()
    const minutos = present.getMinutes()
    const segundos = present.getSeconds()

    const clockHTML = `
    <span>${String(horas).length === 1 ? `0${horas}` : horas}</span> :
    <span>${String(minutos).length === 1 ? `0${minutos}` : minutos}</span> :
    <span>${String(segundos).length === 1 ? `0${segundos}` : segundos}</span>
    `

    clockContainer.innerHTML = clockHTML
}

setInterval(updateClock, 1000)