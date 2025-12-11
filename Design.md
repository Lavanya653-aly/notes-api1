# How request reaches my server?

The postman send an HTTP request to [POST,GET,PUT,DELETE] to http://localhost:3000/notes

> This request reaches my Node.js Express server running on port 3000.

> The express server then routes the request to the appropriate  function based on the HTTP method and URL.


*How the endpoint processes data?*

Each endpoint contains logic to handle the request:

GET /notes: returns all notes

POST /notes: reads the JSON body, creates a new note, and adds it to the list

PUT /notes/2: finds the note by its ID and update them.

DELETE /notes/2: removes the note with the matching ID

> Express uses req.params to read the ID and req.body to read input data from Postman.

*where data is stored?*

For Part 1, the notes are stored in a simple in-memory JavaScript array inside the server file.
Ex: let notes = [];

This acts as temporary storage for the notes.

