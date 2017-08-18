# login-authentication

Connect-flash allows for passing session flashdata messages.
Bcrypt-nodejs gives us the ability to hash the password.

All the configuration for passport will be handled in config/passport.js. This is also the file where we will create the serializeUser and deserializeUser functions to store our user in session