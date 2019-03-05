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
    let truncatedEntry = entry.story.substring(0,20)
    entryLi.innerHTML = `${entry.title} - ${truncatedEntry}...`
    entryUl.appendChild(entryLi)
    entryLi.addEventListener("click", ()=> HTMLHelper.renderEntryShow(entry, trip))
    })
  }

  static postEntry (e) {
    e.preventDefault()
    let title = document.querySelectorAll('input[type="text"]')[0].value
    let date = document.querySelector('.is-hidden').value
    let location = document.querySelector('select').value
    let description = document.querySelector('textarea').value
    let photo = document.querySelectorAll('input[type="text"]')[3].value
    let data = {
      title: title,
      date: date,
      location: location,
      description: description,
      photo: photo
    }
    fetch('http://localhost:3000/api/v1/trips', {
      method: 'POST',
      body: JSON.stringify(data),
      headers: {
          "Content-Type": "application/json",
          Accept: "application/json"
      }
    })
    .then(res => res.json())
    .then(trip => {
      let tripInstance = new Trip(trip)
      tripInstance.renderCard(trip)
      document.querySelectorAll('input[type="text"]')[0].value = ''
      document.querySelectorAll('input[type="text"]')[1].value = ''
      document.querySelector('select').value = ''
      document.querySelector('textarea').value = ''
      document.querySelectorAll('input[type="text"]')[3].value = ''
    })

  }
}
