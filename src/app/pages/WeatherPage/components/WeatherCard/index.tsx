import styled from 'styled-components/macro';
import { ReactComponent as CloudIcon } from './assets/cloud.svg';

type Props = {
  day: string;
  tempMin: number;
  tempMax: number;
  isSelected: boolean;
  onClick: () => void;
};

export function WeatherCard({
  day,
  tempMin,
  tempMax,
  isSelected,
  onClick,
}: Props) {
  const Card = createCard(isSelected);

  return (
    <Card onClick={onClick}>
      <Day>{day}</Day>
      <CloudIcon />
      <TempMax>{tempMax}°</TempMax>
      <TempMin>{tempMin}°</TempMin>
    </Card>
  );
}

const createCard = highlight => styled.div`
  flex: 1 1 auto;
  display: flex;
  flex-direction: column;
  align-items: center;
  padding: 10px;
  max-width: 4.7rem;
  border: 1px solid ${p => p.theme.backgroundHighlight};
  border-top: 1px solid
    ${p => (highlight ? p.theme.primary : p.theme.backgroundHighlight)};
  background-color: ${p => highlight && p.theme.backgroundHighlight};
  cursor: pointer;

  &:hover {
    background-color: ${p => p.theme.backgroundHighlight};
  }
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
