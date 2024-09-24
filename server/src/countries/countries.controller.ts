import { Controller, Get, Param } from '@nestjs/common';
import { firstValueFrom } from 'rxjs';
import { CountriesNowService } from 'src/countries-now/countries-now.service';
import { NagerService } from 'src/nager/nager.service';

@Controller('countries')
export class CountriesController {
  constructor(
    private readonly nagerService: NagerService,
    private readonly countriesNowService: CountriesNowService,
  ) {}

  @Get('available')
  async getAvailableCountries() {
    const response = await firstValueFrom(
      this.nagerService.getAvailableCountries(),
    );
    return response.data;
  }

  @Get(':countryCode')
  async getCountryDetails(@Param('countryCode') countryCode: string) {
    const countryInfo = await firstValueFrom(
      this.nagerService.getCountryInfo(countryCode),
    );
    const countryName = countryInfo.data.commonName;

    const populationData = await firstValueFrom(
      this.countriesNowService.getPopulationData(countryName),
    );

    const flagData = await firstValueFrom(
      this.countriesNowService.getFlag(countryName),
    );

    return {
      borders: countryInfo.data.borders,
      populationData: populationData.data.data.populationCounts,
      flagUrl: flagData.data.data.flag,
    };
  }
}
