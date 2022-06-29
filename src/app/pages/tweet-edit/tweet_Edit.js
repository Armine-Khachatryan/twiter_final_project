import React from "react";
import {useLocation, useNavigate, useParams} from "react-router-dom";
import './style.css';
import NewSidebar from "../../components/newSidebar/newSidebar";
import useCheckboxTwoEdit from "../../hooks/useCheckboxTwoEdit";



function Tweet_Edit () {
    console.log(window.location.pathname);
    const { state } = useLocation();
    const searchInformationEdited=state;
    console.log (state, "tweetStateEdited")
    const navigate = useNavigate();
    const { id } = useParams();


    const checkTweetAuthorId = useCheckboxTwoEdit(searchInformationEdited.tweet_author_id);
    const checkConversationId = useCheckboxTwoEdit(searchInformationEdited.conversation_id);
    const checkEntities = useCheckboxTwoEdit(searchInformationEdited.entities);
    const checkContextAnnotation = useCheckboxTwoEdit(searchInformationEdited.context_annotation);
    const checkAttachments = useCheckboxTwoEdit(searchInformationEdited.attachments);
    const checkReferencedTweets = useCheckboxTwoEdit(searchInformationEdited.referenced_tweets);
    const checkPublicMetrics = useCheckboxTwoEdit(searchInformationEdited.tweet_public_metrics);
    const checkOrganicMetrics = useCheckboxTwoEdit(searchInformationEdited.organic_metrics);
    const checkTweetGeo = useCheckboxTwoEdit(searchInformationEdited.tweet_geo);
    const checkSource = useCheckboxTwoEdit(searchInformationEdited.source);
    const checkTweet_created_at = useCheckboxTwoEdit(searchInformationEdited.tweet_created_at);


    const onSubmitTweet = (nextRoute) => {
        const checkedValuesTweet={...searchInformationEdited}
        // const checkedValuesTweet = {data: searchInformation.data , }
        // Object.keys(searchInformation.checkedValue).map(data => {
        //     checkedValuesTweet[data] = true
        // })
        checkTweetAuthorId.checked ? (checkedValuesTweet.tweet_author_id = true):(checkedValuesTweet.tweet_author_id = false)
        checkConversationId.checked ? (checkedValuesTweet.conversation_id=true):(checkedValuesTweet.conversation_id=false)
        checkEntities.checked ? (checkedValuesTweet.entities=true):(checkedValuesTweet.entities=false)
        checkContextAnnotation.checked ? (checkedValuesTweet.context_annotation=true):(checkedValuesTweet.context_annotation=false)
        checkAttachments.checked ? (checkedValuesTweet.attachments=true):(checkedValuesTweet.attachments=false)
        checkReferencedTweets.checked ? (checkedValuesTweet.referenced_tweets=true):(checkedValuesTweet.referenced_tweets=false)
        checkPublicMetrics.checked ? (checkedValuesTweet.tweet_public_metrics=true):(checkedValuesTweet.tweet_public_metrics=false)
        checkOrganicMetrics.checked ? (checkedValuesTweet.organic_metrics=true):(checkedValuesTweet.organic_metrics=false)
        checkTweetGeo.checked ? (checkedValuesTweet.tweet_geo=true):(checkedValuesTweet.tweet_geo=false)
        checkSource.checked ? (checkedValuesTweet.source=true):(checkedValuesTweet.source=false)
        checkTweet_created_at.checked ? (checkedValuesTweet.tweet_created_at=true):(checkedValuesTweet.tweet_created_at=false)
        nextRoute=== `/search/${id}`?
            navigate(`/search/${id}`, {state: checkedValuesTweet}) :
            navigate(`/media/${id}`, {state:checkedValuesTweet })
    }


    console.log(checkTweetAuthorId.checked , 'checkTweetAuthorId.checked ');

    return(
        <div className={"NumberOneDiv"}>
            <NewSidebar/>
            <main className={"container main"}>
                <div className={"tweetMainPart"}>
                    <div className={"homeTitle"}>Tweet Fields</div>
                    <div className={"tweetWhole"}>
                        <div className={"tweetOne"}>
                            <div className={"textStyle"}>Default Objects</div>
                            <div className={"textStyle"}>
                                <ul>
                                    <li>ID</li>
                                    <li>Text</li>
                                </ul>
                            </div>
                        </div>
                        <div className={"tweetWholePart"}>
                            <div className={"tweetTwo"}>
                                <div className={"textStyle tweetPart"}>
                                    <div className={"noDivTweet"}>
                                        <span className={"NoSpanTweet"}>Yes</span>
                                    </div>
                                    <span className={"textStyle spanTextTweet"}>
                              Default is to Request All of these. Check ‘No’ to not request this object
                            </span></div>
                                <div className={"wordAndCheckbox nextBoxes"}>
                                    <div className={"searchTwoHeadPart wordBefore"}>author_id</div>
                                    <div className={"checkboxDiv"}>
                                        <input className={"checkboxStyle"} type="checkbox" id={"check"}
                                               // checked={}
                                               checked={checkTweetAuthorId.checked }
                                               onChange={(event) => checkTweetAuthorId.handlerCheckClick(event)}/>
                                    </div>
                                </div>
                                <div className={"wordAndCheckbox nextBoxes"}>
                                    <div className={"searchTwoHeadPart wordBefore"}>conversation_id</div>
                                    <div className={"checkboxDiv"}>
                                        <input className={"checkboxStyle"} type="checkbox" id={"check"}
                                               checked={checkConversationId.checked}
                                               onChange={(event) => checkConversationId.handlerCheckClick(event)}/>
                                    </div>
                                </div>
                                <div className={"wordAndCheckbox nextBoxes"}>
                                    <div className={"searchTwoHeadPart wordBefore"}>entities</div>
                                    <div className={"checkboxDiv"}>
                                        <input className={"checkboxStyle"} type="checkbox" id={"check"}
                                               checked={checkEntities.checked}
                                               onChange={(event) => checkEntities.handlerCheckClick(event)} />
                                    </div>
                                </div>
                                <div className={"wordAndCheckbox nextBoxes"}>
                                    <div className={"searchTwoHeadPart wordBefore"}>context_annotation</div>
                                    <div className={"checkboxDiv"}>
                                        <input className={"checkboxStyle"} type="checkbox" id={"check"}
                                               checked={checkContextAnnotation.checked}
                                               onChange={(event) => checkContextAnnotation.handlerCheckClick(event)}/>
                                    </div>
                                </div>
                                <div className={"wordAndCheckbox nextBoxes hidden"}>
                                    <div className={"searchTwoHeadPart wordBefore"}>attachments</div>
                                    <div className={"checkboxDiv"}>
                                        <input className={"checkboxStyle"} type="checkbox" id={"check"}
                                               checked={checkAttachments.checked}
                                               onChange={(event) => checkAttachments.handlerCheckClick(event)}/>
                                    </div>
                                </div>
                                <div className={"wordAndCheckbox nextBoxes"}>
                                    <div className={"searchTwoHeadPart wordBefore"}>referenced_tweets</div>
                                    <div className={"checkboxDiv"}>
                                        <input className={"checkboxStyle"} type="checkbox" id={"check"}
                                               checked={checkReferencedTweets.checked}
                                               onChange={(event) => checkReferencedTweets.handlerCheckClick(event)}/>
                                    </div>
                                </div>
                                <div className={"wordAndCheckbox nextBoxes"}>
                                    <div className={"searchTwoHeadPart wordBefore"}>public_metrics</div>
                                    <div className={"checkboxDiv"}>
                                        <input className={"checkboxStyle"} type="checkbox" id={"check"}
                                               checked={checkPublicMetrics.checked}
                                               onChange={(event) => checkPublicMetrics.handlerCheckClick(event)}/>
                                    </div>
                                </div>
                                <div className={"wordAndCheckbox nextBoxes organic hidden"}>
                                    <div className={"wordAndCheckboxPart organicOne"}>
                                        <div className={"searchTwoHeadPart wordBefore organicWordDiv"}>organic_metrics</div>
                                        <div className={"checkboxDiv "}>
                                            <input className={"checkboxStyle"} type="checkbox" id={"check"}
                                                   checked={checkOrganicMetrics.checked}
                                                   onChange={(event) => checkOrganicMetrics.handlerCheckClick(event)} />
                                        </div>
                                    </div>
                                    <span className={"textStyle spanTextTweet"}>Requires user context authentication?</span>
                                </div>
                                <div className={"wordAndCheckbox nextBoxes hidden"}>
                                    <div className={"searchTwoHeadPart wordBefore"}>geo</div>
                                    <div className={"checkboxDiv"}>
                                        <input className={"checkboxStyle"} type="checkbox" id={"check"}
                                               checked={checkTweetGeo.checked}
                                               onChange={(event) => checkTweetGeo.handlerCheckClick(event)}/>
                                    </div>
                                </div>
                                <div className={"wordAndCheckbox nextBoxes"}>
                                    <div className={"searchTwoHeadPart wordBefore"}>source</div>
                                    <div className={"checkboxDiv"}>
                                        <input className={"checkboxStyle"} type="checkbox" id={"check"}
                                               checked={checkSource.checked}
                                               onChange={(event) => checkSource.handlerCheckClick(event)}/>
                                    </div>
                                </div>
                                <div className={"wordAndCheckbox nextBoxes"}>
                                    <div className={"searchTwoHeadPart wordBefore"}>created_at</div>
                                    <div className={"checkboxDiv"}>
                                        <input className={"checkboxStyle"} type="checkbox" id={"check"}
                                               checked={checkTweet_created_at.checked}
                                               onChange={(event) => checkTweet_created_at.handlerCheckClick(event)}/>
                                    </div>
                                </div>
                            </div>
                            <div className={"tweetThree"}>
                                {/*<div className={"textStyle"}>Default is to Request All of these. Check ‘No’ to not request this object</div>*/}
                                {/*<div className={"textStyle threePart"}>Requires user context authentication?</div>*/}
                            </div>
                        </div>
                    </div>
                </div>
                <div className={"buttonsDiv"}>
                    <div className='backBtn' onClick={()=>onSubmitTweet(`/search/${id}`)}>Back</div>
                    <div className='nextBtn' onClick={()=>onSubmitTweet(`/media/${id}`)}>Next</div>
                </div>
            </main>
        </div>
    )
}

export default  Tweet_Edit;