import React, {useState} from "react";
import './style.css';
import NewSidebar from "../../components/newSidebar/newSidebar";
import SaveDataModal from "../../components/saveDataModal/saveDataModal";
import {useLocation} from "react-router-dom";
import ReactJsonViewer from "react-json-viewer-cool";



function SearchResult () {
    const { state } = useLocation();
    //TODO:data=state
    // const data=result;
    // const entries = Object.entries(data);


    const data=state.stateForJsonViewer;
    console.log(state.stateForSavingData);
    const savingData=state.stateForSavingData;
    console.log(data, "data")
    console.log(savingData, "savingdata");

    const [saveDataModalIsOpen, setSaveDataModalIsOpen] = useState(false);

    function openSavingDataModal() {
        setSaveDataModalIsOpen(true)
    }

    function closeSavingDataModal() {
        setSaveDataModalIsOpen(false)
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
                        <div className={"nextBtn nextSaved"} onClick={openSavingDataModal}>Save</div>
                    </div>
                </main>
            </div>
            <SaveDataModal saveDataModalIsOpen={saveDataModalIsOpen} closeSavingDataModal={closeSavingDataModal} savingData={savingData}/>
        </>
    )
}

export default SearchResult;




