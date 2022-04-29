import {saveNote} from "./socket.js";

const noteList = document.querySelector('#note-list');
export const onHandleSubmit = e => {
    e.preventDefault()
    const noteForm = document.querySelector('#note-form')
    saveNote(noteForm['title'].value, noteForm['description'].value)
}

const renderNote = note => {
    const div = document.createElement('div');
    div.innerHTML = `
        <h1>${note.title}</h1>
        <div>
            <button>Delete</button>
            <button>Update</button>
        </div>
        <p>${note.description}</p>
    `
    return div;
};

export const renderNotes = notes => notes.forEach(note => noteList.append(renderNote(note)))

export const appendNote = note => renderNotes([note])
