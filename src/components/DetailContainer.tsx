import {StudentType} from "../types/types";

// DetailContainer component is used to display the response data in the application.
function DetailContainer({nic, name, address, contact}: StudentType) {
    return (
        <div>
            <h3>NIC Number : {nic}</h3>
            <h3>Student Name : {name}</h3>
            <h3>Student Address : {address}</h3>
            <h3>Student Contact : {contact}</h3>
        </div>
    );
}

export default DetailContainer;