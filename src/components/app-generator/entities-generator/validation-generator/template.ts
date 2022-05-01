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

    const getDefaultVal = (field: Field) => {
        const type = field.field_type
        if (type == "String" || type == "Date") {
            return `'${field.field_default}'`
        } else if (type == "String[]") {
            let defaultArrVal = ''
            field.field_default.split(',').forEach(elem => {
                defaultArrVal += `'${elem}',`
            })
            return `[${defaultArrVal.slice(0, -1)}]`
        } else if (type == "Number[]") {
            return `[${field.field_default}]`
        } else {
            return field.field_default
        }
    }

    const getValidationFields = ({ isCreation }: any) => {
        let validationFields = '{';
        fields.forEach((field: Field) => {
            validationFields += `
        ${field.field_name}: Joi.${getFieldType(field.field_type)}`
            if (field.field_default && field.field_default != "") {
                validationFields += field.field_default && field.field_default != "" ? `.default(${getDefaultVal(field)})` : ''
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
