import { GameClient, PokemonClient, UtilityClient } from 'pokenode-ts';

const pokemonClient = new PokemonClient();
const gameClient = new GameClient();
const utilityClient = new UtilityClient();

export { pokemonClient, gameClient, utilityClient };
