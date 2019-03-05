class Photo {
  constructor (photo) {
    this.id = photo.id
    this.caption = this.caption
    this.entry_id = photo.entry_id
  }

  static fetchSamplePhotos(trip) {


    fetch(`http://localhost:3000/api/v1/trips/${trip.id}`)
    .then(res => res.json())
    .then(trip => {trip.photos.slice(0,4).forEach(function(photo, index){
      let photoCard = document.querySelector(`#sample-image-${index+1}`)
      let captionHead = document.querySelector(`#sample-caption-${index+1}`)
      photoCard.src = photo.url
      captionHead.innerHTML = photo.caption

    })
    })}
}


    //   let photo1 = document.querySelector("#sample-image-1")
    //   let photo2 = document.querySelector("#sample-image-2")
    //   let photo3 = document.querySelector("#sample-image-3")
    //   let photo4 = document.querySelector("#sample-image-4")
    //   let tripPhotos = trip.photo
    //     for (let i = tripPhotos.length - 1; i > 0; i--) {
    //     const j = Math.floor(Math.random() * (i + 1))
    //     [tripPhotos[i], tripPhotos[j]] = [tripPhotos[j], tripPhotos[i]]
    //     }
    //
    //
    // photo1.src = tripPhotos[0]
    // photo2.src = tripPhotos[1]
    // photo3.src = tripPhotos[2]
    // photo4.src = tripPhotos[3]
