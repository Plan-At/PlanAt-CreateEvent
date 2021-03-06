import { editEvent } from './api.js';
import { div, btn, button, id, type, drag, toast, strong, small, body, extraClass, value, create } from './htmlutilities.js';
import { displayEventList } from './manageevent.js';

// The calendar element
const calendar = document.getElementById("calendar");

// The edit event modal
const edit2 = div("modal", extraClass("fade"), extraClass("needs-validation"), id("editEvent"), ["data-bs-backdrop", "static"], ["tabindex", -1],
  ["aria-labelledby", "editEventLabel"], ["aria-hidden", true]);

// The inner HTML for the edit event modal
edit2.innerHTML = `
<div class="modal-dialog">
<div class="modal-content">
  <div class="modal-header">
    <h5 class="modal-title" id="editEventLabel">New Event</h5>
    <button type="button" class="btn-close" data-bs-toggle="modal" href="#manageEvents"></button>
  </div>
  <div class="modal-body">
    <form>
      <div class="mb-3">
        <label for="event-name2" class="col-form-label">Title:</label>
        <input type="text" class="form-control" id="event-name2" required>
      </div>
      <div><input type="text" id="datetimerange-input2" size="40" style="text-align:center"></div>
      <div class="mb-3">
        <label for="event-desc2" class="col-form-label">Description:</label>
        <textarea class="form-control" id="event-desc2"></textarea>
      </div>
    </form>
  </div>
  <div class="modal-footer">
    <button type="button" id="editclose" class="btn btn-secondary" data-bs-toggle="modal" href="#manageEvents">Cancel</button>
    <button class="btn btn-primary" data-bs-target="#makeReoccuring" data-bs-toggle="modal">Make Reoccuring</button>
    <button type="submit" id="editbutton" class="btn btn-primary" data-bs-toggle="modal" href="#manageEvents">Submit</button>
  </div>
</div>
</div>
</script>
`;

// Adding the edit modal to the calendar
calendar.appendChild(edit2);

// When the submit button for the edit modal is clicked it refreshes the event list in the manage events modal
var submit2 = document.getElementById("editbutton");
submit2.addEventListener('click', displayEventList);

// Creates and shows a date range picker in the create event modal and saves the timestamps when the user submits dates
var timestampStart2, timestampEnd2;
window.addEventListener("load", function (event) {
  let drp = new DateRangePicker('datetimerange-input2',
    {
      //startDate: '2000-01-01',
      //endDate: '2000-01-03',
      //minDate: '2021-07-15 15:00',
      //maxDate: '2021-08-16 15:00',
      //maxSpan: { "days": 9 },
      //showDropdowns: true,
      //minYear: 2020,
      //maxYear: 2022,
      //showWeekNumbers: true,
      //showISOWeekNumbers: true,
      timePicker: true,
      //timePickerIncrement: 10,
      //timePicker24Hour: true,
      //timePickerSeconds: true,
      //showCustomRangeLabel: false,
      alwaysShowCalendars: true,
      //opens: 'center',
      //drops: 'up',
      //singleDatePicker: true,
      //autoApply: true,
      //linkedCalendars: false,
      //isInvalidDate: function(m){
      //    return m.weekday() == 3;
      //},
      //isCustomDate: function(m){
      //    return "weekday-" + m.weekday();
      //},
      //autoUpdateInput: false,
      ranges: {
        'Today': [moment().startOf('day'), moment().endOf('day')],
        'Yesterday': [moment().subtract(1, 'days').startOf('day'), moment().subtract(1, 'days').endOf('day')],
        'Last 7 Days': [moment().subtract(6, 'days').startOf('day'), moment().endOf('day')],
        'This Month': [moment().startOf('month').startOf('day'), moment().endOf('month').endOf('day')],
      },
      locale: {
        format: "YYYY-MM-DD HH:mm:ss",
      }
    },
    function (start, end) {
      // alert(start.format() + " - " + end.format());
    })
  //drp.setStartDate('2014/03/01');
  //drp.setEndDate('2014/03/03');
  window.addEventListener('apply.daterangepicker', function (ev) {
    console.log(ev.detail.startDate.unix());
    console.log(ev.detail.endDate.unix());
    timestampStart2 = ev.detail.startDate.unix();
    timestampEnd2 = ev.detail.endDate.unix();
  });
});

// Gets the event name, event description, timestamp start, and timestamp end from the modal and creates a new event
export function editButton(eventId) {
  const eventName2 = document.getElementById("event-name2").value;
  const eventDesc2 = document.getElementById("event-desc2").value;

  editEvent("1234567890", "aaaaaaaa", eventId, eventName2, eventDesc2, timestampStart2, timestampEnd2, () => { });
}