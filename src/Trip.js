class Trip {
  constructor (trip) {
    this.id = trip.id
    this.title = trip.title
    this.date = trip.date
    this.location = trip.location
    this.description = trip.description
    this.photo = trip.photo
  }

  static fetchTrips () {
    fetch('http://localhost:3000/api/v1/trips')
    .then(res => res.json())
    .then(trips => {
      trips.forEach(trip => {
        let tripInstance = new Trip(trip)
        tripInstance.render(trip)
      })
    })
  }

  render (trip) {
    let cardContainer = document.querySelector('#card-container')
    let card = document.createElement('div')
    card.classList.add('card', 'column', 'is-3')

    card.innerHTML = `
    <div class="card-image">
      <figure class="image is-4by3">
        <img src="${this.photo}" alt="Placeholder image">
      </figure>
    </div>
    <div class="card-content">
      <p class="title is-4">${this.title}</p>
      <p class="subtitle is-6">${this.date}</p>
    </div>

    <div class="content">
      ${this.description}
      <br>
      <time datetime="2016-1-1">Maybe trip entry here?</time>
    </div>
    `

    cardContainer.appendChild(card)
    card.addEventListener('click', () => {
      console.log('this would take me to the trip show page')
    })
  }
}
