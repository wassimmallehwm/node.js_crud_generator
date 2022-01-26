import { Button, Form, Modal, Row } from 'react-bootstrap'
import { Entity, Field } from '../../../types'
import plusIcon from '../../../assets/plus.svg';
import { EntityButton } from '../EntityButton';
import FieldItem from '../field/FieldItem';
import initSettings from '../../../initial_settings.json'
import { Switch } from '../../shared';

interface EntityModalProps {
    show: boolean;
    save: any;
    closeModal: any;
    entity: Entity;
    setEntity: any;
    entitiesLabels: string[];
}

const EntityModal = ({
    show,
    save,
    closeModal,
    entity,
    setEntity,
    entitiesLabels
}: EntityModalProps) => {

    const handleChange = (e: any) => {
        setEntity((prev: any) => ({ ...prev, [e.target.name]: e.target.value }))
    }
    const handleCheckBoxChange = (e: any) => {
        setEntity((prev: any) => ({ ...prev, [e.target.name]: !prev[e.target.name] }))
    }

    const onFieldChange = (e: any, index: number, checkbox?: boolean) => {
        setEntity((prev: Entity) => {
            return {
                ...prev,
                entity_fields: prev.entity_fields.map((field: any, i) => {
                    if (index == i) {
                        return {
                            ...field,
                            [e.target.name]: checkbox ? !field[e.target.name] : e.target.value
                        }
                    }
                    return field
                })
            }
        })
    }

    const onFieldTypeChange = (typeOrRef: string, value: string, index: number) => {
        setEntity((prev: Entity) => {
            return {
                ...prev,
                entity_fields: prev.entity_fields.map((field: any, i) => {
                    if (index == i) {
                        return {
                            ...field,
                            [typeOrRef]: value
                        }
                    }
                    return field
                })
            }
        })
    }

    const onFieldRemove = (index: number) => {
        setEntity((prev: Entity) => ({
            ...prev,
            entity_fields: prev.entity_fields.filter((elem: any, i) => i !== index)
        }))
    }

    const newField = () => {
        setEntity((prev: Entity) => ({
            ...prev,
            entity_fields: [...prev.entity_fields, new Field(initSettings.init_field)]
        }))
    }

    const toggleCollapse = (index: number) => {
        setEntity((prev: Entity) => {
            return {
                ...prev,
                entity_fields: prev.entity_fields.map((field: Field, i) => {
                    if (index == i) {
                        return {
                            ...field,
                            collapsed: !field.collapsed
                        }
                    }
                    return field
                })
            }
        })
    }

    return entity ? (
        <Modal
            show={show}
            onHide={closeModal}
            size="xl"
            aria-labelledby="contained-modal-title-vcenter"
            centered
        >
            <Modal.Header closeButton>
                <Modal.Title id="contained-modal-title-vcenter">
                    Entity settings
                </Modal.Title>
            </Modal.Header>
            <Modal.Body>
                <Row style={{ alignItems: 'center' }} >
                    <div className="px-4 py-2 col-sm-4 col-xs-12">
                        {/* <Form.Label>Entity name:</Form.Label> */}
                        <Form.Control
                            type="text"
                            style={{ width: "100%" }}
                            placeholder="Entity name"
                            value={entity.entity_name}
                            name="entity_name"
                            onChange={handleChange}
                        />
                        {/* <Form.Text className="text-muted">Ex: product</Form.Text> */}
                    </div>
                    <div className='px-4 py-2 col-sm-8 col-xs-12'>
                        <div className='row'>
                            <div className="col-6">
                                <Form.Group id="formGridCheckbox">
                                    {/* <Form.Check name="entity_timestamp" checked={entity.entity_timestamp}
                                onChange={handleCheckBoxChange} type="checkbox" label="Timestamp" /> */}
                                    <div className="d-flex mt-2 flex-row align-items-center">
                                        <div>
                                            <Switch
                                                name="entity_timestamp"
                                                onChange={handleCheckBoxChange}
                                                checked={entity.entity_timestamp}
                                                label="Timestamp"
                                            />
                                        </div>
                                        <p className="ml-1 mb-2">Timestamp</p>
                                    </div>
                                </Form.Group>
                            </div>
                            <div className="col-6">
                                <Form.Group id="formGridCheckbox">
                                    <div className="d-flex mt-2 flex-row align-items-center">
                                        <div>
                                            <Switch
                                                name="entity_paginated"
                                                onChange={handleCheckBoxChange}
                                                checked={entity.entity_paginated}
                                                label="Paginated"
                                            />
                                        </div>
                                        <p className="ml-1 mb-2">Paginated</p>
                                    </div>

                                    {/* <Form.Check name="entity_paginated" checked={entity.entity_paginated}
                                onChange={handleCheckBoxChange} type="checkbox" label="Paginated" /> */}
                                </Form.Group>
                            </div>
                        </div>
                    </div>
                </Row>
                <div style={{ position: 'relative' }} >
                    <h5 style={{ borderBottom: '1px solid #5c5c5c', padding: '.5rem', color: '#5c5c5c' }}>Fields</h5>
                    <EntityButton aria-label="add field" absolute top="5" right="20" onClick={newField}>
                        <img alt='add field' src={plusIcon} />
                    </EntityButton>
                </div>
                <div style={{ maxHeight: '30vh', overflowY: 'auto' }}>
                    {entity.entity_fields && entity.entity_fields.map(
                        (field, i) => (
                            <FieldItem key={i} index={i} field={field} onFieldTypeChange={onFieldTypeChange}
                                onFieldChange={onFieldChange} onFieldRemove={onFieldRemove} toggleCollapse={toggleCollapse}
                                entitiesLabels={entitiesLabels} entityName={entity.entity_name}
                            />
                        )
                    )}
                </div>
            </Modal.Body>
            <Modal.Footer>
                <Button variant="secondary" onClick={closeModal}>
                    Cancel
                </Button>
                <Button disabled={!entity.entity_name || entity.entity_fields.length <= 0}
                    variant="primary" onClick={save}>
                    Save Changes
                </Button>
            </Modal.Footer>
        </Modal>
    ) : null
}

export default EntityModal
