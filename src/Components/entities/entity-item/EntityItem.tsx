import React from 'react'
import { Item } from './Item'
import pencilIcon from '../../../assets/pencil.svg';
import xIcon from '../../../assets/x.svg';
import './dropdown.css';


interface EntityItemProps {
    name: string;
    id: number;
    editEntity: any;
    deleteEntity: any;
}

const EntityItem = ({ name, id, editEntity, deleteEntity }: EntityItemProps) => {

    return (
        <Item>
            <span> {name} </span>
            <div style={{display: 'flex'}} >
                <div style={{ display: 'flex', margin: '0 3px', padding: '4px' }} onClick={() => editEntity(id)}>
                    <img className="edit-btn" src={pencilIcon} />
                </div>
                <div style={{ display: 'flex', margin: '0 3px' }} onClick={() => deleteEntity(id)}>
                    <img className="delete-btn" src={xIcon} />
                </div>
            </div>
        </Item>
    )
}

export default EntityItem
