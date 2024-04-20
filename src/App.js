import logo from './logo.svg';
import 'bootstrap/dist/css/bootstrap.min.css'
import './App.css';
import ReducerComp from './ReducerComp';
import { BrowserRouter,Routes,Route,Navigate } from 'react-router-dom';
import FormApi from './component/FormApi';
import Table from './component/Table';
import ClassForm from './component/ClassForm';
import ClassTable from './component/ClassTable';
import PureComponent from './component/PureComponent';
import ComtomHook from './component/ComtomHook';
import FormComp from './component/FormComp';


function App() {
  return (
    <div className="">
      {/* <PureComponent/> */}
      {/* <ComtomHook/> */}
      {/* <ReducerComp/> */}
      <FormComp/>
      <BrowserRouter>
      <Routes>
          {/* <Route path='/' element={<Navigate to={"/form"}/>}/>
          <Route path='/form' element={<FormApi/>}>
          <Route path=':name'/>
          </Route>
          <Route path='/table' element={<Table/>}/> */}
          {/* <Route path='/' element={<Navigate to={"/form"}/>}/>
          <Route path='/form' element={<ClassForm/>}>
          <Route path=':name'/>
          </Route>
          <Route path='/table' element={<ClassTable/>}/>  */}

        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
