import styled from 'styled-components';

export const Container = styled.div<{ image: string }>`
  display: flex;
  position: relative;
  top: 108px;
  width: 1450px;
  height: 254px;
  flex-shrink: 0;
  justify-content: center;
  align-items: center;
  margin-left: auto;
  margin-right: auto;
  background: url(${(props) => props.image});
  background-size: cover;
`;
