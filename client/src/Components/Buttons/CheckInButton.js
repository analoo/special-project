import React from "react";
import AddForm from "../AddForm";

function CheckInButton() {
    return (
        <div className="nav-link">
            <button type="button" className="btn bg-yellow mr-2" data-toggle="modal" data-target="#staticBackdrop">
                + New Activity
            </button>

            <AddForm />
        </div>
    )
}

export default CheckInButton;