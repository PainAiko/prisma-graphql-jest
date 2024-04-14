export class ContactDto {
    name?: string;
    email?: string;
    adress?: string;
    createdAt: Date;
}

export class CreateContactDto extends ContactDto {}

export class UpdateContactDto extends ContactDto {
    id: number;
}