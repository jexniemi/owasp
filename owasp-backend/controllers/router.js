const router = require('express').Router()
const submits = require('../mockDB').submits
const secretCode = require('../mockDB').secretCode

router.get('/submits', async (request, response) => {
	response.json(submits)
})

router.get('/secretCode', async (request, response) => {
	response.json(secretCode)
})

router.post('/submits', async (request, response) => {
	try {
		submits.push(request.body)
		response.status(201).send("Submit created succesfully");
	} catch (exception) {
    console.log(exception)
    response.status(400).send("Uh oh, something went wrong");
	}
})


module.exports = router
