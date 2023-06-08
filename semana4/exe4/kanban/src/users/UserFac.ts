import { UserCon } from "./UserCon";
import { UserSer } from "./UserSer";
import { UserRep } from "./UserRep";
import { User } from "./User"

export class UserFac{
    build() {
        const repository = new UserRep(User)
        const service = new UserSer(repository)
        const controller = new UserCon(service)
        return { controller, repository }
    }
}