# URL Shortener

This is a simple URL Shortener built using Node JS.

## Usage

Git clone the above repository and run the command:

```bash
node server.js
```

Press Ctrl + C to shutdown the server.

## Important note
It is important to use [127.0.0.1](http://127.0.0.1/) instead of [localhost](http://localhost/). This is because most browsers implement the CORS policy that does not allow the client side javascript to access the resources outside its domain. To read more about it, [click here](https://developer.mozilla.org/en-US/docs/Web/HTTP/CORS).

## To change the port number
Edit the 'server.js' file and 'index.js'.

## Modules used
You do not need to manually install the modules after cloning the repository.
- [Express](https://expressjs.com/)
- [Path](https://nodejs.org/api/path.html)
- [Simple JSON DB](https://www.npmjs.com/package/simple-json-db)
