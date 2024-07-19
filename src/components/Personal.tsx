import styled from "styled-components";

function Personal() {
  return (
    <Maindiv>
      <div className="img"></div>
      <Infromation>
        <h1>
          Bringing you the <span>best</span> audio gear
        </h1>
        <p>
          Located at the heart of New York City, Audiophile is the premier store
          for high end headphones, earphones, speakers, and audio accessories.
          We have a large showroom and luxury demonstration rooms available for
          you to browse and experience a wide range of our products. Stop by our
          store to meet some of the fantastic people who make Audiophile the
          best place to buy your portable audio equipment.
        </p>
      </Infromation>
    </Maindiv>
  );
}

const Maindiv = styled.div`
  display: flex;
  flex-direction: column;
  gap: 30px;
  align-items: center;
  text-align: center;
  justify-content: center;
  padding: 20px;
  margin-top: 100px;

  .img {
    background-image: url("/public/assets/shared/mobile/image-best-gear.jpg");

    background-repeat: no-repeat;
    background-size: cover;

    border-radius: 8px;
    order: 1;
  }
  @media (min-width: 740px) {
    flex-direction: column;
    text-align: unset;
    gap: 100px;

    .img {
      background-image: url("/public/assets/shared/tablet/image-best-gear.jpg");
      background-repeat: no-repeat;
      background-size: cover;
      width: 700px;
      height: 300px;
      order: 1; /* Swap the order */
    }
  }
  @media (min-width: 1440px) {
    flex-direction: row;
    text-align: unset;
    gap: 100px;
    background-position: center;
    .img {
      background-image: url("/public/assets/shared/desktop/image-best-gear.jpg");
      width: 540px;
      height: 558px;
      order: 2; /* Swap the order */
    }
  }
`;

const Infromation = styled.div`
  display: flex;
  flex-direction: column;
  gap: 20px;
  order: 2; /* Default order for smaller screens */

  h1 {
    color: #000;
    text-align: center;
    font-family: Manrope;
    font-size: 28px;
    font-style: normal;
    font-weight: 700;
    line-height: normal;
    letter-spacing: 1px;
    text-transform: uppercase;

    span {
      color: #d87d4a;
    }
  }

  p {
    color: #000;
    font-size: 15px;
    font-weight: 400;
    line-height: 25px; /* 166.667% */
  }
  @media (min-width: 740px) {
    width: 573px;
    height: 295px;
    text-align: center;
    order: 1; /* Swap the order */

    h1 {
      color: #000;
      text-align: center;
      font-family: Manrope;
      font-size: 40px;
      font-style: normal;
      font-weight: 700;
      line-height: 44px; /* 110% */
      letter-spacing: 1.429px;
      text-transform: uppercase; /* 166.667% */
    }
  }
  @media (min-width: 1440px) {
    width: 450px;
    height: 295px;
    text-align: unset;
    order: 1; /* Swap the order */

    h1 {
      font-size: 40px;
      text-align: unset;
      font-weight: 700;
      line-height: 44px; /* 110% */
      letter-spacing: 1.429px;
      text-transform: uppercase;
    }
  }
`;

export default Personal;
