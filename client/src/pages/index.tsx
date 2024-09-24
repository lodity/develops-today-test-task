import { useEffect, useState } from 'react';
import Link from 'next/link';

interface Country {
  countryCode: string;
  name: string;
}

const baseUrl = process.env.NEXT_PUBLIC_API_URL;

const CountryListPage = () => {
  const [countries, setCountries] = useState<Country[]>([]);

  useEffect(() => {
    fetch(`${baseUrl}/available`)
      .then((response) => response.json())
      .then((data) => setCountries(data))
      .catch((error) => console.error('Error fetching countries:', error));
  }, []);

  return (
    <div className="container mx-auto p-4">
      <h1 className="text-2xl font-bold mb-4">Available Countries</h1>
      <ul className="list-disc pl-5 space-y-2">
        {countries.map((country) => (
          <li key={country.countryCode}>
            <Link href={`/${country.countryCode}`} className='text-blue-500 hover:underline'>
              {country.name}
            </Link>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default CountryListPage;
