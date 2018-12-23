const router = require('express').Router()
const submits = require('../mockDB').submits

router.get('/', async (request, response) => {
	response.json(submits)
})

router.post('/', async (request, response) => {
	try {
		const example = new Example(request.body.content)
		const result = await example.save();
		return response.status(201).json(result);
	} catch (exception) {
		console.log(exception)
	}
})


module.exports = router
