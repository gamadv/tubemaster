import { useEffect, useState } from "react";
import { CSSReset } from "../styles/global";
import Menu from "../components/Menu";
import { Header } from "../components/Header";
import { Timeline } from "../components/Timeline";
import { videoService } from "../services/videoServices";

function HomePage() {
  const service = videoService();
  const [valorDoFiltro, setValorDoFiltro] = useState("");
  const [playlists, setPlaylists] = useState({});

  useEffect(() => {
    console.log("useEffect");
    service.getAllVideos().then((dados) => {
      console.log(dados.data);
      // Forma imutavel
      const novasPlaylists = {};
      dados.data.forEach((video) => {
        if (!novasPlaylists[video.playlist])
          novasPlaylists[video.playlist] = [];
        novasPlaylists[video.playlist] = [
          video,
          ...novasPlaylists[video.playlist],
        ];
      });

      setPlaylists(novasPlaylists);
    });
  }, []);

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
        <Menu
          valorDoFiltro={valorDoFiltro}
          setValorDoFiltro={setValorDoFiltro}
        />
        <Header />
        <Timeline searchValue={valorDoFiltro} playlists={playlists}>
          Conteúdo
        </Timeline>
      </div>
    </>
  );
}

export default HomePage;
