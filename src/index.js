document.addEventListener('DOMContentLoaded', init)

function init () {
  HTMLHelper.renderHome()
  HTMLHelper.renderForm()
  document.querySelector('#trip-addBtn').addEventListener('click', Trip.postTrip)
  Trip.fetchTrips()
}
