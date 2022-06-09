import { deleteEvent, deleteEventById, getEvents, getIDs, newEvent } from './api.js';
import { div, btn, button, id, type, drag, toast, strong, small, body, extraClass, value, create } from './htmlutilities.js';
import { editButton } from './editevent.js';

const calendar = document.getElementById("top");
const but = btn("btn", extraClass("btn-primary"), type("button"), ["data-bs-toggle", "modal"], ["data-bs-target", "#manageEvents"], value("Manage Events"));
but.addEventListener('click', displayEventList);
const manage = div("modal", extraClass("fade"), extraClass("needs-validation"), id("manageEvents"), ["data-bs-backdrop", "static"], ["tabindex", -1],
  ["aria-labelledby", "shareEventLabel"], ["aria-hidden", true]);

manage.innerHTML = `
<div class="modal-dialog">
<div class="modal-content">
  <div class="modal-header">
    <h5 class="modal-title" id="shareEventLabel">Delete Event</h5>
    <button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close" id="manageEventsClose1"></button>
  </div>
  <div class="modal-body" id="manageEventsBody">
    
  </div>
  <div class="modal-footer">
    <button type="button" class="btn btn-secondary" data-bs-dismiss="modal" id="manageEventsClose2">Exit</button>
  </div>
</div>
</div>
`;

calendar.appendChild(but);
calendar.appendChild(manage);

var manageEvents = document.getElementById("manageEventsBody");  

export function displayEventList() {
  manageEvents.innerHTML = null;
  getIDs("1234567890", "aaaaaaaa", ids=>getEvents(ids.event_id_list, "aaaaaaaa", evts=>evts.result.forEach(i => displayEvent(i))));
}
  
function displayEvent(eventInfo) {
  var node = div("card", id(eventInfo.event_id+"card"))
  var startDate = new Date(eventInfo.start_time.timestamp_int*1000);
  var endDate = new Date(eventInfo.end_time.timestamp_int*1000);
  node.innerHTML = `
    <div class="card-body", id="${eventInfo.event_id}body">
      <h3 class="card-title" id="eventHeader">${eventInfo.display_name}</h3>
      <h6 class="card-title" id="eventDate">
      ${startDate.toLocaleString()+" to "+endDate.toLocaleString()}
      </h6>
      <p class="card-text" id="eventText">${eventInfo.description}</p>
    </div>
  `;
  const edit = btn("btn", extraClass("btn-primary"), type("button"), value("Edit Event"), id("editEvent2"), ["data-bs-toggle", "modal"], ["data-bs-target", "#editEvent"]);
  edit.addEventListener('click', ()=>document.getElementById("editbutton").onclick = function(){editButton(eventInfo.event_id)});
  const delt = btn("btn", extraClass("btn-danger"), type("button"), value("Delete Event"), id("delbutton"));
  delt.addEventListener('click', ()=>deleteEventById("aaaaaaaa", eventInfo.event_id));
  delt.addEventListener('click', displayEventList);
  node.appendChild(edit);
  node.appendChild(delt);
  manageEvents.appendChild(node);
}

