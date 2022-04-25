
const controllerTemplate = (entity) => {
  const entityName = entity.entity_name.charAt(0).toUpperCase() + entity.entity_name.toLocaleLowerCase().slice(1)
  const collection = entity.entity_name.toLocaleLowerCase() + "s";
    const create = `
module.exports.create = async(req, res) => {
  try {
    const db = req.app.locals.db;

    const queryResult = await db.collection('${collection}').insertOne(req.body)
    const id = new ObjectId(queryResult.insertedId);
    const result = await db.collection('${collection}').findOne({_id: id})

    return res.status(200).json(result);
  } catch (err) {
    console.error("${entityName} creation failed: " + err);
    const { status, message } = errorHandler(err)
    res.status(status).json({message, entity: '${entityName}'})
  }
};
    `;
    const read = `
module.exports.getAll = async(req, res) => {
  try {
    const db = req.app.locals.db;
    let query = req.query || {};

    const result = await db.collection('${collection}').find(query).toArray();

    return res.status(200).json(result);
  } catch (err) {
    console.error("${entityName} getAll failed: " + err);
    const { status, message } = errorHandler(err)
    res.status(status).json({message, entity: '${entityName}'})
  }
};

module.exports.getById = async(req, res) => {
  try {
    const db = req.app.locals.db;
    const id = new ObjectId(req.params.id);
    const result = await db.collection('${collection}').findOne({'_id': id})

    return res.status(200).json(result);
  } catch (err) {
    console.error("${entityName} getById failed: " + err);
    const { status, message } = errorHandler(err)
    res.status(status).json({message, entity: '${entityName}'})
  }
};
    `;

    const update = `
module.exports.update = async(req, res) => {
  try {
    const db = req.app.locals.db;
    const id = new ObjectId(req.params.id);
    const result = await db.collection('${collection}').findOneAndUpdate({ _id: id}, { $set: req.body }, {returnDocument: "after"});

    return res.status(200).json(result.value);
  } catch (err) {
    console.error("${entityName} update failed: " + err);
    const { status, message } = errorHandler(err)
    res.status(status).json({message, entity: '${entityName}'})
  }
};
    `;

    const remove = `
module.exports.remove = async(req, res) => {
  try {
    const db = req.app.locals.db;
    const id = new ObjectId(req.params.id);

    const result = await db.collection('${collection}').deleteOne({ _id: id});
    return res.status(200).send(result.deletedCount == 1);
  } catch (err) {
    console.error("${entityName} delete failed: " + err);
    const { status, message } = errorHandler(err)
    res.status(status).json({message, entity: '${entityName}'})
  }
};
    `;

    const paginate = entity.entity_paginated ? `
module.exports.getList = async(req, res) => {
  /*try {
      const { page = 1, limit = 20, sortField, sortOrder } = req.query;
      const options = {
        page: parseInt(page, 10),
        limit: parseInt(limit, 10),
        sort: {}

      };

      if (sortField && sortOrder) {
        options.sort = {
            [sortField]: sortOrder
        }
      }

      const result = await ${entityName}.paginate({}, options);
      return res.status(200).json(result);
    } catch (err) {
      console.error("${entityName} list failed: " + err);
      const { status, message } = errorHandler(err)
      res.status(status).json({message, entity: '${entityName}'})
    }*/
};
    ` : '';

    return `const { ObjectId } = require('mongodb');
    const errorHandler = require("../../utils/errorHandler");
      ${create}
      ${read}
      ${paginate}
      ${update}
      ${remove}
      `;
    
}

export default controllerTemplate;