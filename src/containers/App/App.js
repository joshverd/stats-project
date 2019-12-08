import React, { useEffect, useState } from 'react';
import style from './App.scss';

// Components
import ProblemStatement from '../../components/ProblemStatement/ProblemStatement.js';
import TabSelector from '../../components/TabSelector/TabSelector.js';

const App = props => {
  // The current, displayed tab
  const [ selectedTab, setSelectedTab ] = useState('question');

  // Mapping the name of the tab to a component that should be displayed
  const tabNameToComponent = {
    'question': (
      <ProblemStatement
        title="Problem Statement"
        text="Someone does something and something else. How does this work?"
      />
    ),
    'questionA': null,
    'questionB': null,
    'questionC': null,
  };

  const onNewTab = newTabName => setSelectedTab(newTabName);

  return (
    <div className={style.appWrapper}>
      <div className={style.tabSelectorWrapper}>
        <TabSelector
          tabs={tabNameToComponent}
          onNewTab={onNewTab}
          selectedTab={selectedTab}
        />
      </div>
      <div className={style.tabWrapper}>
        {tabNameToComponent[selectedTab]}
      </div>
    </div>
  );
}

export default App;
