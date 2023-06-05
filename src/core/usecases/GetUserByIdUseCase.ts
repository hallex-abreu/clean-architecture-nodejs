import UserRepository from "../repository/UserRepository";

export default class GetUserByIdUseCase {
    constructor(
        private userRepository: UserRepository
    ){}

    async execute(id: number){
        const user = await this.userRepository.getUserById(id)

        if(!user)
            throw "USER_DOES_NOT_EXIST"

        return user
    }
}