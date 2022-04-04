import { InputType, Field, ArgsType } from '@nestjs/graphql';
import { IsEmail, IsNotEmpty, MinLength } from 'class-validator';

@InputType()
export class StocklyApiInput {
  @Field({nullable:false})
  email: string;
  @Field({ nullable: true })
  firstname?: string;
  @Field({ nullable: true })
  lastname?: string;
  @Field()
  password: string;
}