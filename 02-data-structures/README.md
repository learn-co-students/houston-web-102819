# Datatypes and Programmatic Thinking

### Learning Goals
- Describe structures with hashes and arrays
- Use `each` to run code for every element in an array
- Create functions
- Use a methodology to solve problems


### Vocabulary
*  string / symbols / numbers
    * literal values that can be concattenated, shown to users, etc
- hashes
  - containers for other variables
- arrays
  - a container for **unenumerated** elements
  - 
#### I) Think Pair Share
- We're planning an app that's going to do some analysis for an airline. 
- Each of our airlines have a list of passengers who've flown with them
- Our app should:
  - Find the total distance all of the airline's passengers have traveled
  - Find the average distance all of the airline's passengers have traveled
  - Find the passenger who has traveled the farthest
**For right now**, design the data structure to represent our airline- what type of variable should the `airline` be? If it's a container for other variables, what will _those_ variables be? 

#### II) Self Assessment
* Open `index.rb`
* At the bottom of the file, using iteration, find the total distance that all of the airline's passengers have traveled
* `puts` the result
* If you run `ruby index.rb` in your terminal, you should see the result.

#### III) Self Assessment
* Wrap the code you wrote in the previous self assessment in a function 
* What arguments will the function need?
* Have the function return the result.
* After you've defined the function, invoke it, and use `puts` to display the result in the terminal

#### IV) Self Assessment
* Think about writing the code to find the passenger who has traveled the farthest. Answer the following questions:
    - What data do I _absolutely_ need to solve the problem?
    - How would I solve the problem with my own hands / mind?
    - What steps could I teach someone else so that they could solve this problem?
    - If there are too many steps, could I break the problem into smaller problems with multiple functions?
* When time allows, try to solve the problem. Which questions/answers helped in solving it? 
