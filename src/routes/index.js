const Router = require('express');

const router = Router();

router.get('/', (req, res) => res.json({message: 'Clase 44'}));

module.exports = router;