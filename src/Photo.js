class Photo {
  constructor (photo) {
    this.id = photo.id
    this.caption = this.caption
    this.entry_id = photo.entry_id
  }

    static fetchSamplePhotos(trip) {


    fetch(`http://localhost:3000/api/v1/trips/${trip.id}`)
    .then(res => res.json())
    .then((trip) => {

      if (trip.photos.length === 0){
        let photoCard = document.querySelectorAll(`.sample-image`)
        photoCard.forEach(card => card.src = 'https://image.flaticon.com/icons/png/512/3/3901.png')
        // let captionHead = document.querySelector(`#sample-caption-${index+1}`)
      }else{
          trip.photos.slice(0,4).forEach(function(photo, index){
          let photoCard = document.querySelector(`#sample-image-${index+1}`)
          let captionHead = document.querySelector(`#sample-caption-${index+1}`)
          photoCard.src = photo.url
          captionHead.innerHTML = photo.caption})}
      })}

    static renderEntryPhotos(entry){
      let image1 = document.querySelector("#sample-image-1")
      let image2 = document.querySelector("#sample-image-2")
      let image3 = document.querySelector("#sample-image-3")
      let image4 = document.querySelector("#sample-image-4")
      let imagesArray = [image1, image2, image3, image4]

      let caption1 = document.querySelector("#sample-caption-1")
      let caption2 = document.querySelector("#sample-caption-2")
      let caption3 = document.querySelector("#sample-caption-3")
      let caption4 = document.querySelector("#sample-caption-4")

      image1.src = entry.photos[0].url
      image2.src = entry.photos[1].url
      image3.src = entry.photos[0].url
      image4.src = entry.photos[1].url

      caption1.innerText = entry.photos[0].caption
      caption2.innerText = entry.photos[1].caption
      caption3.innerText = entry.photos[0].caption
      caption4.innerText = entry.photos[1].caption

      let entryMainPhoto = document.querySelector("#entry-main-photo")

      imagesArray.forEach(el => el.addEventListener("click", (e)=> {
          let entryMainPhoto = document.querySelector("#entry-main-photo")
          entryMainPhoto.src = e.target.src
      }))
    }
  }
