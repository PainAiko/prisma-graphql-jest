import { PrismaClient } from '@prisma/client';
import { Service } from 'typedi';

@Service()
export class PrismaService {
    private prismaClient: PrismaClient;

    constructor() {
        this.prismaClient = new PrismaClient();
    }

    get client() {
        return this.prismaClient;
    }
}