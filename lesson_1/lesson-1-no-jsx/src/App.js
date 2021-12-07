
import './App.css';
import HeaderNoJSX  from './Components/HeaderNoJSx'
import PersonNoJSX from './Components/PersonNoJSX';
import ComponentWithJSX  from './Components/ComponentWithJSX'
import { useBoomTing, useName } from './Hooks/useToggle'
import Boom from './Components/Boom';
import RickAndMorty from './Components/RickAndMorty';


function App() {
  const [toggle, toggleFun ] = useBoomTing() 

  const { name, nameFun } =  useName() 
  
  return (
      <>
        <HeaderNoJSX />
        <PersonNoJSX />
        <ComponentWithJSX />
        <p>{ name }</p>
        <p> { toggle ? " on" : "off"}</p>
        <button onClick={() => toggleFun()}> toggle </button>
        <button onClick={() => nameFun('dyllan')}> change name to dyllan </button>
        <RickAndMorty/>  
        
        <br/>
        <Boom />
      </>
  );
}

export default App;
