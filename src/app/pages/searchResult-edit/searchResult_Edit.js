import React, {useState} from "react";
import './style.css';
import NewSidebar from "../../components/newSidebar/newSidebar";
import {useLocation, useNavigate, useParams} from "react-router-dom";
import ReactJsonViewer from "react-json-viewer-cool";
import axios from "axios";
import config from "../../config";


function SearchResult_Edit () {
    const navigate = useNavigate();
    const { state } = useLocation();
    const data=state.stateEditForJsonViewer;
    const savingDataEdit=state.stateEditForSavingData;
    console.log(savingDataEdit);
    const { id } = useParams();
    console.log(data, "data")


    const saveData =async (savingDataEdit) => {
        try {
            const  response = await axios.put(`${config.baseUrl}/query/search/${id}`, savingDataEdit);
            if(response.status >= 200 && response.status < 400) {
                console.log (response.data);
                navigate('/saved', {state:response.data})
            }
        } catch (e) {
            console.log(e.response, 'ErrorSavedData');
        }
    }


    return (
        <>
            <div className={"NumberOneDiv"}>
                <NewSidebar/>
                <main className={"container"}>
                    <div className={"homeTitle"}>Search Results</div>
                    <div className={"savedWhole"}>
                        <ReactJsonViewer data={data}/>
                    </div>
                    <div className={"savedDivForButton"}>
                        <div className={"nextBtn nextSaved"} onClick={()=>{saveData(savingDataEdit)}}>Save</div>
                    </div>
                </main>
            </div>
        </>
    )
}

export default SearchResult_Edit;




