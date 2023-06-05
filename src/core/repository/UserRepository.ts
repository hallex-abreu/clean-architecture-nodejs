import User from "../entity/UserEntity";

export default interface UserRepository {
    getUserById(id: number): Promise<User>
}