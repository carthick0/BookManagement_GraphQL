import * as bookService from "../services/book_service"

export const bookController={
    createBook:(data:any)=>bookService.createBook(data),

    getAllBooks:()=>bookService.getAllBooks(),

    getBook:(id:number)=>bookService.getBook(id),

    updateBook:(id:number,data:any)=>bookService.updateBook(id,data),

    deleteBook:(id:number)=>bookService.deleteBook(id)
}