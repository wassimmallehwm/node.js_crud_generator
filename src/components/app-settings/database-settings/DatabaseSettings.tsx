import React, { useEffect, useState } from 'react'
import { Button, Form, Modal, Row } from 'react-bootstrap'
import { DbConfig, Settings } from '../../../types';
import { Select, Switch } from '../../shared'
import initSettings from '../../../initial_settings.json';
import { useDispatch, useSelector } from 'react-redux';
import { setSettings } from '../../../global/settings';

interface DatabaseSettingsProps {
    show: any;
    closeModal: any;
}

const DatabaseSettings = ({
    show,
    closeModal
}: DatabaseSettingsProps) => {

    const settings: Settings = useSelector((state: any) => state.settings.value)
    const dispatch = useDispatch()

    const onSetSettings = (payload: Settings) => {
        dispatch(setSettings(payload))
    }
    const onChangeSettings = (e: any) => {
        onSetSettings({ ...settings, [e.target.name]: e.target.value });
    }

    const [dbOrmOptions, setDbOrmOptions] = useState<string[]>([]);
    const [dbConfig, setDbConfig] = useState<DbConfig>(settings.database_config);

    const onDbConfigSwitchChange = (e: any) => {
        setDbConfig((prev: any) => ({ ...prev, [e.target.name]: !prev[e.target.name] }))
    }

    const onDbConfigChange = (e: any) => {
        setDbConfig((prev: any) => ({ ...prev, [e.target.name]: e.target.value }))
    }

    useEffect(() => {
        onSetSettings({
            ...settings,
            database_orm: initSettings.init_options.database_options[0].orm[0],
            database: initSettings.init_options.database_options[0].name
        })
        setDbOrmOptions(initSettings.init_options.database_options[0].orm);
    }, [])

    const invalidConfig = () => {
        return (dbConfig.remote && (dbConfig.host == "" || dbConfig.port == "")) ||
            (dbConfig.auth && (dbConfig.user == "" || dbConfig.pwd == ""))
    }


    const save = () => {
        if (!invalidConfig()) {
            let dbConfigData: DbConfig = new DbConfig(initSettings.init_db_config)
            if (dbConfig.auth && dbConfig.user !== "" && dbConfig.pwd !== "") {
                dbConfigData.auth = dbConfig.auth
                dbConfigData.user = dbConfig.user
                dbConfigData.pwd = dbConfig.pwd
            }
            if (dbConfig.remote && dbConfig.host !== "" && dbConfig.port !== "") {
                dbConfigData.remote = dbConfig.remote
                dbConfigData.host = dbConfig.host
                dbConfigData.port = dbConfig.port
            }
            setDbConfig(dbConfigData)
            onSetSettings({ ...settings, database_config: dbConfigData })
            closeModal()
        }
    }

    const onCloseModal = () => {
        setDbConfig(settings.database_config)
        closeModal()
    }

    return (
        <Modal
            show={show}
            onHide={onCloseModal}
            size="xl"
            aria-labelledby="contained-modal-title-vcenter"
            centered
        >
            <Modal.Header closeButton>
                <Modal.Title id="contained-modal-title-vcenter">
                    Database settings
                </Modal.Title>
            </Modal.Header>
            <Modal.Body>
                <div className='px-4' style={{ maxHeight: '70vh', overflowY: 'auto' }}>
                    <Row style={{ alignItems: 'center' }} >
                        <div className="p-2 col-sm-6 col-xs-12">
                            <Form.Group style={{ minWidth: "150px" }}>
                                <Form.Label>Database</Form.Label>
                                <Select
                                    options={initSettings.init_options.database_options}
                                    name="database"
                                    displayAttr="name"
                                    value={settings.database}
                                    onChange={onChangeSettings}
                                />
                            </Form.Group>
                        </div>
                        <div className="p-2 col-sm-6 col-xs-12">
                            <Form.Group style={{ minWidth: "150px" }}>
                                <Form.Label>Database ORM/ODM</Form.Label>
                                <Select
                                    options={dbOrmOptions}
                                    name="database_orm"
                                    value={settings.database_orm}
                                    onChange={onChangeSettings}
                                />
                            </Form.Group>
                        </div>
                    </Row>
                    <div className='row'>
                        <div className="col-6">
                            <Form.Group id="formGridCheckbox">
                                <div className="d-flex mt-2 flex-row align-items-center">
                                    <div>
                                        <Switch
                                            name="remote"
                                            onChange={onDbConfigSwitchChange}
                                            checked={dbConfig.remote}
                                            label="Remote"
                                        />
                                    </div>
                                    <p className="ml-1 mb-2">Remote</p>
                                </div>
                            </Form.Group>
                        </div>
                        <div className="col-6">
                            <Form.Group id="formGridCheckbox">
                                <div className="d-flex mt-2 flex-row align-items-center">
                                    <div>
                                        <Switch
                                            name="auth"
                                            onChange={onDbConfigSwitchChange}
                                            checked={dbConfig.auth}
                                            label="Authenticated"
                                        />
                                    </div>
                                    <p className="ml-1 mb-2">Authenticated</p>
                                </div>

                                {/* <Form.Check name="entity_paginated" checked={entity.entity_paginated}
                                onChange={handleCheckBoxChange} type="checkbox" label="Paginated" /> */}
                            </Form.Group>
                        </div>
                    </div>
                    {
                        dbConfig.remote ? (
                            <Row style={{ alignItems: 'center' }} >
                                <div className="p-2 col-sm-6 col-xs-12">
                                    <Form.Group style={{ minWidth: "150px" }}>
                                        <Form.Label>Host</Form.Label>
                                        <Form.Control
                                            type="text"
                                            style={{ width: "100%" }}
                                            placeholder="Database server host"
                                            value={dbConfig.host}
                                            name="host"
                                            onChange={onDbConfigChange}
                                        />
                                    </Form.Group>
                                </div>
                                <div className="p-2 col-sm-6 col-xs-12">
                                    <Form.Group style={{ minWidth: "150px" }}>
                                        <Form.Label>Port</Form.Label>
                                        <Form.Control
                                            type="text"
                                            style={{ width: "100%" }}
                                            placeholder="Database server port"
                                            value={dbConfig.port}
                                            name="port"
                                            onChange={onDbConfigChange}
                                        />
                                    </Form.Group>
                                </div>
                            </Row>
                        ) : null
                    }
                    {
                        dbConfig.auth ? (
                            <Row style={{ alignItems: 'center' }} >
                                <div className="p-2 col-sm-6 col-xs-12">
                                    <Form.Group style={{ minWidth: "150px" }}>
                                        <Form.Label>Username</Form.Label>
                                        <Form.Control
                                            type="text"
                                            style={{ width: "100%" }}
                                            placeholder="Database username"
                                            value={dbConfig.user}
                                            name="user"
                                            onChange={onDbConfigChange}
                                        />
                                    </Form.Group>
                                </div>
                                <div className="p-2 col-sm-6 col-xs-12">
                                    <Form.Group style={{ minWidth: "150px" }}>
                                        <Form.Label>Password</Form.Label>
                                        <Form.Control
                                            type="text"
                                            style={{ width: "100%" }}
                                            placeholder="Database password"
                                            value={dbConfig.pwd}
                                            name="pwd"
                                            onChange={onDbConfigChange}
                                        />
                                    </Form.Group>
                                </div>
                            </Row>
                        ) : null
                    }
                </div>
            </Modal.Body>
            <Modal.Footer>
                <Button variant="secondary" onClick={onCloseModal}>
                    Cancel
                </Button>
                <Button disabled={invalidConfig()}
                    variant="primary" onClick={save}>
                    Save
                </Button>
            </Modal.Footer>
        </Modal >
    )
}

export default DatabaseSettings