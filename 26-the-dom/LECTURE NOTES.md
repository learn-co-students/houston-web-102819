# JavaScript and the DOM

### Learning Goals

- Mutate the DOM and its styles using JavaScript
- Create new DOM nodes and append them
- Use different querySelectors to select single or multiple elements



### Activation

##### What are some of your favorite web applications? What are some of the features that make them work really well?

JavaScript lets us write applications that respond to our users.



### Learning Goal 1: Mutate the DOM and its styles using JavaScript

#### Demonstrate:

- JSON and HTML, and how they are both just ways of describing data
- How the browser parses HTML into a DOM
- Accessing the DOM in Chrome developer tools, starting with the `document`, and traversing down the DOM tree to access different elements
- How attributes of HTML elements are present in the DOM
- How we can change attributes of the DOM using JavaScript
- How JavaScript must run on the clients computer to do this
- How we can use `let` and `const` to create variables so we can write less code

#### Reinforce:

- How could I change this image to be an image of our character? (15 sec wait time)

#### Check for Understanding: 

- Exercise 1

### Learning Goal 2: Create new DOM nodes and append them

#### Demonstrate:

- Creating a new DOM element with `document.createElement`
- Mutating the properties of that element with JavaScript
- How the element will not appear on the page until we `.append` it somewhere

![ship yard](https://i.imgur.com/rw1mRDl.jpg)

- Using `.innerHTML` to create elements from HTML

#### Reinforce:

- If I wanted to create another image to represent a rock, how would I do it? (15 second wait time)

#### Check for Understanding:

- Kahoot Quiz
- Exercise 2

### Learning Goal 3: Use different querySelectors to select single or multiple elements from the DOM

#### Demonstrate:

- How accessing elements via the DOM tree is brittle 
- Using  `querySelector` to jump to specific elements on the page
- Using  `querySelectorAll` to select multiple elements on the page

#### Check for Understanding: 

- Exercise 3








* DOM
    * Document Object Model
        * Object: Data + Behavior
        * Model: Represents whats on the page
* `document.createElement`
    * function
    * Arguments:
        * The name of an html tag
    * Return value:
        * The actual element
* `document.append`
* `document.querySelector`
    * function
    * Arguments:
        * A CSS selector (.class-name), (#id)
    * Return value:
        * The first element that matches the selector
* `document.querySelectorAll`
    * function
    * Arguments:
        * A CSS selector (.class-name), (#id)
    * Return value:
        * A list of all elements that match the selector