import {Injectable} from '@nestjs/common';
import {InjectRepository} from "@nestjs/typeorm";
import {User} from "./user.entity";
import {Repository} from "typeorm";

@Injectable()
export class UserService {
    constructor(
        @InjectRepository(User) protected readonly userRepository: Repository<User>
    ) {
    }

    async save(body) {
        return this.userRepository.save(body);
    }

    async findOne(options) {
        return this.userRepository.findOne(options);
    }

    async update(id:number, options) {
        return this.userRepository.update(id, options);
    }
}
