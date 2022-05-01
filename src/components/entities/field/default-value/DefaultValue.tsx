import React, { useEffect, useState } from 'react'
import { Form, OverlayTrigger, Tooltip } from 'react-bootstrap'
import { Select } from '../../../shared'
import questionIcon from '../../../../assets/question.svg'

interface DefaultValueProps {
    fieldValue: string
    fieldType: string
    handleChange: any
}

const DefaultValue = ({
    fieldValue,
    fieldType,
    handleChange
}: DefaultValueProps) => {
    const [inputType, setInputType] = useState<string>("text")
    const [isArray, setIsArray] = useState<boolean>(false)
    const [tooltipText, settooltipText] = useState<string>("one,two,three")

    const initInputType = () => {
        if (fieldType == "Number") {
            setInputType("number")
        } else if (fieldType == "Date") {
            setInputType("date")
        } else {
            setInputType("text")
            if (fieldType == "String[]") {
                setIsArray(true)
                settooltipText("one,two,three")
            } else if (fieldType == "Number[]") {
                setIsArray(true)
                settooltipText("1,2,3")
            }
        }
    }


    useEffect(() => {
        initInputType()
    }, [fieldType])


    if (fieldType == "Entity" || fieldType == "Entity[]") {
        return null
    } else if (fieldType == "Boolean") {
        return (
            <Select
                style={{ width: "fit-content" }}
                options={['true', 'false']}
                name="field_default"
                value={fieldValue}
                onChange={handleChange}
            />
        )
    } else {
        return (
            <>
                <Form.Group style={{ margin: '.5rem 0', display: 'flex' }}>
                    <Form.Control
                        type={inputType}
                        style={{ width: "150px" }}
                        placeholder="Default value"
                        value={fieldValue}
                        name="field_default"
                        onChange={handleChange}
                    />
                    {
                        isArray && (
                            <OverlayTrigger
                                placement="top"
                                overlay={
                                    <Tooltip id={`help-tooltip`}>
                                        Ex: {tooltipText}
                                    </Tooltip>
                                }
                            >
                                <img alt='input help' src={questionIcon}/>
                            </OverlayTrigger>
                        )
                    }
                </Form.Group>
            </>

        )
    }

}

export default DefaultValue