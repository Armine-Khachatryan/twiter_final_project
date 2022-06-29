import React from "react";
import {SidebarData} from "../SidebarData";
import './style.css';


function NewSidebar (){

    const removeToken =()=>{
        localStorage.removeItem("tokens")
    }

    const sidebarclick =(val)=>{
        window.location.pathname=val.link
        val.title==="Log Out" && removeToken()
    }

    return (
        <div className={"sidebarWholeDiv"}>
            <ul>
            {SidebarData.map((val, key)=>{
            return (
                <li className={"sidebarDiv"}
                    key={key}
                    id={window.location.pathname===val.link?"active":""}
                    onClick={()=>{sidebarclick(val)}}>{""}
                    <div>
                        {val.title}
                    </div>
                </li>
                // {{val.title==="Log Out" && removeToken()}}
            );
            })}

            </ul>
        </div>
    )
}

export default NewSidebar;




