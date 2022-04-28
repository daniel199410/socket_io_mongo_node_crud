import {loadNotes} from "./socket.js";
import {onHandleSubmit} from "./ui.js";

loadNotes();

const noteForm = document.querySelector('#note-form')
noteForm.addEventListener('submit', onHandleSubmit)
