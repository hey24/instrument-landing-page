import React from 'react'
import './Hero.css'
import Button from '@mui/material/Button';
import ArrowForwardIcon from '@mui/icons-material/ArrowForward';


export default function Hero() {
  return (
    <div className='Container'>
      <div className="HeroItems-Flex">
      <div className="HeroItems">
        <img src={require('../hero.svg').default} alt='mySvgImage' className='HeroSVG' />
        <p className='InvestmentText'>
          We are investing $3 million over the next three years in our <br />
          Build|Grow|Serve program, created to support and empower Black and <br />
          underrepresented communities
        </p>
        <Button
          className='Button-LearnMore'
          variant="contained"
          style={{ backgroundColor: '#ffa98e' }}
          endIcon={<ArrowForwardIcon />}
          sx={{
            borderRadius: 50
          }}
        >
          Learn More
        </Button>
      </div>
      <div className='HeroItems-Blank'></div>
      </div>
    </div>
  )
}
