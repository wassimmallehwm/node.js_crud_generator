import { Field } from "../../../../types";






export const validationTemplate = (fields: Field[]) => {

    const getFieldType = (type: string) => {
        type = type.replace('Entity', 'String')
        if (type == "String" || type == "Date" || type == "Number" || type == "Boolean") {
            return type.toLowerCase() + "()"
        } else if (type == "String[]" || type == "Number[]") {
            const simpleTyple = type.slice(0, -2);
            return `array().items(Joi.${simpleTyple.toLowerCase()}())`
        }
    }

    const getValidationFields = ({ isCreation }: any) => {
        let validationFields = '{';
        fields.forEach((field: Field) => {
            validationFields += `
        ${field.field_name}: Joi.${getFieldType(field.field_type)}`
            if (field.field_default && field.field_default != "") {
                if (field.field_type == "String" || field.field_type == "Date") {
                    validationFields += field.field_default && field.field_default != "" ? `.default('${field.field_default}')` : ''
                } else {
                    validationFields += field.field_default && field.field_default != "" ? `.default(${field.field_default})` : ''
                }
            }
            if (isCreation) {
                validationFields += field.field_required ? `.required()` : ''
            }

            validationFields += ','
        })
        return validationFields + "}"
    }

    return `
const Joi = require('joi');

const updateSchema = Joi.object(${getValidationFields({ isCreation: false })})

const createSchema = Joi.object(${getValidationFields({ isCreation: true })})

module.exports = {
    createSchema,
    updateSchema
}

`
}
