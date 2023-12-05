interface CardProps {
    id: number
    info: string
}


export default function Card({id, info}: CardProps) {
  return (
    <div>
      <h1>CARD {id}</h1>
      <p>{info}</p>
    </div>
  );
}
