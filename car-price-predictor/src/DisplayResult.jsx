function DisplayResult({result})
{
    return(
  <p className="result-text bg-gradient-to-r from-blue-500 to-purple-500 text-transparent bg-clip-text inline-block">The price of your car will be Rs. {`${Math.round(result)}`}</p>  
    )
}

export default DisplayResult;