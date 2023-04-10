import {Outlet} from "react-router-dom";

function SharedLayout() {
    // SharedLayout is common for all the child components.
    // Outlet is used to inject relevant child component to the SharedLayout.
    return (
        <>
            <Outlet/>
        </>
    )
}

export default SharedLayout;