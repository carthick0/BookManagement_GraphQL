import prisma from "../config/prisma_config";

import { CrudRepository } from "./curd_repository";

class AuthorRepository extends CrudRepository<typeof prisma.author>{
    constructor(){
        super(prisma.author)
    }
}

export{AuthorRepository}