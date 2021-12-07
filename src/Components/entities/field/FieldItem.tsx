import React, { useState } from 'react'
import { Form } from 'react-bootstrap'
import { Field } from '../../../types/Field'
import { EntityButton } from '../EntityButton'
import xIcon from '../../../assets/x.svg';
import initSettings from '../../../initial_settings.json';
import { Select } from '../../shared';

interface FieldItemProps {
    field: Field;
    index: number;
    entityName: string;
    onFieldChange: any;
    onFieldRemove: any;
    onFieldTypeChange: any;
    entitiesLabels: string[];
}

const FieldItem = ({
    field,
    index,
    entityName,
    onFieldChange,
    onFieldRemove,
    onFieldTypeChange,
    entitiesLabels
}: FieldItemProps) => {

    const [fieldType, setFieldType] = useState<any>();
    const [complexType, setComplexType] = useState<boolean>(false);

    const handleChange = (e: any, checkbox = false) => {
        onFieldChange(e, index, checkbox)
    }

    const handleTypeChange = (e: any) => {
        const type: any = JSON.parse(e.target.value);
        onFieldTypeChange("field_type", type.type, index)
        setFieldType(type);
        setComplexType(type.complex);
    }

    const handleRefChange = (e: any) => {
        onFieldTypeChange("field_ref", e.target.value, index)
    }

    return (
        <div className="d-flex" style={{
            alignItems: 'center',
            justifyContent: 'space-between',
            margin: '1rem 0',
            flexWrap: 'wrap'
        }}>
            <Form.Group style={{ margin: '.5rem 0' }}>
                <Form.Control
                    type="text"
                    style={{ width: "150px" }}
                    placeholder="Field name"
                    value={field.field_name}
                    name="field_name"
                    onChange={handleChange}
                />
            </Form.Group>
            <Form.Group style={{ margin: '.5rem 0' }}>
                <Form.Control
                    type="text"
                    style={{ width: "150px" }}
                    placeholder="Default value"
                    value={field.field_default}
                    name="field_default"
                    onChange={handleChange}
                />
            </Form.Group>
            <Select
                complex
                style={{ width: "fit-content" }}
                options={initSettings.field_types}
                name="field_type"
                displayAttr="label"
                value={JSON.stringify(fieldType)}
                onChange={handleTypeChange}
            />
            {complexType ? (
                <Select
                style={{ width: "fit-content" }}
                options={entitiesLabels.filter((elem: string) => elem != entityName)}
                name="field_ref"
                value={field.field_ref}
                onChange={handleRefChange}
            />
            ) : null}
            <Form.Group id="formGridCheckbox">
                <Form.Check name="field_required" checked={field.field_required}
                    onChange={(e: any) => handleChange(e, true)} type="checkbox" label="Required" />
            </Form.Group>
            <Form.Group id="formGridCheckbox">
                <Form.Check name="field_unique" checked={field.field_unique}
                    onChange={(e: any) => handleChange(e, true)} type="checkbox" label="Unique" />
            </Form.Group>
            <EntityButton className="mx-1" onClick={() => onFieldRemove(index)} color="#dc3545" hover="#d50014">
                <img src={xIcon}
                    style={{ filter: 'invert(100%) sepia(0%) saturate(7500%) hue-rotate(72deg) brightness(99%) contrast(99%)' }}
                />
            </EntityButton>
        </div>
    )
}

export default FieldItem
