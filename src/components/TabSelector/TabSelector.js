import React from 'react';
import style from './TabSelector.scss';

const TabSelector = props => {

  // Mapping tab abbreviations to the full tab name
  const tabAbbreviationToName = {
    'Q': 'question',
    'A': 'questionA',
    'B': 'questionB',
    'C': 'questionC',
  };

  // Mapping tab names to the displayed name
  const tabNameToDisplayedName = {
    'question': 'Problem Statement',
    'questionA': 'Question A',
    'questionB': 'Question B',
    'questionC': 'Question C',
  };

  // Returning the full tab name to the onNewTab function based on the tabAbbreviation
  const onTabClick = tabAbbreviation => props.onNewTab(tabAbbreviationToName[tabAbbreviation]);

  // When an arrow is clicked, this function is run
  const onArrowClick = direction => {
    // The direction which we will change tabs (1 or -1)
    let indexChange;

    if(direction === 'left') indexChange = -1;
    if(direction === 'right') indexChange = 1;

    // Finding the current index
    const tabNames = Object.keys(props.tabs);

    const currentIndex = tabNames.indexOf(props.selectedTab);

    // Finding the new index
    const newIndex = currentIndex + indexChange;

    // Checking for invalid indexes
    if(newIndex > tabNames.length - 1 || newIndex < 0) return;

    // Applying the change
    const newTabName = tabNames[newIndex];

    return props.onNewTab(newTabName);
  };

  return (
    <div className={style.tabSelector}>
      <div className={style.buttonsWrapper}>
        <div className={style.backButton}>
          <i className="far fa-angle-left" onClick={() => onArrowClick('left')} />
        </div>
        {Object.keys(tabAbbreviationToName).map((tabAbbreviation, index) => {
          return (
            <>
              {index === 1 ? (
                <div className={style.spacerWrapper}>
                  <div className={style.spacer} />
                </div>
              ) : null}
              <div
                className={[
                  props.selectedTab === tabAbbreviationToName[tabAbbreviation]
                    ? style.selected
                    : '',
                  style.tabAbbreviationWrapper,
                ].join(' ')}
                onClick={() => onTabClick(tabAbbreviation)}
                key={tabAbbreviation}
              >
                <span>{tabAbbreviation}</span>
              </div>
            </>
          );
        })}
        <div className={style.forwardButton}>
          <i className="far fa-angle-right" onClick={() => onArrowClick('right')} />
        </div>
      </div>
      <div className={style.textWrapper}>
        <span>{tabNameToDisplayedName[props.selectedTab]}</span>
      </div>
    </div>
  );
};

export default TabSelector;
