import React, { useRef, useState } from 'react'
import { Form } from 'react-bootstrap';
import { APIService } from '../../services/api.service';
import { ShadowBox, Select, MultipleSelect } from '../shared';
import { Settings } from '../../types/Settings';
import initSettings from '../../initial_settings.json';
import { useEffect } from 'react';

interface AppSettingsProps {
    settings: Settings;
    onChangeSettings: any;
    setSettings: any;
}

const AppSettings = ({
    settings,
    onChangeSettings,
    setSettings
}: AppSettingsProps) => {
    const apiService = useRef(new APIService());
    const [options, setOptions] = useState<any>([]);
    const test = [{ name: "wess", version: "1.0" }, { name: "wess", version: "2.0" }]
    const [optionsLoading, setOptionsLoading] = useState<boolean>(false);
    const [dbOrmOptions, setDbOrmOptions] = useState<string[]>([]);

    useEffect(() => {
        setSettings((prev: Settings) => ({
            ...prev,
            database_orm: initSettings.init_options.database_options[0].orm[0],
            database: initSettings.init_options.database_options[0].name
        }));
        setDbOrmOptions(initSettings.init_options.database_options[0].orm);
        //addSpecificPaq('mongoose');
    }, [])

    const handlePackSelectChange = (selected: any[]) => {
        let tab: any[] = [];
        selected.forEach(element => {
            tab.push({
                name: element.name,
                version: element.version
            })
        });
        setSettings((prev: Settings) => ({
            ...prev,
            dependencies: tab
        }))
        console.log(selected)
    }
    const handlePackInputChange = (text: string, event: any) => {
        findPacks(text)
    }

    const addSpecificPaq = (search: string) => {
        apiService.current.findNpmPacks(search).then(
            result => {
                let tab: any[] = [];
                const pack = result.data.objects.find((elem: any) => elem.package.name === search);
                if(pack){
                    setSettings((prev: Settings) => ({
                        ...prev,
                        dependencies: [...prev.dependencies, {
                            name: pack.package.name,
                            version: pack.package.version
                        }]
                    }))
                }
            },
            error => console.error(error)
        );
    }

    const findPacks = (search: string) => {
        console.log(search)
        setOptionsLoading(true);
        apiService.current.findNpmPacks(search).then(
            result => {
                let tab: any[] = [];
                result.data.objects.forEach((element: any) => {
                    tab.push({
                        name: element.package.name,
                        version: element.package.version
                    })
                });
                setOptions(tab)
            },
            error => console.error(error)
        ).finally(() => setOptionsLoading(false));
    }


    return (
        <ShadowBox>
            <h5 style={{borderBottom: '1px solid #5c5c5c', padding: '.5rem' ,color: '#5c5c5c'}} >App settings</h5>
            <div className="d-flex flex-row flex-wrap">
                <div className="p-2 col-6">
                    <Form.Label>Project Name:</Form.Label>
                    <Form.Control
                        type="text"
                        style={{ width: "100%" }}
                        placeholder="My awesome project"
                        value={settings.project_name}
                        name="project_name"
                        onChange={onChangeSettings}
                    />
                </div>
                <div className="p-2 col-6">
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
                <div className="p-2 col-6">
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
                <div className="p-2 col-6">
                    <Form.Group style={{ width: "100%" }}>
                        <Form.Label>Npm packages</Form.Label>
                        <MultipleSelect
                            isLoading={optionsLoading}
                            onChange={handlePackSelectChange}
                            onInputChange={handlePackInputChange}
                            options={options}
                            selected={settings.dependencies}
                            placeholder="Search for a npm package..."
                            labelKey={(option: any) => `${option.name} (${option.version})`}
                            renderMenuItemChildren={(option: any) => (
                                <span>{option.name} ({option.version})</span>
                            )}
                        />
                    </Form.Group>
                </div>
            </div>
        </ShadowBox>
    )
}

export default AppSettings
