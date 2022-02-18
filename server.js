const express = require('express');
const path = require('path');
const JSONdb = require('simple-json-db');
const app = express();
const db = new JSONdb('./map.json');
const port = 9000;
const server_url = 'http://127.0.0.1:' + port.toString() + '/';

app.use(express.json());
app.use(express.static(path.join(__dirname, 'frontend')));

function genShortenedUrl() {
	let url_ = server_url + Math.random().toString(36).substring(2, 8);
	return url_;
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

	if(!(url.startsWith('http://') || url.startsWith('https://')))
		url = 'https://' + url;

	db.set(shortened_url, url);
	return shortened_url;
}

app.get('/:id', function(req, res){
	shortened_url_ = server_url + req.params.id;
	let exists_ = db.has(shortened_url_);
	if(exists_) {
		res.redirect(db.get(shortened_url_));
	}
	else {
		res.send('<h2>Error 404! URL doesn\'t exist</h2>');
	}
});

app.get('/', (req, res) => {
	res.sendFile('index.html');
});

app.post('/', (req, res) => {
	shortened_url = map_(req.body.url);
	res.send("{\"shortened_url\" : \"" + shortened_url + "\"}");
})

app.listen(port, () => {
	console.log('Listening on ' + server_url);
});