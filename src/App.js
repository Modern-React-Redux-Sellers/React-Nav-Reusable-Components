import Dropdown from "./components/Dropdown";
import {useState} from "react";

const App = () => {
   const options = [
   {label:'Red', value:'red'},
   {label:'Green', value:'green'},
   {label:'Blue', value:'blue'}
   ];

   const [selection,setSelection] = useState(null);

   const handleSelect = (option) => {
      setSelection(option);
   }

   return <Dropdown options={options} value={selection} onChange={handleSelect}/>
}

export default App;