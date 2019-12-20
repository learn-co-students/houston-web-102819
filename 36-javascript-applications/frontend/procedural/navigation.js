const renderNavigation = function (user) {
    const navigationContainer = document.createElement('div')
    navigationContainer.setAttribute('class', 'ui  menu')
    
    const myTicketsButton = document.createElement('a')
    myTicketsButton.setAttribute('class', 'item')

    const purchaseTicketButton = document.createElement('a')
    purchaseTicketButton.setAttribute('class', 'item')

    myTicketsButton.innerText = 'My Tickets'
    purchaseTicketButton.innerText = 'Purchase Ticket'

    myTicketsButton.addEventListener('click', () => displayMyTickets(user))
    purchaseTicketButton.addEventListener('click', () => displayPurchaseTicket(user))

    navigationContainer.append(
        myTicketsButton,
        purchaseTicketButton
    )
    return navigationContainer
}