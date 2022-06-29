import React, {useState} from "react";
import useCheckboxYes from "../../hooks/useCheckboxYes";
import {useLocation, useNavigate, useParams} from "react-router-dom";
// import Sidebar from "../../components/sidebar/sidebar";
import DatePicker from "react-datepicker";
import Calendar from "../../assets/images/Calendar.png";
import "react-datepicker/dist/react-datepicker.css";
import './style.css';
import NewSidebar from "../../components/newSidebar/newSidebar";


function Search () {

    const navigate = useNavigate();
    const location = useLocation()
    console.log(location.pathname);

    const {state} =useLocation();
    const stateFromEditBtn=state;
    console.log(stateFromEditBtn, "stateFromEditBtn");
    const { id } = useParams();



    const checkRetWeet = useCheckboxYes();
    console.log(checkRetWeet, "checkRetWeet");
    const checkReply = useCheckboxYes();
    console.log(checkReply, "checkReply");
    const checkQuote = useCheckboxYes();
    const checkVerified = useCheckboxYes();
    const checkMentions = useCheckboxYes();
    const checkProfile = useCheckboxYes();
    const checkLinks = useCheckboxYes();
    const checkHashtags = useCheckboxYes();
    const checkMedia = useCheckboxYes();
    const checkImages = useCheckboxYes();
    const checkVideo = useCheckboxYes();

    const [startDate, setStartDate] = useState("");
    const [endDate, setEndDate] = useState("");

    const [values, setValues] = useState({
        twitter_query: stateFromEditBtn? stateFromEditBtn.twitter_query: "",
        context_id: stateFromEditBtn? stateFromEditBtn.context_id: "",
        exact_phrase:stateFromEditBtn? stateFromEditBtn.exact_phrase :'',
        hashtag: stateFromEditBtn? stateFromEditBtn.hashtag: '',
        contains: stateFromEditBtn? stateFromEditBtn.contains :'',
        max_results:stateFromEditBtn? stateFromEditBtn.max_results: 10,
        profile_country:stateFromEditBtn? stateFromEditBtn.profile_country: '',
        language: stateFromEditBtn? stateFromEditBtn.language:'',
        // start_date: '',
        // end_date:''
    });

    const [maxResultErrors, setMaxResultErrors] = useState("")
    const [twitterQueryError, setTwitterQueryError] = useState("")

    const handleChange = ({target: {name, value}}) => {
        console.log(name, value, "testestestestestes")
        setValues({
            ...values,
            [name]: value,
        });

        let maxResultsMessage=null;

        if(values.twitter_query) {
            setTwitterQueryError("")
        }
        console.log(values.max_results);
        if((value <=0 ||value >100) && name === 'max_results'){
            maxResultsMessage="The value should be from 10 to 100";
            setMaxResultErrors(maxResultsMessage)
            // return
        } else{
            setMaxResultErrors("")
        }


        // if(values.max_results >100){
        //     maxResultsMessage="The value should be from 1 to 100";
        //     setMaxResultErrors(maxResultsMessage)
        // }




        //
        // else{
        //     setMaxResultErrors(" ");
        // }
    };

    // const handleChangeMaxInput = ({target: {name, value}}) => {
    //     setValues({
    //         [name]: value,
    //     });
    //
    //     if(value<=0) {
    //         setMaxResultErrors("The numbers should be from 1 to 100");
    //             setValues({
    //                 [name]:1
    //             })
    //     }
    //
    //     if(value>100){
    //         setMaxResultErrors("The numbers should be from 1 to 100");
    //         return
    //     }
    //
    //     else {
    //         setMaxResultErrors("");
    //     }
    //     console.log(name,value,"testestestestestes")
    // };


    const handleRouteTweetPage =(checkedValue, data)=>{
        if(window.location.pathname ==="/search"){
            navigate('/tweet', {state: {...checkedValue, ...data}},)
        }
        else{
            navigate(`/tweet/${id}`, {state: {...checkedValue, ...data}},)
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
        const checkedValue = {}
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
            handleRouteTweetPage(checkedValue, data)
            // navigate('/tweet', {state: {...checkedValue, ...data}},)
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
                        <div className="searchInputDiv">
                            <label className="labelSearch" htmlFor="language" >Language</label>
                            <select className="selectInput"  name="language" id={'language'} onChange={handleChange}>
                                <option value={values.language}>English</option>
                                {/*<option value="English">English</option>*/}
                                {/*<option value="Spain" >Spain</option>*/}
                                {/*<option  value="German">German</option>*/}
                                <option value="am">Amharic</option>
                                <option value="ar">Arabic</option>
                                <option value="hy">Armenian</option>
                                <option value="eu">Basque</option>
                                <option value="bn">Bengali</option>
                                <option value="bg">Bulgarian</option>
                                <option value="my">Burmese</option>
                                <option value="km">Cambodian</option>
                                <option value="ca">Catalan</option>
                                <option value="ckb">Central Kurdish</option>
                                <option value="zh">Chinese</option>
                                <option value="cs">Czech</option>
                                <option value="da">Danish</option>
                                <option value="nl">Dutch</option>
                                <option value="en">English</option>
                                <option value="et">Estonian</option>
                                <option value="fa">Farsi</option>
                                <option value="fi">Finnish</option>
                                <option value="fr">French</option>
                                <option value="ka">Georgian</option>
                                <option value="de">German</option>
                                <option value="el">Greek</option>
                                <option value="gu">Gujarati</option>
                                <option value="ht">Haitian</option>
                                <option value="he">Hebrew</option>
                                <option value="hi">Hindi</option>
                                <option value="hu">Hungarian</option>
                                <option value="is">Icelandic</option>
                                <option value="id">Indonesian</option>
                                <option value="it">Italian</option>
                                <option value="ja">Japanese</option>
                                <option value="kn">Kannada</option>
                                <option value="ko">Korean</option>
                                <option value="lo">Laothian</option>
                                <option value="lv">Latvian</option>
                                <option value="lt">Lithuanian</option>
                                <option value="ml">Malayalam</option>
                                <option value="dv">Maldivien</option>
                                <option value="mr">Marathi</option>
                                <option value="ne">Nepali</option>
                                <option value="no">Norwegian</option>
                                <option value="pa">Punjabi</option>
                                <option value="pl">Polish</option>
                                <option value="pt">Portuguese</option>
                                <option value="ro">Romanian</option>
                                <option value="ru">Russian</option>
                                <option value="sd">Sindhi</option>
                                <option value="si">Sinhalese</option>
                                <option value="sr">Serbian</option>
                                <option value="sl">Slovenian</option>
                                <option value="es">Spanish</option>
                                <option value="sv">Swedish</option>
                                <option value="tl">Tagalog</option>
                                <option value="ta">Tamil</option>
                                <option value="te">Telugu</option>
                                <option value="bo">Tibetan</option>
                                <option value="th">Thai</option>
                                <option value="tr">Turkish</option>
                                <option value="ug">Uighur</option>
                                <option value="uk">Ukraine</option>
                                <option value="ur">Urdu</option>
                                <option value="vi">Vietnamese</option>
                                <option value="cy">Welsh</option>
                            </select>
                        </div>
                        {/*</div>*/}
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
                                           checked={ stateFromEditBtn? stateFromEditBtn.is_retweet===true: checkRetWeet.checked === "Yes"}
                                           onChange={(event) => checkRetWeet.handlerCheck(event)}/>
                                </div>
                                <div className={"checkboxDiv"}>
                                    <input className={"checkboxStyle"} type="checkbox" id={"check"} name="No"
                                           checked={ stateFromEditBtn? stateFromEditBtn.is_retweet===false : checkRetWeet.checked === "No"}
                                           onChange={(event) => checkRetWeet.handlerCheck(event)}/>
                                </div>
                            </div>
                        </div>
                        <div className={"wordAndCheckbox nextBoxes"}>
                            <div className={"searchTwoHeadPart wordBefore"}>is:reply</div>
                            <div className={"twoCheckboxes"}>
                                <div className={"checkboxDiv one"}>
                                    <input className={"checkboxStyle"} type="checkbox" id={"check"} name="Yes"
                                           checked={ stateFromEditBtn? stateFromEditBtn.is_reply===true: checkReply.checked === "Yes"}
                                           onChange={(event) => checkReply.handlerCheck(event)}/>
                                </div>
                                <div className={"checkboxDiv"}>
                                    <input className={"checkboxStyle"} type="checkbox" id={"check"} name="No"
                                           checked={ stateFromEditBtn? stateFromEditBtn.is_reply===false: checkReply.checked === "No"}
                                           onChange={(event) => checkReply.handlerCheck(event)}/>
                                </div>
                            </div>
                        </div>
                        <div className={"wordAndCheckbox nextBoxes"}>
                            <div className={"searchTwoHeadPart wordBefore"}>is:quote</div>
                            <div className={"twoCheckboxes"}>
                                <div className={"checkboxDiv one"}>
                                    <input className={"checkboxStyle"} type="checkbox" id={"check"} name="Yes"
                                           checked={ stateFromEditBtn? stateFromEditBtn.is_quote===true: checkQuote.checked === "Yes"}
                                           onChange={(event) => checkQuote.handlerCheck(event)}/>
                                </div>
                                <div className={"checkboxDiv"}>
                                    <input className={"checkboxStyle"} type="checkbox" id={"check"} name="No"
                                           checked={ stateFromEditBtn? stateFromEditBtn.is_quote===false: checkQuote.checked === "No"}
                                           onChange={(event) => checkQuote.handlerCheck(event)}/>
                                </div>
                            </div>
                        </div>
                        <div className={"wordAndCheckbox nextBoxes"}>
                            <div className={"searchTwoHeadPart wordBefore"}>is:verified</div>
                            <div className={"twoCheckboxes"}>
                                <div className={"checkboxDiv one"}>
                                    <input className={"checkboxStyle"} type="checkbox" id={"check"} name="Yes"
                                           checked={ stateFromEditBtn? stateFromEditBtn.is_verified===true: checkVerified.checked === "Yes"}
                                           onChange={(event) => checkVerified.handlerCheck(event)}/>
                                </div>
                                <div className={"checkboxDiv"}>
                                    <input className={"checkboxStyle"} type="checkbox" id={"check"} name="No"
                                           checked={ stateFromEditBtn? stateFromEditBtn.is_verified===false: checkVerified.checked === "No"}
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
                                           checked={ stateFromEditBtn? stateFromEditBtn.has_mentions===true: checkMentions.checked === "Yes"}
                                           onChange={(event) => checkMentions.handlerCheck(event)}/>
                                </div>
                                <div className={"checkboxDiv"}>
                                    <input className={"checkboxStyle"} type="checkbox" id={"check"} name="No"
                                           checked={ stateFromEditBtn? stateFromEditBtn.has_mentions===false: checkMentions.checked === "No"}
                                           onChange={(event) => checkMentions.handlerCheck(event)}/>
                                </div>
                            </div>
                        </div>
                        <div className={"wordAndCheckbox nextBoxes"}>
                            <div className={"searchTwoHeadPart wordBefore"}>has:profile geo</div>
                            <div className={"twoCheckboxes"}>
                                <div className={"checkboxDiv one"}>
                                    <input className={"checkboxStyle"} type="checkbox" id={"check"}  name="Yes"
                                           checked={ stateFromEditBtn? stateFromEditBtn.has_profile_geo===true: checkProfile.checked === "Yes"}
                                           onChange={(event) => checkProfile.handlerCheck(event)}/>
                                </div>
                                <div className={"checkboxDiv"}>
                                    <input className={"checkboxStyle"} type="checkbox" id={"check"} name="No"
                                           checked={ stateFromEditBtn? stateFromEditBtn.has_profile_geo===false: checkProfile.checked === "No"}
                                           onChange={(event) => checkProfile.handlerCheck(event)}/>
                                </div>
                            </div>
                        </div>
                        <div className={"wordAndCheckbox nextBoxes"}>
                            <div className={"searchTwoHeadPart wordBefore"}>has:links</div>
                            <div className={"twoCheckboxes"}>
                                <div className={"checkboxDiv one"}>
                                    <input className={"checkboxStyle"} type="checkbox" id={"check"} name="Yes"
                                           checked={ stateFromEditBtn? stateFromEditBtn.has_links===true: checkLinks.checked === "Yes"}
                                           onChange={(event) => checkLinks.handlerCheck(event)}/>
                                </div>
                                <div className={"checkboxDiv"}>
                                    <input className={"checkboxStyle"} type="checkbox" id={"check"} name="No"
                                           checked={ stateFromEditBtn? stateFromEditBtn.has_links===false: checkLinks.checked === "No"}
                                           onChange={(event) => checkLinks.handlerCheck(event)}/>
                                </div>
                            </div>
                        </div>
                        <div className={"wordAndCheckbox nextBoxes"}>
                            <div className={"searchTwoHeadPart wordBefore"}>has:hashtags</div>
                            <div className={"twoCheckboxes"}>
                                <div className={"checkboxDiv one"}>
                                    <input className={"checkboxStyle"} type="checkbox" id={"check"} name="Yes"
                                           checked={ stateFromEditBtn? stateFromEditBtn.has_hashtags===true: checkHashtags.checked === "Yes"}
                                           onChange={(event) => checkHashtags.handlerCheck(event)}/>
                                </div>
                                <div className={"checkboxDiv"}>
                                    <input className={"checkboxStyle"} type="checkbox" id={"check"} name="No"
                                           checked={ stateFromEditBtn? stateFromEditBtn.has_hashtags===false: checkHashtags.checked === "No"}
                                           onChange={(event) => checkHashtags.handlerCheck(event)}/>
                                </div>
                            </div>
                        </div>
                        <div className={"wordAndCheckbox nextBoxes"}>
                            <div className={"searchTwoHeadPart wordBefore"}>has:media</div>
                            <div className={"twoCheckboxes"}>
                                <div className={"checkboxDiv one"}>
                                    <input className={"checkboxStyle"} type="checkbox" id={"check"} name="Yes"
                                           checked={ stateFromEditBtn? stateFromEditBtn.has_media===true: checkMedia.checked === "Yes"}
                                           onChange={(event) => checkMedia.handlerCheck(event)}/>
                                </div>
                                <div className={"checkboxDiv"}>
                                    <input className={"checkboxStyle"} type="checkbox" id={"check"} name="No"
                                           checked={ stateFromEditBtn? stateFromEditBtn.has_media===false: checkMedia.checked === "No"}
                                           onChange={(event) => checkMedia.handlerCheck(event)}/>
                                </div>
                            </div>
                        </div>
                        <div className={"wordAndCheckbox nextBoxes"}>
                            <div className={"searchTwoHeadPart wordBefore"}>has:images</div>
                            <div className={"twoCheckboxes"}>
                                <div className={"checkboxDiv one"}>
                                    <input className={"checkboxStyle"} type="checkbox" id={"check"} name="Yes"
                                           checked={ stateFromEditBtn? stateFromEditBtn.has_images===true: checkImages.checked === "Yes"}
                                           onChange={(event) => checkImages.handlerCheck(event)}/>
                                </div>
                                <div className={"checkboxDiv"}>
                                    <input className={"checkboxStyle"} type="checkbox" id={"check"} name="No"
                                           checked={ stateFromEditBtn? stateFromEditBtn.has_images===false: checkImages.checked === "No"}
                                           onChange={(event) => checkImages.handlerCheck(event)}/>
                                </div>
                            </div>
                        </div>
                        <div className={"wordAndCheckbox nextBoxes"}>
                            <div className={"searchTwoHeadPart wordBefore"}>has:video</div>
                            <div className={"twoCheckboxes"}>
                                <div className={"checkboxDiv one"}>
                                    <input className={"checkboxStyle"} type="checkbox" id={"check" }name="Yes"
                                           checked={ stateFromEditBtn? stateFromEditBtn.has_video===true: checkVideo.checked === "Yes"}
                                           onChange={(event) => checkVideo.handlerCheck(event)}/>
                                </div>
                                <div className={"checkboxDiv"}>
                                    <input className={"checkboxStyle"} type="checkbox" id={"check"} name="No"
                                           checked={ stateFromEditBtn? stateFromEditBtn.has_video===false: checkVideo.checked === "No"}
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


export default Search;