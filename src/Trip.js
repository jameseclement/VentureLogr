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

    <!-- <div class="content">
      // ${this.description}
      <br>
      <time datetime="2016-1-1">Maybe trip entry here?</time>
    </div> -->
    `

    cardContainer.appendChild(card)
    card.addEventListener('click', this.renderShow.bind(this))
  }

  renderShow () {
    let mainDiv = document.querySelector("#main-container")
    mainDiv.innerHTML = ""
    HTMLHelper.renderEditForm(this)
    HTMLHelper.renderAddEntryForm()
    HTMLHelper.renderShowPage(this)
  }

  btnListener () {
    let modal = document.querySelector('.modal')
    let modalBackground = document.querySelector('.modal-background')
    let modalClose = document.querySelector('#trip-edit-close')
    let cnclBtn = document.querySelector('#trip-edit-cancel')
    let editBtn = document.querySelector('#trip-edit-btn')
    let delBtn = document.querySelector('#trip-del-btn')
    delBtn.setAttribute('data-confirm', "Are you sure to delete this item?")

    modalBackground.addEventListener('click', () => {
      modal.classList.toggle('is-active')
    })

    modalClose.addEventListener('click', () => {
      modal.classList.toggle('is-active')
    })

    cnclBtn.addEventListener('click', () => {
      modal.classList.toggle('is-active')
    })

    editBtn.addEventListener('click', () => {
      modal.classList.toggle('is-active')
      this.editTrip(this)
    })

    delBtn.addEventListener('click', () => {
      let choice = window.confirm('Are you sure you want to delete this trip? This cannot be undone!')
      if (choice) {
        this.deleteTrip().bind(this)
      }
    })

    let entryModal = document.querySelectorAll('.modal')[1]
    let entryModalBackground = document.querySelectorAll('.modal-background')[1]
    let entryModalClose = document.querySelector('#add-entry-close')
    let entryBtn = document.querySelector('#entry-add-btn')
    let entryCnclBtn = document.querySelector('#entry-add-cancel')
    let save = document.querySelector('#entry-add-save')

    entryModalBackground.addEventListener('click', () => {
      entryModal.classList.toggle('is-active')
    })

    entryModalClose.addEventListener('click', () => {
      entryModal.classList.toggle('is-active')
    })

    entryCnclBtn.addEventListener('click', () => {
      entryModal.classList.toggle('is-active')
    })

    entryBtn.addEventListener('click', () => {
      entryModal.classList.toggle('is-active')
    })

    save.addEventListener('click', () => {
      Entry.postEntry(this.id)
    })
  }

  editTrip () {
    let save = document.querySelector('#trip-edit-save')
    save.addEventListener('click', this.patchTrip.bind(this))

    let title = document.querySelectorAll('input[type="text"]')[0]
    let date = document.querySelector('input[type="date"]')
    let location = document.querySelector('select')
    let description = document.querySelector('textarea')
    let photo = document.querySelectorAll('input[type="text"]')[1]
    title.value = this.title
    date.value = this.date
    // location.value = this.location
    description.value = this.description
    photo.value = this.photo
  }

  patchTrip (e) {
    e.preventDefault()
    let title = document.querySelectorAll('input[type="text"]')[0].value
    let date = document.querySelector('input[type="date"]').value
    let location = document.querySelector('select').value
    let description = document.querySelector('textarea').value
    let photo = document.querySelectorAll('input[type="text"]')[1].value
    let data = {
      title: title,
      date: date,
      location: location,
      description: description,
      photo: photo
    }
    fetch(`http://localhost:3000/api/v1/trips/${this.id}`, {
      method: 'PATCH',
      body: JSON.stringify(data),
      headers: {
          "Content-Type": "application/json",
          Accept: "application/json"
      }
    })
    .then(res => res.json())
    .then(trip => {
      document.querySelectorAll('input[type="text"]')[0].value = ''
      document.querySelector('input[type="date"]').value = ''
      document.querySelector('select').value = ''
      document.querySelector('textarea').value = ''
      document.querySelectorAll('input[type="text"]')[1].value = ''
      document.querySelector('.modal').classList.toggle('is-active')
      let tripInstance = new Trip(trip)
      tripInstance.renderShow()
    })

  }



  deleteTrip () {
    fetch(`http://localhost:3000/api/v1/trips/${this.id}`, {
      method: 'DELETE',
    })
    .then(res => {
      HTMLHelper.renderHome()
      HTMLHelper.renderForm()
      document.querySelector('#trip-addBtn').addEventListener('click', Trip.postTrip)
      Trip.fetchTrips()
    })
  }
}
