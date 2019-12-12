# Communication with the Server
### 04/03/19
### Kahoot Quiz: https://create.kahoot.it/share/communication-with-the-server/e9275d17-0fb4-4483-9693-10e9b84aa878

### Learning Goals

- Describe the uses of a backend in the context of web applications
- Use fetch to retrieve data from a server and display the results in the DOM
- Explain what it means for `fetch` to run Asynchronously
- Use fetch to send data to a server



| Site/App  | Reason                                                           |
| --------- | ------                                                           |
| YouTube   | View content from other users                                    |
| OneDrive  | Share content / accessing from multiple computers / backup       |
| Gmail     | Accessing emails anywhere                                        |
| Instagram | View content from other users                                    |
| Twitch    | View content from other users                                    |
| Zara      | Shopping (communicating with the seller)                         |
| Muzli     | Online community centered on design                              |


## Deliverables
- Characters position to persist

### Using Fetch
- How could we use fetch to request reddit data from this url: `'https://www.reddit.com/.json'`
```javascript=
fetch('https://www.reddit.com/.json')
	.then(function(response){
		return response.json()
	})
	.then(function(redditData){
		console.log(redditData)
	})
```


### Using Promises
- How could I use `sleep` to wait 3 seconds and then log something, then wait another 5 seconds before logging something?
```javascript=
sleep(3000)
	.then(function(){
		console.log('Its been 3 seconds')
		return sleep(5000)     
	})
	.then(function(){
        console.log('Its been 5 more seconds')
    })
```

### Checks For Understanding

#### CFU 1: Using Fetch
* Make a fetch request to either:
    * http://10.185.7.123:3000/characterData
    * https://www.reddit.com/.json
* Log the results in your browser

#### CFU 2: Sending Data to the Server

* Use this documentation: https://app.swaggerhub.com/apis-docs/Joshua-Miles/TheWebGame/1.0.0#/
* And this example:
```
fetch('http://10.185.7.123:3000/characterData', {
	method: 'POST',
	headers:{
		'Content-Type': 'application/json'
    },
	body: JSON.stringify({
		x: 200
		y: 200
	})
})
	.then(function(response){
		return response.json()
	})
	.then(function(characterData){
		console.log(characterData)
	})
```
* To log send your name to the server


|   Student  |  CFU 1          |   CFU 2         |
| ---------- | ----------------| ----------------|
| Josephine  |       X         |       X         |
| TK         |       x         |       X         |
| Adam       |       X         |       X         |
| Hema       |       X         |       X         |
| Zoe        |       X         |       X         |
| Jing       |       X         |       X         |
| Jack       |       X         |      X           | 
| Mark       |       X         |       X         |
| Trey       |       X         |       X         |
| Jessica    |       X         |       X         |
| Eli        |       X         |       X         |
| Rochell    |                 |       X         |
| Olivia     |       X         |       X         |
| Cory       |       X         |       X         |
| Bobby      |       X         |       X         |
