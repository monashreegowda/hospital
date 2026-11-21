// Attach event listener to the form
document.getElementById("bookingForm").addEventListener("submit", function(event) {
  event.preventDefault(); // Stop page refresh

  // 1. Get the values from the form
  var name = document.getElementById("patientName").value;
  var doctor = document.getElementById("doctorSelect").value;
  var date = document.getElementById("appDate").value;
  var time = document.getElementById("appTime").value;

  // 2. Format the date to look nice (e.g., "15 Nov 2026")
  var formattedDate = new Date(date).toDateString();

  // 3. Create the HTML ticket for the summary box
  var ticketHTML = 
    '<div class="ticket">' +
      '<h4><i class="fa-solid fa-circle-check"></i> Appointment Confirmed</h4>' +
      '<p><strong>Patient:</strong> ' + name + '</p>' +
      '<p><strong>Doctor:</strong> ' + doctor + '</p>' +
      '<p><strong>Date:</strong> ' + formattedDate + '</p>' +
      '<p><strong>Time:</strong> ' + time + '</p>' +
    '</div>';

  // 4. Show it in the summary box
  var summaryContent = document.getElementById("summaryContent");
  summaryContent.innerHTML = ticketHTML;

  // 5. Save to localStorage (Optional, but nice for a student project)
  var appointmentData = {
    name: name,
    doctor: doctor,
    date: formattedDate,
    time: time
  };
  localStorage.setItem("myAppointment", JSON.stringify(appointmentData));

  // 6. Clear the form for the next booking
  document.getElementById("bookingForm").reset();

  // Alert the user
  alert("Appointment booked successfully for " + name + "!");
});

// On page load, check if there is a saved appointment
window.onload = function() {
  var saved = localStorage.getItem("myAppointment");
  
  if (saved) {
    var data = JSON.parse(saved);
    
    var ticketHTML = 
      '<div class="ticket">' +
        '<h4><i class="fa-solid fa-circle-check"></i> Upcoming Appointment</h4>' +
        '<p><strong>Patient:</strong> ' + data.name + '</p>' +
        '<p><strong>Doctor:</strong> ' + data.doctor + '</p>' +
        '<p><strong>Date:</strong> ' + data.date + '</p>' +
        '<p><strong>Time:</strong> ' + data.time + '</p>' +
      '</div>';
      
    document.getElementById("summaryContent").innerHTML = ticketHTML;
  }
};