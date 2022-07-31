import PropTypes from 'prop-types'
import Button from './Button'
const header = ({title}) => {
    const onClick = () => {
        console.log('Click')
    }
  return (
    <header className='header'>
        <h1>{title}</h1>
        <Button color='green' onClick={onClick} text='Add'/>
        
    </header>
  )
}

header.defaultProps = {
    title: 'Task Tracker',
}

Headers.PropTypes = {
    title: PropTypes.string.isRequired,
}
export default header