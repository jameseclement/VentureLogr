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
                <img src="">
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
  }
}
