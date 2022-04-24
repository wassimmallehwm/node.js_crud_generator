
const controllerTemplate = (entity) => {
  const entityName = entity.entity_name.charAt(0).toUpperCase() + entity.entity_name.toLocaleLowerCase().slice(1)
    const create = `
module.exports.create = async(req, res) => {
  try {
    const item = new ${entityName}(req.body);

    const result = await item.save();
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
    let query = req.query || {};
    const result = await ${entityName}.find(query);

    return res.status(200).json(result);
  } catch (err) {
    console.error("${entityName} getAll failed: " + err);
    const { status, message } = errorHandler(err)
    res.status(status).json({message, entity: '${entityName}'})
  }
};

module.exports.getById = async(req, res) => {
  try {
    const { id } = req.params;
    const result = await ${entityName}.findById(id);

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
    const { id } = req.params;
    const result = await ${entityName}.findOneAndUpdate({ _id: id}, req.body, { new: true });

    return res.status(200).json(result);
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
    const { id } = req.params;

    const result = await ${entityName}.deleteOne({ _id: id});
    return res.status(200).json(result);
  } catch (err) {
    console.error("${entityName} delete failed: " + err);
    const { status, message } = errorHandler(err)
    res.status(status).json({message, entity: '${entityName}'})
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

      const result = await ${entityName}.paginate({}, options);
      return res.status(200).json(result);
    } catch (err) {
      console.error("${entityName} list failed: " + err);
      const { status, message } = errorHandler(err)
      res.status(status).json({message, entity: '${entityName}'})
    }
};
    ` : '';

    return `const ${entityName} = require("./${entity.entity_name.toLocaleLowerCase()}.model");
    const errorHandler = require("../../utils/errorHandler");
      ${create}
      ${read}
      ${paginate}
      ${update}
      ${remove}
      `;
    
}

export default controllerTemplate;