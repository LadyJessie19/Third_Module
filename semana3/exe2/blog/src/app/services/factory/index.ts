import { PostSer } from ".."
import { PostCon } from "../../controllers"
import { PostRep } from "../../repositories"

export interface IPost {
    author:string,
    content:string,
    createdAt:Date,
    likes:number
}

class Post {
    author:string
    content:string
    createdAt:Date
    likes:number
    
    constructor(author:string, content:string, createdAt:Date, likes:number){
        this.author = author,
        this.content = content,
        this.createdAt = createdAt,
        this.likes = likes
    }
}

export function facPostMaker(author:string, content:string):IPost{
    const createdAt = new Date()
    const likes = 0
    return new Post(author, content, createdAt, likes)
}

export function facPostRoute(){
    const repository = new PostRep()
    const service = new PostSer(repository)
    const controller = new PostCon(service)
    return controller
}