import React from "react";
import AddForm from "../AddForm";

function CheckInButton() {
    return (
        <div>
            <button type="button" class="btn btn-warning" data-toggle="modal" data-target="#staticBackdrop">
                Check In
            </button>

            <AddForm />
        </div>
    )
}

export default CheckInButton;