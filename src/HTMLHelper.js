class HTMLHelper {
  constructor() {

  }

  static home() {
    HTMLHelper.renderHome()
    HTMLHelper.renderForm()
    document.querySelector('#trip-addBtn').addEventListener('click', Trip.postTrip)
    Trip.fetchTrips()
  }

  static renderMap () {
    let container = document.querySelector('#main-container')
    let mapDiv = document.createElement('div')
    mapDiv.id = 'map'
    mapDiv.class = 'container-fluid'
    container.appendChild(mapDiv)

    mapboxgl.accessToken = config["apiKey"]
    let map = new mapboxgl.Map({
      container: 'map', // container id
      style: 'mapbox://styles/mapbox/basic-v9', //hosted style id
      center: [0, 25], // starting position
      zoom: 1.5 // starting zoom
    })
    let geojson = {
      type: 'FeatureCollection',
      features: [{
        type: 'Feature',
        geometry: {
          type: 'Point',
          coordinates: [113.9213, -0.7893]
        },
        properties: {
          title: 'Indonesia',
          description: 'Fall 2016'
        }
      },
      {
        type: 'Feature',
        geometry: {
          type: 'Point',
          coordinates: [138.2529, 36.2048]
        },
        properties: {
          title: 'Japan',
          description: 'Spring 2016'
        }
      },
      {
        type: 'Feature',
        geometry: {
          type: 'Point',
          coordinates: [133.7751, -25.2744]
        },
        properties: {
          title: 'Australia',
          description: 'Summer 2016'
        }
      },
      {
        type: 'Feature',
        geometry: {
          type: 'Point',
          coordinates: [22.9375, -30.5595]
        },
        properties: {
          title: 'South Africa',
          description: 'Winter 2017'
        }
      }]
    }
    geojson.features.forEach(function(marker) {

      // create a HTML element for each feature
      let el = document.createElement('div');
      el.className = 'marker';

      // make a marker for each feature and add to the map
      new mapboxgl.Marker(el)
      .setLngLat(marker.geometry.coordinates)
      .setPopup(new mapboxgl.Popup({ offset: 25 }) // add popups
      .setHTML('<h3>' + marker.properties.title + '</h3><p>' + marker.properties.description + '</p>'))
      .addTo(map);
    })
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
              <p class="title">Adventure Pete</p>
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
                <p class="subtitle">Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem aperiam, eaque ipsa quae ab illo inventore veritatis et quasi architecto beatae vitae dicta sunt explicabo. Nemo enim ipsam voluptatem quia voluptas sit aspernatur aut odit aut fugit, sed quia consequuntur magni dolores eos qui ratione voluptatem sequi nesciunt. Neque porro quisquam est, qui dolorem ipsum quia dolor sit amet, consectetur, adipisci velit, sed quia non numquam eius modi tempora incidunt ut labore et dolore magnam aliquam quaerat voluptatem. Ut enim ad minima veniam, quis nostrum exercitationem ullam corporis suscipit laboriosam, nisi ut aliquid ex ea commodi consequatur? Quis autem vel eum iure reprehenderit qui in ea voluptate velit esse quam nihil molestiae consequatur, vel illum qui dolorem eum fugiat quo voluptas nulla pariatur?</p>
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

  static renderShowPage(trip) {
    let container = document.querySelector('#main-container')
    // remember nothing inside innerHTML can have an event listener added inside this function. create it separately and append!
    container.innerHTML = `
    <div class="tile is-ancestor">
      <div class="tile is-vertical">
        <div class="tile">
          <div class="tile is-parent is-vertical">
            <article class="tile is-child notification">
              <p class="title">${trip.title}</p>
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
                <img id="trip-main-photo" class= "resize" src= ${trip.photo} >
              </figure>
            </article>
          </div>
          <div class="tile is-parent is-vertical">
            <article class="tile is-child notification">
              <p class="title"> </p>
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
     <div class="tile column is-6 is-parent is-multiline ">
     <article class="tile is-child notification">
     <p class="title">Photos</p>
     <div id="trip-photo-container" class="columns is-multiline">
       <!-- this is where trip photos end up -->
     </div>
     </article>
    </div>
    </div>
    `

    document.body.scrollTop = 0;
    document.documentElement.scrollTop = 0
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
    let editForm = document.querySelector('#edit-entry-modal')
    let section = document.querySelector('section')
    if (editForm) {
      section.removeChild(editForm)
    }
    // document.querySelector('.section').innerHTML = ''
    HTMLHelper.renderEditEntryForm()
    fetch(`http://localhost:3000/api/v1/entries/${entry.id}`)
      .then(res => res.json())
      .then(entry => {
        let entryMainPhoto = ''
        console.log("trying to render entry show")
        let container = document.querySelector('#main-container')

        if (entry.photos.length === 0) {

          entryMainPhoto = "https://image.flaticon.com/icons/png/512/3/3901.png"

        } else {
          entryMainPhoto = entry.photos[0].url
        }
        // remember nothing inside innerHTML can have an event listener added inside this function. create it separately and append!

        container.innerHTML = `
      <div class="tile is-ancestor">
        <div class="tile is-vertical">
          <div class="tile">
            <div class="tile is-parent is-vertical">
              <article class="tile is-child notification">
                <p class="title">${entry.title}</p>
                <div class="field is-grouped">
                  <p class="control">
                    <button id="entry-edit-btn" class="button is-warning modal-button" data-target="modal" aria-haspopup="true">
                      Edit Entry
                    </button>
                  </p>
                  <p class="control">
                    <button id="entry-del-btn" class="button is-danger">
                      Delete Entry
                    </button>
                  </p>
                  <p class="control">
                    <button id="add-photo-btn" class="button is-success modal-button" data-target="modal" aria-haspopup="true">
                      Add Photo
                    </button>
                  </p>
                </div>
                <figure class="image">
                  <img id="entry-main-photo" class="resize" src= ${entryMainPhoto}>
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
         <div class="tile column is-6 is-parent is-multiline ">
           <article class="tile is-child notification">
           <p class="title">Photos <button id= "add-pic-to-entry" class= "button is-success">Add Photo</button></p>
            <div id="entry-photo-container" class="columns is-multiline">
         <!-- this is where entry photos end up -->
            </div>
           </article>
      </div>
    </div>
      `

      document.body.scrollTop = 0;
      document.documentElement.scrollTop = 0
      Entry.addListen(entry, trip)
      Entry.renderEntryList(trip)
      Photo.renderEntryPhotos(entry)

      let a = document.createElement('a')
      a.innerText = 'Back to Trip'

      container.appendChild(a)
      a.addEventListener('click', () => {trip.renderShow()})
    })
  }

  static renderAddEntryForm() {
    let modalDiv = document.createElement('div')
    modalDiv.className = 'modal'
    modalDiv.innerHTML = `
      <div class="modal-background"></div>
      <div class="modal-card">
        <header class="modal-card-head">
          <p class="modal-card-title">Add Entry</p>
          <button id="add-entry-close" class="delete" aria-label="close"></button>
        </header>
        <section class="modal-card-body">
          <div class="content">
          <div class="field">
            <label class="label">Title</label>
            <div class="control">
              <input id="entry-input-title" class="input" type="text" placeholder="e.g The Catacombs">
            </div>
          </div>

          <div class="field">
          <label class="label">Story</label>
          <div class="control">
          <textarea id="entry-input-story" class="textarea" placeholder="Today we explored the catacombs under Paris..."></textarea>
          </div>
          </div>

          <div class="field">
            <label class="label">Date</label>
            <div class="control">
              <input class="input" id="entry-input-date" type="date">
            </div>
          </div>
        </div>

        </section>
        <footer class="modal-card-foot">
          <button id="entry-add-save" class="button is-success">Save Entry</button>
          <button id="entry-add-cancel" class="button">Cancel</button>
        </footer>
      </div>
    </div>`


    let section = document.querySelector('.section')
    section.appendChild(modalDiv)
  }

  static renderEditEntryForm() {
    let modalDiv = document.createElement('div')
    modalDiv.className = 'modal'
    modalDiv.id = "edit-entry-modal"
    modalDiv.innerHTML = `
      <div class="modal-background"></div>
      <div class="modal-card">
        <header class="modal-card-head">
          <p class="modal-card-title">Edit Entry</p>
          <button id="edit-entry-close" class="delete" aria-label="close"></button>
        </header>
        <section class="modal-card-body">
          <div class="content">
          <div class="field">
            <label class="label">Title</label>
            <div class="control">
              <input id="entry-edit-title" class="input" type="text" placeholder="e.g The Catacombs">
            </div>
          </div>

          <div class="field">
          <label class="label">Story</label>
          <div class="control">
          <textarea id="entry-edit-story" class="textarea" placeholder="Today we explored the catacombs under Paris..."></textarea>
          </div>
          </div>

          <div class="field">
            <label class="label">Date</label>
            <div class="control">
              <input class="input" id="entry-edit-date" type="date">
            </div>
          </div>
        </div>

        </section>
        <footer class="modal-card-foot">
          <button id="entry-edit-save" class="button is-success">Edit Entry</button>
          <button id="entry-edit-cancel" class="button">Cancel</button>
        </footer>
      </div>
    </div>`


    let section = document.querySelector('.section')
    section.appendChild(modalDiv)
  }



  static renderAddPhotoForm () {
    console.log('photo form')
    let modalDiv = document.createElement('div')
    modalDiv.className = 'modal'
    modalDiv.id = 'add-photo-modal'
    modalDiv.innerHTML = `
    <div class="modal-background"></div>
    <div class="modal-card">
      <header class="modal-card-head">
        <p class="modal-card-title">Modal title</p>
        <button id="add-photo-close" class="delete" aria-label="close"></button>
      </header>
      <section class="modal-card-body">
        <div class="content">
        <form enctype="multipart/form-data">



        <div class="field">
          <label class="label">Photos:</label>
          <div class="file has-name is-small">
            <label class="file-label">
              <input id="add-photo-file" class="file-input" type="file" name="image" accept="image/*">
              <span class="file-cta">
                <span class="file-icon">
                  <i class="fas fa-upload"></i>
                </span>
                <span class="file-label">
                  Choose an image to upload
                </span>
                <span id="file-name" class="file-name">

                </span>
              </span>
            </label>
          </div>
        </div>
      </div>
      </section>
      <footer class="modal-card-foot">
        <button id="add-photo-save" class="button is-success">Save Entry</button>
        <button id="add-photo-cancel" class="button">Cancel</button>
      </footer>
      </form>
    </div>`

    let section = document.querySelector('.section')
    section.appendChild(modalDiv)
  }
}

// saving for white space in function directly above
// <div class="field">
//   <label class="label">Caption</label>
//   <div class="control">
//     <input id="add-photo-caption" class="input" type="text" placeholder="e.g The Seine at dusk.">
// </div>
