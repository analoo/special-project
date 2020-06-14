import React from "react";
import AddForm from "../AddForm";

function CheckInButton() {
    return (
        <div>
            <button type="button" className="btn bg-dark-purple" data-toggle="modal" data-target="#staticBackdrop">
                New Activity
            </button>

            <AddForm />
        </div>
    )
}

export default CheckInButton;