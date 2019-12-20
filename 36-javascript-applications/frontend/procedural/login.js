const displayLogin = function () {
    const header = document.createElement('h1')
    const form = document.createElement('form')

    const label = document.createElement('label')
    label.innerText = 'Name'
    const input = document.createElement('input')
    const submitButton = document.createElement('button')
    submitButton.innerText = "Login"

    const errorMessage = document.createElement('span')
    errorMessage.style.color = 'red'

    form.append(
        label,
        input,
        submitButton,
        errorMessage
    )

    form.addEventListener('submit', e => {
        e.preventDefault()
        login(input.value, errorMessage)
    })

    header.innerText = 'Login'
    document.body.append(
        header,
        form
    )

}

const login = function (name, errorMessage) {
    fetch('http://localhost:3000/user', {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json',
            // 'Accept': 'application/json' <-- Not necessary in our specific case
        },
        body: JSON.stringify({
            name: name
        })
    })
        .then(res => res.json())
        .then(user => {
            if (user == null) {
                errorMessage.innerText = 'Could not find that user.'
            } else {
                errorMessage.innerText = ''

                document.body.innerHTML = ''

                document.body.append(
                    renderNavigation(user),
                    pageContainer
                )

                displayMyTickets(user)
            }
        })
}