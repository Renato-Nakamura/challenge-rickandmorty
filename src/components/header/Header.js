import styled from "styled-components";

const StyledHeader = styled.header`
  width: 100%;

  img {
    max-width: 100%;
    max-height: 30vh;
  }
`;

export default function Header(props) {
  return (
    <StyledHeader>
      <img
        src="https://occ-0-1068-1722.1.nflxso.net/dnm/api/v6/LmEnxtiAuzezXBjYXPuDgfZ4zZQ/AAAABQOxGMxzPfr3lvtrDxZ9ahcGCw4wMQsdBljUXHiuon2Oa1SmjgGWYx-QWkyLuFwEaguoI3yaq592H-XkHzLbtgh5Pu9ljDJV6AzS.png?r=1ab"
        alt="Rick and Morty logo"
      />
      <h2>Characters</h2>
      <p>Made by Renato Nakamura</p>
    </StyledHeader>
  );
}
