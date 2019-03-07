class Entry {
  constructor (entry) {
    this.id = entry.id
    this.date = entry.date
    this.title = entry.title
    this.story = entry.story
    this.photos = entry.photos
    this.trip_id = entry.trip_id
  }

  static renderEntryList(trip) {

    fetch(`http://localhost:3000/api/v1/trips/${trip.id}`)
    .then(res => res.json())
    .then(trip => {
    trip.entries.forEach((entry) => {
    let entryUl = document.querySelector("#entry-ul")
    let entryLi = document.createElement("li")
    entryLi.classList.add("button", "is-text")
    let truncatedEntry = entry.story.substring(0,45)
    entryLi.innerHTML = `${entry.title} - ${truncatedEntry}...`
    entryUl.appendChild(entryLi)
    entryLi.addEventListener("click", ()=> { HTMLHelper.renderEntryShow(entry, trip)
    HTMLHelper.renderAddPhotoForm()})
    })
  })
  }

  // adds listeners on entry show page
  static addListen (entry, trip){

    let entryEditModal = document.querySelector("#edit-entry-modal")
    let entryModalBackground = entryEditModal.children[0]
    let entryModalClose = document.querySelector('#edit-entry-close')
    let entryCnclBtn = document.querySelector('#entry-edit-cancel')
    let entryEditBtn = document.querySelector('#entry-edit-btn')
    let entryDelBtn = document.querySelector('#entry-del-btn')

    entryModalBackground.addEventListener('click', () => {
      entryEditModal.classList.toggle('is-active')
    })

    entryModalClose.addEventListener('click', () => {
      entryEditModal.classList.toggle('is-active')
    })

    entryCnclBtn.addEventListener('click', () => {
      entryEditModal.classList.toggle('is-active')
    })

    entryEditBtn.addEventListener('click', () => {
      entryEditModal.classList.toggle('is-active')
      let title = document.querySelector("#entry-edit-title")
      title.value= entry.title

      let story = document.querySelector("#entry-edit-story")
      story.value = entry.story
      let date = document.querySelector("#entry-edit-date")
      date.value = entry.date

    })

    let saveEntryButton = document.querySelector("#entry-edit-save")
    saveEntryButton.addEventListener("click", () => {
      entryEditModal.classList.toggle('is-active')
      Entry.editEntry(entry.id, trip)
    })
    // saveEntryButton.addEventListener("click", Entry.editEntry(entry, title, story, date))

    entryDelBtn.addEventListener('click', () => {
      let choice = window.confirm('Are you sure you want to delete this entry? This cannot be undone!')
      if (choice) {
        Entry.deleteEntry(entry, trip)
      }
    })


    let photoModal = document.querySelector('#add-photo-modal')
    let photoModalBackground = photoModal.children[0]
    let photoModalClose = document.querySelector('#add-photo-close')
    let photoCnclBtn = document.querySelector('#add-photo-cancel')
    let addPhotoBtn = document.querySelector('#add-photo-btn')
    let photoSaveBtn = document.querySelector('#add-photo-save')

    photoModalBackground.addEventListener('click', () => {
      photoModal.classList.toggle('is-active')
    })

    photoModalClose.addEventListener('click', () => {
      console.log('i was pressed')
      photoModal.classList.toggle('is-active')
    })

    photoCnclBtn.addEventListener('click', () => {
      photoModal.classList.toggle('is-active')
    })

    addPhotoBtn.addEventListener('click', () => {
      photoModal.classList.toggle('is-active')
    })

    photoSaveBtn.addEventListener('click', () => {
      photoModal.classList.toggle('is-active')
      Photo.postPhoto()
    })

    let photoName = document.querySelector('#file-name')
    let photoInput = document.querySelector('#add-photo-file')

    photoInput.addEventListener('change', showFileName)

    function showFileName(e) {

      // the change event gives us the input it occurred in
      let photoInput = e.srcElement

      // the input has an array of files in the `files` property, each one has a name that you can use. We're just using the name here.
      let fileName = photoInput.files[0].name

      // use fileName however fits your app best, i.e. add it into a div
      photoName.textContent = 'File name: ' + fileName;
    }
  }


  static postEntry (trip_id) {
    window.event.preventDefault()
    let title = document.querySelectorAll('input[type="text"]')[2].value
    let story = document.querySelectorAll('textarea')[1].value
    let date = document.querySelectorAll('input[type="date"]')[1].value
    let data = {
      title: title,
      story: story,
      date: date,
      trip_id: trip_id
    }
    fetch('http://localhost:3000/api/v1/entries', {
      method: 'POST',
      body: JSON.stringify(data),
      headers: {
          "Content-Type": "application/json",
          Accept: "application/json"
      }
    })
    .then(res => res.json())
    .then(entry => {
      document.querySelectorAll('input[type="text"]')[2].value = ''
      document.querySelectorAll('textarea')[1].value = ''
      document.querySelectorAll('input[type="date"]')[1].value = ''
      document.querySelectorAll('.modal')[1].classList.toggle('is-active')
      fetch(`http://localhost:3000/api/v1/trips/${entry.trip.id}`)
      .then(res => res.json())
      .then(trip => {
        let tripInstance = new Trip(trip)
        tripInstance.renderShow()
      })
    })
  }

  static editEntry(entry_id, trip){
    let title = document.querySelector("#entry-edit-title").value
    let story = document.querySelector("#entry-edit-story").value
    let date = document.querySelector("#entry-edit-date").value

    let data = {title: title, story: story, date: date}

    fetch(`http://localhost:3000/api/v1/entries/${entry_id}`,{
    method: "PATCH",
    headers: {
        "Content-Type": "application/json",
        Accept: "application/json"
      },
      body: JSON.stringify(data)
    })
    .then(res => res.json())
    .then(entry => {
      let entryInstance = new Entry(entry)
      let tripInstance = new Trip(entry.trip)
      HTMLHelper.renderEntryShow(entryInstance, tripInstance)}
    )
    }

  static deleteEntry(entry, trip){
    fetch(`http://localhost:3000/api/v1/entries/${entry.id}`,{
    method: "DELETE"})
    .then(res => HTMLHelper.renderShowPage(trip))
  }

}
