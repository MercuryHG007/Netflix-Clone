const TMDB_API_KEY = "f5887379b694b2f988c9c898244feb36";

const requests = {
    fetchTrending: `/trending/all/week?api_key=${TMDB_API_KEY}&language=en-US`,
    fetchNetflixOriginals: `/discover/tv?api_key=${TMDB_API_KEY}&with_network=213`,
    fetchTopRatedMovies: `/movie/top_rated?api_key=${TMDB_API_KEY}&language=en-US`,
    fetchTopRatedTV: `/tv/top_rated?api_key=${TMDB_API_KEY}&language=en-US`,
    fetchActionMovies: `/discover/movie?api_key=${TMDB_API_KEY}&with_generes=28`,
    fetchComedyMovies: `/discover/movie?api_key=${TMDB_API_KEY}&with_generes=35`,
    fetchHorrorMovies: `/discover/movie?api_key=${TMDB_API_KEY}&with_generes=27`,
    fetchRomanceMovies: `/discover/movie?api_key=${TMDB_API_KEY}&with_generes=10749`,
    fetchDocumentaries: `/discover/movie?api_key=${TMDB_API_KEY}&with_generes=99`,
}

export default requests;