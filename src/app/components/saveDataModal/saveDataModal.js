import React, {useState} from 'react';
import Modal from 'react-modal';
import config from "../../config";
import './style.css';
import axios from "axios";
import {useNavigate} from "react-router-dom";

function SaveDataModal (props) {
    const navigate = useNavigate();
    const customStyles = {
        content: {
            padding: '0px 40px',
            maxWidth: '448px',
            width: '100%',
            height:'400px',
            top: '50%',
            left: '50%',
            right: 'auto',
            bottom: 'auto',
            marginRight: '-50%',
            transform: 'translate(-50%, -50%)',
        },
    };

    const postSavedData  = async (newData) => {
        try {
            const  response = await axios.post(`${config.baseUrl}/query/search/`,newData);
            console.log(newData);
            console.log(values)
            console.log (response.data);
            if(response.status >= 200 && response.status < 400) {
                console.log (response.data);
                navigate('/saved', {state:response.data})
            }
        } catch (e) {
            console.log(e.response, 'ErrorSavedData');
        }
    }

    const [values, setValues] = useState({
        name_query: '',
        description: '',
    });

    const [errors, setErrors] = useState({
        name_query: null,
        description: null,
    });

    const handleChange = ({target: {name, value}}) => {
        setValues({
            ...values,
            [name]: value,
        });
        setErrors({
            ...errors,
            [name]: null
        });
    };

    const handleSubmit =  ( e) => {
        const {name_query, description} = values;
        let valid = true;
        let nameQueryMessage = null;
        let descriptionMessage = null;

        if (!name_query) {
            nameQueryMessage = "Name is required";
            valid = false
        }

        if (!description) {
            descriptionMessage = "Description is required";
            valid = false
        }

        setErrors({
            name_query: nameQueryMessage,
            description: descriptionMessage,
        });
        console.log(props.savingData);

        const newData={...props.savingData, ...values}

        if (valid) {
            postSavedData(newData);
        }
    }





    return(
        <>
            <Modal
                isOpen={props.saveDataModalIsOpen}
                onRequestClose={props.closeSavingDataModal}
                // onAfterOpen={}
                style={customStyles}
                ariaHideApp={false}
            >
                <div className={"modalBox"}>
                    <div className="nameDiv">
                        <label htmlFor="name" className="labelWordDiv" > Name</label>
                        <input className="nameInput" type="text" placeholder="" name="name_query"
                               value={values.name_query} id={'name'} onChange={handleChange}/>
                        <div className="text-danger">
                            {errors.name_query}
                        </div>
                    </div>
                    <div className="nameDiv">
                        <label htmlFor="description" className="labelWordDiv">Description</label>
                        <input className="nameInput" type="text" placeholder="" name="description"
                               value={values.description} id={'description'} onChange={handleChange}/>
                        <div className="text-danger">
                            {errors.description}
                        </div>
                    </div>
                </div>
                <div className={"btnDiv"}>
                    <div className={"nextBtn"} onClick={handleSubmit}>Save</div>
                </div>
            </Modal>
            </>
    )
}

export default SaveDataModal;