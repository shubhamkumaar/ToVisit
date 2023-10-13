const express = require("express")
const path = require("path")
const app = express()
// const hbs = require("hbs")
const LogInCollection = require("./mongo")
const port = process.env.PORT || 3000
app.use(express.json())

app.use(express.urlencoded({ extended: false }))



var cons = require('consolidate');
const publicPath = path.join(__dirname, '../public')
// view engine setup
app.engine('html', cons.swig)
app.set('views', path.join(__dirname, '../'));
app.set('view engine', 'html');
app.use(express.static(publicPath))
// const tempelatePath = path.join(__dirname, '../')
// const publicPath = path.join(__dirname, '../')
// console.log(publicPath);

// app.set('view engine', 'html')
// app.set('views', tempelatePath)
// app.use(express.static(publicPath))
// app.use(express.static(tempelatePath))

app.get('/signup', (req, res) => {
    res.render('signup')
})
app.get('/', (req, res) => {
    res.render('login')
})


app.post('/signup', async (req, res) => {

    const data = {
        name: req.body.name,
        password: req.body.password
    }
    await LogInCollection.insertMany([data])
    res.render("index")
})


app.post('/login', async (req, res) => {

    try {
        const check = await LogInCollection.findOne({ name: req.body.name })
        if (check.password === req.body.password) {
            res.status(201).render("index", { naming: `${req.body.password}+${req.body.name}` })
        }
        else {
            res.send("incorrect password")
        }
    }    
    catch (e) {
        res.send("wrong details") 
    }
})



app.listen(port, () => {
    console.log('port connected');
})