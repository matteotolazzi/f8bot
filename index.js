var app = require('express')()

app.get('/', function(req, res) {
  res
    .send('Hi! I am your bot!')
})

app.get('/webhook', function(req, res) {
  if (req.query['hub.mode'] === 'subscribe' &&
      req.query['hub.verify_token'] === 'montybotverificationtoken') {
    console.log("Validating webhook");
    res.status(200).send(req.query['hub.challenge']);
  } else {
    console.error("Failed validation. Make sure the validation tokens match.");
    res.sendStatus(403);
  }
});

app.listen('8080', function() {
  console.log('Bot listening on port 8080')
})
