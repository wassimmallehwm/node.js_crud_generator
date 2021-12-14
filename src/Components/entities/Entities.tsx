import React, { useState } from 'react'
import { ShadowBox } from '../shared'
import plusIcon from '../../assets/plus.svg';
import { EntityButton } from './EntityButton';
import { Entity } from '../../types/Entity';
import initSettings from '../../initial_settings.json';
import EntityModal from './entity-modal/EntityModal';
import EntityItem from './entity-item/EntityItem';

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

    const onEntitySave = () => {
        if(editMode){
            setEntities((prev: Entity[]) => (prev.map((elem, i) => {
                if(elem.entity_id === currentEntity?.entity_id){
                    return currentEntity;
                }
            })))
        } else {
            setEntities([...entities, currentEntity])
        }
        setCurrentEntity(new Entity(initSettings.init_entity));
        closeModal()
        setTimeout(() => {
            console.log(entities)
        }, 1000)
    }

    const editEntity = (index: number) => {
        setCurrentEntity(entities[index])
        setEditMode(true)
        openModal()
    }

    return (
        <ShadowBox>
            <h5 style={{ borderBottom: '1px solid #5c5c5c', padding: '.5rem', color: '#5c5c5c' }} >Entities</h5>
            <EntityButton absolute onClick={newEntity}>
                <img src={plusIcon} />
            </EntityButton>
            <div style={{overflowY: 'auto'}} >
            {entities && entities.map(
                (entity, i) => (
                    <EntityItem editEntity={editEntity} name={entity.entity_name} index={i} key={i}/>
                )
            )}
            </div>

            <EntityModal entity={currentEntity!} show={showModal} save={onEntitySave}
                setEntity={setCurrentEntity} closeModal={closeModal} entitiesLabels={entitiesLabels} />
        </ShadowBox>
    )
}

export default Entities
