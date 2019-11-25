# Web Associations


### Learning Goals

* Use foreign keys to create references between Table Rows
* Use user input to define foreign keys
* Use other types of inputs to improve the user's experience when creating associations



### Activation

* Overview of the Lecture Exercise Code
* Web Association Tables



### Learning Goal 1: Use foreign keys to create references between Table Rows

##### Talking Points

* Review relationship handouts
* Associate rows together using foreign keys
* Demonstrate how we define the associations in the model
  * The code that that actually gets us
* Using the association in the controller

##### Early Assessment 

- Kahoot
  - Will working code produce an association?
  - Will broken code (missing `_id`) produce an association?
  - Will abstracted code (using a seperate hash) produce an association?

##### Primary Assessment

- Associate a PantryItem with a Category using a foreign key with the seed file



### Learning Goal 2: Use user input to define foreign keys

##### Talking Points

* Review of how input `names` effect `params`
* Naming an input after a foreign key
* Manually creating a relationship by ID

##### Early Assessment 

- Kahoot
  - Will broken code (missing `_id`) produce an association?
  - Will broken code (miss-matched names) produce an association?
  - Will working code code (miss-matched names) produce an association?

##### Primary Assessment

- Update the form inputs and controller method to allow a user to define the `category_id` of a PantryItem 



### Learning Goal 3:  Use other types of inputs to improve the user's experience when creating associations

##### Talking Points

* A static select box
* How `values` effect `params`
* Abstracting to iterate over the model
* Accessing the view in the model is a bad idea

##### Early Assessment 

- Kahoot
  - How do select boxes work? What will be in params if `(this option selected)`
  - Will broken code (wrong value) produce an association?
  - Will abstracted code (with an each loop) produce an association?

##### Primary Assessment

- Refactor the text input into a `select` box

