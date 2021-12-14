
const routeTemplate = (entity) => {

    const importCrud = entity.entity_paginated ? 
    `const { create, getAll, getById, getList, update, delete} = require('../controllers/${entity.entity_name.toLocaleLowerCase()}.controller');`
    : `const { create, getAll, getById, update, delete} = require('../controllers/${entity.entity_name.toLocaleLowerCase()}.controller');`

    const paginateRoute = entity.entity_paginated ? `router.get('/list', getList);` : '';
    return `const express = require('express');
${importCrud}
const router = express.Router();

router.post('/', create);

router.get('/', getAll);

${paginateRoute}

router.get('/:id', getById);

router.put('/:id', update);

router.delete('/:id', delete);

module.exports = router;`
}

export default routeTemplate;