import React from 'react';
import style from './Title.scss';

const Title = props => {
  return (
    <div className={style.titleWrapper}>
      <span>{props.children}</span>
    </div>
  );
};

export default Title;
