import styled from "styled-components";

const CardStyle = styled.button`
  color: #4f546c;
  border: 0px;
  padding: 0px;
  margin: 10px;

  .wrapper {
    margin: 2rem;
    display: grid;
    gap: 1rem;
    grid-template-columns: 1fr;
    justify-content: center;
  }

  .card {
    box-shadow: 0 0 10px 5px #e1e5ee;
    border-radius: 0.2rem;
    display: flex;
    min-width: 355px;
  }
  .card_img {
    height: 11rem;
    object-fit: cover;
  }
  .card_body {
    margin: 1rem;
    flex-grow: 1;
  }
  .card_title {
    line-height: 1.4rem;
    margin-bottom: 0.5rem;
  }
  .card_status {
    line-height: 1.2rem;
  }

  @media screen and (min-width: 768px) {
    .wrapper {
      grid-template-columns: repeat(auto-fill, minmax(14rem, 16rem));
    }

    .card {
      flex-direction: column;
      text-align: center;
      min-width: 14rem;
    }
    .card_img {
      width: 100%;
      height: 12rem;
    }
  }
`;

export default function Card(props) {
  return (
    <CardStyle className="wrapper" {...props}>
      <div className="card">
        <img src={props.img} className="card_img" alt="character" />
        <div className="card_body">
          <h2 className="card_title">{props.title}</h2>
          <p className="card_status">Status:{props.description}</p>
        </div>
      </div>
    </CardStyle>
  );
}
