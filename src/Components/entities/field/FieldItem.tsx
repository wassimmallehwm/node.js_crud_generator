import React, { useState } from 'react'
import { Form } from 'react-bootstrap'
import { Field } from '../../../types'
import { EntityButton } from '../EntityButton'
import xIcon from '../../../assets/x.svg';
import initSettings from '../../../initial_settings.json';
import { Select, Switch } from '../../shared';
import { useEffect } from 'react';

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

    useEffect(() => {
        if (field.field_type && field.field_type != "") {
            const type = initSettings.field_types.find(elem => elem.type == field.field_type)
            setFieldType(type);
            setComplexType(type!.complex);
        } else {
            setFieldType(initSettings.field_types[0]);
            onFieldTypeChange("field_type", initSettings.field_types[0].type, index)
        }
    }, [])

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
                <div className="d-flex mt-2 flex-row align-items-center">
                    <div>
                        <Switch
                            name="field_required"
                            onChange={(e: any) => handleChange(e, true)}
                            checked={field.field_required}
                        />
                    </div>
                    <p className="ml-1 mb-2">Required</p>
                </div>
            </Form.Group>
            <Form.Group id="formGridCheckbox">
                <div className="d-flex mt-2 flex-row align-items-center">
                    <div>
                        <Switch
                            name="field_unique"
                            onChange={(e: any) => handleChange(e, true)}
                            checked={field.field_unique}
                        />
                    </div>
                    <p className="ml-1 mb-2">Unique</p>
                </div>
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
