# Authentication

### Learning Goals
- Define Authentication, Hashing, Encryption, and BCrypt
- Add a secure password to a user model using `has_secure_password` and `password_digest`
- Check password equivalence with `.authenticate`


### Vocabulary
* Authentication
    * Verify that user is who they say they are
* Authorization
    * Do they have permission to do what the asked
* Hashing
    * The itempotent process of transforming a string so that it's unrecognizable
    * Example: mustang22 -> $askldejfio\$e.ljasldkf
* Encryption
    * The process of transforming a string in a reversable way

```
Create Account:
Mustang22 => tre35%22!
            => treasdff3!
            => absrasde4
            => cde3t4wew!

Login:
Mustang22 => tre35%22!

```