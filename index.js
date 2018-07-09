const express = require('express')
const app = express()
const bodyParser = require('body-parser')
app.use(bodyParser.urlencoded({ extended: true }))
app.set('view engine', 'hbs')

const compliments = [
  'Your instructors love you',
  'High five = ^5',
  'Having a growth mindset will take you far',
  "It's almost beer o'clock",
  'The Force is strong with you'
]

const colors = ['#FFBF00', '#0080FF', '#01DF3A', '#FF0080']

app.get('/', (request, response) => {
  //   response.send('goodnight moon')
  response.render('welcome')
})
app.get('/:name', (req, res) => {
  res.render('index', {
    name: req.params.name,
    compliments: compliments[Math.floor(Math.random() * compliments.length)],
    colors: colors[Math.floor(Math.random() * colors.length)]
  })
})
// app.method(path, handler)
// router.method(path, action)
app.post('/', (req, res) => {
  res.render('index', {
    name: req.body.name,
    compliments: compliments[Math.floor(Math.random() * compliments.length)],
    colors: colors[Math.floor(Math.random() * colors.length)]
  })
})

app.listen(3000, () => {
  console.log('its working')
})
