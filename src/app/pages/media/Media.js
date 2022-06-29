import React from "react";
import {useLocation, useNavigate} from "react-router-dom";
import './style.css';
import NewSidebar from "../../components/newSidebar/newSidebar";
import useCheckboxTwoEdit from "../../hooks/useCheckboxTwoEdit";


function Media () {

    const { state } = useLocation();
    const mediaPageState=state
    console.log (state, "mediaState")
    const navigate = useNavigate();
    // const { id } = useParams();

    const checkTipe = useCheckboxTwoEdit(mediaPageState.tipe);
    console.log(checkTipe);
    const checkPreview = useCheckboxTwoEdit(mediaPageState.preview_image_url);
    console.log(checkPreview);

    const checkUrl = useCheckboxTwoEdit(mediaPageState.url);
    const checkDuration = useCheckboxTwoEdit(mediaPageState.duration_ms);
    const checkPublic = useCheckboxTwoEdit(mediaPageState.public_metrics);
    const checkAlt = useCheckboxTwoEdit(mediaPageState.alt_text);
    const checkCountry = useCheckboxTwoEdit(mediaPageState.country);
    const checkCountryCode = useCheckboxTwoEdit(mediaPageState.country_code);
    const checkGeo = useCheckboxTwoEdit(mediaPageState.geo);
    const checkName = useCheckboxTwoEdit(mediaPageState.name);
    const checkPlaceType = useCheckboxTwoEdit(mediaPageState.place_type);


    // const handleRouteMediaPage =(checkedValuesMedia)=>{
    //     if(window.location.pathname ==="/media"){
    //         navigate('/expansions', {state: checkedValuesMedia})
    //     }
    //     else{
    //         navigate(`/expansions/${id}`, {state: checkedValuesMedia})
    //     }
    // }


    const onSubmitMedia =(nextRoute) =>{
        const checkedValuesMedia = {...mediaPageState}
        checkedValuesMedia.tipe =checkTipe.checked;
        checkedValuesMedia.preview_image_url =checkPreview.checked;
        checkedValuesMedia.url =checkUrl.checked;
        checkedValuesMedia.duration_ms =checkDuration.checked;
        checkedValuesMedia.public_metrics =checkPublic.checked;
        checkedValuesMedia.alt_text =checkAlt.checked;
        checkedValuesMedia.country =checkCountry.checked;
        checkedValuesMedia.country_code =checkCountryCode.checked;
        checkedValuesMedia.geo =checkGeo.checked;
        checkedValuesMedia.name =checkName.checked;
        checkedValuesMedia.place_type =checkPlaceType.checked;
        // checkTipe.checked ? (checkedValuesMedia.tipe = true):(checkedValuesMedia.tipe = false)

        nextRoute=== 'tweet'?
            navigate(`/tweet`, {state:checkedValuesMedia}) :
            navigate(`/expansions`, {state: checkedValuesMedia
            })
    }

        // navigate('/expansions', {state: checkedValuesMedia})
        // console.log(checkedValuesMedia);



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
                                        <input className={"checkboxStyle"} type="checkbox" id={"check"} checked={checkTipe.checked}
                                               onChange={(event) => checkTipe.handlerCheckClick(event)} />
                                    </div>
                                </div>
                                <div className={"wordAndCheckbox nextBoxes"}>
                                    <div className={"searchTwoHeadPart wordBefore"}>preview_image_url</div>
                                    <div className={"checkboxDiv"}>
                                        <input className={"checkboxStyle"} type="checkbox" id={"check"} checked={checkPreview.checked}
                                               onChange={(event) => checkPreview.handlerCheckClick(event)} />
                                    </div>
                                </div>
                                <div className={"wordAndCheckbox nextBoxes"}>
                                    <div className={"searchTwoHeadPart wordBefore"}>url</div>
                                    <div className={"checkboxDiv"}>
                                        <input className={"checkboxStyle"} type="checkbox" id={"check"} checked={checkUrl.checked}
                                               onChange={(event) => checkUrl.handlerCheckClick(event)} />
                                    </div>
                                </div>
                                <div className={"wordAndCheckbox nextBoxes"}>
                                    <div className={"searchTwoHeadPart wordBefore"}>duration_ms</div>
                                    <div className={"checkboxDiv"}>
                                        <input className={"checkboxStyle"} type="checkbox" id={"check"} checked={checkDuration.checked}
                                               onChange={(event) => checkDuration.handlerCheckClick(event)} />
                                    </div>
                                </div>
                                <div className={"wordAndCheckbox nextBoxes"}>
                                    <div className={"searchTwoHeadPart wordBefore"}>public_metrics</div>
                                    <div className={"checkboxDiv"}>
                                        <input className={"checkboxStyle"} type="checkbox" id={"check"} checked={checkPublic.checked}
                                               onChange={(event) => checkPublic.handlerCheckClick(event)} />
                                    </div>
                                </div>
                                <div className={"wordAndCheckbox nextBoxes"}>
                                    <div className={"searchTwoHeadPart wordBefore"}>alt_text</div>
                                    <div className={"checkboxDiv"}>
                                        <input className={"checkboxStyle"} type="checkbox" id={"check"} checked={checkAlt.checked}
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
                                        <input className={"checkboxStyle"} type="checkbox" id={"check"} checked={checkCountry.checked}
                                               onChange={(event) => checkCountry.handlerCheckClick(event)} />
                                    </div>
                                </div>
                                <div className={"wordAndCheckbox nextBoxes"}>
                                    <div className={"searchTwoHeadPart wordBefore"}>country_code</div>
                                    <div className={"checkboxDiv"}>
                                        <input className={"checkboxStyle"} type="checkbox" id={"check"} checked={checkCountryCode.checked}
                                               onChange={(event) => checkCountryCode.handlerCheckClick(event)} />
                                    </div>
                                </div>
                                <div className={"wordAndCheckbox nextBoxes"}>
                                    <div className={"searchTwoHeadPart wordBefore"}>geo</div>
                                    <div className={"checkboxDiv"}>
                                        <input className={"checkboxStyle"} type="checkbox" id={"check"} checked={checkGeo.checked}
                                               onChange={(event) => checkGeo.handlerCheckClick(event)} />
                                    </div>
                                </div>
                                <div className={"wordAndCheckbox nextBoxes"}>
                                    <div className={"searchTwoHeadPart wordBefore"}>name</div>
                                    <div className={"checkboxDiv"}>
                                        <input className={"checkboxStyle"} type="checkbox" id={"check"} checked={checkName.checked}
                                               onChange={(event) => checkName.handlerCheckClick(event)} />
                                    </div>
                                </div>
                                <div className={"wordAndCheckbox nextBoxes"}>
                                    <div className={"searchTwoHeadPart wordBefore"}>place_type</div>
                                    <div className={"checkboxDiv"}>
                                        <input className={"checkboxStyle"} type="checkbox" id={"check"} checked={checkPlaceType.checked}
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
                    <div className='backBtn' onClick={()=>onSubmitMedia('tweet')}>Back</div>
                    <div className='nextBtn' onClick={()=>onSubmitMedia('expansions')}>Next</div>
                </div>

            </main>
        </div>
    )
}

export default Media;