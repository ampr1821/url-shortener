const express = require('express');
const path = require('path');
const app = express();
const port = 9000;

app.use(express.json());
app.use(express.static(path.join(__dirname, 'frontend')));

function getRand(lim) {
	return Math.floor(Math.random() * lim);
}

function genShortenedUrl(url) {
	let url_ = '';
	let possible = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789';
	for(let x = 1; x <= 6; x++) {
		url_ += possible[Math.floor(Math.random() * possible.length)];
	}
	return 'http://127.0.0.1:' + port.toString() + '/' + url_;
}

app.get('/:id', function(req, res){
	res.send('The id you specified is ' + req.params.id);
});

app.get('/', (req, res) => {
	res.sendFile('index.html')
	// res.send('<h2>Hello from Node JS</h2>');
});

app.post('/', (req, res) => {
	console.log(req.body);
	shortened_url = genShortenedUrl('');
	console.log(shortened_url);
	res.send("{\"shortened_url\" : \"" + shortened_url + "\"}");
})

app.listen(port, () => {
	console.log('Listening on port ' + port);
});