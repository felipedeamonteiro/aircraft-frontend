import styled from 'styled-components';

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  width: 100%;
  margin-top: 20%;
`;

export const Button = styled.button`
  width: 350px;
  height: 40px;
  padding: 10px;
  border: none;
  font-size: 20px;
  font-weight: 700;
  border-radius: 5px;
  cursor: pointer;
  color: #fff;
  background: linear-gradient(to bottom, #de0039, #70008c);

  &:hover {
    background: linear-gradient(to bottom, #70008c, #de0039);
  }
`;
