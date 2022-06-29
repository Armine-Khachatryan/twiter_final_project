import React, {useState} from "react"

function useCheckboxYesEdit(val) {

    const [checked, setChecked] = useState(val ? 'Yes' : 'No')
    const [checkedName, setCheckedName] = useState(val )

    const handlerCheck = (e) => {
        let name = e.target.name
        console.log(name);
        setChecked(name)
        console.log(checked);
        // setCheckedName(!checkedName)
        setCheckedName(name === 'Yes')

        console.log(checkedName);
    }
    return {checked, checkedName, handlerCheck}
}

export default useCheckboxYesEdit;