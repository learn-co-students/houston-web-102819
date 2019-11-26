# Abstracting Routes

### Learning Goals

- Identify the 7 common RESTful Routes
- Use `resources` to automate the the creation of routes
- Use `link_to` to automate the creation `a` tags

### Vocabulary

##### RESTful Routes
```
users = [ "Joe", "Bob" ]

users[1].edit

users/1/edit
```
- HTTP methods and their paths
- A convention for writing ^ 
- **index** GET `/things`
- **new** GET ("get"ing the form) `/things/new`
- **create** POST `/things`
- **show** GET `/things/:id`
- **edit** GET ("get"ing the form) `/things/:id/edit`
- **update** PATCH `/things/:id`
- **destroy** DELETE `/things/:id`

##### `resources`
- Automatically creates RESTful Routes

##### `link_to`
- An `erb` or `Action::View` helper
- a function which creates an `a` tag
- Creates a link to somewhere else
- You can give it a name
