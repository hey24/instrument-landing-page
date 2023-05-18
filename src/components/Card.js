import React from 'react';
import { Button } from '@mui/material';
import ArrowForwardIcon from '@mui/icons-material/ArrowForward';

const Card = ({ imageSrc, description, btnText, isTextOnLeft }) => {

  const cardClass = isTextOnLeft ? 'card' : 'card card-reverse';

  return (
    <div className={cardClass}>
      {isTextOnLeft && (
        <div className="card-content">
          <p className="card-description">{description}</p>
          <Button
            className='Button-LearnMore'
            variant="contained"
            style={{ backgroundColor: '#ffa98e' }}
            endIcon={<ArrowForwardIcon />}
            sx={{
              borderRadius: 50
            }}
          >
            {btnText}
          </Button>
        </div>
      )}
      <img className="card-image" src={imageSrc} alt="Card" />
      {!isTextOnLeft && (
        <div className="card-content">
        <p className="card-description">{description}</p>
        <Button
          className='Button-LearnMore'
          variant="contained"
          style={{ backgroundColor: '#ffa98e' }}
          endIcon={<ArrowForwardIcon />}
          sx={{
            borderRadius: 50
          }}
        >
          {btnText}
        </Button>
      </div>
      )}
    </div>
  );
};

export default Card;
