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
        text="A Restaurant's owner, Tristan, estimates that 85% of customers purchase a drink, but only 65% actually purchase a food item. Tristan also calculated that the profit earned on a drink sale is $5 and the profit earned on a food item sale is $15."
      />
    ),
    'questionA': (
      <Tab
        title="Question A"
        text="What is the probability that the 5th customer to enter the Restaurant orders a drink?"
      />
    ),
    'questionB': (
      <Tab
        title="Question B"
        text="What is the probability of the 22nd customer being the first person to order a meal?"
      />
    ),
    'questionC': (
      <Tab
        title="Question C"
        text="If 150 customers visit the Restaurant in a day, how much money should Tristan expect to profit, total, from food and drink sales?"
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
