import { UserRep } from '../../app/repositories/UserRep'
import { UserSer } from '../../app/services/UserSer'
import { UserCon } from '../../app/controllers/UserCon'

import { User } from "../../app/entities/User"

export const UserFac = () => {
    const repository = new UserRep(User)
    const service = new UserSer(repository)
    const controller = new UserCon(service)
    return { controller, repository }
}

//TODO: Question -> why return repository too?