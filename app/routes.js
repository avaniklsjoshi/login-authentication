module.exports = function(app, passport) {
  
      /**
       * HOME PAGE (with login links) 
       */     
      app.get('/', function(req, res) {
        res.render('index.ejs'); // load the index.ejs file
      });
  
      /**
       * LOGIN, show the login form
       */
      app.get('/login', function(req, res) {
        res.render('login.ejs', { message: req.flash('loginMessage') });               // render the page and pass in any flash data if it exists
      });
  
      // process the login form
      // app.post('/login', do all our passport stuff here);
  
     /**
      * SIGNUP, show the signup form
      */
      app.get('/signup', function(req, res) {
        res.render('signup.ejs', { message: req.flash('signupMessage') });              // render the page and pass in any flash data if it exists     
      });
  
      // process the signup form
      // app.post('/signup', do all our passport stuff here);
  
      /**
       * PROFILE SECTION
       * we will want this protected so you have to be logged in to visit
         we will use route middleware to verify this (the isLoggedIn function)
       */
      app.get('/profile', isLoggedIn, function(req, res) {
          res.render('profile.ejs', {
              user : req.user // get the user out of session and pass to template
          });
      });
  
      /**
       * LOGOUT
       */
      app.get('/logout', function(req, res) {
          req.logout();
          res.redirect('/');
      });
  };  //module end
  


  // route middleware to make sure a user is logged in
  function isLoggedIn(req, res, next) {
        if (req.isAuthenticated())          // if user is authenticated in the session, carry on  
          return next();
        res.redirect('/');            // if they aren't redirect them to the home page   
  }

  /**
   * req.flash: This is the connect-flash way of getting flashdata in the session. We will create the loginMessage inside our passport configuration.

isLoggedIn: Using route middleware, we can protect the profile section route. A user has to be logged in to access that route. Using the isLoggedIn function, we will kick a user back to the home page if they try to access http://localhost:8080/profile and they are not logged in.

Logout: We will handle logout by using req.logout() provided by passport. After logging out, redirect the user to the home page.
   */