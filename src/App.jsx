import Header from './assets/Components/header.jsx'
import Hero from './assets/Components/hero.jsx'
import MovieSection from './assets/Components/movie.jsx'

import { trending, mayLike } from './assets/Data/data.jsx'

function App() {
  return (
    <>
      <Header />
      <Hero />

      <MovieSection
        heading="🔥 Trending"
        movies={trending}
      />

      <MovieSection
        heading="YOU MAY LIKE THIS"
        movies={mayLike}
      />
    </>
  )
}

export default App