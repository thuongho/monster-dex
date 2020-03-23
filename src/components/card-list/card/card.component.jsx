import React from 'react';
import './card.styles.css';

// export const Card = (props) => (
//   <div className="card-container">
//     <img alt="monster" src={`https://robohash.org/${props.monster.id}?set=set2&size=180x180`} />
//     <h2>{ props.monster.name }</h2>
//     <p>{ props.monster.email }</p>
//   </div>
// );

const Card = ({ monster }) => {
  const {id, name, email } = monster;
  return(
    <div className="card-container">
      <img alt="monster" src={`https://robohash.org/${id}?set=set2&size=180x180`} />
      <h2>{ name }</h2>
      <p>{ email }</p>
    </div>
  );
};

export default Card;
