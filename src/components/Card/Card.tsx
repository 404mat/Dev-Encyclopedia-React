import './Card.css';

interface CardProps {
  title: string;
  subtitle: string;
}

export default function Card(props: Readonly<CardProps>) {
  return (
    <div className='card'>
      <div className='card-title'>{props.title}</div>
      <div className='card-subtext'>{props.subtitle}</div>
      <button className='explain-button'>Explain</button>
    </div>
  );
}

function showModal() {
  // not implemented yet
}
