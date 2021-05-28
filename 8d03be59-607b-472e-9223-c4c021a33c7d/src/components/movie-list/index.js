import React, { useState } from 'react'
import './index.css'

const endPoint = 'https://jsonmock.hackerrank.com/api/movies'

// https://headsup.scoutlife.org/what-was-the-first-movie-ever-made/ - 1878
const firstYearMovie = 1877

function MovieList () {
  const [movies, setMovies] = useState([])
  const [start, setStart] = useState(false)
  const [inputYear, setInputYear] = useState('')
  const [errorMessage, setErrorMessage] = useState('')

  const handleSearchMovie = (e) => {
    e.preventDefault()

    if (inputYear === '') {
      return
    }
    setErrorMessage('')
    if (inputYear > firstYearMovie) {
      fetch(`${endPoint}?Year=${inputYear}`, {
        method: 'get' // opcional
      })
        .then((response) => response.json())
        .then(function (r) {
          setStart(true)
          if (r.data.length > 0) {
            setMovies(r.data)
          } else {
            setMovies([])
            setErrorMessage('No Results Found')
          }
        })
        .catch(function (err) {
          if (err) {
            setStart(false)
            setMovies([])
            setErrorMessage('')
          }
        })
    } else {
      setStart(false)
      setMovies([])
      setErrorMessage('')
    }
  }

  const handleChangeYear = async e => {
    e.preventDefault()
    e.persist()
    setInputYear(+e.target.value)
    setMovies([])
  }

  const renderResult = () => {
    let fragment = ''
    if (start) {
      if (errorMessage === '') {
        if (movies.length > 0) {
          fragment = (
            <>
              <ul className='mt-50 styled' data-testid='movieList'>
                {movies.map((movie) => (
                  <li key={movie.imdbID} className='slide-up-fade-in py-10'>{movie.Title}</li>
                ))}
              </ul>
            </>
          )
        } else {
          fragment = (
            <>
              <ul className='mt-50 styled' data-testid='movieList' />
              <div className='mt-50 slide-up-fade-in' data-testid='no-result'>{errorMessage}</div>
            </>
          )
        }
      } else {
        fragment = (
          <>
            <ul className='mt-50 styled' data-testid='movieList' />
            <div className='mt-50 slide-up-fade-in' data-testid='no-result'>{errorMessage}</div>
          </>
        )
      }
    } else {
      fragment = (
        <>
          <ul className='mt-50 styled' data-testid='movieList' />
        </>
      )
    }
    return fragment
  }
  return (
    <div className='layout-column align-items-center mt-50'>
      <section className='layout-row align-items-center justify-content-center'>
        <input type='number' className='large' placeholder='Enter Year eg 2015' data-testid='app-input' onChange={handleChangeYear} />
        <button className='' data-testid='submit-button' onClick={handleSearchMovie}>Search</button>
      </section>

      {renderResult()}
    </div>
  )
}

export default MovieList
