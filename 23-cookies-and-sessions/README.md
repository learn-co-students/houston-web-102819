# Sessions and Cookies

### Learning Goals 
- Explain what it means for HTTP to be Stateless
- Explain how the session is built on top of "cookies"
- Use the session and methods to save variables from request to request

##### Vocabulary
* Statelessness
    * A piece of code that doesn't remember any variables
* Idempotency
    * An action for which the same input will render the same output
* Cookies
    * Data that the client and server pass back and forth in the headers
* Session
    * User specific data stored in cookies
* Flash
    * Session variables that only last one request-response cycle