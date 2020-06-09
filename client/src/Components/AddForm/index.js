import React from "react";
import CalendarForm from "../CalendarForm";

function AddForm() {
    return (
        // <!-- Modal -->
        <div class="modal fade" id="staticBackdrop" data-backdrop="static" data-keyboard="false" tabindex="-1" role="dialog" aria-labelledby="staticBackdropLabel" aria-hidden="true">
            <div class="modal-dialog">
                <div class="modal-content">
                    <div class="modal-header">
                        <h5 class="modal-title" id="staticBackdropLabel">Add new event</h5>
                        <button type="button" class="close" data-dismiss="modal" aria-label="Close">
                            <span aria-hidden="true">&times;</span>
                        </button>
                    </div>
                    <div class="modal-body">
                        <form>
                            <div className="float-right">
                                <div className="form-check form-check-inline">
                                    <input className="form-check-input" type="checkbox" id="inlineCheckbox1" value="option1"/>
                                    <label className="form-check-label" for="inlineCheckbox1">Wore Mask</label>
                                </div>
                                <div className="form-check form-check-inline">
                                    <input className="form-check-input" type="checkbox" id="inlineCheckbox2" value="option2"/>
                                    <label className="form-check-label" for="inlineCheckbox2">Within 6ft</label>
                                </div>
                                <div className="form-check form-check-inline">
                                    <input className="form-check-input" type="checkbox" id="inlineCheckbox3" value="option3"/>
                                    <label className="form-check-label" for="inlineCheckbox3">Outside</label>
                                </div>
                            </div>
                            <br/>
                            <div className="form-group">
                                <label className="float-left font-weight-bold" for="location">Event Name</label>
                                <input type="location" className="form-control" id="location" placeholder="Picinic" />
                            </div>
                            <div className="form-group">
                                <label className="float-left font-weight-bold" for="location">Location</label>
                                <input type="location" className="form-control" id="location" placeholder="Golden Gate Park" />
                            </div>
                            <div className="form-group">
                                <label className="float-left font-weight-bold" for="contact">Contacts</label>
                                <textarea className="form-control" id="contact" rows="2"></textarea>
                            </div>
                            <div className="form-group">
                                <label className="float-left font-weight-bold" for="notes">Notes</label>
                                <textarea className="form-control" id="notes" rows="3"></textarea>
                            </div>
                            <div className="row mb-4">
                                <div className="col">
                                    <label className="float-left font-weight-bold" for="startTime">Start Time</label>
                                    <input type="text" className="form-control" placeholder="08:00PM"/>
                                </div>
                                <div className="col">
                                    <label className="float-left font-weight-bold" for="endTime">End Time</label>
                                    <input type="text" className="form-control" placeholder="9:00PM"/>
                                </div>
                            </div>

                            <CalendarForm />

                        </form>
                            </div>
                            <div className="modal-footer">
                                <button type="button" className="btn btn-secondary" data-dismiss="modal">Close</button>
                                <button type="button" className="btn btn-warning">Check In</button>
                            </div>
                </div>
                    </div>
                </div>
    )
}

export default AddForm;