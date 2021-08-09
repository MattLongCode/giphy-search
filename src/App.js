import { useState, React } from "react";

const GIPHY_API_KEY = "foobar";

function App() {
  const [searchTerm, setSearchTerm] = useState("");
  const [imageUrl, setImageUrl] = useState("");

  const fetchGiphy = (searchTerm) => {
    const giphyUrl = `https://api.giphy.com/v1/gifs/random?api_key=${GIPHY_API_KEY}&tag=${searchTerm}`;
    fetch(giphyUrl)
      .then((res) => res.json())
      .then((giphyResponse) => {
        setImageUrl(giphyResponse.data.fixed_height_downsampled_url);
      });
  };

  return (
    <div>
      <p>-------header--------</p>
      <label>
        Search Giphy:
        <input
          value={searchTerm}
          type="text"
          id="searchTerm"
          name="searchTerm"
          onKeyPress={(event) => {
            if (event.key === "Enter") {
              if (searchTerm.length > 0) {
                fetchGiphy(searchTerm);
              } else {
                setImageUrl("");
                setSearchTerm("");
              }
            }
          }}
          onChange={(event) => {
            setSearchTerm(event.target.value);
          }}
        />
      </label>
      {imageUrl.length > 0 && (
        <>
          <img src={imageUrl} alt={searchTerm} title={searchTerm} />
          <p>{imageUrl}</p>
        </>
      )}
      <p>-------footer--------</p>
    </div>
  );
}

export default App;
