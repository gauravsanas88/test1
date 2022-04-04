// import { Query } from '@nestjs/common';
import { Resolver, Query, Mutation, Args } from '@nestjs/graphql';
import { StocklyApiInput } from './dto/sockly-api.input';
import { Checkmail, Signup, SignupAPI } from './model/stockly-api.model';
import { StocklyApiService } from './stockly-api.service';

@Resolver(()=> SignupAPI)
export class StocklyApiResolver {

    constructor(private StocklyApiService:StocklyApiService){}

    @Mutation(() => Checkmail)
    async CheckEmail(){
      return await this.StocklyApiService.checkmail();
    }

    @Mutation(()=> Signup)
    async signup(@Args('data') {firstname,lastname,email,password}:StocklyApiInput){
      return await this.StocklyApiService.signup({firstname,lastname,email,password});
    }
}
