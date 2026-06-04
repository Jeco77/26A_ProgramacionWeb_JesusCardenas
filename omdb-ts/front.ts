const BASE_URL = "http://www.omdbapi.com/";
const API_KEY = "47cf2329";  // Tu API Key

interface MovieRating {
  Source: string;
  Value: string;
}

interface OMDBMovieResponse {
  Title: string;
  Year: string;
  Genre: string;
  Director: string;
  Plot: string;
  Poster: string;
  imdbRating: string;
  Ratings: MovieRating[];
}

async function getMovieByImdbId(imdbId: string): Promise<OMDBMovieResponse> {
  const url = `${BASE_URL}?i=${imdbId}&apikey=${API_KEY}`;
  const response = await fetch(url);
  if (!response.ok) throw new Error(`HTTP Error: ${response.status}`);
  return await response.json() as OMDBMovieResponse;
}

function renderMovie(doc: Document, movie: OMDBMovieResponse): void {
  const app = doc.getElementById("app");
  if (!app) return;
  app.innerHTML = `
    <div class="movie">
      <h2>${movie.Title} (${movie.Year})</h2>
      <p><strong>Rating:</strong> ${movie.imdbRating}</p>
      <p><strong>Plot:</strong> ${movie.Plot}</p>
      <p><strong>Director:</strong> ${movie.Director}</p>
      <p><strong>Genre:</strong> ${movie.Genre}</p>
      <img src="${movie.Poster}" alt="${movie.Title}" style="max-width: 300px;" />
      <pre>${JSON.stringify(movie, null, 2)}</pre>
    </div>
  `;
}

// Ejemplo: Guardians of the Galaxy Vol. 2
getMovieByImdbId("tt3896198")
  .then(movie => renderMovie(document, movie))
  .catch(error => {
    const app = document.getElementById("app");
    if (app) app.innerHTML = `<p style="color:red;">Error: ${error.message}</p>`;
  });
