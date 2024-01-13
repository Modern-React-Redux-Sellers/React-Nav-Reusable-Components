import Button from "./components/Button";
import {GoBell, GoCloud, GoDesktopDownload, GoDatabase} from "react-icons/go";
import Accordion from "./components/Accordion";

const App = () => {
    const items = [{
        id:1,
        label:"A question",
        content:"An answer"
    },{
        id:2,
        label:"Another question",
        content:"Another answer"
    },{
        id:3,
        label:"Another another question",
        content:"JFC YES"
    }]

    return <Accordion items={items}/>
}

export default App;