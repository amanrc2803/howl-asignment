import React from 'react';

const Cards = () => {
  const cardImages = [
    'photos/3.jpg',
    'r/p2.jpg',
    'r/p3.jpg',
    'r/p4.jpg',
    'r/p5.jpg',
    'r/p5.jpg',
    'r/p1.jpg',
    'r/p9.jpg',
    'r/p9.jpg',
    'r/p7.jpg',
    'r/p5.jpg',
    'r/p7.jpg',
  ];

  return (
    <div className="container mt-5">
      <div className="row">
        {cardImages.map((src, index) => (
          <div className="col-md-2 mb-4" key={index}>
            <div className="card">
              <img src={src} className="card-img-top" alt={`Card ${index + 1}`} />
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Cards;
