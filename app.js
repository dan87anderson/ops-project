var express = require('express');
//var  db= require('./gestione');
var app = express();

//				CONFIG
app.set('view engine', 'pug');
app.set('views', './views');
app.use('/static', express.static('public'));

//				ROUTING

/* app.post('/elenco/crea/:quanti', function (req, res) {
	db.gestionePersone.creaCasuali(req.params.quanti);
	res.end();
}); */
 
app.get('/', function (req, res) {
	res.render('index');
});
 
app.listen(8080, function () {
  console.log('Server in esecuzione sulla porta 8080...');
});