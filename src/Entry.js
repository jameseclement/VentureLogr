class Entry {
  constructor (entry) {
    this.id = entry.id
    this.date = entry.date
    this.title = entry.title
    this.story = entry.story
    this.trip_id = entry.trip_id
  }

  static renderEntryList(trip) {
    trip.entries.forEach((entry) => {
    let entryUl = document.querySelector("#entry-ul")
    let entryLi = document.createElement("li")
    let truncatedEntry = entry.story.substring(0,20)
    entryLi.innerHTML = `${entry.title} - ${truncatedEntry}...`
    entryUl.appendChild(entryLi)
    entryLi.addEventListener("click", ()=> HTMLHelper.renderEntryShow(entry, trip))
  })


}
}
