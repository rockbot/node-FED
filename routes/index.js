
/*
 * GET home page.
 */

exports.index = function(req, res){
  res.render('index', {
    title: 'Sample Project',
    inputs : [
      { name: 'name', label: 'Full Name: ', placeholder: 'Susan B. Anthony' },
      { name: 'email', label: 'Email: ', placeholder: 'roy@biv.com' }
    ]
  });
};