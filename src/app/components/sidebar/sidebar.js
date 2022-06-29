// import React, {useState} from "react";
// import {useNavigate} from "react-router-dom";
// import './style.css';
//
//
//
// function Sidebar () {
//     const navigate = useNavigate();
//     const [mentioned, setMentioned]=useState("searchDiv")
//
//     const setMentioning= (data) => {
//         setMentioned (data);
//     };
//
//     const handleRouteNavigateSearch =()=>{
//         navigate('/search');
//         setMentioning('searchDiv')
//     }
//     const handleRouteNavigateConversationLookUp =()=>{
//         navigate('/conversation');
//         setMentioning('conversationDiv')
//     }
//     const handleRouteNavigateUserLookUp =()=>{
//         navigate('/userLookUp');
//     }
//     const handleRouteNavigateSaved =()=>{
//         navigate('/saved');
//     }
//
//     const handleRouteNavigateLogOut =()=>{
//         localStorage.removeItem("tokens")
//         navigate ('/')
//     }
//
//
//     return(
//         <div className={"sidebarWholeDiv"}>
//             <div className= {`sidebarDiv   ${mentioned === 'searchDiv' && "mentioned"} `}
//                  onClick={() => {setMentioning('searchDiv')
//                      handleRouteNavigateSearch()}}>Search Query</div>
//             <div className={`sidebarDiv   ${mentioned === 'conversationDiv' && "mentioned"} `}
//                  onClick={handleRouteNavigateConversationLookUp}
//
//             //      onClick={ () => {
//             //  handleRouteNavigateConversationLookUp()
//             //     setMentioning('conversationDiv')
//             // }}
//             >Conversation lookup</div>
//             <div className= {`sidebarDiv ${mentioned === 'userLookUpDiv' && "mentioned"} `}  onClick={() => {setMentioning('userLookUpDiv')
//                 handleRouteNavigateUserLookUp()}} onClick={() => {setMentioning('userLookUpDiv')}}>User Lookup</div>
//             <div className={`sidebarDiv ${mentioned === 'savedDiv' && "mentioned"} `}  onClick={() => {setMentioning('savedDiv')
//                 handleRouteNavigateSaved()}}>Saved Query</div>
//             <div className={`sidebarDiv ${mentioned === 'logOut' && "mentioned"} `}  onClick={() => {setMentioning('logOutDiv')
//                 handleRouteNavigateLogOut()}}>Log Out</div>
//         </div>
//     )
// }
//
// export default Sidebar;