import * as yup from "yup"

export class UserCon{
    service:any
    constructor(service:any){
        this.service = service
    }

    async createCon(req:any, res:any) {
        const { body } = req

        const userYup = yup.object().shape({
            name: yup.string().required("Precisa de um nome"),
            email: yup.string().email().required()
        })
        
        try {
            await userYup.validate(body)
        } catch (error) {
            return res.status(400).json({
                error:true, errorMessage: error
            })
        }

        const result = await this.service.createSer(body)

        if('error' in result) {
            return res.status(result.status).json(result)
        }

        return res.status(201).json(result)
    }
}