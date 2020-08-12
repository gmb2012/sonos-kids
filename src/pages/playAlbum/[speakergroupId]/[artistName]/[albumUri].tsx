import { PlayResponse } from "../../../api/play";

export default function PlayAlbum() {
  const fetchDeineMutter = async () => {
    const playResponse: PlayResponse = await fetch("/api/play").then((r) =>
      r.json()
    );
    console.log(playResponse);
  };

  return <button onClick={fetchDeineMutter}>Deine Mutter</button>;
}
