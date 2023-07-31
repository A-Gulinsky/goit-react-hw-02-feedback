import PropTypes from 'prop-types'

import { Ul,Span } from './Statistics.styled'

export const Statistics = ({good,bad,neutral,total,positivePercentage}) => {

  return (
    <Ul>
      <li >
        <p>Good: <Span>{good}</Span></p>
      </li>
      <li >
        <p>Bad: <Span>{bad}</Span></p>
      </li>
      <li >
        <p>Neutral: <Span>{neutral}</Span></p>
      </li>
      <li >
        <p>Total: <Span>{total}</Span></p>
      </li>
      <li >
        <p>Positive Percentage: <Span>{positivePercentage}</Span>%</p>
      </li>
    </Ul>
  )
}

Statistics.propTypes = {
  good: PropTypes.number.isRequired,
  neutral: PropTypes.number.isRequired,
  bad: PropTypes.number.isRequired,
  total: PropTypes.number.isRequired,
  positivePercentage: PropTypes.number.isRequired,
}