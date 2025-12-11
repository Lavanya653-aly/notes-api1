const express = require('express');
const app = express();
app.use(express.json());

let notes = [];
let nextId = 1;

// Test
app.get('/', (req, res) => {
  res.send('Server is running!');
});

// Create
app.post('/notes', (req, res) => {
  const { title } = req.body;
  const newNote = { id: nextId++, title: title };
  notes.push(newNote);
  res.status(201).json(newNote);
});

// Read
app.get('/notes', (req, res) => {
  res.json(notes);
});

// Update
app.put('/notes/:id', (req, res) => {
  const id = parseInt(req.params.id);
  const { title } = req.body;
  const note = notes.find(n => n.id === id);
  if (!note) return res.status(404).json({ message: 'Note not found' });
  note.title = title;
  res.json(note);
});

// Delete
app.delete('/notes/:id', (req, res) => {
  const id = parseInt(req.params.id);
  notes = notes.filter(n => n.id !== id);
  res.json({ message: 'Note deleted' });
});

app.listen(3000, () => {
  console.log('Server started on port 3000');
});
