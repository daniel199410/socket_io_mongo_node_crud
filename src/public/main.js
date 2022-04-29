import {loadNotes, onNewNote} from "./socket.js";
import {onHandleSubmit, renderNotes} from "./ui.js";

loadNotes(renderNotes);
onNewNote(note => renderNotes([note]));

const noteForm = document.querySelector('#note-form')
noteForm.addEventListener('submit', onHandleSubmit)
