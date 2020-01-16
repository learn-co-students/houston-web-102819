### Rails Token Auth:

1. Add `gem 'jwt'` to your Gemfile and run `bundle install`
2. When handling the `login` request, use `JWT.encode( { id: user.id }, 'YOUR SECRET')` to create a jwt token. Send the token in your response to the frontend
3. In the frontend, where you `fetch` to send the login request, wait for the servers response, then set the received JWT token in localStorage. This will save token so that it persists from page load to page load
4. In your application controller, define a `current_user` method that you can use in controller actions:

```ruby
class ApplicationController < ActionController::API
    rescue_from Exception, :with => :render_error_response

    def render_error_response(error)
        render json: error
    end

    def current_user
        begin
            method, token = request.headers[:Authorization].split(' ')
            if method === 'Bearer'
                payload, header = JWT.decode(token, 'asdljasldkfjs')
                User.find(payload["id"])
            end
        rescue
            raise Exception.new('You must be logged in to make this request')
        end
    end

end

```



### Node Token Auth:

1. Install a `json-web-token`: `npm install json-web-token`
2. When handling the `login` request:
   1. Require jwt: `const jwt = require('json-web-token')`
   2. Use `await jwt.encode( { id: user.id }, 'YOUR SECRET')` to create a jwt token. 
   3. Send the token in your response to the frontend
3. In the frontend, where you `fetch` to send the login request, wait for the servers response, then set the received JWT token in localStorage. This will save token so that it persists from page load to page load
4. In your index, use middleware to define a `currentUser`  property on the request object that you can use in later controller actions:

```javascript
// Middleware to define the currentUser

app.use( async (req, res, next) => {
    try {
        const [ method, token ] = req.headers.authorization.split(' ')
        if(method == 'Bearer'){
            const result = await jwt.decode('asdljasldkfjs', token)
            const { id } = result.value
            let [ user ] = await knex('passengers').where({ id }).select()
            req.currentUser = user
        }
        next()
    } catch(err){
        return res.send({ error: true, message: 'You must be logged in to make this request'})
    }
})


```





### Rails Session Auth:

1. In `config/initializers/cors.rb`, add `credentials: true` and ensure that you have whitelisted a **specific** host (`*` won't work for apis that maintain a cookie session):

```ruby

Rails.application.config.middleware.insert_before 0, Rack::Cors do
  allow do
    origins 'http://localhost:3001'

    resource '*',
      headers: :any,
      credentials: true,
      methods: [:get, :post, :put, :patch, :delete, :options, :head]
  end
end
```

2. `config/application.rb` set  `config.api_only = false`. This appears to be necessary to use a Rails Cookie session
3. When handling the `login` request, save the user's id in the session: `session[:user_id] = user.id`

4. In the ApplicationController, define a `current_user` method that you can use in controller actions:

```ruby
class ApplicationController < ActionController::API

    def current_user
        Passenger.find(session[:user_id])
    end

end
```

#### Protecting from Cross-Site Request Forgery:

```ruby
# config/application.rb
config.session_store :cookie_store, key: '_session', same_site: :strict
```



### Node Session Auth:

1. Install `cookie-session`: `npm install cookie-session`
2. Configure cors to whitelist a **Specific** origin:

```javascript
const cors = require('cors')
app.use(cors({
    origin: 'http://localhost:3001',
    credentials: true
}))
```

3. In `index.js` requre and configure the cookie session: 

```javascript
// Configure the cookie Session
const cookieSession = require('cookie-session')
app.use(cookieSession({
    name: 'session',
    keys: [ 'YOUR SECRET' ],
    maxAge: 24 * 60 * 60 * 1000 // 24 hours
}))
```

4. When handling the `login` request, save the user's id in the session: `req.session.userId = user.id`

#### Protecting from Cross-Site-Request Forgery:

```javascript
app.use(cookieSession({
    name: 'session',
    keys: [ 'asdljasldkfjs' ],
    sameSite: 'strict',
    maxAge: 24 * 60 * 60 * 1000 // 24 hours
}))
```