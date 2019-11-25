const express = require('express');
const app = express();
const PORT = process.env.PORT || 5000;
const bodyParser = require('body-parser');
let savedHistory = [];

app.use(express.static('server/public'));
app.use(bodyParser.urlencoded({extended: true}));
app.use(bodyParser.json());

app.post('/api/answer', (req, res) => {
    const value1 = parseFloat(req.body.value1);
    const value2 = parseFloat(req.body.value2);
    const operation = req.body.operation;
    let answer;
    
    if(operation === 'add') {
        answer = value1 + value2;
    }
    else if (operation === 'subtract') {
        answer = value1 - value2;
    }
    else if (operation === 'multiply') {
        answer = value1 * value2;
    }
    else if (operation === 'divide') {
        answer = value1 / value2;
    }
    const equationObject = {value1, value2, operation, answer};

    addEquation(equationObject);

    res.send({ Answer: answer });
    
});

function addEquation(equationObject) {
    savedHistory.push(equationObject);
};

app.get('/api/history', (req, res) => {
    res.send(savedHistory)
});


app.listen(PORT, () => {
    console.log(`Listening on port: ${PORT}`);
});
