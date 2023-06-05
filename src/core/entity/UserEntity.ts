export default class UserEntity {
    id?: number
    name: string
    email: string
    cpf: string
    phone: string
    password: string
    passwordResetToken: string
    passwordResetExpire: Date
    status: boolean
    
    constructor(id: number, name: string, email: string, cpf: string, phone: string, password: string, passwordResetToken: string, passwordResetExpire: Date, status: boolean){
        if(!/[0-9]{3}.[0-9]{3}.[0-9]{3}-[0-9]{2}/.test(cpf)) 
            throw new Error("Invalid cpf")
 
        this.id = id
        this.name = name
        this.email = email
        this.cpf = cpf
        this.phone = phone
        this.password = password
        this.passwordResetToken = passwordResetToken
        this.passwordResetExpire = passwordResetExpire
        this.status = status
    }
}