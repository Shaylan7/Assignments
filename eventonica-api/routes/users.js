var express = require('express');
// Single routing
var router = express.Router();
    

  

 // using global variable so that it changes when delete function is ran and new user data is sent back  
var users = [
  { name: "Marlin", email: "marlin@gmail.com", id: "1" },
  { name: "Nemo", email: "nemo@gmail.com", id: "2" },
  { name: "Dory", email: "dory@gmail.com", id: "3" }

]

/* GET users listing. */
router.get('/', function (req, res, next) {
  console.log('string')
  res.send(users);
});

// Delete user
router.delete('/:userId', function (req, res) {
  // save request data to a variable in routes/users.js
  const userId = req.params.userId
  console.log('hello',userId)
  console.log('something')
  
  users = users.filter(i => {
    console.log(i.id)
    if(i.id != userId){
      return true; 
    } else {
      return false;
    }
    
  })
  console.log(users)

  res.send('User has been deleted');
});

// Add user 

router.post('/', function(req, res, next) {
  // save request data to a variable in routes/users.js
  const user = req.body;

    // output the book to the console for debugging
    
    users.push(user);

  res.send('This user has been added');
});


module.exports = router;
