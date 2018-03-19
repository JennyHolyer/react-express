const express = require('express');

const app = express();

app.get('/api/customers', (req, res) => {
    const customers = [
        {id: 1, fistName: 'Jenny', lastName: 'Maina'},
        {id: 2, fistName: 'Tim', lastName: 'Maina'},
        {id: 3, fistName: 'Emma', lastName: 'Vee'},
    ];
    res.json(customers);
})

const port = 5000;

app.listen(port, () => console.log(`Server started on port ${port}`))