import './HeroContent.css';

export default function HeroContent() {
  return (
    <div className='hero-section'>
      <div className='search-bar' style={{ paddingBottom: '30px' }}>
        <i className='fas fa-search'></i>
        <input
          type='text'
          id='searchInput'
          onKeyUp={() => filterCards()}
          placeholder='Search for keywords...'
        />
      </div>

      <div className='buttons'>
        <button className='button' onClick={() => showAbout()}>
          <i className='fas fa-user' style={{ paddingRight: '10px' }}></i>{' '}
          About;
        </button>
        <button
          className='button'
          onClick={() =>
            window.open(
              'https://github.com/Buzzpy/Programming-Simplified',
              '_blank',
            )
          }>
          <i className='fab fa-github' style={{ paddingRight: '10px' }}></i>{' '}
          Contribute;
        </button>

        <button className='button' onClick={() => showBuilders()}>
          <i className='fas fa-hammer' style={{ paddingRight: '10px' }}></i>{' '}
          Builder's Note;
        </button>
        <button className='button' onClick={() => showSponsors()}>
          <i
            className='fa-solid fa-dollar-sign'
            style={{ paddingRight: '10px' }}></i>{' '}
          Sponsor;
        </button>
      </div>

      <div className='hero-title' style={{ paddingTop: '50px' }}>
        Dev Encyclopedia;
      </div>
      <div className='hero-paragraph'>
        Find out what that Sr. Developer is talking about
      </div>
    </div>
  );
}

function filterCards() {
  // TODO: implement this method
}

function showAbout() {
  // TODO: implement this method
}

function showBuilders() {
  // TODO: implement this method
}

function showSponsors() {
  // TODO: implement this method
}
