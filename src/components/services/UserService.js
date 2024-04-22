export default class UserService {

    repository = new UserRepository
    user = [];

    constructor(repository) {
        this.repository = repository
    }

    async create(user) {
        const user = await this.repository.getAll()
        await this.repository.save(user)
        
        users.push(user)
        return this.user
    }
}