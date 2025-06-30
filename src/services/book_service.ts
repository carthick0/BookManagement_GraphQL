import { BookRepository } from "../repositories/book_repository";

interface createBook{
    title:string,
    year:number,
    authorId:number
}

interface updateBook{
    title?: string;
  year?: number;
  authorId?: number;
}
const bookRepository=new BookRepository();

export const createBook=async(data:createBook)=>{
    return bookRepository.create(data);
}

export const getAllBooks=async()=>{
    return bookRepository.findAll();
}

export const getBook=async(id:number)=>{
    return bookRepository.findUnique(id)
}
export const updateBook=async(id:number,data:updateBook)=>{
    return bookRepository.update(id,data)
}
export const deleteBook=async(id:number)=>{
    return bookRepository.delete(id)
}