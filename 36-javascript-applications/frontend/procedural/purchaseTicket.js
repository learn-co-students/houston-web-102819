const displayPurchaseTicket = function (user) {
    pageContainer.innerHTML = ''

    const header = document.createElement('h1')
    header.innerText = 'Purchase Ticket'

    const ticketContainer = document.createElement('div')
    ticketContainer.setAttribute('class', 'ui cards')


    fetch('http://localhost:3000/tickets')
        .then(res => res.json())
        .then(tickets => {
            tickets.forEach(ticket => {
                const ticketCard = renderTicketCard(ticket, user)
                ticketContainer.append(ticketCard)
            })
        })

    pageContainer.append(
        header,
        ticketContainer
    )
}