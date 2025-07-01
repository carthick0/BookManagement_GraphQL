import { useMutation } from "@apollo/client";
import { useState } from "react";
import { ADD_AUTHOR } from "../graphql/mutation";


const AddAuthor = () => {
  const [name, setName] = useState("");

  const [addAuthor, { data }] = useMutation(ADD_AUTHOR);

  const handleSubmit = () => {
    if (!name) return;

    addAuthor({
      variables: { name },
    });

    setName("");
  };

  return (
    <div>
      <h2 className="text-xl font-semibold mb-2">Add an Author</h2>
      <input
        type="text"
        placeholder="Name"
        value={name}
        onChange={(e) => setName(e.target.value)}
        className="border p-2 rounded-md"
      />
      <button
        className="mt-4 px-6 py-2 bg-blue-600 text-white rounded-md hover:bg-blue-700 ml-2"
        onClick={handleSubmit}
      >
        Add Author
      </button>
      {data && <p className="text-green-600 mt-2">✅ Author Added: {data.addAuthor.name}</p>}
    </div>
  );
};

export default AddAuthor;
