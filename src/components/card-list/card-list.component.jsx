import React from 'react';
import './card-list.styles.css';
import Card from './card/card.component';

const CardList = props => (
  // console.log('props', props);
  // children
  // return (<div className="card-list">{ props.children }</div>)
  <div className="card-list">
    {
      props.monsters.map(monster => (
        // must have unique key so that React can tell which element needs to be updated
        <Card key={ monster.id } monster={ monster }/>
      ))
    }
  </div>
);

export default CardList;
