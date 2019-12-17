let dragonList = document.querySelector('.dragon-list')
dragonList.style.display = "flex"

fetch('http://localhost:3000/dragons')
    .then(function (response) {
        return response.json()
    })
    .then(function (dragons) {
        dragons.forEach(function (dragon) {
            renderDragon(dragon)
        })
    })


const renderDragon = function (dragon) {

    // Element
    let dragonImage = document.createElement('img')
    let dragonCard = document.createElement('div')
    let atWarBadge = document.createElement('p')

    // Styles
    dragonCard.style.height = "200px"
    dragonCard.style.width = "150px"
    dragonCard.style.borderColor = "black"
    dragonCard.style.borderWidth = "1px"
    dragonCard.style.borderStyle = "solid"
    dragonCard.style.margin = "10px"
    dragonCard.style.textAlign = "center"

    // if(dragon.atWarButton == true){
    //     atWarButton.innerHTML = `At War: yes`
    // }  else {
    //     atWarButton.innerHTML = `At War: no`
    // }

    atWarBadge.innerHTML = `At War: ${dragon.atWar == true ? 'yes' : 'no'}`

    dragonImage.setAttribute('src', dragon.image)
    dragonImage.style.width = "100px"
    let dragonH2 = document.createElement('h2')
    dragonH2.append(dragon.name)
    dragonCard.append(dragonImage, dragonH2, atWarBadge)
    dragonList.append(dragonCard)

    dragonCard.addEventListener('click', function () {
        toggleAtWar(dragon, atWarBadge)
    })
}

const toggleAtWar = function(dragon, atWarBadge){
    if (dragon.atWar == true) {
        dragon.atWar = false
        atWarBadge.innerHTML = `At War: no`
    } else {
        dragon.atWar = true
        atWarBadge.innerHTML = `At War: yes`
    }
    fetch(`http://localhost:3000/dragons/${dragon.id}`, {
        method: 'PATCH',
        body: JSON.stringify({
            atWar: dragon.atWar
        }),
        headers: {
            'Content-Type': 'application/json'
        }
    })
}