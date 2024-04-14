import { JsonController, Get,Post,Put,Delete,Param,Body } from 'routing-controllers';
import { PrismaService } from '../services/prisma.service';
import  { Service } from 'typedi';
@Service()
@JsonController('/contact')
export  class ContactController {
    constructor(private prisma: PrismaService) {}
    @Get()
    async getAll() {
        return await this.prisma.client.contact.findMany();
    }

    @Post()
    async create(@Body() contactData: any) {
        return await this.prisma.client.contact.create({ data: contactData });
    }

    @Put('/:id')
    async update(@Param('id') id: number, @Body() contactData: any) {
        return await this.prisma.client.contact.update({
            where: { id },
            data: contactData,
        });
    }

    @Delete('/:id')
    async delete(@Param('id') id: number) {
        return await this.prisma.client.contact.delete({ where: { id } });
    }
}