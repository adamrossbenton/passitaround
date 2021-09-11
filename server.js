const express = require("express")
const app = express()

const port = 3000

app.listen(port,() => {
    console.log(`Listening on ${port}`)
})

app.get('/', (req,res) => {
    res.send(`
    <html>
        <body>
            <h1> 99 bottles of beer on the wall</h1>
            <a href="http://localhost:3000/98">take one down, pass it around</a>
        </body>
    </html>
    `)
})

app.get('/:beer', (req,res) =>{
    const nextBeer = Number(req.params.beer) - 1
    if (req.params.beer == 0) {
        res.send("We're out of beer :\(")
    } else {
        res.send(`
        <html>
            <body>
                <h1>${req.params.beer} bottles of beer on the wall</h1>
                <a href="http://localhost:3000/${nextBeer}">take one down, pass it around</a>
            </body>
        </html>
        `)
    }
})