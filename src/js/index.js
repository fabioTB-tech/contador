const contador = document.getElementById('contador')
const menos = document.getElementById('menos')
const mais = document.getElementById('mais')

const contar = document.getElementById('contar')
const icon = document.getElementById('pausa')

const iniciar = 'src/img/play-buttton.png'
const pausar = 'src/img/pause.png'

var valor = 0

mais.addEventListener('click', () => {
    valor++
    contador.innerHTML = valor
})

mais.addEventListener('mousedown', () => {
    subir = setInterval(() => {
        valor++
        contador.innerHTML = valor
    }, 100)
})

mais.addEventListener('mouseup', () => {
    clearInterval(subir)
})

menos.addEventListener('click', () => {
    if (valor > 0) {
        valor--
    } else return;

    contador.innerHTML = valor
})

menos.addEventListener('mousedown', () => {
    if (valor > 0) {
        descer = setInterval(() => {
            if (valor === 0) return;
            valor--
            contador.innerHTML = valor
        }, 100)
    } else return;
})

menos.addEventListener('mouseup', () => {
    clearInterval(descer)
})

contar.addEventListener('click', () => {
    if (valor === 0) return

    contar.classList.toggle('pausar')
    if (contar.className == 'pausar') {
        icon.src = pausar

        cronometro = setInterval(() => {
            if (valor > 0) {
                valor--
                contador.innerHTML = valor
            }

            if (valor === 0) {
                contar.classList.remove('pausar')
                clearInterval(cronometro)
                icon.src = iniciar
            }
        }, 1000)

    } else {
        clearInterval(cronometro)
        icon.src = iniciar
    }
})