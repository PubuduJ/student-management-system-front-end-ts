import {Link} from "react-router-dom";

function Dashboard() {
    // Link component is used to navigate inside the application.
    return (
        <div className={"centered-element"}>
            <div className={"student-container"}>
                <h1>Student Management System Dashboard</h1>
                <br/><br/>
                <img src={"./images/dashboard-logo.png"} width={"550px"} alt={"dashboard-logo"}/>
                <br/><br/>
                <Link className={"back-link"} to='/dashboard/save'>Save Student</Link>
                <Link className={"back-link"} to='/dashboard/get'>Get Student Details</Link>
                <Link className={"back-link"} to='/dashboard/update'>Update Student Details</Link>
                <Link className={"back-link"} to='/dashboard/delete'>Delete Student</Link>
            </div>
        </div>
    )
}

export default Dashboard;