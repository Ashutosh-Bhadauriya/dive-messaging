import styled from "styled-components/macro";

export const LoginContainer = styled.div`
  display: grid;
  place-items: center;
  height: 100vh;
`;

export const LoginCard = styled.div`
  background-color: #d1d1d1;
  padding: 3rem;
  border-radius: 1rem;
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 2rem;
  width: 50%;
  height: 65%;
`;

export const Image = styled.img`
  width: 100%;
  height: auto;
  max-width: 320px;
`;

export const LoginBtn = styled.button`
  border: 0;
  padding: 1rem 1rem;
  border-radius: 10px;
  background-color: #06d755;
  color: #ffffff;
  font-weight: 700;
  font-size: 1rem;
  cursor: pointer;

  transition: transform 250ms ease-in-out;

  &:hover {
    transform: scale(110%);
    background-color: #009438;
  }
`;
