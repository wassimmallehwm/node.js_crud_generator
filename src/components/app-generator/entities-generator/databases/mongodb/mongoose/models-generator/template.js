const getFieldType = (type) => {
    if(type == "Entity"){
        return "mongoose.Schema.Types.ObjectId"
    }
    if(type == "Entity[]"){
        return "[mongoose.Schema.Types.ObjectId]"
    }
    if(type == "String[]"){
        return "[String]"
    }
    if(type == "Number[]"){
        return "[Number]"
    }
    return type
}

const getDefaultVal = (field) => {
    const type = field.field_type
    if(type == "String" || type == "Date"){
        return `'${field.field_default}'`
    } else if(type == "String[]"){
        let defaultArrVal = ''
        field.field_default.split(',').forEach(elem => {
            defaultArrVal += `'${elem}',`
        })
        return `[${defaultArrVal.slice(0, -1)}]`
    } else if(type == "Number[]"){
        return `[${field.field_default}]`
    } else {
        return field.field_default
    }
}



const modelTemplate = (entity) => {
    let entities = '';
    entity.entity_fields.forEach(elem => {
        let fieldDefault = `
        default: "${getDefaultVal(elem)}",`
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