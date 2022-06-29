import React, {useState} from "react";
import useCheckboxYesEdit from "../../hooks/useCheckboxYesEdit";
import {useLocation, useNavigate, useParams} from "react-router-dom";
import DatePicker from "react-datepicker";
import Calendar from "../../assets/images/Calendar.png";
import "react-datepicker/dist/react-datepicker.css";
import './style.css';
import NewSidebar from "../../components/newSidebar/newSidebar";
import LanguageInputSearchEditPart from "../../components/LanguageInputSearchEditPart/LanguageInputSearchEditPart";


function Search_Edit () {

    const navigate = useNavigate();
    const location = useLocation()
    console.log(location.pathname);

    const {state} =useLocation();
    const stateFromEditBtn=state;
    console.log(stateFromEditBtn, "stateFromEditBtn");
    const { id } = useParams();



    const checkRetWeet = useCheckboxYesEdit(stateFromEditBtn.is_retweet);
    console.log(checkRetWeet, "checkRetWeet");
    const checkReply = useCheckboxYesEdit(stateFromEditBtn.is_reply);
    const checkQuote = useCheckboxYesEdit(stateFromEditBtn.is_quote);
    const checkVerified = useCheckboxYesEdit(stateFromEditBtn.is_verified);
    const checkMentions = useCheckboxYesEdit(stateFromEditBtn.has_mentions);
    const checkProfile = useCheckboxYesEdit(stateFromEditBtn.has_profile_geo);
    const checkLinks = useCheckboxYesEdit(stateFromEditBtn.has_links);
    const checkHashtags = useCheckboxYesEdit(stateFromEditBtn.has_hashtags);
    const checkMedia = useCheckboxYesEdit(stateFromEditBtn.has_media);
    const checkImages = useCheckboxYesEdit(stateFromEditBtn.has_images);
    const checkVideo = useCheckboxYesEdit(stateFromEditBtn.has_video);

    const [startDate, setStartDate] = useState("");
    const [endDate, setEndDate] = useState("");

    const [values, setValues] = useState({
        twitter_query: stateFromEditBtn.twitter_query,
        context_id: stateFromEditBtn.context_id,
        exact_phrase: stateFromEditBtn.exact_phrase,
        hashtag:stateFromEditBtn.hashtag,
        contains:  stateFromEditBtn.contains,
        max_results:stateFromEditBtn.max_results,
        profile_country:stateFromEditBtn.profile_country,
        language: stateFromEditBtn.language,
        // start_date: '',
        // end_date:''
    });

    console.log(stateFromEditBtn.is_retweet);
    console.log(checkRetWeet.checked);

    const [maxResultErrors, setMaxResultErrors] = useState("")
    const [twitterQueryError, setTwitterQueryError] = useState("")

    const handleChange = ({target: {name, value}}) => {
        console.log(name, value, "testestestestestes")
        setValues({
            ...values,
            [name]: value,
        });

        let maxResultsMessage = null;

        if (values.twitter_query) {
            setTwitterQueryError("")
        }
        console.log(values.max_results);
        if ((value <= 0 || value > 100) && name === 'max_results') {
            maxResultsMessage = "The value should be from 10 to 100";
            setMaxResultErrors(maxResultsMessage)
            // return
        } else {
            setMaxResultErrors("")
        }
    }
    const handleSubmit = (e) => {
        const {
            twitter_query,
            context_id,
            exact_phrase,
            hashtag,
            contains,
            max_results,
            profile_country,
            language,
            // start_date,
            // end_date
        } = values;

        const data = {
            twitter_query,
            context_id,
            exact_phrase,
            hashtag,
            contains,
            max_results:Number(max_results),
            profile_country,
            language,
            startDate: startDate? new Date(startDate).toISOString() :"",
            endDate: endDate? new Date(endDate).toISOString(): "",
            // endDate: moment(endDate).format('YYYY-MM-DD'),
        }

        let twitterQueryMessage = null;

        console.log(startDate);
        console.log(data);
        const checkedValue = {...stateFromEditBtn};
        checkRetWeet.checkedName ? (checkedValue.is_retweet = true):(checkedValue.is_retweet = false)
        checkReply.checkedName ? (checkedValue.is_reply = true) : (checkedValue.is_reply = false)
        checkQuote.checkedName ? (checkedValue.is_quote = true)  :(checkedValue.is_quote = false)
        checkVerified.checkedName ? (checkedValue.is_verified = true)  :(checkedValue.is_verified = false)
        checkMentions.checkedName ? (checkedValue.has_mentions = true)  :(checkedValue.has_mentions = false)
        checkProfile.checkedName ? (checkedValue.has_profile_geo = true) : (checkedValue.has_profile_geo = false)
        checkLinks.checkedName ? (checkedValue.has_links = true) : (checkedValue.has_links = false)
        checkHashtags.checkedName ? (checkedValue.has_hashtags = true) : (checkedValue.has_hashtags = false)
        checkMedia.checkedName ? (checkedValue.has_media = true) :(checkedValue.has_media = false)
        checkImages.checkedName ? (checkedValue.has_images = true) :(checkedValue.has_images = false)
        checkVideo.checkedName ? (checkedValue.has_video = true) :(checkedValue.has_video = false)

        if(!data.twitter_query){
            twitterQueryMessage= "Please fill the twitter query input";
            setTwitterQueryError(twitterQueryMessage);
        }

        else {
            setTwitterQueryError("");
            navigate(`/tweet/${id}`, {state: {...checkedValue, ...data}},)
        }
    }


    return(
        <div className={"NumberOneDiv"}>
            <NewSidebar/>
            <main className={"container main"}>
                <div className={"searchWhole"}>
                    <div className={"searchOne"}>
                        <div className={"homeTitle"}>Search Query</div>
                        <div className="searchInputDiv">
                            <label className="labelSearch" htmlFor="twitterQuery" >Twitter Query *</label>
                            <input className={`inputSearch ${!values.twitter_query && twitterQueryError ? "errorClass" : ""}`} type="text" placeholder=""  id={'twitterQuery'} name="twitter_query" value={values.twitter_query}   onChange={handleChange}/>
                            <div className="text-danger">
                                {twitterQueryError}
                            </div>
                        </div>

                        <div className="searchInputDiv">
                            <label className="labelSearch" htmlFor="contextId" >Context ID</label>
                            <input className="inputSearch" type="text" placeholder=""  id={'contextId'} name="context_id" value={values.context_id}   onChange={handleChange}/>
                        </div>
                        <div className="searchInputDiv hidden">
                            <label className="labelSearch" htmlFor="exactPhrase" >Exact Phrase</label>
                            <input className="inputSearch" type="text" placeholder=""  id={'exactPhrase'}  name="exact_phrase" value={values.exact_phrase}  onChange={handleChange}/>
                        </div>
                        <div className="searchInputDiv">
                            <label className="labelSearch" htmlFor="hashtag" >Hashtag -#</label>
                            <input className="inputSearch" type="text" placeholder="" id={'hashtag'}  name="hashtag" value={values.hashtag}  onChange={handleChange}/>
                        </div>
                        <div className="searchInputDiv hidden">
                            <label className="labelSearch" htmlFor="urlContains" >URL Contains</label>
                            <input className="inputSearch" type="text" placeholder=""  id={'urlContains'}  name="contains" value={values.contains}  onChange={handleChange}/>
                        </div>
                        {/*<div className={"selectdivs"}>*/}
                        <div className="searchInputSmallDiv hidden">
                            <label className="labelSearchSmall" htmlFor="profileCountry" >Profile Country</label>
                            <select className="selectInputSmall"   id={'profileCountry'} name="profile_country" onChange={handleChange}>
                                <option  value={values.profile_country}></option>
                                <option  value="USA">USA</option>
                                <option  value="Spain" >Spain</option>
                                <option  value="Germany">Germany</option>
                            </select>
                        </div>
                      <LanguageInputSearchEditPart onhandleChange={handleChange} values={values}/>
                        <div className="selectdivs">
                            <div className="searchInputSmallDiv">
                                <label className="labelSearchSmall" htmlFor="startDate" >Start Date</label>
                                <div className={"divForCalendar"}>
                                    <label htmlFor="startDate">
                                        <img className={"calendarImg"} src={Calendar} alt="calendar"/>
                                    </label>
                                    <DatePicker className="inputSearchSmall"  name="startDate" id={'startDate'} selected={startDate} onChange={(date) => {
                                        setStartDate(date)
                                    }}/>
                                </div>
                            </div>
                            <div className="searchInputSmallDiv">
                                <label className="labelSearchSmall" htmlFor="endDate" >End Date</label>
                                <div className={"divForCalendar"}>
                                    <label htmlFor="endDate">
                                        <img className={"calendarImg"} src={Calendar} alt="calendar"/>
                                    </label>
                                    <DatePicker className="inputSearchSmall"  name="endDate" id={'endDate'} selected={endDate} onChange={(date) => setEndDate(date)}/>
                                </div>
                            </div>
                        </div>
                        <div className={`maxResultDiv`}>
                            <label className="labelSearchSmall" htmlFor="maxResults" >Max Results</label>
                            <input
                                value={values.max_results}
                                className={`maxInput ${(+values.max_results < 10 || +values.max_results > 100) ? "errorClass" : ""}`}
                                type="number"
                                // min="1"
                                // max="100"
                                id={'maxResults'}
                                name="max_results"
                                onChange={handleChange} />
                            <div className="text-danger">
                                {maxResultErrors}
                            </div>
                        </div>


                    </div>
                    <div className={"searchTwo"}>
                        <div className={"searchTwoHead"}>
                            <span className={"YesNoSpan"}>
                            <div className={"searchTwoHeadPart"}>Yes</div>
                            <div className={"searchTwoHeadPart no"}>No</div>
                            </span>
                        </div>

                        <div className={"wordAndCheckbox"}>
                            <div className={"searchTwoHeadPart wordBefore"}>is:retweet</div>
                            <div className={"twoCheckboxes"}>
                                <div className={"checkboxDiv one"}>
                                    <input className={"checkboxStyle"} type="checkbox" id={"check"} name="Yes"
                                           checked={checkRetWeet.checked === "Yes"}
                                           onChange={(event) => checkRetWeet.handlerCheck(event)}/>
                                </div>
                                <div className={"checkboxDiv"}>
                                    <input className={"checkboxStyle"} type="checkbox" id={"check"} name="No"
                                           checked={checkRetWeet.checked === "No"}
                                           onChange={(event) => checkRetWeet.handlerCheck(event)}/>
                                </div>
                            </div>
                        </div>
                        <div className={"wordAndCheckbox nextBoxes"}>
                            <div className={"searchTwoHeadPart wordBefore"}>is:reply</div>
                            <div className={"twoCheckboxes"}>
                                <div className={"checkboxDiv one"}>
                                    <input className={"checkboxStyle"} type="checkbox" id={"check"} name="Yes"
                                           checked={checkReply.checked === "Yes"}
                                           onChange={(event) => checkReply.handlerCheck(event)}/>
                                </div>
                                <div className={"checkboxDiv"}>
                                    <input className={"checkboxStyle"} type="checkbox" id={"check"} name="No"
                                           checked={checkReply.checked === "No"}
                                           onChange={(event) => checkReply.handlerCheck(event)}/>
                                </div>
                            </div>
                        </div>
                        <div className={"wordAndCheckbox nextBoxes"}>
                            <div className={"searchTwoHeadPart wordBefore"}>is:quote</div>
                            <div className={"twoCheckboxes"}>
                                <div className={"checkboxDiv one"}>
                                    <input className={"checkboxStyle"} type="checkbox" id={"check"} name="Yes"
                                           checked={checkQuote.checked === "Yes"}
                                           onChange={(event) => checkQuote.handlerCheck(event)}/>
                                </div>
                                <div className={"checkboxDiv"}>
                                    <input className={"checkboxStyle"} type="checkbox" id={"check"} name="No"
                                           checked={checkQuote.checked === "No"}
                                           onChange={(event) => checkQuote.handlerCheck(event)}/>
                                </div>
                            </div>
                        </div>
                        <div className={"wordAndCheckbox nextBoxes"}>
                            <div className={"searchTwoHeadPart wordBefore"}>is:verified</div>
                            <div className={"twoCheckboxes"}>
                                <div className={"checkboxDiv one"}>
                                    <input className={"checkboxStyle"} type="checkbox" id={"check"} name="Yes"
                                           checked={checkVerified.checked === "Yes"}
                                           onChange={(event) => checkVerified.handlerCheck(event)}/>
                                </div>
                                <div className={"checkboxDiv"}>
                                    <input className={"checkboxStyle"} type="checkbox" id={"check"} name="No"
                                           checked={checkVerified.checked === "No"}
                                           onChange={(event) => checkVerified.handlerCheck(event)}/>
                                </div>
                            </div>
                        </div>
                        <div className={"searchTwoHead belowOne"}>
                                  <span className={"YesNoSpan"}>
                                <div className={"searchTwoHeadPart"}>Yes</div>
                                <div className={"searchTwoHeadPart no"}>No</div>
                                  </span>
                        </div>
                        <div className={"wordAndCheckbox "}>
                            <div className={"searchTwoHeadPart wordBefore"}>has:mentions</div>
                            <div className={"twoCheckboxes"}>
                                <div className={"checkboxDiv one"}>
                                    <input className={"checkboxStyle"} type="checkbox" id={"check"} name="Yes"
                                           checked={checkMentions.checked === "Yes"}
                                           onChange={(event) => checkMentions.handlerCheck(event)}/>
                                </div>
                                <div className={"checkboxDiv"}>
                                    <input className={"checkboxStyle"} type="checkbox" id={"check"} name="No"
                                           checked={checkMentions.checked === "No"}
                                           onChange={(event) => checkMentions.handlerCheck(event)}/>
                                </div>
                            </div>
                        </div>
                        <div className={"wordAndCheckbox nextBoxes"}>
                            <div className={"searchTwoHeadPart wordBefore"}>has:profile geo</div>
                            <div className={"twoCheckboxes"}>
                                <div className={"checkboxDiv one"}>
                                    <input className={"checkboxStyle"} type="checkbox" id={"check"}  name="Yes"
                                           checked={checkProfile.checked === "Yes"}
                                           onChange={(event) => checkProfile.handlerCheck(event)}/>
                                </div>
                                <div className={"checkboxDiv"}>
                                    <input className={"checkboxStyle"} type="checkbox" id={"check"} name="No"
                                           checked={checkProfile.checked === "No"}
                                           onChange={(event) => checkProfile.handlerCheck(event)}/>
                                </div>
                            </div>
                        </div>
                        <div className={"wordAndCheckbox nextBoxes"}>
                            <div className={"searchTwoHeadPart wordBefore"}>has:links</div>
                            <div className={"twoCheckboxes"}>
                                <div className={"checkboxDiv one"}>
                                    <input className={"checkboxStyle"} type="checkbox" id={"check"} name="Yes"
                                           checked={checkLinks.checked === "Yes"}
                                           onChange={(event) => checkLinks.handlerCheck(event)}/>
                                </div>
                                <div className={"checkboxDiv"}>
                                    <input className={"checkboxStyle"} type="checkbox" id={"check"} name="No"
                                           checked={checkLinks.checked === "No"}
                                           onChange={(event) => checkLinks.handlerCheck(event)}/>
                                </div>
                            </div>
                        </div>
                        <div className={"wordAndCheckbox nextBoxes"}>
                            <div className={"searchTwoHeadPart wordBefore"}>has:hashtags</div>
                            <div className={"twoCheckboxes"}>
                                <div className={"checkboxDiv one"}>
                                    <input className={"checkboxStyle"} type="checkbox" id={"check"} name="Yes"
                                           checked={checkHashtags.checked === "Yes"}
                                           onChange={(event) => checkHashtags.handlerCheck(event)}/>
                                </div>
                                <div className={"checkboxDiv"}>
                                    <input className={"checkboxStyle"} type="checkbox" id={"check"} name="No"
                                           checked={checkHashtags.checked === "No"}
                                           onChange={(event) => checkHashtags.handlerCheck(event)}/>
                                </div>
                            </div>
                        </div>
                        <div className={"wordAndCheckbox nextBoxes"}>
                            <div className={"searchTwoHeadPart wordBefore"}>has:media</div>
                            <div className={"twoCheckboxes"}>
                                <div className={"checkboxDiv one"}>
                                    <input className={"checkboxStyle"} type="checkbox" id={"check"} name="Yes"
                                           checked={checkMedia.checked === "Yes"}
                                           onChange={(event) => checkMedia.handlerCheck(event)}/>
                                </div>
                                <div className={"checkboxDiv"}>
                                    <input className={"checkboxStyle"} type="checkbox" id={"check"} name="No"
                                           checked={checkMedia.checked === "No"}
                                           onChange={(event) => checkMedia.handlerCheck(event)}/>
                                </div>
                            </div>
                        </div>
                        <div className={"wordAndCheckbox nextBoxes"}>
                            <div className={"searchTwoHeadPart wordBefore"}>has:images</div>
                            <div className={"twoCheckboxes"}>
                                <div className={"checkboxDiv one"}>
                                    <input className={"checkboxStyle"} type="checkbox" id={"check"} name="Yes"
                                           checked={checkImages.checked === "Yes"}
                                           onChange={(event) => checkImages.handlerCheck(event)}/>
                                </div>
                                <div className={"checkboxDiv"}>
                                    <input className={"checkboxStyle"} type="checkbox" id={"check"} name="No"
                                           checked={checkImages.checked === "No"}
                                           onChange={(event) => checkImages.handlerCheck(event)}/>
                                </div>
                            </div>
                        </div>
                        <div className={"wordAndCheckbox nextBoxes"}>
                            <div className={"searchTwoHeadPart wordBefore"}>has:video</div>
                            <div className={"twoCheckboxes"}>
                                <div className={"checkboxDiv one"}>
                                    <input className={"checkboxStyle"} type="checkbox" id={"check" }name="Yes"
                                           checked={checkVideo.checked === "Yes"}
                                           onChange={(event) => checkVideo.handlerCheck(event)}/>
                                </div>
                                <div className={"checkboxDiv"}>
                                    <input className={"checkboxStyle"} type="checkbox" id={"check"} name="No"
                                           checked={checkVideo.checked === "No"}
                                           onChange={(event) => checkVideo.handlerCheck(event)}/>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <div className={"nextBtn nextSearch"} onClick={handleSubmit}>Next</div>
            </main>
        </div>
    )
}


export default Search_Edit;