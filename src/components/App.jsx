import React from 'react';

import Statistic from './Statistic/Statistic';
import FeedBack from './FeedBack/FeedBack';
import Section from './Section/Section';

class App extends React.Component {
  state = {
    good: 0,
    neutral: 0,
    bad: 0,
  };

  addGoodFeedBack = () => {
    this.setState(prevState => {
      return { good: prevState.good + 1 };
    });
  };

  addNeutralFeedBack = () => {
    this.setState(prevState => {
      return { neutral: prevState.neutral + 1 };
    });
  };
  addBadFeedBack = () => {
    this.setState(prevState => {
      return { bad: prevState.bad + 1 };
    });
  };

  countTotalFeedback() {
    let total = 0;
    for (const value of Object.values(this.state)) {
      total += value;
    }
    return total;
  }
  countPositiveFeedbackPercentage() {
    return (this.state.good * 100) / this.countTotalFeedback();
  }

  render() {
    const { good, neutral, bad } = this.state;
    const { addGoodFeedBack, addNeutralFeedBack, addBadFeedBack } = this;

    return (
      <>
        <Section title="Please leave feedback">
          <FeedBack
            onLeaveFeedback={{
              onGoodBtn: addGoodFeedBack,
              onNeutralBtn: addNeutralFeedBack,
              onBadBtn: addBadFeedBack,
            }}
          ></FeedBack>
        </Section>
        <Section title="Statistics">
          <Statistic
            good={good}
            neutral={neutral}
            bad={bad}
            total={this.countTotalFeedback()}
            positivePercentage={this.countPositiveFeedbackPercentage()}
          ></Statistic>
        </Section>
      </>
    );
  }
}
export default App;
