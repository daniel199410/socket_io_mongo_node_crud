import Note from "./models/Note";

export default io => {
    io.on('connection', socket => {
        const emitNotes = async () => {
            const notes = await Note.find();
            io.emit('server:loadNotes', notes);
        }
        emitNotes().then();
        socket.on('client:saveNote', async data => {
            const note = new Note({title: data.title, description: data.description});
            const savedNote = await note.save();
            socket.emit('server:newNote', savedNote);
        })
    });


}
