# Rails Authentication


### Resources
* <https://play.kahoot.it/#/?quizId=3ae3e032-e93f-4a16-a394-be99f18e8b74>

### Learning Goals

* Define Authentication, Authorization, Hashing, and Encryption
* Add a secure password to a user model using `has_secure_password` and `password_digest`
* Check password equivalence with `.authenticate`
* Use the session to implement authorization



### Learning Goal 1: Define Authentication, Hashing, Encryption
##### Demonstrate
* The difference between authentication and authorization
* The difference between hashing and encryption
* That bcrypt is a gem

##### Vocabulary
* Authentication
  * Is the user who they say they are?
* Authorization
  * Should the user be able to do what they're trying to do?
* Hashing
  * Turning a string into an unreadable string
* Encryption
  * Turning a string into an unreadable string that can be reversed

##### Questions 

##### Check for Understanding
* *Kahoot Quiz:* [1-3] 



### Learning Goal 2: Add a secure password to a user model using `has_secure_password` and `password_digest`

##### Demonstrate

- `BCrypt::Password.create("my password")`
- `my_password = BCrypt::Password.new("$2a$12$to3T6g10t0o1ekf1M4kpjuRp4R8.PHJvSAq4
  fJ8jZ29MTx0ku1L/2")`
- Adding a `password_digest` to the users table
- Adding `has_secure_password` to the users model
- How we can now set the password of a user and it will create the `password_digest` hash

##### Vocabulary

- BCrypt 
  - A gem for hashing strings

##### Questions 

##### Check for Understanding

- *Self Assessment:* [1] 


### Learning Goal 3: Check password equivalence with `.authenticate`

##### Demonstrate

- Using `.authenticate`
- Adding that logic to an `authenticate` endpoint
- Saving the users `id` in the session

##### Questions 

##### Check for Understanding

- *Self Assessment:* [2] 



```ruby
def create
    traveler = Traveler.find_by(username: params[:username])
    if traveler && traveler.authenticate(params[:password])
        # Authenticated!
        session[:current_traveler_id] = traveler.id
        redirect_to "/travelers/#{traveler.id}/"
    else
        # Ooops!
    end
end



def current_traveler
    Traveler.find(session[:current_traveler_id])
end
```

