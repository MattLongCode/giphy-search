import { useState } from "react";

function App() {
  const [searchTerm, setSearchTerm] = useState("");
  const [imageUrl, setImageUrl] = useState("");

  const searchGiphy = () => {
    const giphyUrl = `https://api.giphy.com/v1/gifs/random?api_key=U2YAk0lxhD8UEoSCpXqcskUTDZjxVGvD&tag=${searchTerm}`;

    fetch(giphyUrl)
      .then((response) => response.json())
      .then((result) => {
        setImageUrl(result.data.fixed_height_downsampled_url);
      });
  };

  return (
    <div>
      <p>----Header-------------</p>
      <form>
        <label>
          Search Giphy:{" "}
          <input
            value={searchTerm}
            onChange={(event) => {
              setSearchTerm(event.target.value);
            }}
            onKeyPress={(event) => {
              if (event.key === "Enter") {
                event.preventDefault();

                searchGiphy();
              }
            }}
          />
        </label>
      </form>
      {imageUrl.length > 0 && (
        <>
          <img src={imageUrl} alt={searchTerm} />
          <p>{imageUrl}</p>
        </>
      )}
      <p>----Footer-------------</p>
    </div>
  );
}

export default App;
