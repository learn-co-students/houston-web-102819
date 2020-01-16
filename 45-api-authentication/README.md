### Rails Token Auth:

1. Add `gem 'jwt'` to your Gemfile and run `bundle install`

2. When handling the `login` request, use `JWT.encode( { id: user.id }, 'YOUR SECRET')` to create a jwt token. Send the token in your response to the frontend

```ruby
     def login
        user = User.find_by({ username: params[:username] })
        if user.authenticate(params[:password])
            render json: { user: user, token: JWT.encode( { id: user.id }, 'YOUR SECRET') }
        end
    end
```

3. In the frontend, where you `fetch` to send the login request, wait for the servers response, then set the received JWT token in localStorage. This will save token so that it persists from page load to page load

4. In your application controller, define a `current_user` method that you can use in controller actions:

```ruby
class ApplicationController < ActionController::API
    rescue_from Exception, :with => :render_error_response

    def render_error_response(error)
        render json: { failed: true, message: error }
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

3. When handling the `login` request, save the user's id in the session: 

```ruby
    def login
        user = User.find_by({ username: params[:username] })
        if user.authenticate(params[:password])
            session[:user_id] = user.id
            render json: user
        end
    end
```

4. In the ApplicationController, define a `current_user` method that you can use in controller actions:

```ruby
class ApplicationController < ActionController::API

    def current_user
        Passenger.find(session[:user_id])
    end

end
```

5. In your fetch requests on the front end, provide a `credentials: 'include'` option in the options object. Example:
```javascript
fetch('http://localhost:3000/profile', {
    credentials: 'include'
})
    .then( res => res.json())
    .then( profile => {
        if(!profile.error){
            this.setState({
                loggedInUser: profile,
                selectedPage: 'myTickets'
            }) 
        }
    })
```

> Note: credentials: 'include' is its own option and does not go in the headers nor the body of the request

6. Protect against Cross-Site Request Forgery:

```ruby
# config/application.rb
config.session_store :cookie_store, key: '_session', same_site: :strict
```