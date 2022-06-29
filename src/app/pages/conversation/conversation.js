import React from "react";
import useCheckboxOne from "../../hooks/useCheckboxOne";
import {useLocation, useNavigate} from "react-router-dom";
import './style.css';
import Sidebar from "../../components/sidebar/sidebar";
import NewSidebar from "../../components/newSidebar/newSidebar";



function Conversation () {

    const { state } = useLocation();

    const conversationLookUpInformation=state;
    console.log (state, "tweetState")
    const navigate = useNavigate();


    return(
        <div className={"NumberOneDiv"}>
            <NewSidebar/>
            <main className={"container main"}>
                <div className={"conversationMainPart"}>
                    <div className={"homeTitle"}>Conversation Lookup</div>
                    <div className={"conversationWhole"}>
                        <div className={"conversationOne"}>
                            <div className={"conversationIdDiv"}>
                                    <label className="conversationSearch" htmlFor="conversationId">Conversation ID</label>
                                    <input className="inputConversation" type="text" placeholder=""  id={'conversationId'} name="conversationId"
                                           // value={values.context_id}   onChange={handleChange}
                                    />
                            </div>
                            <div className={"conversationOnePart"}>
                                <div className={"excludeDiv textStyle"}>
                                    <span className={"excludeSpan"}>Exclude</span>
                                </div>
                                <div className={"wordAndCheckbox"}>
                                    <div className={"searchTwoHeadPart wordBefore"}>is:retweet</div>
                                    <div className={"checkboxDiv"}>
                                        <input className={"checkboxStyle"} type="checkbox" id={"check"}
                                               // checked={checkConversationId.checked}
                                               // onChange={(event) => checkConversationId.handlerCheck(event)}
                                        />
                                    </div>
                                </div>
                                <div className={"wordAndCheckbox nextBoxes"}>
                                    <div className={"searchTwoHeadPart wordBefore"}>is:quote</div>
                                    <div className={"checkboxDiv"}>
                                        <input className={"checkboxStyle"} type="checkbox" id={"check"}
                                               // checked={checkConversationId.checked}
                                               // onChange={(event) => checkConversationId.handlerCheck(event)}
                                        />
                                    </div>
                                </div>
                            </div>
                        </div>


<div className={"conversationTwo"}>
                        <div className={"conversationTwoPart"}>
                            <div className={"noDiv textStyle"}>
                                <span className={"NoSpan"}>No</span>
                            </div>
                            <span className={"textStyle spanTextConversation"}>
                             Default is to Request All of these. Check ‘No’ to not request this object
                            </span></div>

                        <div className={"wordAndCheckbox"}>
                            <div className={"searchTwoHeadPart wordBefore"}>author_id</div>
                            <div className={"checkboxDiv"}>
                                <input className={"checkboxStyle"} type="checkbox" id={"check"}
                                       // checked={checkTweetAuthorId.checked}
                                       // onChange={(event) => checkTweetAuthorId.handlerCheck(event)}
                                />
                            </div>
                        </div>
                        <div className={"wordAndCheckbox nextBoxes"}>
                            <div className={"searchTwoHeadPart wordBefore"}>conversation_id</div>
                            <div className={"checkboxDiv"}>
                                <input className={"checkboxStyle"} type="checkbox" id={"check"}
                                       // checked={checkConversationId.checked}
                                       // onChange={(event) => checkConversationId.handlerCheck(event)}
                                />
                            </div>
                        </div>
                        <div className={"wordAndCheckbox nextBoxes"}>
                            <div className={"searchTwoHeadPart wordBefore"}>created_at</div>
                            <div className={"checkboxDiv"}>
                                <input className={"checkboxStyle"} type="checkbox" id={"check"}
                                       // checked={checkEntities.checked}
                                       // onChange={(event) => checkEntities.handlerCheck(event)}
                                />
                            </div>
                        </div>
                        <div className={"wordAndCheckbox nextBoxes"}>
                            <div className={"searchTwoHeadPart wordBefore"}>in_reply_to_user_id</div>
                            <div className={"checkboxDiv"}>
                                <input className={"checkboxStyle"} type="checkbox" id={"check"}
                                       // checked={checkContextAnnotation.checked}
                                       // onChange={(event) => checkContextAnnotation.handlerCheck(event)}
                                />
                            </div>
                        </div>
    <div className={"wordAndCheckbox nextBoxes  entities"}>
        <div className={"wordAndCheckboxPart entitiesPart"}>
            <div className={"searchTwoHeadPart wordBefore entitiesWordDiv"}>entities</div>
            <div className={"checkboxDiv"}>
                <input className={"checkboxStyle"} type="checkbox" id={"check"}
                       // checked={checkOrganicMetrics.checked}
                       // onChange={(event) => checkOrganicMetrics.handlerCheck(event)}
                />
            </div>
        </div>
        <span className={"textStyle spanTextTweet"}>Doubt these work for this query type - but worth testing</span>
    </div>
    <div className={"wordAndCheckbox nextBoxes"}>
        <div className={"searchTwoHeadPart wordBefore"}>context_annotation</div>
        <div className={"checkboxDiv"}>
            <input className={"checkboxStyle"} type="checkbox" id={"check"}
                // checked={checkContextAnnotation.checked}
                // onChange={(event) => checkContextAnnotation.handlerCheck(event)}
            />
        </div>
    </div>
    <div className={"wordAndCheckbox nextBoxes"}>
        <div className={"searchTwoHeadPart wordBefore"}>attachments</div>
        <div className={"checkboxDiv"}>
            <input className={"checkboxStyle"} type="checkbox" id={"check"}
                // checked={checkContextAnnotation.checked}
                // onChange={(event) => checkContextAnnotation.handlerCheck(event)}
            />
        </div>
    </div>
</div>
                    </div>
                </div>
                <div className={"nextBtn nextSearch"}
                     // onClick={handleSubmit}
                >Test</div>
            </main>
        </div>
    )
}


export default Conversation;