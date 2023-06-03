import { PostRep } from '../../app/repositories/PostRep'
import { PostSer } from '../../app/services/PostSer'
import { PostCon } from '../../app/controllers/PostCon'

import { Post } from '../../app/entities/Post'
import { UserFac } from './userFac'

//TODO: Question -> I don't get it UserFac.repository

export const PostFac = () => {
    const repository = new PostRep(Post)
    const service = new PostSer(repository, UserFac.repository)
    const controller = new PostCon(service)
    return { controller }
}