var app = require('express')()

app.get('/', function(req, res) {
  res
    .send('Hi! I am your bot!')
})

app.listen('8080', function() {
  console.log('Bot listening on port 8080')
})
