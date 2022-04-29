import {deleteNote, saveNote} from "./socket.js";

const noteList = document.querySelector('#note-list');
export const onHandleSubmit = e => {
    e.preventDefault()
    const noteForm = document.querySelector('#note-form')
    saveNote(noteForm['title'].value, noteForm['description'].value)
}

const renderNote = note => {
    const div = document.createElement('div');
    div.id = note._id;
    div.innerHTML = `
        <h1>${note.title}</h1>
        <div>
            <button type="button" class="btn-delete" data-id="${note._id}">Delete</button>
            <button>Update</button>
        </div>
        <p>${note.description}</p>
    `
    const deleteButtons = div.querySelector('.btn-delete')
    deleteButtons.addEventListener('click', () => deleteNote(deleteButtons.dataset.id));
    return div;
};

export const renderNotes = notes =>
{
    noteList.innerHTML = '';
    notes.forEach(note => noteList.append(renderNote(note)))
}

export const appendNote = note => noteList.append(renderNote(note))

export const popNote = id => noteList.removeChild(document.getElementById(id));
