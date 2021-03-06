import { useState } from 'react'
import { Form } from 'react-bootstrap'
import { Field } from '../../../types'
import { EntityButton } from '../EntityButton'
import xIcon from '../../../assets/x.svg';
import upIcon from '../../../assets/up.svg';
import downIcon from '../../../assets/down.svg';
import initSettings from '../../../initial_settings.json';
import { Select, Switch } from '../../shared';
import { useEffect } from 'react';
import { useSelector } from 'react-redux';
import DefaultValue from './default-value/DefaultValue';

interface FieldItemProps {
    field: Field;
    index: number;
    entityName: string;
    onFieldChange: any;
    onFieldRemove: any;
    onFieldTypeChange: any;
    toggleCollapse: any;
}

const FieldItem = ({
    field,
    index,
    entityName,
    onFieldChange,
    onFieldRemove,
    onFieldTypeChange,
    toggleCollapse
}: FieldItemProps) => {
    const entitiesLabels = useSelector((state: any) => state.entitiesLabels.value)

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
        <div style={{ margin: '1rem 0' }}>
            <div className="d-flex" style={{
                alignItems: 'center',
                justifyContent: 'space-between',
                marginBottom: '-1rem',
                flexWrap: 'wrap'
            }}>
                <Form.Group style={{ margin: '.5rem 0', width: "calc(100% - 80px)" }}>
                    <Form.Control
                        type="text"
                        style={{ width: "100%", border: 'none', boxShadow: 'none' }}
                        placeholder="Field name"
                        value={field.field_name}
                        name="field_name"
                        onChange={handleChange}
                    />
                </Form.Group>
                <EntityButton aria-label="collapse field" className="mx-1" onClick={() => toggleCollapse(index)}>
                    <img alt='collapse field' style={{ width: '12px' }} src={field.collapsed ? upIcon : downIcon} />
                </EntityButton>
                <EntityButton aria-label="remove field" className="mx-1" onClick={() => onFieldRemove(index)} color="#dc3545" hover="#d50014">
                    <img alt='remove field' src={xIcon}
                        style={{ filter: 'invert(100%) sepia(0%) saturate(7500%) hue-rotate(72deg) brightness(99%) contrast(99%)' }}
                    />
                </EntityButton>
            </div>
            <hr />
            {
                field.collapsed ? (
                    <div className="d-flex" style={{
                        alignItems: 'center',
                        justifyContent: 'space-around',
                        flexWrap: 'wrap'
                    }}>
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
                        {
                            field.field_type && field.field_type !== "" && (
                                <DefaultValue fieldValue={field.field_default} 
                                fieldType={field.field_type} handleChange={handleChange} />
                            )
                        }
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
                    </div>
                ) : null
            }
        </div>
    )
}

export default FieldItem
