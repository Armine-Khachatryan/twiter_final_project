import React from "react";
import useCheckboxTwoEdit from "../../hooks/useCheckboxTwoEdit";
import {useLocation, useNavigate, useParams} from "react-router-dom";
import './style.css';
import NewSidebar from "../../components/newSidebar/newSidebar";


function Media_Edit () {

    const { state } = useLocation();
    const tweetInformationEdited=state
    console.log (state, "mediaState")
    const navigate = useNavigate();
    const { id } = useParams();


    const checkTipe = useCheckboxTwoEdit(tweetInformationEdited.tipe);
    console.log(checkTipe);
    const checkPreview = useCheckboxTwoEdit(tweetInformationEdited.preview_image_url);
    console.log(checkPreview);

    const checkUrl = useCheckboxTwoEdit(tweetInformationEdited.url);
    console.log(checkUrl);

    const checkDuration = useCheckboxTwoEdit(tweetInformationEdited.duration_ms);
    console.log(checkDuration);

    const checkPublic = useCheckboxTwoEdit(tweetInformationEdited.public_metrics);
    console.log(checkPublic);

    const checkAlt = useCheckboxTwoEdit(tweetInformationEdited.alt_text);
    console.log(checkAlt);

    const checkCountry = useCheckboxTwoEdit(tweetInformationEdited.country);
    console.log(checkCountry);

    const checkCountryCode = useCheckboxTwoEdit(tweetInformationEdited.country_code);
    const checkGeo = useCheckboxTwoEdit(tweetInformationEdited.geo);
    const checkName = useCheckboxTwoEdit(tweetInformationEdited.name);
    const checkPlaceType = useCheckboxTwoEdit(tweetInformationEdited.place_type);


    // const handleRouteMediaPage =(checkedValuesMedia)=>{
    //     if(window.location.pathname ==="/media"){
    //         navigate('/expansions', {state: checkedValuesMedia})
    //     }
    //     else{
    //         navigate(`/expansions/${id}`, {state: checkedValuesMedia})
    //     }
    // }


    const onSubmitMedia =(nextRoute) =>{
        const checkedValuesMedia = {...tweetInformationEdited}
        checkTipe.checked ? (checkedValuesMedia.tipe = true):(checkedValuesMedia.tipe = false)
        checkPreview.checked ? (checkedValuesMedia.preview_image_url = true):(checkedValuesMedia.preview_image_url = false)
        checkUrl.checked ? (checkedValuesMedia.url = true):(checkedValuesMedia.url = false)
        checkDuration.checked ? (checkedValuesMedia.duration_ms = true):(checkedValuesMedia.duration_ms = false)
        checkPublic.checked ? (checkedValuesMedia.public_metrics = true): (checkedValuesMedia.public_metrics = false)
        checkAlt.checked ? (checkedValuesMedia.alt_text = true):(checkedValuesMedia.alt_text = false)
        checkCountry.checked ? (checkedValuesMedia.country = true):(checkedValuesMedia.country = false)
        checkCountryCode.checked ? (checkedValuesMedia.country_code = true):(checkedValuesMedia.country_code = false)
        checkGeo.checked ? (checkedValuesMedia.geo = true):(checkedValuesMedia.geo = false)
        checkName.checked ? (checkedValuesMedia.name = true):(checkedValuesMedia.name = false)
        checkPlaceType.checked ? (checkedValuesMedia.place_type = true):(checkedValuesMedia.place_type = false)
        nextRoute=== `/tweet/${id}`?
            navigate(`/tweet/${id}`, {state: checkedValuesMedia}) :
            navigate(`/expansions/${id}`, {state:checkedValuesMedia })
    }
    //     navigate(`/expansions/${id}`, {state: checkedValuesMedia})
    //     console.log(checkedValuesMedia);
    // }


    return(
        <div className={"NumberOneDiv"}>
            <NewSidebar/>
            <main className={"container main"}>
                <div className={"mediaMain"}>
                    <div className={"mediaPlace"}>
                        <div className={"mediaOne"}>
                            <div className={"homeTitle"}>Media.fields</div>
                            <div className={"mediaCheckboxesOne"}>
                                <div className={"textStyle mediaPart"}>
                                    <span className={"requestSpan"}>Request</span> </div>
                                <div className={"wordAndCheckbox nextBoxes"}>
                                    <div className={"searchTwoHeadPart wordBefore"}>tipe</div>
                                    <div className={"checkboxDiv"}>
                                        <input className={"checkboxStyle"} type="checkbox" id={"check"}
                                               checked={checkTipe.checked}
                                               onChange={(event) => checkTipe.handlerCheckClick(event)} />
                                    </div>
                                </div>
                                <div className={"wordAndCheckbox nextBoxes"}>
                                    <div className={"searchTwoHeadPart wordBefore"}>preview_image_url</div>
                                    <div className={"checkboxDiv"}>
                                        <input className={"checkboxStyle"} type="checkbox" id={"check"}
                                               checked={checkPreview.checked}
                                               onChange={(event) => checkPreview.handlerCheckClick(event)} />
                                    </div>
                                </div>
                                <div className={"wordAndCheckbox nextBoxes"}>
                                    <div className={"searchTwoHeadPart wordBefore"}>url</div>
                                    <div className={"checkboxDiv"}>
                                        <input className={"checkboxStyle"} type="checkbox" id={"check"}
                                               checked={checkUrl.checked}
                                               onChange={(event) => checkUrl.handlerCheckClick(event)} />
                                    </div>
                                </div>
                                <div className={"wordAndCheckbox nextBoxes"}>
                                    <div className={"searchTwoHeadPart wordBefore"}>duration_ms</div>
                                    <div className={"checkboxDiv"}>
                                        <input className={"checkboxStyle"} type="checkbox" id={"check"}
                                               checked={checkDuration.checked}
                                               onChange={(event) => checkDuration.handlerCheckClick(event)} />
                                    </div>
                                </div>
                                <div className={"wordAndCheckbox nextBoxes"}>
                                    <div className={"searchTwoHeadPart wordBefore"}>public_metrics</div>
                                    <div className={"checkboxDiv"}>
                                        <input className={"checkboxStyle"} type="checkbox" id={"check"}
                                               checked={checkPublic.checked}
                                               onChange={(event) => checkPublic.handlerCheckClick(event)} />
                                    </div>
                                </div>
                                <div className={"wordAndCheckbox nextBoxes"}>
                                    <div className={"searchTwoHeadPart wordBefore"}>alt_text</div>
                                    <div className={"checkboxDiv"}>
                                        <input className={"checkboxStyle"} type="checkbox" id={"check"}
                                               checked={checkAlt.checked}
                                               onChange={(event) => checkAlt.handlerCheckClick(event)} />
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className={"mediaTwo"}>
                            <div className={"homeTitle"}>Place.fields</div>
                            <div className={"mediaCheckboxesTwo"}>
                                <div className={"textStyle mediaPart"}>
                                    <span className={"requestSpan"}>Request</span> </div>
                                <div className={"wordAndCheckbox nextBoxes"}>
                                    <div className={"searchTwoHeadPart wordBefore"}>country</div>
                                    <div className={"checkboxDiv"}>
                                        <input className={"checkboxStyle"} type="checkbox" id={"check"}
                                               checked={checkCountry.checked}
                                               onChange={(event) => checkCountry.handlerCheckClick(event)} />
                                    </div>
                                </div>
                                <div className={"wordAndCheckbox nextBoxes"}>
                                    <div className={"searchTwoHeadPart wordBefore"}>country_code</div>
                                    <div className={"checkboxDiv"}>
                                        <input className={"checkboxStyle"} type="checkbox" id={"check"}
                                               checked={checkCountryCode.checked}
                                               onChange={(event) => checkCountryCode.handlerCheckClick(event)} />
                                    </div>
                                </div>
                                <div className={"wordAndCheckbox nextBoxes"}>
                                    <div className={"searchTwoHeadPart wordBefore"}>geo</div>
                                    <div className={"checkboxDiv"}>
                                        <input className={"checkboxStyle"} type="checkbox" id={"check"}
                                               checked={checkGeo.checked}
                                               onChange={(event) => checkGeo.handlerCheckClick(event)} />
                                    </div>
                                </div>
                                <div className={"wordAndCheckbox nextBoxes"}>
                                    <div className={"searchTwoHeadPart wordBefore"}>name</div>
                                    <div className={"checkboxDiv"}>
                                        <input className={"checkboxStyle"} type="checkbox" id={"check"}
                                               checked={checkName.checked}
                                               onChange={(event) => checkName.handlerCheckClick(event)} />
                                    </div>
                                </div>
                                <div className={"wordAndCheckbox nextBoxes"}>
                                    <div className={"searchTwoHeadPart wordBefore"}>place_type</div>
                                    <div className={"checkboxDiv"}>
                                        <input className={"checkboxStyle"} type="checkbox" id={"check"}
                                               checked={checkPlaceType.checked}
                                               onChange={(event) => checkPlaceType.handlerCheckClick(event)} />
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className={"mediaLists"}>
                        <div className={"mediaListOne"}>
                            <div className={"textStyle"}>Default Objects</div>
                            <div className={"textStyle"}>
                                <ul>
                                    <li>Media_key</li>
                                    <li>tipe</li>
                                </ul>
                            </div>
                        </div>
                        <div className={"mediaListTwo"}>
                            <div className={"textStyle"}>Default Objects</div>
                            <div className={"textStyle"}>
                                <ul>
                                    <li>ID</li>
                                    <li>Full Name</li>
                                </ul>
                            </div>
                        </div>
                    </div>
                    <div className={"mediaTexts"}>
                        <div className={"mediaTextsDivsOne"}>
                            <div className={"textStyle mediaLastDiv"}>
                                Note: Must also include/request Expansion: </div>
                            <div className={"textStyle mediaLastDivPart"}>attachments.media_keys</div>
                        </div>
                        <div className={"mediaTextsDivsTwo"}>
                            <div className={"textStyle mediaLastDiv"}>
                                Note: Must also include/request Expansion: </div>
                            <div className={"textStyle mediaLastDivPart"}>expansions=geo.place_id</div>
                        </div>
                    </div>
                </div>
                <div className={"buttonsDiv"}>
                    <div className='backBtn' onClick={()=>onSubmitMedia(`/tweet/${id}`)}>Back</div>
                    <div className='nextBtn' onClick={()=>onSubmitMedia(`/expansions/${id}`)}>Next</div>
                </div>
            </main>
        </div>
    )
}

export default Media_Edit;
