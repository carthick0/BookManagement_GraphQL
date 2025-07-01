

import { AuthorRepository } from "../repositories/author_repository";

const authorRepository=new AuthorRepository();

interface createAuthor{
    name:string,
    books?: {
        title: string,
        year: number
    }[]
}

export const  createAuthor= async(data:createAuthor)=>{
    return authorRepository.create(data)
}
export const getAllAuthors=async()=>{
    return authorRepository.findAll();
}

export const getAuthor=async(id:number)=>{
    return authorRepository.findUnique(id);
}

