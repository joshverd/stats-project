import React from 'react';
import style from './Text.scss';

const Text = props => {
  return (
    <div className={style.textWrapper}>
      <span>{props.children}</span>
    </div>
  );
};

export default Text;
