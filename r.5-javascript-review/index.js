let dragonList = document.querySelector('.dragon-list')
dragonList.style.display = "flex"

let state = {
    dragons: []
}

fetch('http://localhost:3000/dragons')
    .then(function (response) {
        return response.json()
    })
    .then(function (dragons) {
        state.dragons = dragons
        render()
    })

const render = function () {
    dragonList.innerHTML = ''
    state.dragons.forEach(function (dragon) {
        dragonList.append(
            div({ click: () => toggleAtWar(dragon), style: 'text-align:center; height: 200px; width: 150px; border-color: black; border-style: solid; margin: 10px' },
                img({ src: dragon.image, style: 'width: 100px' }),
                h2({},
                    dragon.name
                ),
                p({},
                    `At War: ${dragon.atWar == true ? 'yes' : 'no'}`
                )
            )
        )
    })
}

const toggleAtWar = function (dragon) {
    if (dragon.atWar === true) {
        dragon.atWar = false
    } else {
        dragon.atWar = true
    }
    render()
    fetch(`http://localhost:3000/dragons/${dragon.id}`, {
        method: "PATCH",
        body: JSON.stringify({
            atWar: dragon.atWar
        }),
        headers: {
            'Content-Type': 'application/json'
        }
    })
}

