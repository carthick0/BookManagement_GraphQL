import * as authorService from "../services/author_service"
export const authorController={
    createAuthor:(data:any)=>authorService.createAuthor(data),

    getAllAuthors:()=>authorService.getAllAuthors(),

    getAuthor:(id:number)=>authorService.getAuthor(id)
}