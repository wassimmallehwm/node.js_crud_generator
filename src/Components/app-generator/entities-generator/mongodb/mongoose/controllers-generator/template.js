
const controllerTemplate = (entity) => {
    const create = `
module.exports.create = async(req, res) => {
  try {
    const item = new ${entity.entity_entity_name}(req.body);

    const result = await item.save();
    return res.status(200).json(result);
  } catch (err) {
    console.log("${entity.entity_entity_name} creation failed: " + err);
    return res.status(500).json({
      message: "Error while trying to create ${entity.entity_entity_name}",
    });
  }
};
    `;
    const read = `
module.exports.getAll = async(req, res) => {
  try {
    let query = req.query || {};
    const result = await ${entity.entity_entity_name}.find(query);

    return res.status(200).json(result);
  } catch (err) {
    console.log("${entity.entity_entity_name} getAll failed: " + err);
    return res.status(500).json({
      message: "Error while trying to get ${entity.entity_entity_name}",
    });
  }
};

module.exports.getById = async(req, res) => {
  try {
    const { id } = req.params;
    const result = await ${entity.entity_entity_name}.findById(id);

    return res.status(200).json(result);
  } catch (err) {
    console.log("${entity.entity_entity_name} getById failed: " + err);
    return res.status(500).json({
      message: "Error while trying to get ${entity.entity_entity_name}",
    });
  }
};
    `;

    const update = `
module.exports.update = async(req, res) => {
  try {
    const { id } = req.params;
    const result = await ${entity.entity_entity_name}.findOneAndUpdate({ _id: id}, req.body, { new: true });

    return res.status(200).json(result);
  } catch (err) {
    console.log("${entity.entity_entity_name} update failed: " + err);
    return res.status(500).json({
      message: "Error while trying to update ${entity.entity_entity_name}",
    });
  }
};
    `;

    const remove = `
module.exports.delete = async(req, res) => {
  try {
    const { id } = req.params;

    const result = await ${entity.entity_entity_name}.deleteOne({ _id: id});
    return res.status(200).json(result);
  } catch (err) {
    console.log("${entity.entity_name} delete failed: " + err);
    return res.status(500).json({
      message: "Error while trying to delete ${entity.entity_name}",
    });
  }
};
    `;

    const paginate = entity.entity_paginated ? `
module.exports.getList = async(req, res) => {
    const { page = 1, limit = 20, sortField, sortDir } = req.query;
    const options = {
        page: parseInt(page, 10),
        limit: parseInt(limit, 10),
        sort: {}

    };

    if (sortField && sortDir) {
        options.sort = {
            [sortField]: sortDir
        }
    }

    return res.status(200).json(result);
    ${entity.entity_entity_name}.paginate({}, options)
    .then(
        result => {
            res.status(200).json(result);
        }
    )
    .catch(
        error => {
            return res.status(500).json({
                message: "Error while trying to get ${entity.entity_entity_name}",
            });
        }
    );
};
    ` : '';

    return `const ${entity.entity_name} = require("../models/${entity.entity_name.toLocaleLowerCase()}");
      ${create}
      ${read}
      ${paginate}
      ${update}
      ${remove}
      `;
    
}

export default controllerTemplate;