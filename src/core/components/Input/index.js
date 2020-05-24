import React, {  useState } from 'react';

const Input = React.forwardRef((props, ref) => {
    const [value, setValue] = useState('');

    return (
        <input
            name={props.name}
            ref={ref}
            type={props.type}
            maxlenght={props.maxlenght}
            placreholder={props.placreholder}
            onChange={(e) => setValue(e.target.value)}
            value={value}
        />
    )
});

export default Input    