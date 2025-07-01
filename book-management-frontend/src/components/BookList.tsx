    import { useQuery } from "@apollo/client";
    import { GET_BOOKS } from "../graphql/queries";


    const BookList = () => {
    const { data, loading, error } = useQuery(GET_BOOKS);

    if (loading) return <p className="text-yellow-500">Loading books...</p>;
    if (error) return <p className="text-red-500">Error: {error.message}</p>;

    return (
        <div className="bg-white p-6 rounded-md shadow-md mb-6">
        <h2 className="text-2xl font-bold mb-4 text-green-700">📖 Book List</h2>
        {data.books.map((book: any) => (
            <div key={book.id} className="mb-2">
            <p className="font-semibold">
                {book.title} <span className="text-gray-600">({book.year})</span> - by{" "}
                <span className="text-indigo-600">{book.author.name}</span>
            </p>
            </div>
        ))}
        </div>
    );
    };

    export default BookList;
