import { Router } from "express"
import { PostFac } from ""

//TODO: Question -> why .controller?
const postDomain = PostFac().controller
const postRouter = Router()

postRouter.post('posts/:user_id', (req, res) => {
    return postDomain.createCon(req, res)
})

export { postRouter }