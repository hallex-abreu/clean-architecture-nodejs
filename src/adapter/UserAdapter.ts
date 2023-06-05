import User from "../core/entity/UserEntity"

export default class UserAdapter{
    static create (id: number, name: string, email: string, cpf: string, phone: string, password: string, passwordResetToken: string, passwordResetExpire: Date, status: boolean){
        return new User(id, name, email, cpf, phone, password, passwordResetToken, passwordResetExpire, status)
    }
}