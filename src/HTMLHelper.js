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

  static renderShowPage(){
    let container = document.querySelector('#main-container')
    // remember nothing inside innerHTML can have an event listener added inside this function. create it separately and append!
    container.innerHTML = `
    <div class="tile is-ancestor">
      <div class="tile is-vertical">
        <div class="tile">
          <div class="tile is-parent is-vertical">
            <article class="tile is-child notification">
              <p class="title">Trip Cover Picture</p>
              <figure class="image">
                <img src='https://bulma.io/images/placeholders/640x480.png'>
              </figure>
            </article>
          </div>
          <div class="tile is-parent is-vertical">
            <article class="tile is-child notification">
              <p class="title">Trip Title</p>

              <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vivamus eleifend tempor pretium. Suspendisse mollis tristique est. Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia Curae; Aliquam urna ipsum, venenatis ut urna ut, sagittis eleifend arcu. Proin non tellus commodo, imperdiet urna ut, gravida mauris. Praesent at maximus velit, sollicitudin bibendum mauris. Duis ullamcorper fermentum mi quis vestibulum. Nunc convallis diam elit, a imperdiet justo dictum vel. In a justo venenatis, viverra ex eu, porta felis. Nulla convallis convallis tellus vitae auctor. Donec metus nibh, venenatis tristique ullamcorper vitae, vulputate ut nisl. Nullam non convallis tortor. Nulla non auctor turpis.

              </p>
            </article>
          </div>
        </div>
      </div>
    </div>

    <div class='tile is-ancestor'>
     <div class='tile is-parent'>
       <article class="tile is-child notification">
         <p class="title">Entries</p>
         <ul>
         <li>Day 1</li>
         <li>Day 2</li>
         <li>Day 3</li>
         <li>Day 4</li>
         </ul>
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

}
