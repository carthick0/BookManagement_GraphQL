import { authorController } from "../controllers/auth_controller";

export const authorResolvers = {
  Query: {
    authors: () => authorController.getAllAuthors(),
    author:(parent:any,args:any)=>{
    const authorId=parseInt(args.id);
    return authorController.getAuthor(authorId)
  }
  },
  Mutation: {
    addAuthor: (_: any, args: { name: string }) => authorController.createAuthor({ name: args.name }),
  },
  Author: {
    books: (parent: any, _: any, { prisma }: any) => {
      return prisma.book.findMany({
        where: { authorId: parent.id }
      });
    }
  },
  
};
