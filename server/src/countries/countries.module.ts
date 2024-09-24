import { Module } from '@nestjs/common';
import { CountriesController } from './countries.controller';
import { HttpModule } from '@nestjs/axios';
import { NagerService } from 'src/nager/nager.service';
import { CountriesNowService } from 'src/countries-now/countries-now.service';

@Module({
  imports: [HttpModule],
  controllers: [CountriesController],
  providers: [NagerService, CountriesNowService],
})
export class CountriesModule {}
