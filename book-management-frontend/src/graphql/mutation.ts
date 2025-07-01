import { gql } from "@apollo/client";

export const ADD_BOOK=gql`
    mutation AddBook($title:String!,$year:Int!,$authorId:Int!){
        addBook(title:$title,year:$year,authorId:$authorId){
            id,
            title,
            year
        }
    }


`
export const ADD_AUTHOR=gql`

    mutation AddAuthor($name:String!){
        addAuthor(name:$name){
            id,
            name
        }
    }
`

