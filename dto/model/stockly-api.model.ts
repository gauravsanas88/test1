import { HideField,Field, ObjectType } from '@nestjs/graphql';
import { IsNotEmpty } from 'class-validator';
import { BaseModel } from 'src/common/models/base.model';


@ObjectType()
export class SignupAPI extends BaseModel{
    accessToken: string
    user: string
    lastname: string
    firstname: string
    emailaddress: string
}

@ObjectType()
export class Checkmail {
  @IsNotEmpty()
  available: boolean;
}

@ObjectType()
export class Signup {
    accessToken: string;
    
}