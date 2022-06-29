import React, {useState} from "react"

function useCheckboxTwo(val) {
    const [checked, setChecked] = useState(val);
    const handlerCheckClick = (e) => {
        const target = e.target;
        const value = target.type === 'checkbox' ? target.checked : target.value;
        const name = target.name;
        setChecked(value)
    }
    return {checked, handlerCheckClick}
}

export default useCheckboxTwo;