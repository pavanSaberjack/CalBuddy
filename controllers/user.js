exports.getUserProfile = (req, res, next) => {
    res.render('user/profile.ejs', { 
      pageTitle: 'Page not found!',
      path: '/profile'
   });  
  };