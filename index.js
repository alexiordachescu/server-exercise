const express = require('express')
const app = express()  

function serverRunning() { 
  console.log("server running on port 3000");
}

const document = `<html>
<head>
  <title>Test page</title>
</head>

<body>
  <h1>Testing my homepage</h1> 
  <h2>I see it works, great!</h2>
</body>
</html>` 

function render (message) { 
const document = `<html>

  <h1>${message} need some changes on our website?</h1> 
</html>` 
return document;
} 

app.get('/', function (req, res) {
  res.send('<h1>Hello World, please also use /user/your_name, /admin and /home</h1>')
}) 
 
app.get('/user/:name', function (req, res) { 
  const message = `<h1>Welcome ${req.params.name}</h1>`; 
  res.send(message);
})  

app.get('/admin', function (req, res) {  
  const message = `Hi Admin, welcome back on board:`
  const page = render(message); 
  res.send(page);
})   


app.get('/home', function (req, res) { 
  res.send(document);
})

app.listen(3000, serverRunning)