import "./index.css";
import { useState } from "react";
import defaultData from "./DefaultTemplateNew";
import DisplayResult from "./DisplayResult";
function NewForm() {
  const payload={...defaultData}
   const [formData, setFormData] = useState({
    levy: '',
    manufacturer: '',
    category: '',
    leather: '',
    engine_volume: '',
    mileage: '',
    cylinders: '',
    wheel: '',
    airbags: '',
    turbo: '',
    drive: '',
    gearbox: '',
    fuel: ''
  });
  const [result, setResult] = useState(null);
   const onSubmit = async (e) => {
  e.preventDefault();

  payload.levy = parseInt(formData.levy);
  payload.manufacturer = formData.manufacturer;
  payload.category = formData.category;

  // Convert leather to 1/0
  payload.leather = formData.leather === "yes" ? 1 : 0;

  payload.engine_volume = parseInt(formData.engine_volume);
  payload.mileage = parseInt(formData.mileage);
  payload.cylinders = parseInt(formData.cylinders);
  payload.wheel = "right";
  payload.airbags = parseInt(formData.airbags);
  payload.turbo = parseInt(formData.turbo);

  // Lowercased string fields safely
  payload.drive = typeof formData.drive === "string" ? formData.drive.toLowerCase() : "";
  payload.gearbox = typeof formData.gearbox === "string" ? formData.gearbox.toLowerCase() : "";
  payload.fuel = typeof formData.fuel === "string" ? formData.fuel.toLowerCase() : "";

  // Reset one-hot encoding fields
  for (let key in payload) {
    if (
      key.startsWith("fuel_") ||
      key.startsWith("gear_") ||
      key.startsWith("drive_")
    ) {
      payload[key] = 0;
    }
  }

  // Set one-hot encodings safely
  if (typeof formData.fuel === "string") {
    payload[`fuel_${formData.fuel.toLowerCase()}`] = 1;
  }
  if (typeof formData.gearbox === "string") {
    payload[`gear_${formData.gearbox.toLowerCase()}`] = 1;
  }
  if (typeof formData.drive === "string") {
    payload[`drive_${formData.drive.toLowerCase()}`] = 1;
  }

  console.log(payload);

  const res = await fetch("https://new-car-price-api.onrender.com/predict", {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify(payload),
  });

  const data = await res.json();
  console.log(data);

  if (data?.predicted_price) {
    setResult(data.predicted_price*100);
  } else {
    console.error("Prediction error:", data);
  }
};

  return (
    <div>
    <form className="form" onSubmit={onSubmit}>
      <div className="form-el">
        <label
          htmlFor="levy"
          className="block mb-2 text-sm font-large text-gray-900 dark:text-blue-400"
        >
          <div className="form-text">Levy: </div>
        </label>
        <input
          type="text"
          id="levy"
          className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
          value={formData.levy}
          onChange={(e) => setFormData({ ...formData, levy: e.target.value })}
          required
        />
      </div>

      <div className="form-el">
        <label
          htmlFor="manufacturer"
          className="block mb-2 text-sm font-large text-gray-900 dark:text-blue-400"
        >
          <div className="form-text">Manufacturer: </div>
        </label>
        <input
          type="text"
          id="manufacturer"
          className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
          value={formData.manufacturer}
          
          onChange={(e) => setFormData({ ...formData,manufacturer: e.target.value })}
          required
        />
      </div>

      <div className="form-el">
        <label
          htmlFor="category"
          className="block mb-2 text-sm font-large text-gray-900 dark:text-blue-400"
        >
          <div className="form-text">Category: </div>
        </label>
        <input
          type="text"
          id="category"
          className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
          value={formData.category}
          
          onChange={(e) => setFormData({ ...formData, category: e.target.value })}
          required
        />
      </div>

      <div className="dropdown-row">
        <label
          htmlFor="leather"
          className="dropdown-label text-sm font-large text-gray-900 dark:text-blue-400"
        >
          <div className="form-text">Leather Interior?:</div>
        </label>
        <select 
        className="dropdown-select block appearance-none w-full bg-gray-700 border border-gray-400 hover:border-gray-500 px-4 py-2 pr-8 rounded shadow leading-tight focus:outline-none focus:shadow-outline text-white"
         value={formData.leather}
         onChange={(e) => setFormData({ ...formData, leather: e.target.value })}
         >
          <option value=""> </option>
          <option value="yes">Yes</option>
          <option value="no">No</option>
         
        </select>
      </div>

      
      <div className="form-el">
        <label
          htmlFor="engine_volume"
          className="block mb-2 text-sm font-large text-gray-900 dark:text-blue-400"
        >
          <div className="form-text">Engine Volume: </div>
        </label>
        <input
          type="text"
          id="engine_volume"
          className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
          value={formData.engine_volume}
          
          onChange={(e) => setFormData({ ...formData, engine_volume: e.target.value })}
          required
        />
      </div>

      <div className="form-el">
        <label
          htmlFor="mileage"
          className="block mb-2 text-sm font-large text-gray-900 dark:text-blue-400"
        >
          <div className="form-text">Mileage: </div>
        </label>
        <input
          type="text"
          id="mileage"
          className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
          value={formData.mileage}
          
          onChange={(e) => setFormData({ ...formData, mileage: e.target.value })}
          required
        />
      </div>



      <div className="form-el">
        <label
          htmlFor="cylinders"
          className="block mb-2 text-sm font-large text-gray-900 dark:text-blue-400"
        >
          <div className="form-text">Cylinders: </div>
        </label>
        <input
          type="text"
          id="cylinders"
          className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
          value={formData.cylinders}
          
          onChange={(e) => setFormData({ ...formData, cylinders: e.target.value })}
          required
        />
      </div>


      <div className="form-el">
        <label
          htmlFor="airbags"
          className="block mb-2 text-sm font-large text-gray-900 dark:text-blue-400"
        >
          <div className="form-text">Airbags: </div>
        </label>
        <input
          type="text"
          id="airbags"
          className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
          value={formData.airbags}
          
          onChange={(e) => setFormData({ ...formData, airbags: e.target.value })}
          required
        />
      </div>

      

      <div className="dropdown-row">
        <label
          htmlFor="turbo"
          className="dropdown-label text-sm font-large text-gray-900 dark:text-blue-400"
        >
          <div className="form-text">Turbo:</div>
        </label>
        <select 
        value={formData.turbo}
  onChange={(e) => setFormData({ ...formData, turbo: e.target.value })}
        className="dropdown-select block appearance-none w-full bg-gray-700 border border-gray-400 hover:border-gray-500 px-4 py-2 pr-8 rounded shadow leading-tight focus:outline-none focus:shadow-outline text-white">
          <option> </option>
          <option>0</option>
          <option>1</option>
        </select>
      </div>



      <div className="dropdown-row">
        <label
          htmlFor="drive"
          className="dropdown-label text-sm font-large text-gray-900 dark:text-blue-400"
        >
          <div className="form-text">Drive:</div>
        </label>
        <select 
        value={formData.drive}
  onChange={(e) => setFormData({ ...formData,  drive: e.target.value })}
        className="dropdown-select block appearance-none w-full bg-gray-700 border border-gray-400 hover:border-gray-500 px-4 py-2 pr-8 rounded shadow leading-tight focus:outline-none focus:shadow-outline text-white">
          <option> </option>
          <option>Rear</option>
          <option>Front</option>
        </select>
      </div>



      <div className="dropdown-row">
        <label
          htmlFor="gearbox"
          className="dropdown-label text-sm font-large text-gray-900 dark:text-blue-400"
        >
          <div className="form-text">Gearbox:</div>
        </label>
        <select 
        value={formData.gearbox}
  onChange={(e) => setFormData({ ...formData, gearbox: e.target.value })}
        className="dropdown-select block appearance-none w-full bg-gray-700 border border-gray-400 hover:border-gray-500 px-4 py-2 pr-8 rounded shadow leading-tight focus:outline-none focus:shadow-outline text-white">
          <option> </option>
          <option>Automatic</option>
          <option>Manual</option>
          <option>Tiptronic</option>
          <option>Variator</option>

        </select>
      </div>


      <div className="dropdown-row">
        <label
          htmlFor="fuel"
          className="dropdown-label text-sm font-large text-gray-900 dark:text-blue-400"
        >
          <div className="form-text">Fuel:</div>
        </label>
        <select 
        value={formData.fuel}
  onChange={(e) => setFormData({ ...formData, fuel: e.target.value })}
        className="dropdown-select block appearance-none w-full bg-gray-700 border border-gray-400 hover:border-gray-500 px-4 py-2 pr-8 rounded shadow leading-tight focus:outline-none focus:shadow-outline text-white">
          <option> </option>
          <option>CNG</option>
          <option>Diesel</option>
          <option>Hybrid</option>
          <option>Hydrogen</option>
          <option>LPG</option>
          <option>Petrol</option>


        </select>
      </div>

      <button
        type="submit"
        className="submit-button bg-gray-900 hover:bg-blue-900 text-white font-bold py-2 px-4 border border-gray-700 rounded"
      >
        Submit
      </button>
    </form>
    {result !== undefined && result!==null && <DisplayResult result={result} />}

    </div>
  );
}

export default NewForm;
