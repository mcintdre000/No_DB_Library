const express = require( 'express' );
const bodyParser = require( 'body-parser' );
const controller = require( './controller' );
const port = 9000;

const app = express();

app.use( bodyParser.json() );

app.get( "/api/books", controller.read );
app.post( "/api/booksadded", controller.addBook );
app.put( "/api/booksedit/:id", controller.updateBook );
app.delete( "/api/booksdelete/:id", controller.deleteBook );




app.listen( port, () => console.log( `This server is over ${ port }` ) );