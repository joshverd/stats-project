import React from 'react';
import style from './Tab.scss';

// Components
import Title from '../Title/Title.js';
import Text from '../Text/Text.js';

const Tab = props => {
  return (
    <div className={style.tabWrapper}>
      <div className={style.tab}>
        <Title>
          {props.title}
        </Title>
        <Text>
          {props.text}
        </Text>
      </div>
    </div>
  );
};

export default Tab;
