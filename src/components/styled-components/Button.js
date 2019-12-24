import styled from "styled-components";

export default styled.button`
  text-transform: capitalize;
  padding: 0.2rem 0.5rem;
  background: transparent;
  border: 0.05rem solid var(--darkBackground);
  border-radius: 0.5rem;
  transition: all 0.3s ease-in-out;
  color: var(--darkBackground);
  box-shadow: 0 0 2px var(--dark);
  &:hover {
    background: var(--darkBackground);
    color: var(--lightBackground);
    box-shadow: 0 0 4px var(--dark);
  }
  &:focus {
    outline: none;
  }
`;
