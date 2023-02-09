// Importeer express uit de node_modules map
import express from 'express'

const memberId = "cldeo28o53rrk0bw5d6dsvol5";
let content = ""
await fetch(`https://whois.fdnd.nl/api/v1/member?id=${memberId}`)
    .then((response) => response.json())
    .then((data) => content = data.member)
// Maak een nieuwe express app aan
const app = express()



// Stel ejs in als template engine en geef de 'views' map door
app.set('view engine', 'ejs')
app.set('views', './views')

// Gebruik de map 'public' voor statische resources
app.use(express.static('public'))

app.get('/', async (req, res) => {
	res.render('index', { content })
})



// Stel het poortnummer in waar express op gaat luisteren
app.set('port', process.env.PORT || 8000)

// Start express op, haal het ingestelde poortnummer op
app.listen(app.get('port'), function () {
  // Toon een bericht in de console en geef het poortnummer door
  console.log(`Application started on http://localhost:${app.get('port')}`)
})
