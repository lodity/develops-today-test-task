import { Injectable } from '@nestjs/common';
import { catchError } from 'rxjs/operators';
import { throwError } from 'rxjs';
import { HttpService } from '@nestjs/axios';

@Injectable()
export class CountriesNowService {
  private readonly baseUrl = process.env.CONTRIESNOW_API_BASE_URL;

  constructor(private readonly httpService: HttpService) {}

  getPopulationData(countryName: string) {
    return this.httpService
      .post(`${this.baseUrl}/countries/population`, { country: countryName })
      .pipe(
        catchError(() => {
          return throwError(() => new Error('Error fetching population data.'));
        }),
      );
  }

  getFlag(countryName: string) {
    return this.httpService
      .post(`${this.baseUrl}/countries/flag/images`, { country: countryName })
      .pipe(
        catchError(() => {
          return throwError(() => new Error('Error fetching flag image.'));
        }),
      );
  }
}
