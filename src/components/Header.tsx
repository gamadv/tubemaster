import styled from "styled-components";
import data from "../__mocks__/data.json";

export function Header() {
  return (
    <StyledHeader>
      {/* <img src="banner" /> */}
      <section className="user-info">
        <img src={`https://github.com/${data.github}.png`} />
        <div>
          <h2>{data.name}</h2>
          <p>{data.description}</p>
        </div>
      </section>
    </StyledHeader>
  );
}

const StyledHeader = styled.div`
background-color: ${({ theme }) => theme.backgroundLevel1};
  img {
    width: 80px;
    height: 80px;
    border-radius: 50%;
  }
  .user-info {
    margin-top: 50px;
    display: flex;
    align-items: center;
    width: 100%;
    padding: 16px 32px;
    gap: 16px;
  }
`;
