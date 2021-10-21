const express = require('express')
const app = express()
app.use(express.json())  // replaces body-parser
app.use(express.static('public'))
app.use(express.urlencoded({extended: true}))
const exphbs = require('express-handlebars')

app.engine('hbs', exphbs({
  defaultlayout : 'main',
  extname : 'hbs'
}))

app.set('view engine', 'hbs')
// connect to models to routes
require('./models') 
const authorRouter = require('./routes/authorRouter')


// GET home page
app.get('/', (req, res) => {
  console.log('connected')
  res.render('index')
})

// Handle author-management requests
// the author routes are added onto the end of '/author-management'
app.use('/author-management', authorRouter)

app.listen(process.env.PORT || 3000, () => {
  console.log("The library app is running!")
})
