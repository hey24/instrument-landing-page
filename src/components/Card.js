import React from 'react';
import { Button } from '@mui/material';
import ArrowForwardIcon from '@mui/icons-material/ArrowForward';

const Card = ({imageSrc, description, btnText}) => {
  return (
    <div className="card">
      <img className="card-image" src={imageSrc} alt="Card" />
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
    </div>
  );
};

export default Card;
