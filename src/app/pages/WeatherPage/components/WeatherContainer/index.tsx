import styled from 'styled-components/macro';

export const WeatherContainer = styled.div`
  display: flex;
  justify-content: center;
  margin-top: 2rem;

  .highlight {
    border-top: 1px solid ${p => p.theme.primary};
    background-color: ${p => p.theme.backgroundHighlight};
  }
`;
