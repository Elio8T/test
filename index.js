const express = require('express');
//const app = require('express')();
const app = express();
const PORT = 8080;

app.use(express.json())
var cors = require('cors')

app.use(cors()) // Use this after the variable declaration



app.get('/1-13-23', (req, res) => {
    res.status(200).send({
        AverageTempF: '53',
        WindMPH: '28',
        PrecipititationIN:'0.61',
        Visability:'10'
    }
    )
});
app.get('/1-12-23', (req, res) => {
    res.status(200).send({
        AverageTempF: '37.42',
        PrecipititationIN:'0.01',
        WindMPH: '18',
        Visability:'10'
    }
    )
});
app.get('/1-11-23', (req, res) => {
    res.status(200).send({
        AverageTempF: '29.9',
        PrecipititationIN:'0',
        WindMPH: '10',
        Visability:'10'
    }
    )
});
app.get('/1-10-23', (req, res) => {
    res.status(200).send({
        AverageTempF: '37.41',
        PrecipititationIN:'0',
        WindMPH: '15',
        Visability:'10'
    }
    )
});
app.get('/1-9-23', (req, res) => {
    res.status(200).send({
        AverageTempF: '35.46',
        PrecipititationIN:'0.',
        WindMPH: '13',
        Visability:'10'
    }
    )
});
app.get('/1-8-23', (req, res) => {
    res.status(200).send({
        AverageTempF: '37',
        PrecipititationIN:'0.0',
        WindMPH: '15',
        Visability:'10'
    }
    )
});
app.get('/1-7-23', (req, res) => {
    res.status(200).send({
        AverageTempF: '36.97',
        PrecipititationIN:'0.19',
        WindMPH: '15',
        Visability:'10'
    }
    )
});
app.get('/1-6-23', (req, res) => {
    res.status(200).send({
        AverageTempF: '34.33',
        PrecipititationIN:'0.01',
        WindMPH: '12',
        Visability:'10'
    }
    )
});
app.get('/1-5-23', (req, res) => {
    res.status(200).send({
        AverageTempF: '40.35',
        PrecipititationIN:'0.25',
        WindMPH: '20',
        Visability:'10'
    }
    )
});
app.get('/1-4-23', (req, res) => {
    res.status(200).send({
        AverageTempF: '42.17',
        PrecipititationIN:'0.63',
        WindMPH: '12',
        Visability:'10'
    }
    )
});
app.get('/1-3-23', (req, res) => {
    res.status(200).send({
        AverageTempF: '40.68',
        PrecipititationIN:'0.0',
        WindMPH: '10',
        Visability:'10'
    }
    )
});
app.get('/1-2-23', (req, res) => {
    res.status(200).send({
        AverageTempF: '43.33',
        PrecipititationIN:'0.0',
        WindMPH: '14',
        Visability:'10'
    }
    )
});
app.get('/1-1-23', (req, res) => {
    res.status(200).send({
        AverageTempF: '50.74',
        PrecipititationIN:'0.39',
        WindMPH: '20',
        Visability:'10'
    }
    )
});


app.listen(
    PORT,
    () => console.log(`API is live at  http://localhost:${PORT}`)

)