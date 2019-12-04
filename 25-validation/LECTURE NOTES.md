# Validations



### Learning Goals

- Explain the advantage of fat models and skinny controllers
- Use ActiveRecord validation helpers to validate data

> Break

- Check for resource validity in the controller
- Display error messages in the view




### Learning Goal 1: Explain the advantage of fat models and skinny controllers
##### Timestamp: 0:05

##### Demonstrate
- using the controller to limit the number of absences that a student can have. 
- how our validation is bypassed by other controller methods
- how to fix this by moving validations "higher", into the model

```ruby
validate :amount_must_be_greater_than_zero
def amount_must_be_greater_than_zero
    if(self.amount < 0)
        errors.add(:total_mileage, 'Amount cannot be negative')
    end
end
```

##### Questions 



### Learning Goal 2: Use ActiveRecord validation helpers to validate data

##### Timestamp: 0:20

##### Demonstrate

- using a validation helper to refactor our validation of absences

```ruby
validates :amount, numericality: { greater_than: 0 }
```

##### Questions 

##### Check for Understanding

- *Self Assessment 1*




### Learning Goal 3: Check for resource validity in the controller

##### Timestamp: 0:30

##### Demonstrate

- Using `assign_attributes ` so as not to persist data until we know it's valid
- Using `.valid?` to see if a resource is valid
- Conditionally commiting the update

##### Questions 

##### Check for Understanding

- *Self Assessment 2*



### Learning Goal 4: Display error messages in the view

##### Timestamp: 0:40

##### Demonstrate

- 2 Problems: 
  - The user can't see the errors
  - The form resets
- Using `.errors.messages` to view error messages in the controller
- Using the flash to move instance variable for the error messages from the `update` method to the `edit` method
- Using `@errors` hash to render errors in the view

##### Questions 

##### Check for Understanding

- *Self Assessment 3*


