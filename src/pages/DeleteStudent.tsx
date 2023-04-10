import React, {useState} from "react";
import {Link} from "react-router-dom";
import {deleteCall} from "../api/apiCalls";
import {handleStudentNICError, removeNICErrorBorder} from "../dom-ref/methods";

function DeleteStudent() {
    const [nic, setNic] = useState<string>("");
    const [errMessage, setErrMessage] = useState<string>("");
    const [responseMessage, setResponseMessage] = useState<string>("");

    // When input field is changed, the nic state will be changed accordingly.
    function handleChange(event: React.ChangeEvent<HTMLInputElement>) {
        setErrMessage("");
        setResponseMessage("");
        removeNICErrorBorder();
        const newNicNumber: string = event.target.value;
        setNic(newNicNumber);
    }

    // When delete button is pressed, student will be deleted from the database.
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
            await deleteCall(nic);
            setResponseMessage("Student successfully delete from the database");
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
                 alt={"user-logo"}/>
            <div className="student-container">
                <h1>Delete Student</h1>
                <br/>
                <form onSubmit={handleSubmit}>
                    <input onChange={handleChange} value={nic} id="nic" name="nic" placeholder="Enter NIC Number"/>
                    <h4 className={"error-text"}>{errMessage}</h4>
                    <br/>
                    <button type={"submit"}>Delete Student</button>
                    <Link className={"back-link"} to='/dashboard'>Back</Link>
                </form>
                <h4>{responseMessage}</h4>
            </div>
        </div>
    );
}

export default DeleteStudent;