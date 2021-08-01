import * as React from 'react';
import { Helmet } from 'react-helmet-async';
import { NavBar } from 'app/components/NavBar';
import { PageWrapper } from 'app/components/PageWrapper';
import { WeatherCard } from './components/WeatherCard';
import { WeatherContainer } from './components/WeatherContainer';
import { useState } from 'react';

const days = [
  { day: 'Mon', tempMin: 27, tempMax: 33 },
  { day: 'Tue', tempMin: 27, tempMax: 33 },
  { day: 'Wed', tempMin: 27, tempMax: 33 },
  { day: 'Thu', tempMin: 27, tempMax: 33 },
  { day: 'Fri', tempMin: 27, tempMax: 33 },
  { day: 'Sat', tempMin: 27, tempMax: 33 },
  { day: 'Sun', tempMin: 27, tempMax: 33 },
];

export function WeatherPage() {
  const [selectedDay, setSelectedDay] = useState(0);
  return (
    <>
      <Helmet>
        <title>Home Page</title>
        <meta
          name="description"
          content="A React Boilerplate application homepage"
        />
      </Helmet>
      <NavBar />
      <PageWrapper>
        <WeatherContainer>
          {days.map((day, i) => (
            <WeatherCard
              key={i}
              {...day}
              onClick={() => setSelectedDay(i)}
              isSelected={selectedDay === i}
            />
          ))}
        </WeatherContainer>
      </PageWrapper>
    </>
  );
}
