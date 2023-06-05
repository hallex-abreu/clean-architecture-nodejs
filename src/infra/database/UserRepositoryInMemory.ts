import User from "../../core/entity/UserEntity";
import UserRepository from "../../core/repository/UserRepository";

export default class UserRepositoryInMemory implements UserRepository{
    users: Array<User> = [];
    
    async getUserById(id: number): Promise<User> {
        const existUserById = this.users.find(u => u.id == id)

        if(!existUserById)
            return null

        return existUserById
    }
}