import React from 'react'
import { Button } from 'react-bootstrap'
import { EditBtn } from './EditBtn'
import { Item } from './Item'
import pencilIcon from '../../../assets/pencil.svg';

interface EntityItemProps {
    name: string;
    index: number;
    editEntity: any;
}

const EntityItem = ({name, index, editEntity} : EntityItemProps) => {
    return (
        <Item>
            <span> {name} </span>
            <div onClick={() => editEntity(index)}>
            <img style={{filter: 'invert(35%) sepia(62%) saturate(5026%) hue-rotate(200deg) brightness(103%) contrast(106%)'}} src={pencilIcon}/>
            </div>
        </Item>
    )
}

export default EntityItem
