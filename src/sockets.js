import Note from "./models/Note";

export default io => {
    io.on('connection', socket => {
        const emitNotes = async () => {
            const notes = await Note.find();
            io.emit('loadNotes', notes);
        }
        emitNotes().then();
        socket.on('saveNote', async data => {
            const note = new Note({title: data.title, description: data.description});
            const savedNote = await note.save();
            console.log(savedNote);
        })
    });


}
