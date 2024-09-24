import { HttpService } from '@nestjs/axios';
import { Injectable } from '@nestjs/common';
import { throwError } from 'rxjs';
import { catchError } from 'rxjs/operators';

@Injectable()
export class NagerService {
  private readonly baseUrl = process.env.NAGER_API_BASE_URL;

  constructor(private readonly httpService: HttpService) {}

  getAvailableCountries() {
    return this.httpService.get(`${this.baseUrl}/AvailableCountries`).pipe(
      catchError(() => {
        return throwError(
          () => new Error('Error fetching available countries.'),
        );
      }),
    );
  }

  getCountryInfo(countryCode: string) {
    return this.httpService
      .get(`${this.baseUrl}/CountryInfo/${countryCode}`)
      .pipe(
        catchError(() => {
          return throwError(() => new Error('Error fetching country info.'));
        }),
      );
  }
}
