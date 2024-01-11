import Button from "./components/Button";
import {GoBell, GoCloud, GoDesktopDownload, GoDatabase} from "react-icons/go";

const App = () => {

    return (
        <div>
            App.js
            <div>
                <Button primary >
                    <GoBell />
                    children prop
                </Button>
            </div>
            <div>
                <Button warning ><GoCloud/>Click me</Button>
            </div>
            <div>
                <Button success outline ><GoDesktopDownload/>Ayo</Button>
            </div>
            <div>
                <Button danger rounded outline><GoDatabase/>Click me</Button>
            </div>
        </div>
    )
}

export default App;