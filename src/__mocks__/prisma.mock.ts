import { PrismaService } from '../services/prisma.service';
import { mockDeep, DeepMockProxy } from 'jest-mock-extended';

export const mockPrismaService = (): DeepMockProxy<PrismaService> => {
    return mockDeep<PrismaService>();
};
