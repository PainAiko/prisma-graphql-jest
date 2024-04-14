import { PrismaService } from "../services/prisma.service";

export class ContactRepository {
    constructor(private prisma: PrismaService) {}
}