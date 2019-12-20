
const renderTicketCard = function (ticket, user) {
    let ticketCard = document.createElement('div')
    let cardContent = document.createElement('div')
    let cardHeader = document.createElement('div')
    let cardDescription = document.createElement('div')

    cardHeader.innerText = `${ticket.destination}`
    cardDescription.innerText = `${ticket.airline.name} (${ticket.seat_number}- $${ticket.price})`

    ticketCard.setAttribute('class', 'card')
    cardContent.setAttribute('class', 'content')
    cardHeader.setAttribute('class', 'header')
    cardDescription.setAttribute('class', 'description')


    // Button Stuff

    let cardButtons = document.createElement('div')
    cardButtons.setAttribute('class', 'ui buttons')

    let purchaseButton = document.createElement('div')
    purchaseButton.setAttribute('class', 'ui basic green button')
    purchaseButton.innerText = 'Purchase'

    if(ticket.user_id == null){
        cardButtons.append(purchaseButton)
    }

    // Appendy Stuff

    ticketCard.append(cardContent)

    cardContent.append(cardHeader, cardDescription, cardButtons)

    // Event Listenery Stuff

    purchaseButton.addEventListener('click', () => {
        ticketCard.remove()
        
        fetch(`http://localhost:3000/tickets/${ticket.id}`, {
            method: 'PATCH',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify({
                user_id: user.id,
                // user: user
            })
        })
        .then( res => res.json())
        .then( ticket => {
            user.tickets.push(ticket) // <- Changed my state
        })
    })

    return ticketCard
}