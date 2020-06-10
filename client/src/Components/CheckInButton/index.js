import React from "react";
import AddForm from "../AddForm";

function CheckInButton() {
    return (
        <div>
            <button type="button" className="btn btn-warning" data-toggle="modal" data-target="#staticBackdrop">
                Check In
            </button>

            <AddForm />
        </div>
    )
}

export default CheckInButton;