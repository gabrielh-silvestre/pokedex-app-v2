import type { NextPage } from 'next'

import { SquareCard } from '../components/Card/SquareCard'

const Home: NextPage = () => {
  return (
    <SquareCard pokemonName="charmander" />
  )
}

export default Home
