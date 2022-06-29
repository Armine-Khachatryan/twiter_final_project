import React, {useState} from "react";
import classes from './Input.module.css';


function Input (props){

    return (
        <div
            // className={`${classes.input} ${
            //     props.isValid === false ? classes.invalid : ''
            // }`}
            className={classes.control}
        >
            {props.label && <label htmlFor={props.input.id}>{props.label}</label>}
            <input
                // ref={inputRef}
                {...props.input}
            />
            {props.error && <div className="text-danger">
                {props.error}
            </div>}
        </div>
    );
};


export default Input;