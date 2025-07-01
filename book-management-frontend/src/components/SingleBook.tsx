import { useState } from "react";
import { useLazyQuery } from "@apollo/client";
import { GET_BOOKS } from "../graphql/queries";

const SingleBookSearch = () => {
  const [bookId, setBookId] = useState("");
  const [fetchBook, { data, loading, error }] = useLazyQuery(GET_BOOKS);

  const handleSearch = () => {
    if (bookId.trim() !== "") {
      fetchBook({ variables: { id: bookId } });
    }
  };

  return (
    <div className="max-w-md mx-auto mt-10 p-6 bg-white shadow-md rounded-md">
      <h2 className="text-2xl font-bold text-center mb-6 text-indigo-600">
        🔍 Search Book by ID
      </h2>

      <div className="flex items-center gap-2 mb-4">
        <input
          type="number"
          className="flex-1 px-4 py-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-indigo-400"
          placeholder="Enter Book ID"
          value={bookId}
          onChange={(e) => setBookId(e.target.value)}
        />
        <button
          onClick={handleSearch}
          className="px-4 py-2 bg-indigo-500 text-white rounded-md hover:bg-indigo-600 transition duration-200"
        >
          Search
        </button>
      </div>

      {loading && <p className="text-yellow-600 text-sm">Loading...</p>}
      {error && <p className="text-red-500 text-sm">Error: {error.message}</p>}
      {data && data.book && (
        <div className="mt-4 p-4 bg-gray-100 rounded-md">
          <h3 className="text-lg font-semibold">{data.book.title}</h3>
          <p className="text-sm text-gray-700">Year: {data.book.year}</p>
          <p className="text-sm text-gray-700">
            Author: {data.book.author.name}
          </p>
        </div>
      )}
    </div>
  );
};

export default SingleBookSearch;
