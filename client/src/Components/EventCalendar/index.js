import React from "react";
import "../../App.css"
import FullCalendar from '@fullcalendar/react'
import { Calendar } from '@fullcalendar/core';
import interactionPlugin, { Draggable } from '@fullcalendar/interaction'; // for selectable
import dayGridPlugin from '@fullcalendar/daygrid';
import bootstrapPlugin from '@fullcalendar/bootstrap';
import timeGridPlugin from '@fullcalendar/timegrid';
import listPlugin from '@fullcalendar/list';
// import enLocale from '@fullcalendar/core/locales';

import '@fullcalendar/core/main.css';
import '@fullcalendar/daygrid/main.css';
import '@fullcalendar/bootstrap/main.css';
import '@fullcalendar/timegrid/main.css';
import '@fullcalendar/list/main.css';
// import '@fullcalendar/core/locales/id.css';


document.addEventListener('DOMContentLoaded', function() {
    let draggableEl = document.getElementById('mydraggable');
    var containerEl = document.getElementById('external-events');
    var calendarEl = document.getElementById('calendar');

    // new Draggable(containerEl, {
    //     itemSelector: '.fc-event',
    //     eventData: function(eventEl) {
    //       return {
    //         title: eventEl.innerText
    //       };
    //     }
    //   });
  
    var calendar = new Calendar(calendarEl, {
        plugins: [ interactionPlugin, dayGridPlugin, bootstrapPlugin, timeGridPlugin, listPlugin ],
        themeSystem: 'bootstrap',
        defaultView: 'dayGridMonth',
        selectable: true,
        editable: true,
        eventLimit: true,
        events: 'https://fullcalendar.io/demo-events.json',
        header: {
            left: 'prev,next today',
            center: 'title',
            right: "dayGridMonth,timeGridWeek,timeGridDay,listMonth"
        },
        footer: {
            left: 'prev next today',
            right: "dayGridMonth timeGridWeek timeGridDay listYear"
        },
        timeZone: 'local',
        // locales: ['idLocale'],
        locale: 'en',
        // select: function( selectionInfo ) {
        //     alert('Start: ' + selectionInfo.start + '\nEnd: ' + selectionInfo.end)
        // },
        // dateClick: function(info) {
        //     alert('Date: ' + info.dateStr);
        // }
        eventClick: function(info) {
            info.jsEvent.preventDefault();

            if(info.event.url) {
                window.open(info.event.url);
            }
            // } else  {
            //     // Swal.fire(info.event.title, 'Start: ' + info.event.start, 'question')
            // }
        },
        droppable: true
    });
  
    calendar.render();

    // new Draggable(draggableEl, {
    //     eventData: {
    //       title: 'my event',
    //       duration: '02:00'
    //     }
    // });
  });

function EventCalendar() {
    return (
        // <div className="mx-4">
        //     <FullCalendar 
        //     defaultView="dayGridMonth" 
        //     plugins={[ interactionPlugin, dayGridPlugin ]}
        //     events=""
        //     // newEvent={event_name="", start_date="", end_date=""} 
        //     addingMode="true"
        //     indexToUpdate=""
        //     />
        // </div>
        <div>
            {/* <div id='external-events'>
                <p>
                    <strong>Draggable Events</strong>
                </p>
                <div className='fc-event'>Event 1</div>
                <div className='fc-event'>Event 2</div>
                <div className='fc-event'>Event 3</div>
                <div className='fc-event'>Event 4</div>
                <div className='fc-event'>Event 5</div>
            </div> */}
            {/* <div id='draggable-el' data-event='{ "title": "my event", "duration": "02:00" }'>drag me</div> */}
            <div id='calendar-container' className="mx-4">
                <div id='calendar'></div>
            </div>
        </div>
    )
}

export default EventCalendar;