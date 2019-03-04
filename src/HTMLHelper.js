class HTMLHelper {
  constructor() {

  }

  static renderHome () {
    let container = document.querySelector('#main-container')
    // remember nothing inside innerHTML can have an event listener added inside this function. create it separately and append!
    container.innerHTML = `
    <div class="tile is-ancestor">
      <div class="tile is-vertical">
        <div class="tile">
          <div class="tile is-parent is-vertical">
            <article class="tile is-child notification">
              <p class="title">Profile Picture</p>
              <figure class="image">
                <img src="https://images.pexels.com/photos/1392099/pexels-photo-1392099.jpeg?cs=srgb&dl=adult-adventure-backpack-1392099.jpg&fm=jpg">
              </figure>
            </article>
          </div>
          <div class="tile is-parent">
            <article class="tile is-child notification">
              <p class="title">Add a Trip</p>
              <div id="add-trip-form" class="subtitle">
              </div>
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
      </div>
    </div>


    <div class="tile is-ancestor">
      <div class="tile is-parent">
        <article class="tile is-child notification">
          <p class="title">Wide tile</p>
          <div id="card-container" class="column">
            <!-- this is where trip cards end up -->
          </div>
        </article>
      </div>
      <div class="tile is-parent">
        <article class="tile is-child notification">
          <p class="title">Wide tile</p>
          <div id="card-container" class="column">
            <!-- this is where trip cards end up -->
          </div>
        </article>
      </div>
    </div>
    `
  }

  static renderForm () {
    let formContainer = document.querySelector('#add-trip-form')
    // let submitButton = document.createElement('input')
    // submitButton.type = 'submit'
    // submitButton.classList.add('button', 'is-primary')

    formContainer.innerHTML = `
    <div class="field">
      <label class="label">Title</label>
      <div class="control">
        <input class="input" type="text" placeholder="e.g Madagascar Vacation">
      </div>
    </div>

    <div class="field">
      <label class="label">Date</label>
      <div class="control">
        <input class="input" type="date">
      </div>
    </div>

    <div class="field">
    <label class="label">Location</label>
      <div class="control has-icons-left">
        <div class="select is-rounded">
          <select>
            <option selected>Country</option>
            <option>Select dropdown</option>
            <option>With options</option>
          </select>
        </div>
        <div class="icon is-small is-left">
          <i class="fas fa-globe"></i>
        </div>
      </div>
    </div>

    <div class="field">
      <label class="label">Description</label>
      <div class="control">
        <textarea class="textarea" placeholder="Enter a description of your trip."></textarea>
      </div>
    </div>

    <div class="field">
      <label class="label">Photos:</label>
      <div class="file is-small">
        <label class="file-label">
          <input class="file-input" type="file" name="resume">
          <span class="file-cta">
            <span class="file-icon">
              <i class="fas fa-upload"></i>
            </span>
            <span class="file-label">
              Choose a file…
            </span>
          </span>
        </label>
      </div>
    </div>

    <div class="field is-grouped">
      <div class="control">
        <button class="button is-link">Submit</button>
      </div>
      <div class="control">
        <button class="button is-text">Cancel</button>
      </div>
    </div>
    `

    // Initialize all input of date type.
    var calendars = bulmaCalendar.attach('[type="date"]');

    // Loop on each calendar initialized
    for(var i = 0; i < calendars.length; i++) { // Add listener to date:selected event calendars[i].on('date:selected',
      date => {
        console.log(date)
      }
    }
  }
}
