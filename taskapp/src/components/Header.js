import PropTypes from 'prop-types'
import Button from './Button'


const header = ({title, onAdd,showAdd}) => {
  
  return (
    <header className='header'>
        <h1>{title}</h1>
         <Button 
            color={showAdd ? 'red' : 'green'} 
            onClick={onAdd} 
            text={showAdd ? 'Close'  : 'Add'}
        />
        
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