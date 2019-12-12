# Communication with the Server

### Resources
* https://create.kahoot.it/share/communication-with-the-server/e9275d17-0fb4-4483-9693-10e9b84aa878

### Learning Goals

* Describe the uses of a backend in the context of web applications
* Use fetch to retrieve data from a server and display the results in the DOM
* Exaplain what it means for `fetch` to run Asynchronously
* Use fetch to send data to a server


### Activation

What are some of the **reasons** you use web applications?

| Site/App | Reason |
| -------- | ------ |
| Twitter  |        |
| YouTube  |        |
| UberEats |        |
| Yelp     |        |
| Gmail    |        |
|          |        |
|          |        |



### Learning Goal 1: Describe the uses of a backend in the context of web applications

#### Demonstrate:

- That once we reload the page, the character returns to his original position
  - That this is because we are hardcoding the characters position
- That we would *probably* not want to store this information on the client
  - We want to store and retrieve the information from the server

#### Check for Understanding: 

* Kahoot Quiz (1-3)


### Learning Goal 2: Use fetch to retrieve data from a server and display the results in the DOM

#### Demonstrate:

* Reading API Documentation 
* Using it to decide how to make Postman requests (10.185.7.123:3000)
* Making a simple get request in postman
* Making the same request with fetch in the browser
```
fetch('http://10.185.7.123:3000/characterData')
    .then(function(response){
        return response.json()
    })
    .then(function(characterData){
        character.style.left = `${characterData.x}px`
        character.style.bottom = `${characterData.y}px`
        document.body.append(character)
    })
```

#### Check for Understanding: 

* Everyone should make a request to `http://reddit.com/.json` in your chrome console, mark off your name


> Break


### Learning Goal 3: Explain what it means for `fetch` to run Asynchronously

#### Demonstrate:

* That HTTP requests take time to reacht the server and responses take time to come back from the server
* JavaScript runs synchronously 
* If we stopped the execution of the script the page would become unresponsive
* We want our fetch to run asynchronously
* That fetch returns a promise object 
* The function we pass to fetches `.then` will be called when the response comes back
* It's like an event listener!

#### Check for Understanding: 

* Kahoot Quiz (4-6)


### Learning Goal 4: Use fetch to send data to a server

#### Demonstrate:

* Reading API Documentation
* Using it to decide how to make Postman requests 
* Passing options to fetch so that it can make the same request

#### Reinforce:

* Who can guide me through making a fetch request to the log inpoint in our server?

#### Check for Understanding: 

> Open https://www.fuckyeahgtj.com/emoji-socket-fireworks/ for the duration of this CFU

* *Self Assessment:* *
  * Open your console
  * Make a POST request to https://emoji-firework-api.herokuapp.com/fireworks
  * The body of the request should look like this:  `{ "emoji": "🥥" }` 
    * (You can replace the coconut with any emoji you like)