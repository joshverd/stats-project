import React from 'react';
import style from './TabSelector.scss';

const TabSelector = props => {
  return (
    <div className={style.tabSelector}>
      <div className={style.backButton}>
        <i className="far fa-angle-left"></i>
      </div>
      {Object.keys(props.tabs).map(tabName => {

      })}
      <div className={style.forwardButton}>
        <i className="far fa-angle-right"></i>
      </div>
    </div>
  );
};

export default TabSelector;
