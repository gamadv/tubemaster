import data from "../__mocks__/data.json";
import { CSSReset } from "../styles/global";
import Menu from "../components/Menu";
import { Header } from "../components/Header";
import { Timeline } from "../components/Timeline";

function HomePage() {
  return (
    <>
      <CSSReset />
      <div
        style={{
          display: "flex",
          flexDirection: "column",
          flex: 1,
        }}
      >
        <Menu />
        <Header />
        <Timeline playlists={data.playlists}>Conteúdo</Timeline>
      </div>
    </>
  );
}

export default HomePage;
