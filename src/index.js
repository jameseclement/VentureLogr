document.addEventListener('DOMContentLoaded', init)

function init () {
  HTMLHelper.renderHome()
  HTMLHelper.renderForm()
  HTMLHelper.renderMap()
  document.querySelector('#trip-addBtn').addEventListener('click', Trip.postTrip)
  Trip.fetchTrips()
}
