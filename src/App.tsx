import { useEffect, useState } from 'react';
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import 'react-bootstrap-typeahead/css/Typeahead.css';
import { Button, Row } from 'react-bootstrap';
import initSettings from './initial_settings.json';
import { Entity, Settings } from './types';
import AppSettings from './components/app-settings/AppSettings';
import Entities from './components/entities/Entities';
import { AppGenerator } from './components/app-generator/AppGenerator';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { Toast } from './utils/toast';
import { useDispatch, useSelector } from 'react-redux';
import { setSettings, resetSettings } from './global/settings';
import { setEntities, resetEntities } from './global/entities';

toast.configure()

function App() {
  //const [entities, setEntities] = useState<Entity[]>([]);
  const [entitiesLabels, setEntitiesLabels] = useState<string[]>([]);
  const [btnLoading, setBtnLoading] = useState<boolean>(false);

  
  const settings = useSelector((state: any) => state.settings.value)
  const dispatchSettings = useDispatch()

  const onSetSettings = (payload: Settings) => {
    dispatchSettings(setSettings(payload))
  }

  const onResetSettings = () => {
    dispatchSettings(resetSettings())
  }
  
  const entities = useSelector((state: any) => state.entities.value)
  const dispatchEntities = useDispatch()

  const onSetEntities = (payload: Entity[]) => {
    dispatchEntities(setEntities(payload))
  }

  const onResetEntities = () => {
    dispatchEntities(resetEntities())
  }


  useEffect(() => {
    const savedEntities = localStorage.getItem('entities');
    const savedSettings = localStorage.getItem('settings');
    if(savedEntities && savedEntities != ''){
      setEntities(JSON.parse(savedEntities))
    }
    if(savedSettings && savedSettings != ''){
      onSetSettings(JSON.parse(savedSettings))
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

  const reset = () => {
    onResetSettings()
    onResetEntities()
  }

  const validAction = (doToast?: boolean) => {
    if(settings.project_name.trim() === ""){
      if(doToast){
        Toast('ERROR', 'Project name is required')
      }
      return false;
    } else 
    if(!settings.database || settings.database.trim() === ""){
      if(doToast){
        Toast('ERROR', 'Database is required')
      }
      return false;
    } else 
    if(!settings.database_orm || settings.database_orm.trim() === ""){
      if(doToast){
        Toast('ERROR', 'Database ORM/ODM is required')
      }
      return false;
    }
    return true;
  }

  const stopLoading = () => setBtnLoading(false);

  const generateApp = () => {
    setBtnLoading(true)
    if(validAction(true)){
      AppGenerator.generateApp(entities, settings, stopLoading);
    }
  }


  return (
    <div className="p-3 m-auto" style={{ minHeight: "100vh", background: '#f0f0f0b8' }}>
      <Row className="d-flex justify-content-center mt-4">
        <h1 style={{textAlign: 'center'}}>Node.js/Express CRUD generator</h1>
      </Row>
      <div className="d-flex flex-row flex-wrap">
        <div className="p-1 col-md-8" style={{ maxHeight: '430px' }}>
          <AppSettings/>
        </div>
        <div className="p-1 col-md-4" style={{ maxHeight: '430px' }}>
          <Entities entitiesLabels={entitiesLabels} entities={entities} setEntities={setEntities} />
        </div>
      </div>
      <div className="d-flex flex-row flex-wrap mt-4 px-3">
        <Button className="mr-2" disabled={!validAction() || btnLoading} onClick={generateApp} variant="success" style={{ boxShadow: '1px 1px 4px 1px rgb(0 0 0 / 20%)' }} >
          {btnLoading ? 'Generating...' : 'Generate'}
        </Button>
        <Button className="mr-2" onClick={reset} variant="secondary" style={{ boxShadow: '1px 1px 4px 1px rgb(0 0 0 / 20%)' }} >
          Reset
        </Button>
      </div>
      
      <ToastContainer />
    </div>

  );
}

export default App;
