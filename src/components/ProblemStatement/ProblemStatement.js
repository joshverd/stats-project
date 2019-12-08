import React from 'react';
import style from './ProblemStatement.scss';

// Components
import Title from '../Title/Title.js';
import Text from '../Text/Text.js';

const ProblemStatement = props => {
  return (
    <div className={style.problemStatementWrapper}>
      <Title>
        Problem Statement
      </Title>
      <Text>
        {props.text}
      </Text>
    </div>
  );
};

export default ProblemStatement;
