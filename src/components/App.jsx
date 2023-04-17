import React, { useState } from 'react';
import Statistic from './Statistic';
import FeedBack from './FeedBack';
import Section from './Section';

const App = () => {
  const [good, setGood] = useState(0);
  const [neutral, setneutral] = useState(0);
  const [bad, setbad] = useState(0);

  const handleFeedBack = option => {
    switch (option) {
      case 'good':
        setGood(prevState => prevState + 1);
        break;
      case 'neutral':
        setneutral(prevState => prevState + 1);
        break;
      case 'bad':
        setbad(prevState => prevState + 1);
        break;
      default:
        console.log('have nothing');
    }
  };
  const countTotalFeedback = () => good + neutral + bad;

  const countPositiveFeedbackPercentage = () =>
    (good * 100) / countTotalFeedback();

  return (
    <>
      <Section title="Please leave feedback">
        <FeedBack
          options={['good', 'neutral', 'bad']}
          onLeaveFeedback={handleFeedBack}
        ></FeedBack>
      </Section>
      <Section title="Statistics">
        <Statistic
          good={good}
          neutral={neutral}
          bad={bad}
          total={countTotalFeedback()}
          positivePercentage={countPositiveFeedbackPercentage()}
        ></Statistic>
      </Section>
    </>
  );
};

export default App;

// class App extends React.Component {
//   state = {
//     good: 0,
//     neutral: 0,
//     bad: 0,
//   };

//   handleFeedBack = option => {

//     this.setState(prevState => {
//       return { [option]: prevState[option] + 1 };
//     });
//   };

//   countTotalFeedback() {
//     let total = 0;
//     for (const value of Object.values(this.state)) {
//       total += value;
//     }
//     return total;
//   }
//   countPositiveFeedbackPercentage() {
//     return (this.state.good * 100) / this.countTotalFeedback();
//   }

//   render() {
//     const { good, neutral, bad } = this.state;

//     return (
//       <>
//         <Section title="Please leave feedback">
//           <FeedBack
//             options={['good', 'neutral', 'bad']}
//             onLeaveFeedback={this.handleFeedBack}
//           ></FeedBack>
//         </Section>
//         <Section title="Statistics">
//           <Statistic
//             good={good}
//             neutral={neutral}
//             bad={bad}
//             total={this.countTotalFeedback()}
//             positivePercentage={this.countPositiveFeedbackPercentage()}
//           ></Statistic>
//         </Section>
//       </>
//     );
//   }
// }
// export default App;
