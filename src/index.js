document.addEventListener('DOMContentLoaded', init)

function init () {
  HTMLHelper.renderHome()
  HTMLHelper.renderForm()
  // find form and add event listener
  // let trip1 = new Trip({id: 1, title: 'Paris avec ma cherie', date: '11/2018', location: 'Paris, FR', description: 'Very first visit to Paris, what a lovely city.', photo: 'https://images.pexels.com/photos/338515/pexels-photo-338515.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940'})
  // trip1.render()
  Trip.fetchTrips()
}
