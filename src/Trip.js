class Trip {
  constructor (trip) {
    this.id = trip.id
    this.title = trip.title
    this.date = trip.date
    this.location = trip.location
    this.description = trip.description
    this.photo = trip.photo
    this.entries = trip.entries
  }

  static fetchTrips () {
    fetch('http://localhost:3000/api/v1/trips')
    .then(res => res.json())
    .then(trips => {
      trips.forEach(trip => {
        let tripInstance = new Trip(trip)
        tripInstance.renderCard(trip)
      })
    })
  }

  static postTrip (e) {
    e.preventDefault()
    let title = document.querySelectorAll('input[type="text"]')[0].value
    let date = document.querySelector('.is-hidden').value
    let location = document.querySelector('select').value
    let description = document.querySelector('textarea').value
    let photo = document.querySelectorAll('input[type="text"]')[3].value
    let data = {
      title: title,
      date: date,
      location: location,
      description: description,
      photo: photo
    }
    fetch('http://localhost:3000/api/v1/trips', {
      method: 'POST',
      body: JSON.stringify(data),
      headers: {
          "Content-Type": "application/json",
          Accept: "application/json"
      }
    })
    .then(res => res.json())
    .then(trip => {
      let tripInstance = new Trip(trip)
      tripInstance.renderCard(trip)
      document.querySelectorAll('input[type="text"]')[0].value = ''
      document.querySelectorAll('input[type="text"]')[1].value = ''
      document.querySelector('select').value = ''
      document.querySelector('textarea').value = ''
      document.querySelectorAll('input[type="text"]')[3].value = ''
    })

  }

  renderCard (trip) {
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
      <p class="title is-4 is-centered">${this.title}</p>
      <p class="subtitle is-6">${this.date}</p>
    </div>

    <div class="content">
      ${this.description}
      <br>
      <time datetime="2016-1-1">Maybe trip entry here?</time>
    </div>
    `

    cardContainer.appendChild(card)
    card.addEventListener('click', this.renderShow.bind(this))
  }

  renderShow () {
    let mainDiv = document.querySelector("#main-container")
    mainDiv.innerHTML = ""
    HTMLHelper.renderShowPage(this)
  }

  




}
