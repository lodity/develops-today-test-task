import { useRouter } from 'next/router';
import { useEffect, useState } from 'react';
import Link from 'next/link';
import Chart from 'chart.js/auto';
import { Line } from 'react-chartjs-2';
import Image from 'next/image';
import { CategoryScale, LinearScale, PointElement, LineElement, Title, Tooltip, Legend } from 'chart.js';

Chart.register(CategoryScale, LinearScale, PointElement, LineElement, Title, Tooltip, Legend);

interface IBorder {
  commonName: string;
  officialName: string;
  countryCode: string;
  region: string;
  borders: string[] | null;
}

interface ICountryInfo {
  borders: IBorder[];
  populationData: { year: number; value: number }[];
  flagUrl: string;
}

const CountryInfoPage = () => {
  const router = useRouter();
  const { countryCode } = router.query;
  const [countryInfo, setCountryInfo] = useState<ICountryInfo | null>(null);

  useEffect(() => {
    if (countryCode) {
      fetch(`${process.env.NEXT_PUBLIC_API_URL}/${countryCode}`)
        .then((response) => response.json())
        .then((data: ICountryInfo) => setCountryInfo(data))
        .catch((error) => console.error('Error fetching country info:', error));
    }
  }, [countryCode]);

  if (!countryInfo) {
    return <div>Loading...</div>;
  }

  if (!countryInfo.populationData || !countryInfo.flagUrl || !countryInfo.borders) {
    return <div>Error fetching country info.</div>;
  }

  const populationChartData = {
    labels: countryInfo.populationData.map((data) => data.year),
    datasets: [
      {
        label: 'Population',
        data: countryInfo.populationData.map((data) => data.value),
        borderColor: 'rgba(75, 192, 192, 1)',
        backgroundColor: 'rgba(75, 192, 192, 0.2)',
      },
    ],
  };

  return (
    <div className="container mx-auto p-4">
      <div className="flex items-center space-x-4 mb-4">
        <Image src={countryInfo.flagUrl} alt={`${countryCode} flag`} width={64} height={64} className="w-16 h-16" />
        <h1 className="text-3xl font-bold">{countryCode}</h1>
      </div>
      <h2 className="text-xl font-semibold mb-2">Border Countries</h2>
      <ul className="list-disc pl-5 space-y-2 mb-4">
        {countryInfo.borders.map((border) => (
          <li key={border.countryCode}>
            <Link href={`/${border.countryCode}`} className='text-blue-500 hover:underline'>
                {border.commonName} ({border.officialName})
            </Link>
            <p className="text-sm text-gray-600">
              Region: {border.region} {border.borders && `| Borders with: ${border.borders.join(', ')}`}
            </p>
          </li>
        ))}
      </ul>
      <h2 className="text-xl font-semibold mb-2">Population Over Time</h2>
      <div className="w-full md:w-2/3">
        <Line data={populationChartData} />
      </div>
    </div>
  );
};

export default CountryInfoPage;
