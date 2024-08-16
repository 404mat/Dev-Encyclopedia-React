import './App.css';
import Card from './components/Card/Card';
import HeroContent from './components/HeroContent/HeroContent';
import cardData from './data/data.json';

export default function App() {
  return (
    <div>
      <HeroContent />

      <div className='card-container'>
        {cardData.map((card) => (
          <Card key={card.tag} title={card.name} subtitle={card.description} />
        ))}
      </div>
    </div>
  );
}
