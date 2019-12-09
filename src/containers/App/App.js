import React, { useEffect, useState } from 'react';
import style from './App.scss';

// Components
import ProblemStatement from '../../components/ProblemStatement/ProblemStatement.js';
import TabSelector from '../../components/TabSelector/TabSelector.js';
import Tab from '../../components/Tab/Tab.js';
import ViewCodeButton from '../../components/ViewCodeButton/ViewCodeButton.js';
import { TransitionGroup, CSSTransition } from 'react-transition-group';

const App = props => {
  // The current, displayed tab
  const [ selectedTab, setSelectedTab ] = useState('question');

  // Mapping the name of the tab to a component that should be displayed
  const tabNameToComponent = {
    'question': (
      <ProblemStatement
        title="Problem Statement"
        text="A Restaurant's owner estimates that 45% of customers purchase a drink, but only 25% actually purchase a food item. Assume customers, food sales, and drink sales are independent."
      />
    ),
    'questionA': (
      <Tab
        title="Question A"
        text="What is the probability that the first 5 customers to enter the Restaurant all order a drink?"
      />
    ),
    'questionB': (
      <Tab
        title="Question B"
        text="What is the probability that the 6th customer is the first to order a food item?"
      />
    ),
    'questionC': (
      <Tab
        title="Question C"
        text="Suppose the probability of a customer buying both a drink AND a food item is 15%. Out of 450 customers, what is the probability that 180 or less leave without purchasing any items?"
      />
    ),
  };

  const onNewTab = newTabName => setSelectedTab(newTabName);

  // All Tab Names
  const tabNames = Object.keys(tabNameToComponent);

  // Index of the selected tab
  const selectedTabIndex = tabNames.indexOf(selectedTab);

  return (
    <div className={style.appWrapper}>
      <div className={style.tabSelectorWrapper}>
        <TabSelector
          tabs={tabNameToComponent}
          onNewTab={onNewTab}
          selectedTab={selectedTab}
        />
        <div className={style.viewCodeButtonWrapper}>
          <ViewCodeButton />
        </div>
      </div>
      <div className={style.tabWrapper}>
        <TransitionGroup
          component={null}
        >
          {Object.keys(tabNameToComponent).map((tabName, index) => {
            console.log(selectedTabIndex, index);
            // If the index is higher than the selected tab's index, then remove don't show it.
            if(index > selectedTabIndex) return;

            return (
              <CSSTransition
                key={tabName}
                timeout={300}
                classNames={{
                  appear: style.animationAppear,
                  appearDone: style.animationAppearDone,
                  enter: style.animationEnter,
                  enterDone: style.animationEnterDone,
                  exit: style.animationExit,
                  exitDone: style.animationExitDone,
                }}
              >
                {tabNameToComponent[tabName]}
              </CSSTransition>
            );
          })}
        </TransitionGroup>
      </div>
    </div>
  );
}

export default App;
