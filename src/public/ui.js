import {saveNote} from "./socket.js";

export const onHandleSubmit = e => {
    e.preventDefault()
    const noteForm = document.querySelector('#note-form')
    saveNote(noteForm['title'].value, noteForm['description'].value)
}
