import { useState } from 'react'
import { ShadowBox } from '../shared'
import plusIcon from '../../assets/plus.svg';
import { EntityButton } from './EntityButton';
import { Entity, Field } from '../../types';
import initSettings from '../../initial_settings.json';
import EntityModal from './entity-modal/EntityModal';
import EntityItem from './entity-item/EntityItem';
import Confirmation from '../shared/Confirmation/Confirmation';
import { Toast } from '../../utils/toast';

interface EntitiesProps {
    entities: Entity[];
    setEntities: any;
    entitiesLabels: string[];
}

const Entities = ({
    entities,
    setEntities,
    entitiesLabels
}: EntitiesProps) => {
    const [currentEntity, setCurrentEntity] = useState<Entity>();
    const [showModal, setShowModal] = useState<boolean>(false);
    const [editMode, setEditMode] = useState<boolean>(false);
    const [deleteModal, setDeleteModal] = useState<boolean>(false);
    const [deleteEntityId, setDeleteEntityId] = useState<number>(0);

    const closeModal = () => {
        setShowModal(false);
        setEditMode(false);
    }
    const openModal = () => {
        setShowModal(true);
    }

    const newEntity = () => {
        setCurrentEntity(new Entity(initSettings.init_entity))
        openModal()
    }

    const checkIfDuplicateExists = (arr: any[] | undefined) => {
        let error = false;
        let alreadySeen: any[] = [];
        arr?.forEach((str: any) => alreadySeen[str.field_name] ? error = true : alreadySeen[str.field_name] = true);
        return error;
    }

    const onEntitySave = () => {
        let error = false;
        let i = 0;
        while (!error && 
            currentEntity?.entity_fields.length && 
            currentEntity?.entity_fields.length > 0 &&
            i < currentEntity?.entity_fields.length) {
            if(currentEntity.entity_fields[i].field_name.trim() === "")
                error = true
            else i++;
        }
        if(error){
            Toast("WARNING", "Field name is required !")
        } else if(checkIfDuplicateExists(currentEntity?.entity_fields)) {
            Toast("WARNING", "Field name is duplicated !")
        }
        else {
            if(editMode){
                setEntities((prev: Entity[]) => (prev.map((elem, i) => {
                    if(elem.entity_id === currentEntity?.entity_id){
                        return currentEntity;
                    } else {
                        return elem
                    }
                })))
            } else {
                setEntities([...entities, currentEntity])
            }
            setCurrentEntity(new Entity(initSettings.init_entity));
            closeModal()
        }
    }

    const editEntity = (id: number) => {
        setCurrentEntity(entities.find(elem => elem.entity_id == id))
        setEditMode(true)
        openModal()
    }

    const deleteEntity = (id: number) => {
        setDeleteEntityId(id)
        setDeleteModal(true)
    }

    const onDelete = () => {
        const deleteEntityElem = entities.find(elem => elem.entity_id === deleteEntityId);
        const usedRefEntity = entities.find(elem => JSON.stringify(elem.entity_fields).includes(`"field_ref":"${deleteEntityElem?.entity_name}"`));
        if(usedRefEntity){
            Toast("WARNING", deleteEntityElem?.entity_name + " is used in entity " + usedRefEntity.entity_name)
        } else {
            setEntities((prev: Entity[]) => (prev.filter(elem => elem.entity_id != deleteEntityId)))
        }
        setDeleteModal(false)
        setDeleteEntityId(0)
    }

    return (
        <ShadowBox autoFlow>
            <h5 style={{ borderBottom: '1px solid #5c5c5c', padding: '.5rem', color: '#5c5c5c' }} >Entities</h5>
            <EntityButton aria-label="add entity" absolute onClick={newEntity}>
                <img alt='add entity' src={plusIcon} />
            </EntityButton>
            <div style={{overflowY: 'auto'}} >
            {entities && entities.map(
                (entity, i) => {
                    if(entity)
                    return (<EntityItem editEntity={editEntity} 
                        name={entity.entity_name} id={entity.entity_id} 
                        key={entity.entity_id} deleteEntity={deleteEntity} />)
                }
            )}
            </div>

            <EntityModal entity={currentEntity!} show={showModal} save={onEntitySave}
                setEntity={setCurrentEntity} closeModal={closeModal} entitiesLabels={entitiesLabels} />
            <Confirmation show={deleteModal} save={onDelete} closeModal={() => setDeleteModal(false)}
                type="DELETE" text="Are you sur you want to delete this entity ?" />
        </ShadowBox>
    )
}

export default Entities
