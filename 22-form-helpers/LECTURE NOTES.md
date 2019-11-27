# Rails Forms



### Learning Goals

- Use `form_with` to create a form for a resource
- Use `form.text_input` to create text inputs
- Use `form.collection_select`  to create an input for an association


### Activation

- HTML is not DRY

- Rails is one of many tools that provides ways for us to abstract html


### Learning Goal 1: Use `form_with` to create a form for a resource

##### Discussion Points: 

* `form_with` creates a form
  * With an authenticity token!
* Can be used 2 ways
  * `url: `
  * `model: ` 
    * Uses path helpers from `resources`!
* Takes in a code block which is given a `form` object
* Form object has methods for creating inputs and labels
* We'll come back to make a `select` box later

* **Review what the name of the `input` is used to do**


### Learning Goal 2: Use strong param methods to filter controller input

##### Discussion Points: 

* Unpermitted params error
* Mass Assignment
* The dangers of mass assignment
* Strong Params is awesome



### Learning Goal 3: Use `collection_select`  to create an input for an association

##### Discussion Points: 

* Now let's build the select box, looking at some documentation



##### Vocabulary

- `form_tag`
  - A (mostly) obsolete rails helper for creating html form tags
- `form_for`
  - A (mostly) obsolete rails helper for creating html forms for an ActiveRecord Model
- `form_with`
  - A new rails helper which can create general html forms with special support for ActiveRecord Models (best of both worlds)

- `collection_select`

- - A rails helper method which creates a select box (useful for one-to-many relationships)

