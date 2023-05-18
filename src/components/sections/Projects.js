import React from 'react'
import Card from "../Card";
import './Projects.css'

export default function Navbar() {

  const cardData = [
    {
      imageSrc: './img/image-of-phone.avif',
      description: "As a full-service partner to the world’s most ambitious companies, we create transformational change through best-in-class digital products and communications.",
      btnText: 'What we do'
    },
    {
      imageSrc: './img/innovative-company-image.avif',
      description: "Instrument Named Among World's Most Innovative Companies in Design",
      btnText: 'Learn More'
    }
  ];

  return (
    <div className="card-grid">
      {cardData.map((card, index) => (
        <Card
          key={index}
          imageSrc={card.imageSrc}
          description={card.description}
          btnText={card.btnText}
          isTextOnLeft={index % 2 === 0}
        />
      ))}
    </div>
  )
}
