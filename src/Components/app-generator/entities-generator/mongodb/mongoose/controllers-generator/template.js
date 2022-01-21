
const controllerTemplate = (entity) => {
    const create = `
module.exports.create = async(req, res) => {
  try {
    const item = new ${entity.entity_name}(req.body);

    const result = await item.save();
    return res.status(200).json(result);
  } catch (err) {
    console.log("${entity.entity_name} creation failed: " + err);
    const { status, message } = errorHandler(err)
    res.status(status).json({message, entity: '${entity.entity_name}'})
  }
};
    `;
    const read = `
module.exports.getAll = async(req, res) => {
  try {
    let query = req.query || {};
    const result = await ${entity.entity_name}.find(query);

    return res.status(200).json(result);
  } catch (err) {
    console.log("${entity.entity_name} getAll failed: " + err);
    const { status, message } = errorHandler(err)
    res.status(status).json({message, entity: '${entity.entity_name}'})
  }
};

module.exports.getById = async(req, res) => {
  try {
    const { id } = req.params;
    const result = await ${entity.entity_name}.findById(id);

    return res.status(200).json(result);
  } catch (err) {
    console.log("${entity.entity_name} getById failed: " + err);
    const { status, message } = errorHandler(err)
    res.status(status).json({message, entity: '${entity.entity_name}'})
  }
};
    `;

    const update = `
module.exports.update = async(req, res) => {
  try {
    const { id } = req.params;
    const result = await ${entity.entity_name}.findOneAndUpdate({ _id: id}, req.body, { new: true });

    return res.status(200).json(result);
  } catch (err) {
    console.log("${entity.entity_name} update failed: " + err);
    const { status, message } = errorHandler(err)
    res.status(status).json({message, entity: '${entity.entity_name}'})
  }
};
    `;

    const remove = `
module.exports.remove = async(req, res) => {
  try {
    const { id } = req.params;

    const result = await ${entity.entity_name}.deleteOne({ _id: id});
    return res.status(200).json(result);
  } catch (err) {
    console.log("${entity.entity_name} delete failed: " + err);
    const { status, message } = errorHandler(err)
    res.status(status).json({message, entity: '${entity.entity_name}'})
  }
};
    `;

    const paginate = entity.entity_paginated ? `
module.exports.getList = async(req, res) => {
    try {
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

      const result = await ${entity.entity_name}.paginate({}, options);
      return res.status(200).json(result);
    } catch (err) {
      console.log("${entity.entity_name} list failed: " + err);
      const { status, message } = errorHandler(err)
      res.status(status).json({message, entity: '${entity.entity_name}'})
    }
};
    ` : '';

    return `const ${entity.entity_name} = require("../models/${entity.entity_name.toLocaleLowerCase()}.model");
    const errorHandler = require("../utils/errorHandler");
      ${create}
      ${read}
      ${paginate}
      ${update}
      ${remove}
      `;
    
}

export default controllerTemplate;