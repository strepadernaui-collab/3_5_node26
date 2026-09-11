const express = require('express');
const conn = require('./conn');
const app = express();

app.use(express.static('public'));
app.use(express.urlencoded({ extended: true }));

app.set('view engine', 'ejs');

app.get('/', (req, res) => {
    res.render('index', {
       
    });
});
app.post('/Register', (req, res) => {
    const ln = req.body.ln;
    const fn = req.body.fn;
    const age= req.body.age;
    const add = req.body.add;

    const insert = `INSERT INTO tbl_students 
    VALUES('0', '${ln}', '${fn}', '${age}' , '${add}')`

    conn.query(insert, (err) => {
        res.send(
            `<script>
            alert('Data Inserted);
            location.href='/';
            </script>`
        )
    })

    console.log(ln);
});


app.listen(8000, () => {
    console.log('Server running on port 8000');
});
