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
        </div>
    )
}

export default App;