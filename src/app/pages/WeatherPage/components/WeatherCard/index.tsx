import { ReactComponent as CloudIcon } from './assets/cloud.svg';
import styled, { css } from 'styled-components/macro';

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
  return (
    <Card onClick={onClick} className={isSelected ? 'highlight' : ''}>
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
  border: 1px solid ${p => p.theme.backgroundHighlight};
  cursor: pointer;

  &:hover {
    background-color: ${p => p.theme.backgroundHighlight};
  }
`;

const sharedStyles = css`
  font-size: 0.875rem;
  color: ${p => p.theme.text};
`;

const Day = styled.div`
  ${sharedStyles}
`;

const TempMax = styled.div`
  font-size: 1rem;
  font-weight: 600;
  color: ${p => p.theme.text};
`;

const TempMin = styled.div`
  ${sharedStyles}
`;
