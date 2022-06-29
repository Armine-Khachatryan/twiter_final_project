import React from "react";
import useCheckboxYesEdit from "../../hooks/useCheckboxYesEdit";
import {useLocation, useNavigate, useParams} from "react-router-dom";
import config from "../../config";
import axios from "axios";
import './style.css';
import NewSidebar from "../../components/newSidebar/newSidebar";


function Expansions_Edit () {

    const {state} = useLocation();
    const mediaInformationEdited = state
    console.log(state, 'propsExpansion');
    const navigate = useNavigate();
    const { id } = useParams();
    const checkAuthor = useCheckboxYesEdit(mediaInformationEdited.author_id?mediaInformationEdited.author_id: "");
    console.log(checkAuthor, "checkAuthor");
    const checkPlace = useCheckboxYesEdit(mediaInformationEdited.geo_place_id?mediaInformationEdited.geo_place_id: "");
    const checkEntities = useCheckboxYesEdit(mediaInformationEdited.entities_mentions_username?mediaInformationEdited.entities_mentions_username: "");
    const checkReferenced = useCheckboxYesEdit(mediaInformationEdited.referenced_tweets_id_author_id?mediaInformationEdited.referenced_tweets_id_author_id: "");
    const checkKeys = useCheckboxYesEdit(mediaInformationEdited.attachments_media_keys?mediaInformationEdited.attachments_media_keys: "");




    let postSearchData = async (checkedValuesExpansion) => {
        try {
            const  response = await axios.post(`${config.baseUrl}/query/search/test/`,checkedValuesExpansion);
            console.log (response.data);
            if(response.status >= 200 && response.status < 400){
                navigate(`/searchResult/${id}`,
                    {state:{
                            stateEditForJsonViewer:response.data,
                            stateEditForSavingData:checkedValuesExpansion,
                        }})
            }
        } catch (e) {
            console.log(e.response, 'Error');
        }
    }



    const onSubmitExpansion = () => {
        const checkedValuesExpansion = {...mediaInformationEdited}
        checkAuthor.checkedName ? (checkedValuesExpansion.author_id = true):(checkedValuesExpansion.author_id = false)
        checkPlace.checkedName ? (checkedValuesExpansion.geo_place_id = true):(checkedValuesExpansion.geo_place_id = false)
        checkEntities.checkedName ? (checkedValuesExpansion.entities_mentions_username = true):(checkedValuesExpansion.entities_mentions_username = false)
        checkReferenced.checkedName ? (checkedValuesExpansion.referenced_tweets_id_author_id = true):(checkedValuesExpansion.referenced_tweets_id_author_id = false)
        checkKeys.checkedName ? (checkedValuesExpansion.attachments_media_keys = true):(checkedValuesExpansion.attachments_media_keys = false)
        console.log(checkedValuesExpansion);
        postSearchData(checkedValuesExpansion);
    };


    const onSubmitBackExpansion = () => {
        const checkedValuesExpansion = {...mediaInformationEdited}
        checkAuthor.checkedName ? (checkedValuesExpansion.author_id = true) : (checkedValuesExpansion.author_id = false)
        checkPlace.checkedName ? (checkedValuesExpansion.geo_place_id = true) : (checkedValuesExpansion.geo_place_id = false)
        checkEntities.checkedName ? (checkedValuesExpansion.entities_mentions_username = true) : (checkedValuesExpansion.entities_mentions_username = false)
        checkReferenced.checkedName ? (checkedValuesExpansion.referenced_tweets_id_author_id = true) : (checkedValuesExpansion.referenced_tweets_id_author_id = false)
        checkKeys.checkedName ? (checkedValuesExpansion.attachments_media_keys = true) : (checkedValuesExpansion.attachments_media_keys = false)
        navigate(`/media/${id}`, {state:checkedValuesExpansion})
    }

    return(
        <div className={"NumberOneDiv"}>
            <NewSidebar/>
            <main className={"container main"}>
                <div className={"expansionBigPart"}>
                    <div className={"homeTitle"}>Expansions Objects</div>
                    <div className={"expansions"}>
                        <div className={"expansionsTwoHead"}>
                 <span className={"YesNoSpan"}>
                <div className={"searchTwoHeadPart"}>Yes</div>
                <div className={"searchTwoHeadPart no"}>No</div>
                 </span>
                        </div>
                        <div className={"wordAndCheckbox expansionPart"}>
                            <div className={"searchTwoHeadPart wordBefore"}>author_id</div>
                            <div className={"twoCheckboxes"}>
                                <div className={"checkboxDiv one"}>
                                    <input className={"checkboxStyle"} type="checkbox" id={"check"} name="Yes"
                                           checked={checkAuthor.checked === "Yes"}
                                           onChange={(event) => checkAuthor.handlerCheck(event)}/>
                                </div>
                                <div className={"checkboxDiv"}>
                                    <input className={"checkboxStyle"} type="checkbox" id={"check"} name="No"
                                           checked={checkAuthor.checked === "No"}
                                           onChange={(event) => checkAuthor.handlerCheck(event)}/>
                                </div>
                            </div>
                        </div>
                        <div className={"wordAndCheckbox nextBoxes expansionPart"}>
                            <div className={"searchTwoHeadPart wordBefore"}>geo.place_id</div>
                            <div className={"twoCheckboxes"}>
                                <div className={"checkboxDiv one"}>
                                    <input className={"checkboxStyle"} type="checkbox" id={"check"} name="Yes"
                                           checked={checkPlace.checked === "Yes"}
                                           onChange={(event) => checkPlace.handlerCheck(event)}/>
                                </div>
                                <div className={"checkboxDiv"}>
                                    <input className={"checkboxStyle"} type="checkbox" id={"check"} name="No"
                                           checked={checkPlace.checked === "No"}
                                           onChange={(event) => checkPlace.handlerCheck(event)}/>
                                </div>
                            </div>
                        </div>
                        <div className={"wordAndCheckbox nextBoxes expansionPart"}>
                            <div className={"searchTwoHeadPart wordBefore"}>entities.mentions.username</div>
                            <div className={"twoCheckboxes"}>
                                <div className={"checkboxDiv one"}>
                                    <input className={"checkboxStyle"} type="checkbox" id={"check"} name="Yes"
                                           checked={checkEntities.checked === "Yes"}
                                           onChange={(event) => checkEntities.handlerCheck(event)}/>
                                </div>
                                <div className={"checkboxDiv"}>
                                    <input className={"checkboxStyle"} type="checkbox" id={"check"} name="No"
                                           checked={checkEntities.checked === "No"}
                                           onChange={(event) => checkEntities.handlerCheck(event)}/>
                                </div>
                            </div>
                        </div>
                        <div className={"wordAndCheckbox nextBoxes expansionPart"}>
                            <div className={"searchTwoHeadPart wordBefore"}>referenced_tweets.id .author_id</div>
                            <div className={"twoCheckboxes"}>
                                <div className={"checkboxDiv one"}>
                                    <input className={"checkboxStyle"} type="checkbox" id={"check"} name="Yes"
                                           checked={checkReferenced.checked === "Yes"}
                                           onChange={(event) => checkReferenced.handlerCheck(event)}/>
                                </div>
                                <div className={"checkboxDiv"}>
                                    <input className={"checkboxStyle"} type="checkbox" id={"check"} name="No"
                                           checked={checkReferenced.checked === "No"}
                                           onChange={(event) => checkReferenced.handlerCheck(event)}/>
                                </div>
                            </div>
                        </div>
                        <div className={"wordAndCheckbox nextBoxes expansionPart"}>
                            <div className={"searchTwoHeadPart wordBefore"}>attachments.media_keys</div>
                            <div className={"twoCheckboxes"}>
                                <div className={"checkboxDiv one"}>
                                    <input className={"checkboxStyle"} type="checkbox" id={"check"} name="Yes"
                                           checked={checkKeys.checked === "Yes"}
                                           onChange={(event) => checkKeys.handlerCheck(event)}/>
                                </div>
                                <div className={"checkboxDiv"}>
                                    <input className={"checkboxStyle"} type="checkbox" id={"check"} name="No"
                                           checked={checkKeys.checked === "No"}
                                           onChange={(event) => checkKeys.handlerCheck(event)}/>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <div className={"buttonsDiv expansionButtons"}>
                    <div className='backBtn' onClick={onSubmitBackExpansion}>Back</div>
                    <div className='nextBtn' onClick={onSubmitExpansion}>Test</div>
                </div>
            </main>
        </div>
    )
}

export default Expansions_Edit;

