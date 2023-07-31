import React , {Component} from 'react'

import { Section } from "./Section.jsx/Section";
import {FeedbackOptions} from './FeedbackOptions/FeedbackOptions';
import { Statistics } from './Statistics/Statistics';
import { Notification } from './Notification/Notification';

import { OPTIONS } from './constans/constans';

class App extends Component {
  state = {
    good: 0,
    neutral: 0,
    bad: 0
  }

  leaveFeedback = e => {
    const currentFeedback = e.currentTarget.name

    this.setState((prevState) => ({
      [currentFeedback]: prevState[currentFeedback] + 1
    }))
  }

  totalFeedback = () => {
    const totalFeedback = Object.values(this.state)
    return totalFeedback.reduce((acc, quantity) => acc + quantity, 0)
  }

  positivePercentageFeedback = () => {
    const { good } = this.state
    const total = this.totalFeedback()
    return Math.ceil((good/total) * 100)
  }

  render() {
    const { good, neutral, bad } = this.state

    const total = this.totalFeedback()
    const positivePercentage = this.positivePercentageFeedback()

    // Components
    const showStatistic = <Statistics good={good} neutral={neutral} bad={bad} total={total} positivePercentage={positivePercentage} />
    const hideStatistic = <Notification message="There is no feedback" />

    return (
      <Section title="Please leave feedback">
        <FeedbackOptions options={OPTIONS} onLeaveFeedback={this.leaveFeedback} />

        {total ? showStatistic : hideStatistic}

      </Section>
    )
  }
}

export default App