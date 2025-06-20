import React, { useState } from "react";
import OldForm from "./OldForm";
import NewForm from "./NewForm";
function Form() { 
  const [isNew, setIsNew] = useState(false);

  const handleClick = () => {
    setIsNew(!isNew);
  };

  return (
    <div className="form-container">
      <div class="inline-flex form-buttons">
        <button
          class={
            isNew
              ? " bg-blue-400 text-orange-900 font-bold py-2 px-4 rounded-l hover:bg-blue-100 hover:text-orange-900 "
              : "bg-blue-900 text-yellow-500 font-bold py-2 px-4 rounded-l  "
          }
          onClick={handleClick}
        >
          Sell Old Car
        </button>
        <button
          class={
            isNew
              ? "bg-blue-900 text-yellow-500  font-bold py-2 px-4 rounded-l"
              : "bg-blue-400 text-orange-900 font-bold py-2 px-4 rounded-l hover:bg-blue-100 hover:text-orange-900"
          }
          onClick={handleClick}
        >
          Buy New Car
        </button>
      </div>
      {isNew ? <NewForm /> : <OldForm />}
    </div>
  );
}





export default Form;
