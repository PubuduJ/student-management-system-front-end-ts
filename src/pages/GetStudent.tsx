import React, {useState} from "react";
import {StudentType} from "../types/types";
import {Link} from "react-router-dom";
import DetailContainer from "../components/DetailContainer";
import {getCall} from "../api/apiCalls";
import {handleStudentNICError, removeNICErrorBorder} from "../dom-ref/methods";

function GetStudent() {
    const [nic, setNic] = useState<string>("");
    const [errMessage, setErrMessage] = useState<string>("");
    const [responseMessage, setResponseMessage] = useState<string>("");
    const [output, setOutput] = useState<StudentType>({nic: "", name: "", address: "", contact: ""});

    // When input field is changed, the nic state will be changed accordingly.
    function handleChange(event: React.ChangeEvent<HTMLInputElement>) {
        setErrMessage("");
        setResponseMessage("");
        setOutput({nic: "", name: "", address: "", contact: ""});
        removeNICErrorBorder();
        const newNicNumber: string = event.target.value;
        setNic(newNicNumber);
    }

    // When get button is pressed, student will be got from the database.
    // If an error occurs, they are handled within the catch block.
    async function handleSubmit(event: React.FormEvent<HTMLFormElement>) {
        event.preventDefault();
        setErrMessage("");
        setResponseMessage("");
        if (!/^\d{9}[Vv]$/.test(nic)) {
            setErrMessage("Student nic number is empty or invalid");
            handleStudentNICError();
            return;
        }
        try {
            const response: any = await getCall(nic);
            setResponseMessage("Student successfully get from the database");
            setOutput({
                nic: response.data.nic,
                name: response.data.name,
                address: response.data.address,
                contact: response.data.contact
            });
        } catch (err: any) {
            if (err.response) {
                setResponseMessage(err.response.data.message);
            } else {
                setResponseMessage(`Error: ${err.message}`);
            }
        } finally {
            setNic("");
        }
    }

    return (
        <div className={"centered-element"}>
            <img className="student-img" src={"https://cdn-icons-png.flaticon.com/512/5349/5349022.png"} width={"150px"}
                 alt={"student-logo"}/>
            <div className="student-container">
                <h1>Get Student Details</h1>
                <br/>
                <form onSubmit={handleSubmit}>
                    <input onChange={handleChange} value={nic} id="nic" name="nic" placeholder="Enter NIC Number"/>
                    <h4 className={"error-text"}>{errMessage}</h4>
                    <br/>
                    <button type={"submit"}>Get Student Details</button>
                    <Link className={"back-link"} to='/dashboard'>Back</Link>
                </form>
                <DetailContainer
                    nic={output.nic}
                    name={output.name}
                    address={output.address}
                    contact={output.contact}
                />
                <br/>
                <h4>{responseMessage}</h4>
            </div>
        </div>
    );
}

export default GetStudent;