import { useRef, useEffect, useState } from 'react'
import { Button, Form } from 'react-bootstrap';
import { APIService } from '../../services/api.service';
import { ShadowBox, Select, MultipleSelect } from '../shared';
import { Dependency, Settings } from '../../types';
import dbIcon from '../../assets/db.svg';
import './app-settings.css';
import DatabaseSettings from './database-settings/DatabaseSettings';
import { useDispatch, useSelector } from 'react-redux';
import { setSettings } from '../../global/settings';

const AppSettings = () => {

    const settings = useSelector((state: any) => state.settings.value)
    const dispatch = useDispatch()

    const onSetSettings = (payload: Settings) => {
        dispatch(setSettings(payload))
    }

    const onChangeSettings = (e: any) => {
        onSetSettings({ ...settings, [e.target.name]: e.target.value });
    }

    const apiService = useRef(new APIService());
    const [options, setOptions] = useState<any>([]);
    const [optionsLoading, setOptionsLoading] = useState<boolean>(false);
    const [dbModal, setdbModal] = useState<boolean>(false);

    const openDbModal = () => {
        setdbModal(true)
    }

    const closeDbModal = () => {
        setdbModal(false)
    }

    const handlePackSelectChange = (selected: any[]) => {
        let tab: Dependency[] = [];
        selected.forEach(element => {
            tab.push(new Dependency(element))
        });
        onSetSettings({
            ...settings,
            dependencies: tab
        })
    }
    const handlePackInputChange = (text: string, event: any) => {
        findPacks(text)
    }

    const addSpecificPaq = (search: string) => {
        apiService.current.findNpmPacks(search).then(
            result => {
                let tab: any[] = [];
                const pack = result.data.objects.find((elem: any) => elem.package.name === search);
                if (pack) {
                    onSetSettings({
                        ...settings,
                        dependencies: [...settings.dependencies, {
                            name: pack.package.name,
                            version: pack.package.version
                        }]
                    })
                }
            },
            error => console.error(error)
        );
    }

    const findPacks = (search: string) => {
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
        <>
            <ShadowBox>
                <h5 style={{ borderBottom: '1px solid #5c5c5c', padding: '.5rem', color: '#5c5c5c' }} >App settings</h5>
                <div className="d-flex flex-row flex-wrap">
                    <div className="p-2 col-sm-6 col-xs-12">
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
                    <div className="p-2 col-sm-6 col-xs-12">
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
                    <div className="p-2 col-sm-4 col-xs-6">
                        <Button className="mr-2 outline d-flex db-btn" onClick={openDbModal} variant="outline-primary" style={{ boxShadow: '1px 1px 4px 1px rgb(0 0 0 / 20%)' }} >
                            <img className='db-icon my-auto mx-1' alt='database' src={dbIcon} />
                            Database
                        </Button>
                    </div>
                </div>
            </ShadowBox>
            <DatabaseSettings show={dbModal} closeModal={closeDbModal}/>
        </>
    )
}

export default AppSettings
