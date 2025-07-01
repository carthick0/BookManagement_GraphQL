import { useState } from "react";
import { useMutation } from "@apollo/client";
// Make sure ADD_BOOK is exported from the correct file
import { GET_BOOKS } from "../graphql/queries";
import  { ADD_BOOK } from "../graphql/mutation";
const AddBookForm = () => {
  const [title, setTitle] = useState("");
  const [year, setYear] = useState("");
  const [authorId, setAuthorId] = useState("");

  const [addBook, { data, error }] = useMutation(ADD_BOOK, {
    refetchQueries: [{ query: GET_BOOKS }],
  });

  const handleSubmit = () => {
    if (!title || !year || !authorId) return;

    addBook({
      variables: {
        title,
        year: parseInt(year),
        authorId: parseInt(authorId),
      },
    });

    setTitle("");
    setYear("");
    setAuthorId("");
  };

  return (
    <div className="bg-white p-6 rounded-md shadow-md mb-6">
      <h2 className="text-2xl font-bold mb-4 text-blue-700">📚 Add a Book</h2>
      <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
        <input
          type="text"
          className="border px-4 py-2 rounded-md"
          placeholder="Title"
          value={title}
          onChange={(e) => setTitle(e.target.value)}
        />
        <input
          type="number"
          className="border px-4 py-2 rounded-md"
          placeholder="Year"
          value={year}
          onChange={(e) => setYear(e.target.value)}
        />
        <input
          type="number"
          className="border px-4 py-2 rounded-md"
          placeholder="Author ID"
          value={authorId}
          onChange={(e) => setAuthorId(e.target.value)}
        />
      </div>
      <button
        className="mt-4 px-6 py-2 bg-blue-600 text-white rounded-md hover:bg-blue-700"
        onClick={handleSubmit}
      >
        Add Book
      </button>
      {data && <p className="text-green-600 mt-2">✅ Book Added: {data.addBook.title}</p>}
      {error && <p className="text-red-500 mt-2">Error: {error.message}</p>}
    </div>
  );
};

export default AddBookForm;
