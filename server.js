const express = require('express');
const path = require('path');
const app = express();
const port = 9000;

app.use(express.json());
app.use(express.static(path.join(__dirname, 'frontend')))

app.get('/', (req, res) => {
	res.sendFile('index.html')
	// res.send('<h2>Hello from Node JS</h2>');
});

app.post('/', (req, res) => {
	console.log(req.body);
	res.send("{\"done\" : 1}")
})

app.listen(port, () => {
	console.log('Listening on port ' + port);
});