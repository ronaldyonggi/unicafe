const StatisticLine = ({text, value}) => {
  return (
    <>
      <tr>
        <td>{text} {value}</td>
      </tr>
    </>
  )
}

const Statistics = ({good, bad, neutral}) => {
  const total = good + bad + neutral

  if (total < 1) return <div>No feedback given</div>
  return (
    <div>
      <table>
        <StatisticLine text="good" value={good}/>
        <StatisticLine text="neutral" value={neutral}/>
        <StatisticLine text="bad" value={bad}/>
        <StatisticLine text="all" value={good + bad + neutral}/>
        <StatisticLine text="average" value={(good + (bad * -1)) / (good + bad + neutral)}/>
        <StatisticLine text="positive" value={good * 100 / (good + bad + neutral)}/>
      </table>
    </div>
  )
}

export default Statistics