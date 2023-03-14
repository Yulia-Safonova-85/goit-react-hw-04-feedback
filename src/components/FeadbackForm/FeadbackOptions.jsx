import PropTypes from 'prop-types';
import "./Feadback.module.css";

export const FeadbackOptions = ({ options,updateCount}) => {
    
    return ( 
        <div>
            {options.map(option => (
                <button key={option}
                    type="button"
                    name={option}
                    onClick={updateCount}
                >
                 {option}
                </button>             
            ))}
        </div>
    )

}

FeadbackOptions.propTypes = {
    options: PropTypes.array,
    updateCount: PropTypes.func.isRequired,
}