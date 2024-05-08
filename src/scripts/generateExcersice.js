function getRandomInt(min, max) {
    min = Math.ceil(min);
    max = Math.floor(max);
    return Math.floor(Math.random() * (max - min + 1)) + min;
}

export const excersice = () => {
    const unidades = [
        {
            unity: 'b',
            conv: ['B', 'KB'],
            factor: [1 / 8, 1 / (1024 * 8)]
        },
        {
            unity: 'B',
            conv: ['b', 'KB'],
            factor: [8, 1 / 1024]
        },
        {
            unity: 'KB',
            conv: ['b', 'B', 'MB'],
            factor: [8 * 1024, 1024, 1 / 1024]
        },
        {
            unity: 'MB',
            conv: ['KB', 'GB'],
            factor: [1024, 1 / 1024]
        },
        {
            unity: 'GB',
            conv: ['MB', 'TB'],
            factor: [1024, 1 / 1024]
        },
        {
            unity: 'TB',
            conv: ['GB'],
            factor: [1024]
        }
    ]

    const n = getRandomInt(0, unidades.length - 1)
    const m = getRandomInt(0, unidades[n].conv.length - 1)
    const selectedUnity = unidades[n]

    const mainUnity = selectedUnity.unity
    const factor = selectedUnity.factor[m]
    const secUnity = selectedUnity.conv[m]

    let num;
    if (factor < 1) {
        num = getRandomInt(1, 15) / factor
    } else {
        num = getRandomInt(1, 20)
    }

    const enunciado = `Convierta ${num} ${mainUnity} a ${secUnity}`

    const response = {
        enunciado: enunciado,
        respuesta: `${num * factor} ${secUnity}`
    }

    return response
}
