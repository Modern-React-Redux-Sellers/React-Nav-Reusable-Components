import {useState} from "react";
import {GoChevronDown} from "react-icons/go";
import Panel from "./Panel";

const Dropdown = ({options,value,onChange}) => {
    const [isOpen,setIsOpen] = useState(false);

    const handleClick = () => {
        setIsOpen(!isOpen);
    }

    const handleOptionClick = (option) => {
        //closes dropdown
        setIsOpen(false);
        //Sets selection state in App
        onChange(option)

    }

    const renderOptions = options.map((option) => {
        return <div className="hover:bg-sky-100 rounded cursor-pointer p-1" onClick={() => handleOptionClick(option)} key={option.value}>{option.label}</div>
    })



    return (
        <div className="w-48 relative">
            {/*if selection exists, its label will be used, else Select...*/}

            <Panel className="flex justify-between items-center cursor-pointer" onClick={handleClick}>{value?.label || 'Select...'}<GoChevronDown/>
            </Panel>

            {isOpen && <Panel className="absolute top-full">{renderOptions}</Panel>}
        </div>
    )
}

export default Dropdown;