import React from 'react';
import style from './ViewCodeButton.scss';

const ViewCodeButton = props => {
  return (
    <a
      href="https://github.com/joshverd/stats-project"
      target="_blank"
      className={style.buttonWrapper}
    >
      <div className={style.button}>
        <i className="fab fa-github" />
        <span>View Code</span>
      </div>
    </a>
  );
};

export default ViewCodeButton;
