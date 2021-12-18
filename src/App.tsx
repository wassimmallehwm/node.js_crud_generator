import React, { useEffect, useState } from 'react';
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import 'react-bootstrap-typeahead/css/Typeahead.css';
import { Button, Row } from 'react-bootstrap';
import initSettings from './initial_settings.json';
import { Entity, Settings } from './types';
import AppSettings from './Components/app-settings/AppSettings';
import Entities from './Components/entities/Entities';
import { AppGenerator } from './Components/app-generator/AppGenerator';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

toast.configure()

function App() {
  const [settings, setSettings] = useState<Settings>(new Settings(initSettings.init_settings));
  const [entities, setEntities] = useState<Entity[]>([]);
  const [entitiesLabels, setEntitiesLabels] = useState<string[]>([]);


  const onChangeSettings = (e: any) => {
    console.log(e.target.value)
    setSettings({ ...settings, [e.target.name]: e.target.value });
  }

  useEffect(() => {
    const savedEntities = localStorage.getItem('entities');
    const savedSettings = localStorage.getItem('settings');
    if(savedEntities && savedEntities != ''){
      setEntities(JSON.parse(savedEntities))
    }
    if(savedSettings && savedSettings != ''){
      setSettings(JSON.parse(savedSettings))
    }
  }, [])

  useEffect(() => {
    let res: string[] = [];
    for (let entity of entities) {
      if(entity && entity.entity_name){
        res.push(entity.entity_name)
      }
    }
    setEntitiesLabels(res);
  }, [entities])

  useEffect(() => {
    localStorage.setItem('entities', JSON.stringify(entities))
    localStorage.setItem('settings', JSON.stringify(settings))
  }, [entities, settings])

  const invalidAction = () => {
    return settings.project_name.trim() == "";
  }

  const generateApp = () => {
    if(!invalidAction()){
      AppGenerator.generateApp(entities, settings);
    }
    console.log(settings, entities)
  }


  return (
    <div className="p-3 m-auto" style={{ minHeight: "100vh", background: '#f0f0f0b8' }}>
      <Row className="d-flex justify-content-center mt-4">
        <h1>Node.js/Express CRUD generator</h1>
      </Row>
      <div className="d-flex flex-row flex-wrap">
        <div className="p-1 col-md-8" style={{ maxHeight: '400px' }}>
          <AppSettings settings={settings} setSettings={setSettings} onChangeSettings={onChangeSettings} />
        </div>
        <div className="p-1 col-md-4" style={{ maxHeight: '400px' }}>
          <Entities entitiesLabels={entitiesLabels} entities={entities} setEntities={setEntities} />
        </div>
      </div>
      <div className="d-flex flex-row flex-wrap mt-4 px-3">
        <Button disabled={invalidAction()} onClick={generateApp} variant="success" style={{ boxShadow: '1px 1px 4px 1px rgb(0 0 0 / 20%)' }} >
          Generate
        </Button>
      </div>
      
      <ToastContainer />
    </div>

  );
}

export default App;
