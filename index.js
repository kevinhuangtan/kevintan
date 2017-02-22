var path = require('path');
var express = require('express');
var app = express();
var bodyParser = require('body-parser')
app.use( bodyParser.json() );       // to support JSON-encoded bodies
app.use(bodyParser.urlencoded({     // to support URL-encoded bodies
  extended: true
}));

const localhost = 3000;
app.set('port', (process.env.PORT || localhost));
app.use(express.static('build'));


app.get('/resume', function (req, res)
{
  res.sendFile(__dirname + '/public/resume.pdf');
})


app.get('/*', function(req, res) {
  res.sendFile(path.join(__dirname, '/public/index.html'));
});

app.listen(app.get('port'), function(err) {
  if (err) {
    console.log(err);
    return;
  }

  console.log(`Listening at http://localhost:${app.get('port')}`);
});
