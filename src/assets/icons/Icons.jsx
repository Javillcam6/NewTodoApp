import { FaCheck } from "react-icons/fa";
import { BsXLg } from "react-icons/bs";
import './Icons.css'

const iconTypes = {
    "check": (color) => <FaCheck className="Icon-svg" fill={color} />,
    "delete": (color) =>  <BsXLg className="Icon-svg" fill={color} />
}

function Icons ({ type, color, onClick }) {
    return  (
        <span 
            className={`Icon-container  Icon-container-${type}`} 
            onClick={onClick}
        >
            {iconTypes[type](color)}
        </span>
    );
}

export { Icons };