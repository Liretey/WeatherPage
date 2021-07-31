import * as React from 'react';
import { Helmet } from 'react-helmet-async';
import { NavBar } from 'app/components/NavBar';
import { PageWrapper } from 'app/components/PageWrapper';
import { WeatherCard } from './components/WeatherCard';
import { WeatherContainer } from './components/WeatherContainer';

export function WeatherPage() {
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
          <WeatherCard day="Mon" tempMin={27} tempMax={33} />
          <WeatherCard day="Tue" tempMin={27} tempMax={33} />
          <WeatherCard day="Wed" tempMin={27} tempMax={33} />
          <WeatherCard day="Thu" tempMin={27} tempMax={33} />
          <WeatherCard day="Fri" tempMin={27} tempMax={33} />
          <WeatherCard day="Sat" tempMin={27} tempMax={33} />
          <WeatherCard day="Sun" tempMin={27} tempMax={33} />
        </WeatherContainer>
      </PageWrapper>
    </>
  );
}
