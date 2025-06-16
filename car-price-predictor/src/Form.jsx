import React, { useState } from 'react';
function Form(){
    const [city,setCity]=useState("");
    const [crimeType,setCrimeType]=useState(null);
    const [year,setYear]=useState(2025);

    const handleCity=(e)=>{
        setCity(e.target.value);
    }

    const handleCrimeType=(e)=>{
        setCrimeType(e.target.value);
    }

    const handleYear=(e)=>{
        setYear(e.target.value);
    }

    const handleSubmit=(e)=>{
        e.preventDefault();
        alert("Form submitted");
    }

}

export default Form;