import React, { useEffect, useState } from 'react';
import style from './App.scss';

// Components
import QuestionTab from '../../components/QuestionTab/QuestionTab.js';
import TabSelector from '../../components/TabSelector/TabSelector.js';

const App = props => {
  // The current, displayed tab
  const [ selectedTab, setSelectedTab ] = useState('question');

  // Mapping the name of the tab to a component that should be displayed
  const tabNameToComponent = {
    'question': <QuestionTab />,
  };

  return (
    <div className={style.appWrapper}>
      <div className={style.tabSelectorWrapper}>
        <TabSelector
          tabs={tabNameToComponent}
        />
      </div>
      <div className={style.tabWrapper}>
        {tabNameToComponent[selectedTab]}
      </div>
    </div>
  );
}

export default App;
