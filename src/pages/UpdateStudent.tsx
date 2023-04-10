import React, {useState} from "react";
import {StudentErrorMsgType, StudentType} from "../types/types";
import DetailContainer from "../components/DetailContainer";
import {Link} from "react-router-dom";
import {patchCall} from "../api/apiCalls";
import {removeAllStudentErrorBorders} from "../dom-ref/methods";
import {studentDataValidations} from "../validations/validations";

function UpdateStudent() {
    const [updateErrMessage, setUpdateErrMessage] = useState<String>("");
    const [responseMessage, setResponseMessage] = useState<String>("");
    const [student, setStudent] = useState<StudentType>({nic: "", name: "", address: "", contact: ""});
    const [output, setOutput] = useState<StudentType>({nic: "", name: "", address: "", contact: ""});
    const [studentErrorMsg, setStudentErrorMsg] = useState<StudentErrorMsgType>({
        nicErrorMsg: "",
        nameErrorMsg: "",
        addressErrorMsg: "",
        contactErrorMsg: ""
    });

    // When input fields are changed, the student state will be changed accordingly.
    function handleChange(event: React.ChangeEvent<HTMLInputElement>) {
        setResponseMessage("");
        setOutput({nic: "", name: "", address: "", contact: ""});
        setStudentErrorMsg({nicErrorMsg: "", nameErrorMsg: "", addressErrorMsg: "", contactErrorMsg: ""});
        setUpdateErrMessage("");
        removeAllStudentErrorBorders();
        const {name, value} = event.target;
        setStudent((prevValue: StudentType) => {
            return {
                ...prevValue,
                [name]: value
            }
        })
    }

    // When check-out button is pressed, validate all inputs.
    function handleCheckOut(event: React.MouseEvent<HTMLButtonElement>) {
        setResponseMessage("");
        setUpdateErrMessage("");
        studentDataValidations(student, setStudent, setStudentErrorMsg, setOutput);
    }

    // When update button is pressed, student will be updated in the database.
    // If an error occurs, they are handled within the catch block.
    async function handleSubmit(event: React.FormEvent<HTMLFormElement>) {
        event.preventDefault();
        setUpdateErrMessage("");
        setResponseMessage("");
        setStudentErrorMsg({nicErrorMsg: "", nameErrorMsg: "", addressErrorMsg: "", contactErrorMsg: ""});
        removeAllStudentErrorBorders();
        if (!output.nic || !output.name || !output.address || !output.contact) {
            setUpdateErrMessage("Inputs didn't check out");
            return;
        }
        try {
            await patchCall(output.nic, output);
            setResponseMessage("Student successfully updated in the database");
        } catch (err: any) {
            if (err.response) {
                setResponseMessage(err.response.data.message);
            } else {
                setResponseMessage(`Error: ${err.message}`);
            }
        } finally {
            setOutput({nic: "", name: "", address: "", contact: ""});
        }
    }

    return (
        <div className={"centered-element"}>
            <img className="student-img" src={"https://cdn-icons-png.flaticon.com/512/5349/5349022.png"} width={"150px"}
                 alt={"user-logo"}/>
            <div className="student-container">
                <h1>Update Student Details</h1>
                <br/>
                <form onSubmit={handleSubmit}>
                    <input onChange={handleChange} value={student.nic} id="nic" name="nic"
                           placeholder="Enter NIC Number"/>
                    <h4 className={"error-text"}>{studentErrorMsg.nicErrorMsg}</h4>
                    <input onChange={handleChange} value={student.name} id="name" name="name" placeholder="Enter Name"/>
                    <h4 className={"error-text"}>{studentErrorMsg.nameErrorMsg}</h4>
                    <input onChange={handleChange} value={student.address} id="address" name="address"
                           placeholder="Enter Address"/>
                    <h4 className={"error-text"}>{studentErrorMsg.addressErrorMsg}</h4>
                    <input onChange={handleChange} value={student.contact} id="contact" name="contact"
                           placeholder="Enter Contact"/>
                    <h4 className={"error-text"}>{studentErrorMsg.contactErrorMsg}</h4>
                    <h4 className={"error-text"}>{updateErrMessage}</h4>
                    <button onClick={handleCheckOut} type={"button"}>Check Out</button>
                    <button type={"submit"}>Update Student Details</button>
                    <Link className={"back-link"} to='/dashboard'>Back</Link>
                </form>
                <br/>
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

export default UpdateStudent;