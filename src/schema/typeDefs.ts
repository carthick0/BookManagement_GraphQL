export const typeDefs=`#graphql

    type Author{
        id:ID!,
        name:String!
        books:[Book!]!
    }

    type Book{
        id:ID!,
        title:String,
        year:Int!,
        author:Author!
    }

    type Query{
        books:[Book!]!
        authors:[Author!]!
        author(id: ID!): Author!
    }

    type Mutation{
        addAuthor(name:String!):Author!
        addBook(title:String!,year:Int!,authorId:Int!):Book!
        updateBook(id:ID!,title:String!,year:Int!,authorId:ID):Book!
        deleteBook(id:ID!):Book!
    }

`