import Link from "next/link";
import { rgba } from "polished";
import { styled } from "styled-components";

export const Container = styled.div`
  width: 100%;
  height: 70vh;
  display: flex;
  flex-direction: Column;
  align-items: center;
  justify-content: center;
  margin-top: 3rem;
`;

export const Wrapper = styled.div`
  background-color: ${({ theme }) => theme.base.darkBg};

  border-radius: 0.5rem;
  overflow: hidden;

  width: 60%;
  height: 100%;

  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: space-between;
  @media (max-width: 768px) {
    width: 100%;
  }
`;

export const LeftContainer = styled.div`
  position: relative;
  width: 45%;
  height: 100%;

  & > img {
    position: absolute;
    top: 0;
    left: 0;

    width: 100%;
    height: 100%;
    object-fit: cover;
    z-index: 0;
  }

  &::after {
    content: "";
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    background: linear-gradient(
      180deg,
      ${({ theme }) => rgba(theme.base.bg, 0)} 0%,
      ${({ theme }) => rgba(theme.base.bg, 0.55)} 90%
    );
    z-index: 1;
    opacity: 0.9;
  }
  @media (max-width: 768px) {
    display: none;
  }
`;

export const Text = styled.div`
  width: 100%;
  height: 100%;
  position: relative;
  z-index: 2;
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  justify-content: flex-end;
  padding: 1.5rem 1rem;
`;

export const Title = styled.h1`
  font-size: 1.3rem;
  font-weight: 800;
  color: ${({ theme }) => theme.text.primary};
  text-transform: uppercase;
`;

export const SubTitle = styled.h2`
  font-size: 1.2rem;
  font-weight: 400;
  color: ${({ theme }) => theme.text.offWhite};
  margin-top: 5px;
`;

export const RightContainer = styled.div`
  width: 55%;
  height: 100%;
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  padding: 2.5rem 1.5rem;
  @media (max-width: 768px) {
    width: 100%;
  }
`;

export const DonationMethods = styled.div`
  width: 100%;
  height: 100%;
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  justify-content: flex-start;
  margin-top: 1.5rem;
`;

export const DonationMethodsTitle = styled(Title)``;

export const DonationMethodsSubTitle = styled(SubTitle)`
  margin-top: 0.5rem;
  font-size: 1.05rem;
`;

export const DonateMethod = styled.div`
  width: 100%;a
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  justify-content: flex-start;
  margin: 1rem 0;
  background-color: ${({ theme }) => rgba(theme.base.bg, 0.8)};
  padding: .7rem 1rem;
  border-radius: .5rem;
  overflow: hidden;
`;

export const DonateMethodTitle = styled.h1`
  font-size: 1.2rem;
  font-weight: 600;
  color: ${({ theme }) => theme.text.primary};
  text-transform: uppercase;
  letter-spacing: 1px;
`;

export const DonateMethodText = styled.p`
  font-size: 1rem;
  font-weight: 400;
  color: ${({ theme }) => theme.text.offWhite};
  margin-top: 5px;
  word-break: break-all;
`;

export const ActualLink = styled(Link)`
  text-decoration: underline;
  transition: all 0.2s ease-in-out;
  &:hover {
    opacity: 0.8;
  }
`;
