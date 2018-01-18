var express = require('express')
var bodyParser = require('body-parser')

var app = express();

// app.get('/login', (req, res) => {
//   const email = req.query.email
  
//   const password = req.query.password

//   if(!email || !password)
//       return res.send('Invalid GET', 400)

//   const username = email.substr(0, email.indexOf('@'))

//   if(password !== 'secret123') 
//     return res.send('Authentication error for user: ' + username, 403)

//   return res.send(`User ${username} authenticated successfully!`, 201)
// })


app.post('/login', (req, res) => {
  const email = req.body.email
  const password = req.body.password

  if(!email || !password)
      return res.send('Invalid GET', 400)

  const username = email.substr(0, email.indexOf('@'))

  if(password !== 'secret123') 
    return res.send('Authentication error for user: ' + username, 403)

  return response.status(200).json({
    username: username
  })
})



app.get('/userrole', (req, res) => {

  const username = req.query.username
  var role = username.toLowerCase() == "admin" ? "admin" : "user"
  return res.send(`the user ${username} has the irritating role of ${role}`)
})

app.listen(8080)