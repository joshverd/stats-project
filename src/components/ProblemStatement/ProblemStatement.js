import React from 'react';
import style from './ProblemStatement.scss';

const ProblemStatement = props => {
  return (
    <div className={style.problemStatementWrapper}>
      <div className={style.titleWrapper}>
        <span>{props.title}</span>
      </div>
      <div className={style.textWrapper}>
        <span>{props.text}</span>
      </div>
    </div>
  );
};

export default ProblemStatement;
