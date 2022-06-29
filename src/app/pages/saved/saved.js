import React, {useState, useEffect} from "react";
import ReactJsonViewer from 'react-json-viewer-cool';
import NewSidebar from "../../components/newSidebar/newSidebar";
import config from "../../config";
import './style.css';
import axios from "axios";
import {useLocation, useNavigate, useParams} from "react-router-dom";


function Saved(props) {

    const [info, setInfo] = useState([]);
    // const [edited, setEdited]=useState(false);
    const [showQuery, setShowQuery] = useState(false)
    const navigate = useNavigate();
    const {state} = useLocation();
    const savedState=state;
    const { id } = useParams();

    useEffect(() => {
        axios.get(`${config.baseUrl}/query/search/`).then(res => {
            let result = res.data.results;
            let reverse = result.reverse();
            console.log(reverse)
            setInfo(reverse)
        }).catch((e) => {
            console.log(e, "error")
        })
    }, []);

    const token = JSON.parse(localStorage.getItem('tokens'))
    console.log(token);



    const deleteQuery = (id) => {
        console.log(info, "info")
        let filtered = info.filter((item, index) => {
            if (item.id !== id) {
                return item
            }
            console.log(item,index)
        })
        axios.delete(`${config.baseUrl}/query/search/${id}`, {
            headers: {
                "Authorization": `Bearer ${token.access}`
            },
        }).then(response => {
            if (response.status > 200 && response.status < 300) {
                setInfo(filtered)
            }
        }).catch((e) => {
            console.log(e, "error when deleting")
        })
    }

    // const editQuery = (id) => {
    //
    //     let editedQuery=info.map((item)=>{
    //         console.log(item);
    //         if(item.id === id){
    //             navigate('/search',  {state: item})
    //         }
    //     })
    // }


    //
    const editQuery = (id) => {
        axios.get(`${config.baseUrl}/query/search/${id}`)
        .then(response => {
            console.log(response, "kjldkjf");
            if (response.status >  199 && response.status < 301) {
                navigate(`/search/${id}`,  {state:response.data })
            }
        }).catch((e) => {
            console.log(e, "error when editing")
        })
    }

    // const deleteQuery = (id) => {
    //     axios.delete(`${config.baseUrl}/query/search/${id}`, {
    //         headers: {
    //             "Authorization": `Bearer ${token.access}`
    //         },
    //     }).then(response => {
    //         if (response.status > 200 && response.status < 300) {
    //             setSt(prev=>!prev)
    //         }
    //     }).catch((e) => {
    //         console.log(e, "error when deleting")
    //     })
    // }



    return (<>
        <div className={"NumberOneDiv"}>
            <NewSidebar/>
            <main className={"container"}>
                <div className={"homeTitle"}>Saved querries</div>
                <table className={"tab"}>
                    <thead>
                    <tr className={"tab"}>
                        <th className={"tab"}>Id</th>
                        <th className={"tab"}>Name</th>
                        <th className={"tab"}>Description</th>
                    </tr>
                    </thead>
                    <tbody>
                    {info.length !== 0 && info.map((item, index) => {
                        return (
                            <tr className={"tab"} key={item.id}>
                                <td className={"tab clickable"} onClick={() => setShowQuery(!showQuery)}>{item.id}</td>
                                <td className={"tab clickable"}
                                    onClick={() => setShowQuery(!showQuery)}>{item.name_query}</td>
                                <td className={"tab clickable"}
                                    onClick={() => setShowQuery(!showQuery)}>{item.description}</td>
                                <td className={"tab tabForBtns"}>
                                    <div className='backBtn tableBtn'
                                         onClick={() => editQuery(item.id)}
                                    >Edit</div>
                                    <div className='nextBtn tableBtn deleteOne'
                                         onClick={() => deleteQuery(item.id)}>Delete
                                    </div>
                                </td>
                            </tr>
                        )
                    })
                    }
                    </tbody>
                </table>
                {showQuery && <ReactJsonViewer data={info}/>}
                {/*<div>{info}</div>*/}
            </main>
        </div>
    </>);
};

export default Saved;
