import {Injectable} from '@nestjs/common';
import {InjectRepository} from "@nestjs/typeorm";
import {Reset} from "./reset.entity";
import {Repository} from "typeorm";

@Injectable()
export class ResetService {
    constructor(
        @InjectRepository(Reset) private readonly resetRepository: Repository<Reset>
    ) {
    }

    async save(body) {
        return this.resetRepository.save(body);
    }

    async findOne(options) {
        return this.resetRepository.findOne(options);
    }
}
