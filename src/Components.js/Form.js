import React from 'react';

const Form = props => {
    const {inputs, setInputs} = props;

    const onChange = e => {
        setInputs({
            ...inputs,
            [e.target.name]: e.target.value
    });
};
    return(
        <form className="form-container">
            <div className="form-group">
                <label htmlFor="firstName" className="label-box">First Name</label>
                <input onChange = {onChange} type="text" name="firstName" className="input-chart"/>
            </div>
            <div className="form-group">
                <label htmlFor="lastName" className="label-box">Last Name</label>
                <input onChange={onChange} type="text" name="lastName" className="input-chart"/>
            </div>
            <div className="form-group">
                <label htmlFor="email" className="label-box">Email</label>
                <input onChange={onChange} type="text" name="email" className="input-chart"/>
            </div>
            <div className="form-group">
                <label htmlFor="password" className="label-box">Password</label>
                <input onChange={onChange} type="password" name="password" className="input-chart"/>
            </div>
            <div className="form-group">
                <label htmlFor="confirmPassword" className="label-box">Confirm Password</label>
                <input onChange={onChange} type="password" name="confirmPassword" className="input-chart"/>
            </div>
        </form>
    );
};

export default Form