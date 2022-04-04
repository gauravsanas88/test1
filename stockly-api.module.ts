import { Module } from '@nestjs/common';
import { StocklyApiService } from './stockly-api.service';
import { StocklyApiResolver } from './stockly-api.resolver';

@Module({
  providers: [StocklyApiService, StocklyApiResolver]
})
export class StocklyApiModule {}
