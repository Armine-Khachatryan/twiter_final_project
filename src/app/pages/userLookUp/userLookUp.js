import React from "react";
import useCheckboxOne from "../../hooks/useCheckboxOne";
import './style.css';
import NewSidebar from "../../components/newSidebar/newSidebar";




function UserLookUp () {

    return(
        <div className={"NumberOneDiv"}>
            <NewSidebar/>
            <main className={"container main"}>
                <div className={"userLookUpMainPart"}>
                    <div className={"userLookUptitles"}>
                        <div className={"homeTitle userTitle"}>User Lookup</div>
                        <div className={"linkTitle"}>https://developer.twitter.com/en/docs/twitter-api/users/lookup/introduction</div>
                    </div>
                    <div className={"userLookUpWhole"}>
                        <div className={"userLookUpOne"}>
                            <div className={"userIdDiv"}>
                                <label className="userSearch" htmlFor="userLookUpId">Conversation ID</label>
                                <input className="inputUser" type="text" placeholder=""  id={'userLookUpId'} name="userLookUpId"
                                    // value={values.context_id}   onChange={handleChange}
                                />
                            </div>
                            <div className={"userIdDiv"}>
                                <label className="userSearch" htmlFor="userLookId">Username</label>
                                <input className="inputUser" type="text" placeholder=""  id={'userLookId'} name="userLookId"
                                    // value={values.context_id}   onChange={handleChange}
                                />
                            </div>
                        </div>

                        <div className={"userLookUpTwo"}>
                            <div className={"userLookUpThree"}>
                                <div className={"yesDiv textStyle"}>
                                    <span className={"yesSpan"}>Yes</span>
                                </div>
                                <div className={"oneLine"}>
                                    <div className={"wordAndCheckboxPart oneLinePart"}>
                                    <div className={"searchTwoHeadPart wordBefore oneLineWordDiv"}>created_at</div>
                                    <div className={"checkboxDiv"}>
                                        <input className={"checkboxStyle"} type="checkbox" id={"check"}
                                            // checked={checkTweetAuthorId.checked}
                                            // onChange={(event) => checkTweetAuthorId.handlerCheck(event)}
                                        />
                                    </div>
                                    </div>
                                        <span className={"textStyle spanTextUserLook"}>Date account was created</span>
                                </div>
                                <div className={"oneLine nextBoxes"}>
                                    <div className={"wordAndCheckboxPart oneLinePart"}>
                                    <div className={"searchTwoHeadPart wordBefore oneLineWordDiv"}>description</div>
                                    <div className={"checkboxDiv"}>
                                        <input className={"checkboxStyle"} type="checkbox" id={"check"}
                                            // checked={checkTweetAuthorId.checked}
                                            // onChange={(event) => checkTweetAuthorId.handlerCheck(event)}
                                        />
                                    </div>
                                </div>
                                    <span className={"textStyle spanTextUserLook"}>Users bio text</span>
                                </div>
                                <div className={"oneLine nextBoxes"}>
                                    <div className={"wordAndCheckboxPart oneLinePart"}>
                                    <div className={"searchTwoHeadPart wordBefore oneLineWordDiv"}>entities</div>
                                    <div className={"checkboxDiv"}>
                                        <input className={"checkboxStyle"} type="checkbox" id={"check"}
                                            // checked={checkTweetAuthorId.checked}
                                            // onChange={(event) => checkTweetAuthorId.handlerCheck(event)}
                                        />
                                    </div>
                                </div>
                                    <span className={"textStyle spanTextUserLook"}>Details about text in a users description</span>
                                </div>
                            </div>
                            <div className={"userLookUpFour"}>
                                <div className={"textStyle"}>Default Objects</div>
                                <div className={"textStyle"}>
                                    <ul>
                                        <li>ID</li>
                                        <li>Name</li>
                                        <li>User Name</li>
                                    </ul>
                                </div>
                            </div>
                        </div>
                        <div className={"userLook"}>
                                <div className={"wordAndCheckbox nextBoxes"}>
                                    <div className={"searchTwoHeadPart wordBefore"}>Location (Long/Lat)</div>
                                    <div className={"checkboxDiv"}>
                                        <input className={"checkboxStyle"} type="checkbox" id={"check"}
                                            // checked={checkTweetAuthorId.checked}
                                            // onChange={(event) => checkTweetAuthorId.handlerCheck(event)}
                                        />
                                    </div>
                                </div>
                                <div className={"wordAndCheckbox nextBoxes"}>
                                    <div className={"searchTwoHeadPart wordBefore"}>profile_image_url</div>
                                    <div className={"checkboxDiv"}>
                                        <input className={"checkboxStyle"} type="checkbox" id={"check"}
                                            // checked={checkTweetAuthorId.checked}
                                            // onChange={(event) => checkTweetAuthorId.handlerCheck(event)}
                                        />
                                    </div>
                                </div>
                                <div className={"oneLine nextBoxes"}>
                                    <div className={"wordAndCheckboxPart oneLinePart"}>
                                    <div className={"searchTwoHeadPart wordBefore oneLineWordDiv"}>protected</div>
                                    <div className={"checkboxDiv"}>
                                        <input className={"checkboxStyle"} type="checkbox" id={"check"}
                                            // checked={checkTweetAuthorId.checked}
                                            // onChange={(event) => checkTweetAuthorId.handlerCheck(event)}
                                        />
                                    </div>
                                </div>
                                    <span className={"textStyle spanTextUserLook"}>Info if users tweets are private</span>
                                </div>
                                <div className={"oneLine nextBoxes"}>
                                    <div className={"wordAndCheckboxPart oneLinePart"}>
                                    <div className={"searchTwoHeadPart wordBefore oneLineWordDiv"}>public_metrics</div>
                                    <div className={"checkboxDiv"}>
                                        <input className={"checkboxStyle"} type="checkbox" id={"check"}
                                            // checked={checkTweetAuthorId.checked}
                                            // onChange={(event) => checkTweetAuthorId.handlerCheck(event)}
                                        />
                                    </div>
                                </div>
                                    <span className={"textStyle spanTextUserLook"}>Contains details about activity for this users.</span>
                                </div>
                                <div className={"oneLine nextBoxes"}>
                                    <div className={"wordAndCheckboxPart oneLinePart"}>
                                    <div className={"searchTwoHeadPart wordBefore oneLineWordDiv"}>verified</div>
                                    <div className={"checkboxDiv"}>
                                        <input className={"checkboxStyle"} type="checkbox" id={"check"}
                                            // checked={checkTweetAuthorId.checked}
                                            // onChange={(event) => checkTweetAuthorId.handlerCheck(event)}
                                        />
                                    </div>
                                </div>
                                    <span className={"textStyle spanTextUserLook"}>Is users verified</span>
                                </div>
                                <div className={"oneLine nextBoxes bigDiv"}>
                                    <div className={"wordAndCheckboxPart oneLinePart"}>
                                    <div className={"searchTwoHeadPart wordBefore oneLineWordDiv"}>pinned_tweet_id</div>
                                    <div className={"checkboxDiv"}>
                                        <input className={"checkboxStyle"} type="checkbox" id={"check"}
                                            // checked={checkTweetAuthorId.checked}
                                            // onChange={(event) => checkTweetAuthorId.handlerCheck(event)}
                                        />
                                    </div>
                                </div>
                                    <div className={"spansDiv"}>
                                <span className={"textStyle spanTextUserLook"}>Tweet id of users pinned tweet</span>
                                    <span className={"signSpan"}> {`<`} </span>
                                        <div className={"spansSmallDiv textStyle"}>
                                    <span> Note: Must also include/request Expansion:</span>
                                    <div className={"belowSpan"}>expansions=pinned_tweet_id</div>
                                    </div>
                                    </div>
                            </div>
                                <div className={"oneLine nextBoxes"}>
                                    <div className={"wordAndCheckboxPart oneLinePart"}>
                                    <div className={"searchTwoHeadPart wordBefore oneLineWordDiv"}>url</div>
                                    <div className={"checkboxDiv"}>
                                        <input className={"checkboxStyle"} type="checkbox" id={"check"}
                                            // checked={checkTweetAuthorId.checked}
                                            // onChange={(event) => checkTweetAuthorId.handlerCheck(event)}
                                        />
                                    </div>
                                </div>
                                    <span className={"textStyle spanTextUserLook"}>Users profile URL</span>
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

export default UserLookUp;