import './App.css';
import Mask from './components/Mask';
import Navbar from './components/Navbar';
import ObjectFit from './components/ObjectFit'
import Reflection from './components/Reflection';
import Transitions from './components/Transitions';
function App() {
  return (
    <>
    <Navbar />
     <Reflection />
     <ObjectFit /> 
     <Transitions />
     {/* <Mask />  */}
    </>
  );
}

export default App;
