import { bookController } from "../controllers/book_controller";
export const bookResolvers = {
  Query: {
    books: () => bookController.getAllBooks(),
    book:(parent:any,args:any)=>{
      const bookId=parseInt(args.id)
      return bookController.getBook(bookId)
    }
  },
  Mutation: {
  addBook: (parent: any,args: { title: string; year: number; authorId: string }) => {
  const { title, year, authorId } = args;
  return bookController.createBook({
    title,
    year,
    authorId: parseInt(authorId), 
  });
},
  updateBook: (parent: any, args: any) => {
    const { id, title, year, authorId } = args;

    return bookController.updateBook(
      parseInt(id), 
      {
        title,
        year,
        authorId: authorId ? parseInt(authorId) : undefined
      }
    );
  },

  deleteBook:(_:any,args:any)=>{
    const id=parseInt(args.id);
    return bookController.deleteBook(id)
  }
  },
  Book: {
    author: (parent: any, _: any, context: any) => {
      return context.prisma.author.findUnique({
        where: { id: parent.authorId }
      });
    }
  }
};