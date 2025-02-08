import React from 'react';
import styled from 'styled-components';
import image1 from "../../Images/image1.jpeg";
import image2 from "../../Images/image2.jpeg";
import image3 from "../../Images/image3.jpeg";
import image6 from "../../Images/image6.jpeg";

const Cards = () => {
  return (
    <StyledWrapper>
      <div className="cards">
        <div className="card image1"></div>
        <div className="card image2"></div>
        <div className="card image3"></div>
        <div className="card image4"></div>
      </div>
    </StyledWrapper>
  );
}

const StyledWrapper = styled.div`
  .cards {
  
    display: flex;
    gap: 2vw; /* Gap between cards */
    padding: 1em;
    width: 100%; /* Ensure container takes full width */
    overflow: hidden; /* Prevent scrolling */
  }

  .cards .card {
    flex: 1; /* Allow cards to shrink and grow proportionally */
    min-width: 0; /* Allow cards to shrink below their base size */
    height: clamp(150px, 20vw, 250px); /* Responsive height */
    border-radius: 10px;
    background-size: cover;
    background-position: center;
    background-repeat: no-repeat;
    transition: transform 0.3s ease-in-out;
  }

  .cards .image1 { background-image: url(${image1}); }
  .cards .image2 { background-image: url(${image2}); }
  .cards .image3 { background-image: url(${image3}); }
  .cards .image4 { background-image: url(${image6}); }

  /* Hover effect for non-touch devices */
  @media (hover: hover) and (pointer: fine) {
    .cards .card:hover {
      transform: scale(1.05);
    }
  }

  /* Adjustments for smaller screens */
  @media (max-width: 768px) {
    .cards {
      gap: 1.5vw; /* Reduce gap for smaller screens */
    }

    .cards .card {
      height: clamp(120px, 25vw, 200px); /* Smaller height for small screens */
    }
  }

  @media (max-width: 480px) {
    .cards {
      gap: 1vw; /* Further reduce gap for very small screens */
    }

    .cards .card {
      height: clamp(100px, 30vw, 150px); /* Even smaller height for very small screens */
    }
  }
`;

export default Cards;