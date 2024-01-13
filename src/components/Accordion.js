import {useState} from "react";
import {GoChevronDown, GoChevronLeft} from "react-icons/go";

const Accordion = ({items}) => {
    //starting at -1 no element will start expanded
    const [expandedIndex,setExpandedIndex] = useState(-1);

    const handleClick = (divIndex) => {
        if (expandedIndex === divIndex){
            setExpandedIndex(-1)
        }else {
            setExpandedIndex(divIndex)
        }
    }

    const renderItems = items.map((item, index) => {
        const isExpanded = index === expandedIndex; //true or false

        //if isExpanded true, displays content, thus only 1 item will ever display
        //content = index0(true) && contains content
        //false does not display on screen
       const content = isExpanded && <div className="border-b p-5">{item.content}</div>;

        const icon = <span className="text-2xl">{isExpanded ? <GoChevronDown/> : <GoChevronLeft/>}</span>

        return  <div key={item.id}>
                    <div className="flex justify-between p-3 bg-gray-50 border-b items-center cursor-pointer" onClick={() => {handleClick(index)}}>
                        {item.label}
                        {icon}
                    </div>
                    {content}
                </div>
    })

    return (
        <div className="border-x border-t rounded">{renderItems}</div>
    )
}

export default Accordion;