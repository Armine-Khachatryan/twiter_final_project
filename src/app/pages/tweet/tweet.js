import React from "react";
import useCheckboxTwoEdit from "../../hooks/useCheckboxTwoEdit";
import {useLocation, useNavigate} from "react-router-dom";
import './style.css';
import NewSidebar from "../../components/newSidebar/newSidebar";



function Tweet () {
    console.log(window.location.pathname);
    const { state } = useLocation();
    const tweetPageState=state;
    console.log (state, "tweetState")
    const navigate = useNavigate();
    // const { id } = useParams();

    const checkTweetAuthorId = useCheckboxTwoEdit(tweetPageState.tweet_author_id);
    const checkConversationId = useCheckboxTwoEdit(tweetPageState.conversation_id );
    const checkEntities = useCheckboxTwoEdit(tweetPageState.entities);
    const checkContextAnnotation = useCheckboxTwoEdit(tweetPageState.context_annotation );
    const checkAttachments = useCheckboxTwoEdit(tweetPageState.attachments );
    const checkReferencedTweets = useCheckboxTwoEdit(tweetPageState.referenced_tweets );
    const checkPublicMetrics = useCheckboxTwoEdit(tweetPageState.tweet_public_metrics);
    const checkOrganicMetrics = useCheckboxTwoEdit(tweetPageState.organic_metrics );
    const checkTweetGeo = useCheckboxTwoEdit(tweetPageState.tweet_geo );
    const checkSource = useCheckboxTwoEdit(tweetPageState.source);
    const checkTweet_created_at = useCheckboxTwoEdit(tweetPageState.tweet_created_at);

    console.log(checkTweetAuthorId, 'sdasdasddas');
    // const handleRouteTweetPage =(checkedValuesTweet)=>{
    //     if(window.location.pathname ==="/tweet"){
    //         navigate('/media', {state: checkedValuesTweet})
    //     }
    //     else{
    //         navigate(`/media/${id}`, {state: checkedValuesTweet})
    //     }
    // }
    console.log(checkTweetAuthorId);

    const onSubmitTweet = (nextRoute) => {
        const checkedValuesTweet={...tweetPageState}
        checkedValuesTweet.tweet_author_id = checkTweetAuthorId.checked;
        checkedValuesTweet.conversation_id = checkConversationId.checked;
        checkedValuesTweet.entities = checkEntities.checked;
        checkedValuesTweet.context_annotation = checkContextAnnotation.checked;
        checkedValuesTweet.attachments = checkAttachments.checked;
        checkedValuesTweet.referenced_tweets = checkReferencedTweets.checked;
        checkedValuesTweet.tweet_public_metrics = checkPublicMetrics.checked;
        checkedValuesTweet.organic_metrics = checkOrganicMetrics.checked;
        checkedValuesTweet.tweet_geo = checkTweetGeo.checked;
        checkedValuesTweet.source = checkSource.checked;
        checkedValuesTweet.tweet_created_at = checkTweet_created_at.checked;
        // checkTweetAuthorId.checked ? (checkedValuesTweet.tweet_author_id = true):(checkedValuesTweet.tweet_author_id = false)
        // checkConversationId.checked ? (checkedValuesTweet.conversation_id=true):(checkedValuesTweet.conversation_id=false)
        nextRoute=== 'search'?
            navigate(`/search`, {state:{
                    tweetBackState: checkedValuesTweet
                } }) :
            // navigate(`/search`, {state:checkedValuesTweet}) :
            navigate(`/media`, {state: checkedValuesTweet})

        console.log(checkedValuesTweet, 'fdfd');
    }


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
                                               checked={checkTweetAuthorId.checked}
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
                    <div className='backBtn' onClick={()=>onSubmitTweet('search')}>Back</div>
                    <div className='nextBtn' onClick={()=>onSubmitTweet('media')}>Next</div>
                </div>
            </main>
        </div>
    )
}

export default  Tweet;