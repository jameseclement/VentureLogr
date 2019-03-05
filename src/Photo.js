class Photo {
  constructor (photo) {
    this.id = photo.id
    this.caption = this.caption
    this.entry_id = photo.entry_id
  }

//used to get/show sample photos from a whole trip
    static fetchSamplePhotos(trip) {
      fetch(`http://localhost:3000/api/v1/trips/${trip.id}`)
    .then(res => res.json())
    .then((trip) => {trip.photos.splice(0,9).forEach(function(photo){
        let cardContainer = document.querySelector('#trip-photo-container')
        let card = document.createElement('div')
        card.classList.add('card', 'column', 'is-4')
        card.innerHTML = `
        <div class="card-image">
          <figure class="image is-4by3">
            <img src="${photo.url}" alt="Placeholder image">
          </figure>
        </div>
        `
        cardContainer.appendChild(card)
        card.addEventListener('click', (e)=> {
          let tripMainPhoto = document.querySelector("#trip-main-photo")
            tripMainPhoto.src = e.target.src
        })
      })
    })
  }


    static renderEntryPhotos(entry){
      entry.photos.forEach(function(photo){
        let cardContainer = document.querySelector('#entry-photo-container')
        let card = document.createElement('div')
        card.classList.add('card', 'column', 'is-4')
        card.innerHTML = `
        <div class="card-image">
        <figure class="image is-4by3">
        <img src="${photo.url}" alt="Placeholder image">
        </figure>
        </div>
        `
        cardContainer.appendChild(card)
        card.addEventListener('click', (e)=> {
          let entryMainPhoto = document.querySelector("#entry-main-photo")
          entryMainPhoto.src = e.target.src
        })
      })
    }
  }
      // if (trip.photos.length === 0){
      //   let photoCards = document.querySelectorAll(`.sample-image`)
      //   photoCards.forEach(card => card.src = 'https://image.flaticon.com/icons/png/512/3/3901.png')
      //   let captions = document.querySelectorAll('h6')
      //   captions.forEach(caption => caption.innerText = "Add photos to this trip!")
      //   // let captionHead = document.querySelector(`#sample-caption-${index+1}`)
      // }else{
      //     trip.photos.slice(0,4).forEach(function(photo, index){
      //     let photoCard = document.querySelector(`#sample-image-${index+1}`)
      //     let captionHead = document.querySelector(`#sample-caption-${index+1}`)
      //     photoCard.src = photo.url
      //     captionHead.innerHTML = photo.caption})}


  //
  // if (entry.photos.length === 0){
  //   let photoCard = document.querySelectorAll(`.sample-image`)
  //     photoCard.forEach(card => card.src = 'https://image.flaticon.com/icons/png/512/3/3901.png')
  //     let captions = document.querySelectorAll('h6')
  //     captions.forEach(caption => caption.innerText = "Add photos to this entry!")
  //   }
  //             // let captionHead = document.querySelector(`#sample-caption-${index+1}`)
  //
  //     let image1 = document.querySelector("#sample-image-1")
  //     let image2 = document.querySelector("#sample-image-2")
  //     let image3 = document.querySelector("#sample-image-3")
  //     let image4 = document.querySelector("#sample-image-4")
  //     let imagesArray = [image1, image2, image3, image4]
  //
  //     let caption1 = document.querySelector("#sample-caption-1")
  //     let caption2 = document.querySelector("#sample-caption-2")
  //     let caption3 = document.querySelector("#sample-caption-3")
  //     let caption4 = document.querySelector("#sample-caption-4")
  //     let captionsArray = [caption1, caption2, caption3, caption4]
  //
  //     imagesArray.forEach(function(image, index){
  //       image.src = entry.photos[index].url
  //     } )
  //     captionsArray.forEach(function(caption, index){
  //       caption.src = entry.photos[index].caption
  //     } )
  //
  //
  //     caption1.innerText = entry.photos[0].caption
  //     caption2.innerText = entry.photos[1].caption
  //     caption3.innerText = entry.photos[0].caption
  //     caption4.innerText = entry.photos[1].caption
  //
  //     let entryMainPhoto = document.querySelector("#entry-main-photo")
  //
  //     imagesArray.forEach(el => el.addEventListener("click", (e)=> {
  //         let entryMainPhoto = document.querySelector("#entry-main-photo")
  //         entryMainPhoto.src = e.target.src
  //     }))
  //   }
  // }
