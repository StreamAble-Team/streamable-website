import { css, styled } from "styled-components";

const background = css`
  background-color: rgba(0, 0, 0, 0.5);
`;

export const DropdownContainer = styled.div`
  position: relative;
  width: 100%;
  max-width: 300px;
  z-index: 5;
`;

export const DropdownWrapper = styled.div`
  position: absolute;
  top: 100%;
  left: 0;
  width: 100%;
  max-height: 200px;
  overflow-y: auto;
  flex-wrap: nowrap;
  display: flex;
  flex-direction: column;
  border-radius: 0 0 0.5rem 0.5rem;
`;

export const DropdownButton = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  cursor: pointer;
  transition: opacity 0.2s ease-in-out;
  border-radius: 0.5rem 0.5rem 0 0;
  height: 50px;
  max-height: 50px;
  padding: 0 1rem;
  ${background}
  border-bottom: 1px solid ${({ theme }) => theme.base.mainColor};
  &:hover {
    opacity: 0.9;
  }
`;

export const DropdownItem = styled.div`
  flex-grow: 0;
  flex-shrink: 0;
  display: flex;
  align-items: center;
  cursor: pointer;
  height: 50px;
  max-height: 50px;
  padding: 0 1rem;
  background-color: ${({ theme }) => theme.base.darkBg};
`;

export const DropdownItemIcon = styled.img`
  width: 30px;
  height: 30px;
  margin-right: 0.5rem;
  object-fit: cover;
  border-radius: 8px;
  overflow: hidden;
`;

export const DropdownItemText = styled.div`
  font-size: 1.2rem;
  flex: 1;
  text-align: center;
`;

export const DropdownSelectedText = styled(DropdownItemText)`
  font-weight: bold;
`;

export const DropdownSelectedIconContainer = styled.div``;
