import React from 'react'
import '../assests/css/homeScreen.css'

import requests from '../requests'

import Navbar from '../components/Navbar.js'
import Banner from '../components/Banner.js'
import Row from '../components/Row.js'

function HomeScreen() {
  return (
    <div className='homeScreen'>
        {/* NAVBAR */}
        <Navbar />

        {/* BANNER */}
        <Banner />

        {/* ROWS */}
        <Row
          title = 'MERCURYFLIX ORIGINALS'
          fetchURL = {requests.fetchNetflixOriginals}
          isLargeRow = 'true'
        />
        <Row
          title = 'Trending Now'
          fetchURL = {requests.fetchTrending}
        />
        <Row
          title = 'Top Rated Movies'
          fetchURL = {requests.fetchTopRatedMovies}
        />
        <Row
          title = 'Top Rated Series'
          fetchURL = {requests.fetchTopRatedTV}
        />
        <Row
          title = 'Action Movies'
          fetchURL = {requests.fetchActionMovies}
        />
        <Row
          title = 'Comedy Movies'
          fetchURL = {requests.fetchComedyMovies}
        />
        <Row
          title = 'Horror Movies'
          fetchURL = {requests.fetchHorrorMovies}
        />
        <Row
          title = 'Romance Movies'
          fetchURL = {requests.fetchRomanceMovies}
        />
        <Row
          title = 'Documentaries Movies'
          fetchURL = {requests.fetchDocumentaries}
        />
    </div>
  )
}

export default HomeScreen