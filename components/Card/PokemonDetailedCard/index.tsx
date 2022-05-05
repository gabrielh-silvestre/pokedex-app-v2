import Image from 'next/image';

function PokemonDetailedCard() {
  return (
    <>
      <section className="img-container">
        <Image
          src="https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/1.png"
          alt="pokemon"
          width={200}
          height={200}
        />
      </section>

      <section className="stats-container">
        <div>
          <div>
            <h4>Abilities</h4>
            <span>Trem</span>
          </div>
        </div>

        <div>
          <div>
            <h4>HP</h4>
            <span>Trem</span>
          </div>

          <div>
            <h4>Speed</h4>
            <span>Trem</span>
          </div>

          <div>
            <h4>Attack</h4>
            <span>Trem</span>
          </div>

          <div>
            <h4>Defense</h4>
            <span>Trem</span>
          </div>

          <div>
            <h4>Sp. Attack</h4>
            <span>Trem</span>
          </div>

          <div>
            <h4>Sp. Defense</h4>
            <span>Trem</span>
          </div>
        </div>

        <div>
          <div>
            <h4>Weight</h4>
            <span>Trem</span>
          </div>

          <div>
            <h4>Height</h4>
            <span>Trem</span>
          </div>
        </div>

        <div>
          <div>
            <h4>Capture Rate</h4>
            <span>Trem</span>
          </div>

          <div>
            <h4>Growth Rate</h4>
            <span>Trem</span>
          </div>
        </div>

        <div>
          <div>
            <h4>Base Experience</h4>
            <span>Trem</span>
          </div>

          <div>
            <h4>Base Happiness</h4>
            <span>Trem</span>
          </div>
        </div>
      </section>
    </>
  );
}

export { PokemonDetailedCard };
