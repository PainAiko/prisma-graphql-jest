// contact.controller.spec.ts
import { ContactController } from '../controllers/contact.controller';
import { mockPrismaService } from '../__mocks__/prisma.mock';

describe('ContactController', () => {
    let controller: ContactController;
    let prisma = null //ReturnType<typeof mockPrismaService>;

    beforeEach(() => {
        prisma = mockPrismaService();
        controller = new ContactController(prisma);
    });

    it('should return all contacts', async () => {
        const expectedContacts = [{ id: 1, name: 'John Doe', email: 'john@example.com', adress: '123 Main St', createdAt: new Date("2024-04-14 22:12:58.057") }];
        prisma.client.contact.findMany.mockResolvedValue(expectedContacts);

        const contacts = await controller.getAll();

        expect(contacts).toEqual(expectedContacts);
    });
});