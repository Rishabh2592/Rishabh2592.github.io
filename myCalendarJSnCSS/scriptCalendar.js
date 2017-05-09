var calendarApp = angular.module('calendarApp', []);

calendarApp.controller('calendarController',function($scope){
	$(document).ready(function() {

$('#external-events .fc-event').each(function() {

			// store data so the calendar knows to render an event upon drop
			$(this).data('event', {
				title: $.trim($(this).text()), // use the element's text as the event title
				stick: true // maintain when user navigates (see docs on the renderEvent method)
			});

			// make the event draggable using jQuery UI
			$(this).draggable({
                helper: 'clone',
				zIndex: 999,
				revert: true,      // will cause the event to go back to its
				revertDuration: 0  //  original position after the drag
			});

		});

$("#createButton").click(function(){
	$('#external-events .fc-event').each(function() {

			// store data so the calendar knows to render an event upon drop
			$(this).data('event', {
				title: $.trim($(this).text()), // use the element's text as the event title
				stick: true // maintain when user navigates (see docs on the renderEvent method)
			});

			// make the event draggable using jQuery UI
			$(this).draggable({
                helper: 'clone',
				zIndex: 999,
				revert: true,      // will cause the event to go back to its
				revertDuration: 0  //  original position after the drag
			});

		});
})
		/* initialize the calendar
		-----------------------------------------------------------------*/

		$('#calendar').fullCalendar({
			header: {
				left: 'prev,next today',
				center: 'title',
				right: 'month,agendaWeek,agendaDay'
			},
			editable: true,
			droppable: true, // this allows things to be dropped onto the calendar
			drop: function() {
				// is the "remove after drop" checkbox checked?
				if ($('#drop-remove').is(':checked')) {
					// if so, remove the element from the "Draggable Events" list
					$(this).remove();
				}
			},
			eventClick: function (calEvent, jsEvent, view) {
    $('#calendar').fullCalendar('removeEvents',calEvent._id);
}
		});

	});
  
  function clickToday() {
                                var Buttons = document.getElementsByTagName("button")
                                for (var i = 0, len = Buttons.length; i < len; ++i) {
                                                //document.write(Buttons[i].innerHTML)                                             
                                                if (Buttons[i].innerHTML == "today") {
                                                                Buttons[i].click();                                             
                                                }
                                }
}

$scope.events = ["Birthday","Meeting","Anniverary","Electricity Bill","Puppy care"];	
$scope.ev = {
	name: ""
};
$scope.addEvent = function(){
	if($scope.ev.name !== ""){
		$scope.events.unshift($scope.ev.name);
		$scope.ev.name = "";
	}
}
	
});