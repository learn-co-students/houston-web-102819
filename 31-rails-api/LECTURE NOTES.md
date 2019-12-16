# RESTful APIs

### Resources: 

* <https://play.kahoot.it/#/?quizId=8af1070f-eb2d-481d-b30d-a862207f74f9>



### Learning Goals

- Render JSON data from a Rails controller

- Writing controller methods for a JavaScript Frontend

- Explain CORS and how to implement it in a Rails App

- Render JSON data that includes associated entities



### Learning Goal 1: Render JSON data from a Rails controller

#### Demonstrate:

- Setting up a rails project with `--api`
- How this disables some unnecessary middleware, such as the form auth checks
- Using `render json:` to respond from a controller
- How this is taking a **ruby** data and turning it into a **json** string

#### Check for Understanding: 

* Everyone create a json endpoint



### Learning Goal 2: Using a Rails controller to manage persisted data  

#### Demonstrate:

* Creating & Seeding models 
* Building out a controller

#### Check for Understanding: 

* Kahoot [1-4]

#### Materials

- `https://apidock.com/rails/ActiveRecord/Serialization/to_json`




> Break



### Learning Goal 3: Explain CORS and how to implement it in a Rails Api

#### Demonstrate:

* An example CORs Error
* Why these errors are thrown by the browser
* How to install the cors gem
* How to configure cors

#### Check for Understanding: 

* Kahoot [5-7]s
