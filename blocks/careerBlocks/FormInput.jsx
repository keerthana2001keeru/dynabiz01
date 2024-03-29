import React, { useState } from 'react'

export default function FormInput(props) {
    const { label, errorMessage, onChange, id, ...inputProps } = props;
    const [focused, setFocused] = useState(false);

    const handleFocus = (e) => {
        setFocused(true);
    };
    return (
        <div>
            {/* <label> {label} </label> */}
            <input className='py-2 careerDetailFormInput' {...inputProps} onChange={onChange} onBlur={handleFocus} focused={focused.toString()} />
            {<span className='errorMsgCv'>
                {errorMessage}
            </span>}
        </div>
    )
}
