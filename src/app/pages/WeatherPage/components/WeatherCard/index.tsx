import styled from 'styled-components/macro';
import { ReactComponent as CloudIcon } from './assets/cloud.svg';

type Props = {
  day: string;
  tempMin: number;
  tempMax: number;
};

export function WeatherCard({ day, tempMin, tempMax }: Props) {
  return (
    <Card>
      <Day>{day}</Day>
      <CloudIcon />
      <TempMax>{tempMax}°</TempMax>
      <TempMin>{tempMin}°</TempMin>
    </Card>
  );
}

const Card = styled.div`
  flex: 1 1 auto;
  display: flex;
  flex-direction: column;
  align-items: center;
  padding: 10px;
  max-width: 4.7rem;
  border: 1px solid ${p => p.theme.border};
`;

const Day = styled.div`
  font-size: 0.875rem;
  color: ${p => p.theme.text};
`;

const TempMax = styled.div`
  font-size: 1rem;
  font-weight: 600;
  color: ${p => p.theme.text};
`;

const TempMin = styled.div`
  font-size: 0.875rem;
  color: ${p => p.theme.text};
`;
