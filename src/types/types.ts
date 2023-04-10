// Main types which are used in the application.

export type AdminType = {
    username: string;
    password: string;
};

export type AdminErrorMsgType = {
    userErrorMsg: string;
    passErrorMsg: string;
};

export type StudentType = {
    nic: string;
    name: string;
    address: string;
    contact: string;
};

export type StudentErrorMsgType = {
    nicErrorMsg: string;
    nameErrorMsg: string;
    addressErrorMsg: string;
    contactErrorMsg: string;
}