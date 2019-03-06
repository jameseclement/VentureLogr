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
    trip.entries.forEach((entry) => {
    let entryUl = document.querySelector("#entry-ul")
    let entryLi = document.createElement("li")
    entryLi.classList.add("button", "is-text")
    let truncatedEntry = entry.story.substring(0,45)
    entryLi.innerHTML = `${entry.title} - ${truncatedEntry}...`
    entryUl.appendChild(entryLi)
    entryLi.addEventListener("click", ()=> HTMLHelper.renderEntryShow(entry, trip))
    })
  }

  // adds listeners on entry show page
  static addListen (entry, trip) {
    let entryEditModal = document.querySelector('.modal')
    let entryModalBackground = document.querySelector('.modal-background')
    let entryModalClose = document.querySelector('#add-entry-close')
    let entryCnclBtn = document.querySelector('#entry-add-cancel')
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
      Entry.editEntry(entry)
    })

    entryDelBtn.addEventListener('click', () => {
      let choice = window.confirm('Are you sure you want to delete this entry? This cannot be undone!')
      if (choice) {
        Entry.deleteEntry(entry)
      }
    })


    // let photoModal
    // let photoModalBackground
    // let photoModalClose
    // let photoCnclBtn
    // let addPhotoBtn = document.querySelector('#add-photo-btn')
    //
    // addPhotoBtn.addEventListener('click', () => {
    //   // add photo
    // })
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
}
