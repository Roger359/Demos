const btn = document.querySelector(".btn");
const appElement = document.getElementById("app");

// getting the notes saved in the localstorage before
getNotes().forEach((note) => {
  const noteElement = createNoteElement(note.id, note.content)
  appElement.insertBefore(noteElement, btn)
})

function createNoteElement(id, content) {
  const element = document.createElement("textarea");
  element.classList.add("note");
  element.placeholder = "Empty Note";
  element.value = content;

  element.addEventListener("dblclick", () => {
    const warning = confirm("Do you want to delete this note?");

    if (warning) {
      deleteNote(id, element);
    }
  });

  element.addEventListener("input", () => {
    updateNote(id, element.value);
  });

  return element;
}

function updateNote(id,content) {

  const notes = getNotes()
  const target = notes.filter((note) => note.id === id)[0];

  target.content = content
  saveNoteLocalStorage(notes)
  

}

function deleteNote(id, element) {
  const notes = getNotes().filter((note) => note.id !== id)

  saveNoteLocalStorage(notes)
  appElement.removeChild(element)

}

function saveNoteLocalStorage(note) {
  localStorage.setItem("note-app", JSON.stringify(note));
}

function getNotes() {
  return JSON.parse(localStorage.getItem("note-app") || "[]");
}



const addNote = () => {
  const notes = getNotes();
  const noteObj = {
    id: Math.floor(Math.random() * 100000),
    content: "",
  };

  const noteElement = createNoteElement(noteObj.id, noteObj.content);
  appElement.insertBefore(noteElement, btn);

  notes.push(noteObj);

  saveNoteLocalStorage(notes);
};

btn.addEventListener("click", addNote);
