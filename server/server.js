const express = require('express');
const app = express();
const PORT = process.env.PORT || 5000;
const bodyParser = require('body-parser');
let history = [];

app.use(express.static('server/public'));
app.use(bodyParser.urlencoded({extended: true}));
app.use(bodyParser.json());

app.post('/api/answer', (req, res) => {
    const value1 = parseFloat(req.body.value1);
    const value2 = parseFloat(req.body.value2);
    const operation = req.body.operation;
    let answer;
    
    if(operation == 'add') {
        answer = value1 + value2;
        res.send({answer:answer});
    }
    else if (operation == 'subtract') {
        answer = value1 - value2;
        res.send({answer:answer})
    }
    else if (operation == 'multiply') {
        answer = value1 * value2;
        res.send({ answer: answer })
    }
    else if (operation == 'divide') {
        answer = value1 / value2;
        res.send({ answer: answer })
    }
    const equationInputs = {value1, value2, operation, answer};
    addEquation(equationInputs);
    return;
});

function addEquation (equationInputs) {
    history.push(equationInputs);
};

app.get('api/history', (req, res) => {
    res.send(history)
});


app.listen(PORT, () => {
    console.log(`Listening on port: ${PORT}`);
});
