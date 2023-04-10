import axios from "axios";
import {StudentType} from "../types/types";

// Base url which point out the resource.
const url = "http://localhost:8080/app/api/students";

export function postCall(output: StudentType) {
    return axios.post(url, output);
}

export function getCall(nic: string) {
    return axios.get(`${url}/${nic}`);
}

export function deleteCall(nic: string) {
    return axios.delete(`${url}/${nic}`);
}

export function patchCall(nic: string, output: StudentType) {
    return axios.patch(`${url}/${nic}`, output);
}