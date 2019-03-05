class HTMLHelper {
  constructor() {

  }

  static renderHome() {
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
              <div id="add-trip-form">
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
          <p class="title">Trips:</p>
          <div id="card-container" class="columns is-multiline">
            <!-- this is where trip cards end up -->
          </div>
        </article>
      </div>
    </div>
    `
  }

  static renderForm() {
    let formContainer = document.querySelector('#add-trip-form')

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
      <label class="label">Photo Url:</label>
      <div class="control">
        <input class="input" type="text" placeholder="Enter the url to your photo.">
      </div>
    </div>

    <!-- use above code until we figure out files -->
    <!-- <div class="field">
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
    </div> -->

    <div class="field is-grouped">
      <div class="control">
        <button id="trip-addBtn" class="button is-link" type="submit">Submit</button>
      </div>
      <div class="control">
        <button class="button is-text">Cancel</button>
      </div>
    </div>
    `

    // Initialize all input of date type.
    let calendars = bulmaCalendar.attach('[type="date"]');
  }

  static renderShowPage(trip){
    let container = document.querySelector('#main-container')
    // remember nothing inside innerHTML can have an event listener added inside this function. create it separately and append!
    container.innerHTML = `
    <div class="tile is-ancestor">
      <div class="tile is-vertical">
        <div class="tile">
          <div class="tile is-parent is-vertical">
            <article class="tile is-child notification">
              <p class="title">Trip Cover Picture</p>
                <div class="field is-grouped">
                  <p class="control">
                    <button id="trip-edit-btn" class="button is-warning modal-button" data-target="modal" aria-haspopup="true">
                      Edit Trip
                    </button>
                  </p>
                  <p class="control">
                    <button id="trip-del-btn" class="button is-danger">
                      Delete Trip
                    </button>
                  </p>
                </div>
              <figure class="image">
                <img src= ${trip.photo} >
              </figure>
            </article>
          </div>
          <div class="tile is-parent is-vertical">
            <article class="tile is-child notification">
              <p class="title"> ${trip.title} </p>
              <p> ${trip.description} </p>
            </article>
          </div>
        </div>
      </div>
    </div>

    <div class='tile is-ancestor'>
     <div class='tile column is-parent is-6'>
       <article class="tile is-child notification">
         <p class="title">Entries</p>
         <ul id = "entry-ul">
         <!-- this is where the trip entries will end up -->
         </ul><br>
         <div class="field">
           <p class="control">
             <button id="entry-add-btn" class="button is-success modal-button" data-target="modal" aria-haspopup="true">
               Add Entry
             </button>
           </p>
        </div>
       </article>
     </div>
     <div class="tile columns column is-6 is-multiline">
      <div class="tile column is-parent is-6">
        <article class="tile is-child notification">

          <figure class="image is-4by3">
            <img id="sample-image-1" src="">
          </figure>
          <h6 id="sample-caption-1" class="subtitle is-6 has-text-right">Subtitle 6</h6>
        </article>
      </div>
      <div class="tile column is-parent is-6">
        <article class="tile is-child notification">

          <figure class="image is-4by3">
            <img id="sample-image-2" src="">
          </figure>
          <h6 id="sample-caption-2" class="subtitle is-6 has-text-right">Subtitle 6</h6>
        </article>
      </div>
      <div class="tile column is-parent is-6">
        <article class="tile is-child notification">

          <figure class="image is-4by3">
            <img id="sample-image-3" src="">

          </figure>
          <h6 id="sample-caption-3" class="subtitle is-6 has-text-right">Subtitle 6</h6>
        </article>
      </div>
      <div class="tile column is-parent is-6">
        <article class="tile is-child notification">
          <figure class="image is-4by3">
            <img id="sample-image-4" src="">
          </figure>
          <h6 id="sample-caption-4" class="subtitle is-6 has-text-right">Subtitle 6</h6>
        </article>
      </div>
    </div>
    </div>
    `

    Entry.renderEntryList(trip)
    Photo.fetchSamplePhotos(trip)
    trip.btnListener()
  }

  static renderEditForm() {
    let modalDiv = document.createElement('div')
    modalDiv.className = 'modal'
    modalDiv.innerHTML = `
      <div class="modal-background"></div>
      <div class="modal-card">
        <header class="modal-card-head">
          <p class="modal-card-title">Modal title</p>
          <button id="trip-edit-close" class="delete" aria-label="close"></button>
        </header>
        <section class="modal-card-body">
          <div class="content">
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
            <label class="label">Photo Url:</label>
            <div class="control">
              <input class="input" type="text" placeholder="Enter the url to your photo.">
            </div>
          </div>

          <!-- use above code until we figure out files -->
          <!-- <div class="field">
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
            </div> -->
        </div>

        </section>
        <footer class="modal-card-foot">
          <button id="trip-edit-save" class="button is-success">Save changes</button>
          <button id="trip-edit-cancel" class="button">Cancel</button>
        </footer>
      </div>
    </div>`


    let section = document.querySelector('.section')
    section.appendChild(modalDiv)
  }

  static renderEntryShow(entry, trip) {

    fetch(`http://localhost:3000/api/v1/entries/${entry.id}`)
      .then(res => res.json())
      .then(entry => {
        console.log("trying to render entry show")
        let container = document.querySelector('#main-container')
        // remember nothing inside innerHTML can have an event listener added inside this function. create it separately and append!
        container.innerHTML = `
      <div class="tile is-ancestor">
        <div class="tile is-vertical">
          <div class="tile">
            <div class="tile is-parent is-vertical">
              <article class="tile is-child notification">
                <p class="title">${entry.title}</p>
                <figure class="image">
                  <img id="entry-main-photo" src= ${entry.photos[0].url} >
                </figure>
              </article>
            </div>
            <div class="tile is-parent is-vertical">
              <article class="tile is-child notification">
                <p class="title"> ${entry.date} </p>
                <p> ${entry.story}</p>
              </article>
            </div>
          </div>
        </div>
      </div>

      <div class='tile is-ancestor'>
       <div class='tile column is-parent is-6'>
         <article class="tile is-child notification">
           <p class="title">${trip.title}</p>
           <ul id = "entry-ul">
           <!-- this is where the trip entries will end up -->
           </ul>
         </article>
       </div>
       <div class="tile columns column is-6 is-multiline">
        <div class="tile column is-parent is-6">
          <article class="tile is-child notification">

            <figure class="image is-4by3">
              <img id="sample-image-1">
            </figure>
            <h6 id="sample-caption-1" class="subtitle is-6 has-text-right"></h6>
          </article>
        </div>
        <div class="tile column is-parent is-6">
          <article class="tile is-child notification">

            <figure class="image is-4by3">
              <img id="sample-image-2" >
            </figure>
            <h6 id="sample-caption-2" class="subtitle is-6 has-text-right"><h6>
          </article>
        </div>
        <div class="tile column is-parent is-6">
          <article class="tile is-child notification">

            <figure class="image is-4by3">
              <img id="sample-image-3">

            </figure>
            <h6 id="sample-caption-3" class="subtitle is-6 has-text-right"></h6>
          </article>
        </div>
        <div class="tile column is-parent is-6">
          <article class="tile is-child notification">

            <figure class="image is-4by3">
              <img id="sample-image-4" >
            </figure>
            <h6 id="sample-caption-4" class="subtitle is-6 has-text-right"></h6>
          </article>
        </div>
      </div>
    </div>
      `
      document.body.scrollTop = 0;
      document.documentElement.scrollTop = 0
        Entry.renderEntryList(trip)
        Photo.renderEntryPhotos(entry)

      })
  }
}
