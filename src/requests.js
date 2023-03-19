const TMDB_API_KEY = "f5887379b694b2f988c9c898244feb36";

const requests = {
    fetchTrending: `/trending/all/week?api_key=${TMDB_API_KEY}&language=en-US`,
    fetchNetflixOriginals: `/discover/tv?api_key=${TMDB_API_KEY}&with_networks=213`,
    // fetchAmazonPrimeVideosOriginals: `/discover/tv?api_key=${TMDB_API_KEY}&with_networks=9`,
    // fetchDisneyPlusOriginals: `/discover/tv?api_key=${TMDB_API_KEY}&with_networks=337`,
    fetchTopRatedMovies: `/movie/top_rated?api_key=${TMDB_API_KEY}&language=en-US`,
    fetchTopRatedTV: `/tv/top_rated?api_key=${TMDB_API_KEY}&language=en-US`,
    fetchActionMovies: `/discover/movie?api_key=${TMDB_API_KEY}&with_genres=28`,
    fetchComedyMovies: `/discover/movie?api_key=${TMDB_API_KEY}&with_genres=35&page=1`,
    fetchHorrorMovies: `/discover/movie?api_key=${TMDB_API_KEY}&with_genres=27&page=1`,
    fetchRomanceMovies: `/discover/movie?api_key=${TMDB_API_KEY}&with_genres=10749&page=1`,
    fetchDocumentaries: `/discover/movie?api_key=${TMDB_API_KEY}&with_genres=99&page=1`,
}

export default requests;