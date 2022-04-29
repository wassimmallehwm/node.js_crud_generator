const getFieldType = (type) => {
    if(type == "Entity"){
        return "mongoose.Schema.Types.ObjectId"
    }
    if(type == "Entity[]"){
        return "[mongoose.Schema.Types.ObjectId]"
    }
    return type
}


const modelTemplate = (entity) => {
    let entities = '';
    entity.entity_fields.forEach(elem => {
        let fieldDefault = '';
        if(elem.field_default && elem.field_default != ""){
            if(elem.field_type == "String"){
                fieldDefault = `
        default: "${elem.field_default}",`
            } else {
                fieldDefault = `
        default: ${elem.field_default},`
            }
        }
        let fieldRef = elem.field_ref && elem.field_ref != "" ?`
        ref: "${elem.field_ref}",` : '';
        entities += `${elem.field_name}: {
        type: ${getFieldType(elem.field_type)},
        required: ${elem.field_required},
        unique: ${elem.field_unique},${fieldDefault}${fieldRef}
    },
    `
    })

    return `const mongoose = require('mongoose');
${entity.entity_paginated ? "const mongoosePaginate = require('mongoose-paginate');" : ""}

const ${entity.entity_name}Schema = new mongoose.Schema({
    ${entities}
}, {
    timestamps: ${entity.entity_timestamp}
});

${entity.entity_paginated ? entity.entity_name + "Schema.plugin(mongoosePaginate);" : ""}
module.exports = mongoose.model('${entity.entity_name}', ${entity.entity_name}Schema);`
}

export default modelTemplate;