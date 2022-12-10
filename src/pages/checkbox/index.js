import React, {useState} from "react";
import './main.css'

const Checkbox = ({col, action, isChecked}) => {

    const [checked, setChecked] = useState(isChecked);

    const check = (checked) => {
        setChecked(!checked);

        action(col);

        if (checked) {
            setCircle({backgroundColor: 'rgb(134, 174, 232)',
                transform: 'translateX(95%)',
                transition: 'all .2s cubic-bezier(.8,.4,.3,1.25), background .15s ease',
                });
        }
        else {
            setCircle({backgroundColor: '#c2bfbf',})
        }
    }
    
    const box = {
        border: '#c2bfbf solid 2px',
        padding: '2px',
        borderRadius: '30px',
        width: '100%',
        height: '100%',
        backgroundColor: '#fff'
    };

    const [circle, setCircle] = useState({
        backgroundColor: '#c2bfbf',
    });

    return(
        <button style={box} onClick={() => check(checked)}>
            <div style={circle} className={'circle'}></div>
        </button>
    )
}

export default Checkbox;