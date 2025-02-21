import styled from 'styled-components';

interface SectionProps {
  backGround?: string;
}

export const Section1 = styled.section<SectionProps>`
  text-align: center;
  width: 100%;
  height: 80%;
  background: url(${props => props.backGround});
  // Rest of your styles
`;
