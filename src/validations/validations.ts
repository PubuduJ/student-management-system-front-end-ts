import {AdminErrorMsgType, AdminType, StudentErrorMsgType, StudentType} from "../types/types";
import React from "react";
import {
    handleLoginPasswordError, handleLoginUsernameError,
    handleStudentAddressError,
    handleStudentContactError,
    handleStudentNameError,
    handleStudentNICError
} from "../dom-ref/methods";

// Login data inputs validation logic.
export function adminLoginValidation(admin: AdminType, setAdminErrorMsg: React.Dispatch<React.SetStateAction<AdminErrorMsgType>>) {
    if (admin.password !== "admin123") {
        setAdminErrorMsg(prevState => {
            return {...prevState, "passErrorMsg": "Password is empty or invalid"}
        });
        handleLoginPasswordError();
    }
    if (admin.username !== "admin") {
        setAdminErrorMsg(prevState => {
            return {...prevState, "userErrorMsg": "Username is empty or invalid"}
        });
        handleLoginUsernameError();
    }
}

// Student data inputs validation logic.
export function studentDataValidations(student: StudentType,
                                       setStudent: React.Dispatch<React.SetStateAction<StudentType>>,
                                       setStudentError: React.Dispatch<React.SetStateAction<StudentErrorMsgType>>,
                                       setOutput: React.Dispatch<React.SetStateAction<StudentType>>) {
    if (!/^\d{9}[Vv]$/.test(student.nic)
        || !/^[A-Za-z][A-Za-z ]+$/.test(student.name)
        || !/^[A-Za-z\d][A-Za-z\d-|/# ,.:;\\]+$/.test(student.address)
        || !/^\d{3}-\d{7}$/.test(student.contact)) {
        if (!/^\d{3}-\d{7}$/.test(student.contact)) {
            setStudentError(prevState => {
                return {...prevState, "contactErrorMsg": "Student contact is empty or invalid"}
            });
            handleStudentContactError();
        }
        if (!/^[A-Za-z\d][A-Za-z\d-|/# ,.:;\\]+$/.test(student.address)) {
            setStudentError(prevState => {
                return {...prevState, "addressErrorMsg": "Student address is empty or invalid"}
            });
            handleStudentAddressError();
        }
        if (!/^[A-Za-z][A-Za-z ]+$/.test(student.name)) {
            setStudentError(prevState => {
                return {...prevState, "nameErrorMsg": "Student name is empty or invalid"}
            });
            handleStudentNameError();
        }
        if (!/^\d{9}[Vv]$/.test(student.nic)) {
            setStudentError(prevState => {
                return {...prevState, "nicErrorMsg": "Student nic number is empty or invalid"}
            });
            handleStudentNICError();
        }
        return;
    } else {
        setStudent({nic: "", name: "", address: "", contact: ""});
        setOutput({nic: student.nic, name: student.name, address: student.address, contact: student.contact});
    }
}