import PropTypes from 'prop-types'

import { Button, Ul } from './Feedback.styled'

export const FeedbackOptions = ({ options, onLeaveFeedback }) => {
  return (
    <Ul>
        {options.map(option => (
          <li key={option}>
          <Button type="button" name={option} onClick={onLeaveFeedback}>{option}</Button>
          </li>
        ))}
    </Ul>
  )
}

FeedbackOptions.propTypes = {
  options: PropTypes.arrayOf(PropTypes.string).isRequired,
}