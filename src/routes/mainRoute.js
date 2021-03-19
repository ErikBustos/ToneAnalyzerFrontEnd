const router = require('express').Router();

const backendURL = 'http://toneanalyzernode.mybluemix.net/';

router.get('/message', (req,res) => {
    res.send('Wee');

    fetch(pushtoDB_URL ,{
        method: 'POST',
        body: JSON.stringify(formatInputToJson(input)),
        headers: { 'Content-Type': 'application/json' }
    })
    .then(res => res.json())
    .then(json => {
        res.status(202);
    })
    .catch(err => console.log(err));
})

router.get('/autor', (req,res) => {
    res.json({
        "alumno": "EBM",
        "servicio": "ECS en AWS"
    });
})
module.exports = router;