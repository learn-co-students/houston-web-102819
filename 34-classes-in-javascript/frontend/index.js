let link;
fetch('http://localhost:3000/characterData') 
    .then(function (response) {
        return response.json()
    })
    .then(function (character) {
        link = new PlayableCharacter(character.x, character.y)
    })