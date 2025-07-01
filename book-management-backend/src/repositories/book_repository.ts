import prisma from "../../config/prisma_config";

import { CrudRepository } from "./curd_repository";

class BookRepository extends CrudRepository<typeof prisma.book>{
    constructor(){
        super(prisma.book)
    };

    
}

export {BookRepository};