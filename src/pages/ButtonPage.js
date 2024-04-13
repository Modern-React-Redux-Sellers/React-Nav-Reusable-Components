import Button from "../components/Button";
import {GoBell, GoCloud, GoDesktopDownload, GoDatabase} from "react-icons/go";

const ButtonPage = () => {

    return (
        <div>
            ButtonPage.js
            <div>
                <Button primary rounded>
                    <GoBell />
                    children
                </Button>
            </div>
        </div>
    )
}

export default ButtonPage;