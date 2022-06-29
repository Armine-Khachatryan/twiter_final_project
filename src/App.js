import React, { useState} from 'react';
import './App.css';
import Search from "./app/pages/search/search";
import Search_Edit from "./app/pages/search-edit/search_Edit";
import Tweet from "./app/pages/tweet/tweet";
import Tweet_Edit from "./app/pages/tweet-edit/tweet_Edit";
import Media from "./app/pages/media/Media";
import Media_Edit from "./app/pages/media-edit/media_Edit";
import Expansions from "./app/pages/expansions/expansions";
import Expansions_Edit from "./app/pages/expansions-edit/expansions_Edit";
import SearchResult from "./app/pages/searchResult/searchResult";
import SearchResult_Edit from "./app/pages/searchResult-edit/searchResult_Edit";
import Saved from "./app/pages/saved/saved";
import Login from "./app/pages/login/login";
import Conversation from "./app/pages/conversation/conversation";
import UserLookUp from "./app/pages/userLookUp/userLookUp";
import {
    BrowserRouter,
    Routes,
    Route,
    Navigate
} from "react-router-dom";




function App() {
    let [token, setToken] = useState(localStorage.getItem("tokens" || ""));
    console.log(token);


    return (
        <BrowserRouter>
            <Routes>
                <Route exact path="/" element={<Login setToken={setToken}/>}/>
                <Route exact path="/search" element={!token ?   <Navigate  to='/' /> : <Search />}/>
                <Route exact path="/search/:id" element={!token ?   <Navigate  to='/' /> : <Search_Edit />}/>
                <Route exact path="/tweet" element={!token ?   <Navigate  to='/' /> : <Tweet />}/>
                <Route exact path="/tweet/:id" element={!token ?   <Navigate  to='/' /> : <Tweet_Edit />}/>
                <Route exact path="/media" element={!token ?   <Navigate  to='/' /> : <Media />}/>
                <Route exact path="/media/:id" element={!token ?   <Navigate  to='/' /> : <Media_Edit />}/>
                <Route exact path="/expansions" element={!token ?   <Navigate  to='/' /> : <Expansions/>}/>
                <Route exact path="/expansions/:id" element={!token ?   <Navigate  to='/' /> : <Expansions_Edit/>}/>
                <Route exact path="/searchResult" element={!token ?   <Navigate  to='/' /> : <SearchResult />}/>
                <Route exact path="/searchResult/:id" element={!token ?   <Navigate  to='/' /> : <SearchResult_Edit />}/>
                <Route exact path="/saved" element={!token ?   <Navigate  to='/' /> : <Saved />}/>
                <Route exact path="/conversation" element={!token ?   <Navigate  to='/' /> : <Conversation/>}/>
                <Route exact path="/userLookUp" element={!token ?   <Navigate  to='/' /> : <UserLookUp/>}/>
            </Routes>
        </BrowserRouter>
    );
}

export default App;

