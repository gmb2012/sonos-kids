export default function PlayAlbum() {
  const fetchDeineMutter = () => {
    fetch("/api/play")
      .then((data) => data.json())
      .then((response) => console.log(response));
  };

  return <button onClick={fetchDeineMutter}>Deine Mutter</button>;
}
