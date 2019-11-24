const express = require('express');
const app = express();
const PORT = process.env.PORT || 5000;
const bodyParser = require('body-parser');

app.use(express.static('server/public'));
app.use(bodyParser.urlencoded({extended: true}));
app.use(bodyParser.json());

app.post('/api/answer', (req, res)) => {
    const value1 = parseFloat(req.body.value1);
    const value2 = parseFloat(req.body.value2);
    const operation = req.body.operation;
    let answer;
    console.log(value1, value2, operation);



}






















app.listen(PORT, () => {
    console.log(`Listening on port: ${PORT}`);
});
