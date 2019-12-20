const displayMyTickets = function (user) {
    pageContainer.innerHTML = ''
    const header = document.createElement('h1')
    const ticketContainer = document.createElement('div')
    ticketContainer.setAttribute('class', 'ui cards')

    header.innerText = 'My Tickets'
    pageContainer.append(
        header,
        ticketContainer
    )
    user.tickets.forEach(ticket => {
        let ticketCard = renderTicketCard(ticket, user)
        ticketContainer.append(ticketCard)
    })
}