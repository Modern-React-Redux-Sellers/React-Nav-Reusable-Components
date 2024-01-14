import {useState} from "react";

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
        return <div onClick={() => handleOptionClick(option)} key={option.value}>{option.label}</div>
    })



    return (
        <div>
            {/*if selection exists, its label will be used, else Select...*/}
            <div onClick={handleClick}>{value?.label || 'Select...'}</div>
            {isOpen && <div>{renderOptions}</div>}
        </div>
    )
}

export default Dropdown;