# Intro to Events

##### Time Estimate: 1:30 + Recommended 10 minute break



## Learning Goals

* Use `addEventListener` to run code in response to an event
* Use `e.preventDefault` to prevent a form from making an HTTP Request
* Explain the difference between bubbling and capturing events



## Resources

- [Sample Video](<https://youtu.be/6g0kTS8Bltk>)
- [Kahoot Quiz](https://create.kahoot.it/share/dom-events/141368bf-aa99-4f1f-b32a-6f337731235a)



## Outline

### Activation

Review existing code

*Talk about how createElement is a method of the document*

As cool as it is to have a moving character, real users wouldn't open up a dev console to interact with our application. What should a user do to tell our character to go left? 



```
### Deliverables
* Move the character using the arrow keys
* Add a form so that we can change the speed of the character
```





### Learning Goal 1: Use `addEventListener` to invoke a callback function after an event

#### Time Estimate: 25 min

#### Demonstrate:

* Using `.addEventListener` to listen for `keypress` events
* Using the `e` object to determine which key was pressed
* Responding to the event by moving the character
* Attaching event listeners by name and inline

#### Reinforce:

* *Driver/Navigator*: 

  Our character never stops moving! How can we get him to stop?

#### Check for Understanding: 

* *Self Assessment:* *

  Open your console. Add an event listener which listens for the body to be **clicked**, and in the callback, console.log "I was clicked!"

\* [An aside on Self Assessments](./student-facing-notes)



### Learning Goal 2: Explain the difference between bubbling and capturing events

#### Time Estimate: 15 min

#### Demonstrate:

* Rendering an h1 inside of a div
* How, when I click the h1, I am also clicking the **div** it's inside
* How there are two ways JavaScript could handle this, from the top of the tree down, or from the bottom  of the tree up
  * By default, it will go from the bottom up
* Attaching event listeners to both
  * Using the default "bubble" method
  * Using the "capture" method
* How each callback logs when the h1 is clicked

#### Check for Understanding: 

* *Kahoot Quiz:* [1-2]



>  Recommended Break



### Learning Goal 3: Use `event.preventDefault` to override a form submission

#### Time Estimate: 20 min

#### Demonstrate:

* A preferences form with a submit button on the bottom of the page
* What happens when we submit?
* To handle this on the client side, because we don't have a backend:
  * Attach an event listener
  * Prevent the default behavior with `e.preventDefault()

  ```html
  <form class="preference-form">
      Fast Mode <input class="speed-input" name="speed" type="number" />
      <input type="submit" value="Apply"/>
  </form>
  ```



  ```javascript
  const form = document.querySelector('.preference-form')
  const speedInput = document.querySelector('.speed-input')
  form.addEventListener('submit', function(e){
      e.preventDefault()
      speed = e.target.value
  })
  ```

#### Check for Understanding: 

* *Kahoot Quiz:* [3-6]



### Learning Goal 4: Explain why to use an event listener on `DOMContentLoaded`

#### Time Estimate: 15

#### Demonstrate:

* That moving the script tag into the header would break our application
* That we can use the DOMContentLoaded event to run code after the DOM has been parsed

#### Check for Understanding: 

* *Self Assessment:* *
  * Create an index.html, with a script tag in the header
  * Put an event listener for DomContentLoaded inside the script tag, and log "I'm second" when the event fires
  * Put a console.log after the event listener that logs "I'm first"

\* [An aside on Self Assessments](./student-facing-notes)



## Recommended Prework

* Functions
* Eventing 
* Event Listening
* Functions as First Class Data
* Scope 
* Scope Chain
* Scope Lab



## Recommended Postwork

- On Document Load
- Acting on Events
- You're a JavaScript Eventing Master
- **Solo Project:** Task Lister Lite