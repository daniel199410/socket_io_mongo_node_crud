import {loadNotes, onNewNote, onNoteDeleted} from "./socket.js";
import {popNote, onHandleSubmit, renderNotes, appendNote} from "./ui.js";

loadNotes(renderNotes);
onNewNote(appendNote);
onNoteDeleted(popNote)

const noteForm = document.querySelector('#note-form')
noteForm.addEventListener('submit', onHandleSubmit)
