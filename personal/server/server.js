const express = require( 'express' );
const bodyParser = require( 'body-parser' );
const port = 9000;
const app = express();

app.use(bodyParser.json());

app.get();
app.post();
app.put();
app.delete();




app.listen(port, () => console.log(`This server is over ${port}`))