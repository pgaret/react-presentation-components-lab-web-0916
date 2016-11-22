const React = require('react')

const DumberComponent = (props) => {

  const doThing = (event) => {
    props.handleClick()
  }

  return <div onClick={doThing}>I am just happy</div>
}

module.exports = DumberComponent
