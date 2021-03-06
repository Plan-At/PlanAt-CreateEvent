# Feature Specification

### Feature Information
|||
|---|---|
|Feature Name|Plan-At|
|Area|Calendar Functions|
|Related Features|Bootstrap|
|Spec Status|Finished|

### Contact Information
|Role|Name|
|---|---|
|Manager|Chad Magendanz|
|Developer|Jack Scott|


### Revision Summary
|Author|Date|Version|Comment|
|---|---|---|---|
|Jack Scott|4/19/2022|Initial Draft|Created this page and outlined descriptions|
|Jack Scott|4/21/2022|Update Draft|Finished the descriptions of the features currently in place|
|Jack Scott|6/13/2022|Finish Draft|Added the rest of the features not previously present|
|Jack Scott|6/14/2022|Finish Feature Specs|Included pictures and added more to the boneyard|

## Functional Specification
The Create Event feature for the calendar, allowing for information about an event to be entered and then created. The Manage Events feature for the calendar, displays the events that the user currently has. The Edit Event feature, apart of Manage Events and is attached to each event and allows the user to change specific elements of the event. The Delete Event feature, apart of Manage Events and attached to each event, allows the user to delete the specific event.

## Scenario Description

The user wants to create a new event that will be displayed on the calendar, the user has access to multiple functions within this feature to easily make an event that is suitable to their needs. They can then manage the events they created and are able to either edit and change different aspects of the event, or delete the event.

## Feature Description
### Create Event
1. Create Event page: This page allows the user to enter the title, starting date/time, ending date/time, and description of the event.
2. Submit Event button: Gathers the information the user entered and sends it to the server.
<img width="403" alt="image" src="https://user-images.githubusercontent.com/90592684/173614758-02717382-60bb-4e9f-959a-8067b36b50a0.png">

### Manage Events
1. Manage Events page: Displays each event the user currently has, displays the title, time, and description of each event and contains an edit and delete button attached to it.
2. Edit Event button: When clicked on it displays the Edit Event page, is attached to each individual event.
3. Delete Event button: Deletes the specific event the button is attached to, then refreshes the Manage Events list.
<img width="403" alt="image" src="https://user-images.githubusercontent.com/90592684/173614758-02717382-60bb-4e9f-959a-8067b36b50a0.png">

### Edit Event
1. Edit Event page: Displays a page similar to the Create Event page where the user is able to update the title, time, and description of the event.
2. Submit Edit button: Gathers the information the user entered and communicates with the server to update the specific event the user clicked on.
<img width="403" alt="image" src="https://user-images.githubusercontent.com/90592684/173614758-02717382-60bb-4e9f-959a-8067b36b50a0.png">

## Boneyard
#### Reoccuring events
This page allowed the user to choose when and how often the event reoccurs, there are multiple options; daily, weekly, monthly, and yearly. Each has more options of their own. Removed because there was not enough time to continue working on it and implement it fully.
#### Event Validation
When the user creates the event theres code to make sure everything is inputted correctly. Removed because of lack of time and needed to focus on other more important features.
