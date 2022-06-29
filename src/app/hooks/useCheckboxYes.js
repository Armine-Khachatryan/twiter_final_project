import React, {useState} from "react"

function useCheckbox() {

    const [checked, setChecked] = useState('No')
    const [checkedName, setCheckedName] = useState(false)

    const handlerCheck = (e) => {
        let name = e.target.name
        console.log(name);
        setChecked(name)
        console.log(checked);
        setCheckedName(!checkedName)
        setCheckedName(name === 'Yes')

        console.log(checkedName);
    }
    return {checked, checkedName, handlerCheck}
}

export default useCheckbox;
