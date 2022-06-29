import React from "react";

function LanguageInputSearchEditPart  (props){
    return(
        <div className="searchInputDiv">
            <label className="labelSearch" htmlFor="language" >Language</label>
            <select className="selectInput"  name="language" id={'language'} onChange={props.onhandleChange}>
                <option value={props.values.language}>English</option>
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
    )
}




export default LanguageInputSearchEditPart;