* Discussion about remembering who is logged in
    * Airport example, Theme Park Example (bring magic band)
* Checking a password is really pretty easy
* But someone, somewhere, has to remember who is logged in.
* There are alot of different ways to implement authentication
    * You should not be asked to implement authentication in a production app as a junior dev
    * The major differences in how authentication can be implemented have to do with *where* we remember who is logged in, and how we pass that state to different parts of our application
* Today we're going to look at two different ways to implement authentication
    * JWT authentication, which is very common right now
    * Session based authentication, which is less common but which I believe is actually a lot more secure
* Before we dive into those conversations we're going to look at two common ways that our applications can be hacked, so that we know what our authentication measures are up against.


What is the correct order of these four authentication steps? (Write a list of numbers)