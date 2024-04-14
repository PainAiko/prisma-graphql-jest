import { ObjectType, Field, ID } from 'type-graphql';

@ObjectType()
export class Contact {
    @Field(() => ID)
    id: string;

    @Field({ nullable: true })
    name?: string;

    @Field({ nullable: true })
    email?: string;

    @Field({ nullable: true })
    adress?: string;

    @Field()
    createdAt: Date;
}
