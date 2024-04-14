import { Query,Mutation,Arg,Resolver } from "type-graphql";
import {Contact} from "../types/contact";
import { ContactDto } from "../../dto/contact.dto";
import  {Service} from "typedi";
import { PrismaService } from '../../services/prisma.service';

@Service()
@Resolver(Contact)
export class ContactResolver {
    constructor(private prisma: PrismaService) {}
    @Query(() => [Contact])
    async contacts():Promise<Array<ContactDto>> {
        return await this.prisma.client.contact.findMany();
    }

    @Mutation(() => Contact)
    async createContact(
        @Arg('name', { nullable: true }) name: string,
        @Arg('email', { nullable: true }) email: string,
        @Arg('adress', { nullable: true }) adress: string
    ) {
        return await this.prisma.client.contact.create({
            data: {
                name,
                email,
                adress,
            },
        });
    }

    @Mutation(() => Contact)
    async updateContact(
        @Arg('id') id: number,
        @Arg('name', { nullable: true }) name: string,
        @Arg('email', { nullable: true }) email: string,
        @Arg('adress', { nullable: true }) adress: string
    ) {
        return await this.prisma.client.contact.update({
            where: { id },
            data: {
                name,
                email,
                adress,
            },
        });
    }

    @Mutation(() => Contact)
    async deleteContact(@Arg('id') id: number) {
        return await this.prisma.client.contact.delete({
            where: { id },
        });
    }

}