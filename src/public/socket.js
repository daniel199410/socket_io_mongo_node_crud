const socket = io()

export const loadNotes = callback => socket.on('server:loadNotes', callback)

export const onNewNote = callback => socket.on('server:newNote', callback)

export const onNoteDeleted = callback => socket.on('server:noteDeleted', callback)

export const saveNote = (title, description) => {
    socket.emit('client:saveNote', {title, description})
};

export const deleteNote = id => socket.emit('client:deleteNote', id);
