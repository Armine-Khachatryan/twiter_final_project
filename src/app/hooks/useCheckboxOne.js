import React, {useState} from "react"

function useCheckboxOne() {
    const [checked, setChecked] = useState(false)

    const handlerCheck = (e) => {
        const target = e.target;
        const value = target.type === 'checkbox' ? target.checked : target.value;
        const name = target.name;
        setChecked(value)
    }
    return {checked, handlerCheck}
}
export default useCheckboxOne;