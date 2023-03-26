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

  handleFeedBack = evt => {
    const { name } = evt.target;
    this.setState(prevState => {
      return { [name]: prevState[name] + 1 };
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

    return (
      <>
        <Section title="Please leave feedback">
          <FeedBack onLeaveFeedback={this.handleFeedBack}></FeedBack>
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
