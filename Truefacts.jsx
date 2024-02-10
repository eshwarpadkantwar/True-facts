import React, { useEffect, useState } from "react";
import axios from "axios";
import "./Truefacts.css"

function Truefacts() {
    const [details, setDetails] = useState([]);

    let getdetails = async () => {
        try {
            const res = await axios.get(`https://uselessfacts.jsph.pl/api/v2/facts/random`);
            setDetails([...details,res.data]);
            console.log("Details res: ", res.data.text);
        } catch (error) {
            console.error("Error fetching train details:", error);
        }
    };

    function refreshPage() {
        location.reload();
    }
    

    useEffect(() => {
        getdetails();
    }, []);

    return (
        <div className="facts">
            <h1 className="factsheading">Useless but True facts!</h1>
            <button onClick={refreshPage}>More facts</button>
            {details.map((ele,index)=>{
                return(
                    <div key={ele.id}>
                        <h2>{ele.text}</h2>
                        <a href={ele.source_url}>Source url</a>
                    </div>
                )
            })}
        </div>
    );
}

export default Truefacts;
