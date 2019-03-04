class Trip {
  constructor (trip) {
    this.id = trip.id
    this.title = trip.title
    this.date = trip.date
    this.location = trip.location
    this.description = trip.description
    this.photo = trip.photo
  }

  render () {
    let container = document.querySelector('#main-container')
    // remember nothing inside innerHTML can have an event listener added inside this function. create it separately and append!
    container.innerHTML = `
    <div class="tile is-ancestor">
      <div class="tile is-vertical">
        <div class="tile">
          <div class="tile is-parent is-vertical">
            <article class="tile is-child">
              <p class="title">Profile Picture</p>
              <figure class="image">
                <img src="${this.photo}">
              </figure>
            </article>
          </div>
          <div class="tile is-parent">
            <article class="tile is-child notification">
              <p class="title">Add a Trip</p>
              <p id="add-trip-form" class="subtitle">Form will be inside me!</p>
            </article>
          </div>
          <div class="tile is-parent">
            <article class="tile is-child notification">
              <div class="content">
                <p class="title">Travel and Me:</p>
                <p class="subtitle">I'm a digital nomad with a thirst for adventure. I always have my laptop with me, but I'm keen to join on any adventure, anywhere, anytime. I work hard so I can play hard!</p>
                <div class="content">
                </div>
              </div>
            </article>
          </div>
        </div>
        <div class="tile is-parent">
          <article class="tile is-child notification">
            <p class="title">Wide tile</p>
            <div id="card-container" class="columns is-multiline">
              <!-- this is where trip cards end up -->
            </div>
          </article>
        </div>
      </div>
    </div>
    `

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
      <time datetime="2016-1-1">11:09 PM - 1 Jan 2016</time>
    </div>
    `

    // explicitly done twice, but will be done in a loop
    let card1 = document.createElement('div')
    card1.classList.add('card', 'column', 'is-3')

    card1.innerHTML = `
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
      <time datetime="2016-1-1">11:09 PM - 1 Jan 2016</time>
    </div>
    `

    let card2 = document.createElement('div')
    card2.classList.add('card', 'column', 'is-3')

    card2.innerHTML = `
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
      <time datetime="2016-1-1">11:09 PM - 1 Jan 2016</time>
    </div>
    `

    let card3 = document.createElement('div')
    card3.classList.add('card', 'column', 'is-3')

    card3.innerHTML = `
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
      <time datetime="2016-1-1">11:09 PM - 1 Jan 2016</time>
    </div>
    `

    let card4 = document.createElement('div')
    card4.classList.add('card', 'column', 'is-3')

    card4.innerHTML = `
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
      <time datetime="2016-1-1">11:09 PM - 1 Jan 2016</time>
    </div>
    `

    cardContainer.appendChild(card)
    cardContainer.appendChild(card1)
    cardContainer.appendChild(card2)
    cardContainer.appendChild(card3)
    cardContainer.appendChild(card4)

  }
}
