* # JavaScripts

* From image on the screen to walking character

* Lets talk about where the code is at right now
    * Abstract away the root of the url (interpolation)
    * Talk about why we're passing in the tag name as a string

* Let's make him walk
    * Put code to change the image src in a function
    * Change the position of the image
    * Make another function for moveRight
    * Put that in a set interval
        * Talk about the difference between referencing and invoking

* Throw all of that logic in another function createCharacter
    * Use the same variable name "character" inside and outside of the function
    * Talk about how JavaScritp will find the value of a variable based on scope

  ### Learning Goals

  - Identify common syntax differences between Ruby and JavaScript
    - String interpolation
    - No symbols
    - Everything is more explicit
      - parenthesis, curly braces, etc.
  - Explain the difference beween referencing and invoking a function
  - Explain how JavaScript will find the value of a variable based on scope
  - Define variable hoisting



  ```
   // Define a variable to use when we need to set the characters image src
  const ASSET_ROOT = './assets/green-character'
  
  // Create an img element to represent the character
  const character = document.createElement('img')
  
  // Make the character a little bigger
  character.style.width = '75px'
  
  // Position the character absolutely in the lower left corner of the screen
  character.style.position = 'absolute'
  character.style.left = '0px'
  character.style.bottom = '0px'
  
  // Set the src of the img so the browser knows what to show
  character.src = `${ASSET_ROOT}/static.gif`
  
  // Add the character image to the page
  document.body.append(character)
  
  // Define a variable to represent the direction our character is moving
  let direction = null
  
  // Define a variable to reperesent the speed of our character
  let speed = 5
  
  // Do some research on  setInterval- what is it doing?
  setInterval(function(){
  
      // character.style.left / bottom are both strings: "0px"
      // If we want to do some arithmatic, we'll need to parse them into integers:
      const left = parseInt(character.style.left)
      const bottom = parseInt(character.style.bottom)
  
      // If the character is moving right, the distance between him and the left side of the screen should increase
      // What is speed?
      if(direction == 'right'){
          character.style.left = `${left+speed}px`
      }
  
      // Account for other directions here:
  
  }, 20) // <- What is this number?
  
  // When we want to start walking a given direction, let's change: 
  //  1. The characters gif.
  //  2. The value of the direction variable. How will this effect the setInterval loop above?
  function walkRight(){
      character.src = `${ASSET_ROOT}/walkright.gif`
      direction = 'right'
  }
  
  
  // Finish the functions below:
  
  function walkLeft(){
  
  }
  
  function walkUp(){
  
  }
  
  function walkDown(){
  
  }
  
  function stop(){
      character.src = `${ASSET_ROOT}/static.gif`
      direction = null
  }
  ```
