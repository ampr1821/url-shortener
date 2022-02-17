const express = require('express');
const path = require('path');
const JSONdb = require('simple-json-db');
const app = express();
const db = new JSONdb('./map.json');
const port = 9000;

app.use(express.json());
app.use(express.static(path.join(__dirname, 'frontend')));

function genShortenedUrl() {
	let url_ = '';
	let possible = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789';
	for(let x = 1; x <= 6; x++) {
		url_ += possible[Math.floor(Math.random() * possible.length)];
	}
	return 'http://127.0.0.1:' + port.toString() + '/' + url_;
}

function map_(url) {
	let shortened_url = '';
	let flag = false;
	for (i in db.JSON()) {
		if(db.get(i) == url) {
			shortened_url = i;
			flag = true;
		}
	}

	if(!flag) {
		shortened_url = genShortenedUrl();
	}

	db.set(shortened_url, url);
	return shortened_url;
}

app.get('/:id', function(req, res){
	shortened_url_ = 'http://127.0.0.1:' + port + '/' + req.params.id;
	let exists_ = db.has(shortened_url_);
	if(exists_) {
		res.redirect(db.get(shortened_url_));
	}
	else {
		res.send('<h2>Error 404! URL doesn\'t exist</h2>');
	}
});

app.get('/', (req, res) => {
	res.sendFile('index.html')
});

app.post('/', (req, res) => {
	shortened_url = map_(req.body.url);
	res.send("{\"shortened_url\" : \"" + shortened_url + "\"}");
})

app.listen(port, () => {
	console.log('Listening on http://127.0.0.1:' + port);
});