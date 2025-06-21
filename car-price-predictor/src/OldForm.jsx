import "./index.css";
import { useState } from "react";
import defaultData from "./DefaultTemplate";
import DisplayResult from "./DisplayResult";
function OldForm() {
  const payload={...defaultData}
   const [formData, setFormData] = useState({
    year: '',
    km_driven: '',
    mileage: '',
    engine: '',
    max_power: '',
    seats: '',
    brand: '',
    fuel: '',
    transmission: ''
  });
  const [result, setResult] = useState(null);
   const onSubmit=async (e)=>{
    e.preventDefault();
    payload.vehicle_age = parseInt(formData.year);
    payload.km_driven = parseInt(formData.km_driven);
    payload.mileage = parseFloat(formData.mileage);
    payload.engine = parseInt(formData.engine);
    payload.max_power = parseFloat(formData.max_power);
    payload.seats = parseInt(formData.seats);
    for (let key in payload) {
  if (
    key.startsWith("brand_") ||
    key.startsWith("fuel_type_") ||
    key.startsWith("transmission_type_")
  ) {
    payload[key] = 0;
  }
}

  // Set one-hot encoded fields
  payload[`brand_${formData.brand}`] = 1;
  payload[`fuel_type_${formData.fuel}`] = 1;
  payload[`transmission_type_${formData.transmission}`] = 1;
  console.log(payload);
   const res = await fetch("https://car-price-api-v3tk.onrender.com/predict", {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify(payload),
  });
const data = await res.json();
console.log(data);
setResult(data.predicted_price);

  
  }
  return (
    <div>
    <form className="form" onSubmit={onSubmit}>
      <div className="form-el">
        <label
          htmlFor="vehicle_age"
          className="block mb-2 text-sm font-large text-gray-900 dark:text-blue-400"
        >
          <div className="form-text">Vehicle Age: </div>
        </label>
        <input
          type="text"
          id="vehicle_age"
          className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
          value={formData.year}
          onChange={(e) => setFormData({ ...formData, year: e.target.value })}
          required
        />
      </div>

      <div className="form-el">
        <label
          htmlFor="dist_driven"
          className="block mb-2 text-sm font-large text-gray-900 dark:text-blue-400"
        >
          <div className="form-text">Distance driven: </div>
        </label>
        <input
          type="text"
          id="dist_driven"
          className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
          value={formData.km_driven}
          
          onChange={(e) => setFormData({ ...formData,km_driven: e.target.value })}
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
          htmlFor="engine"
          className="block mb-2 text-sm font-large text-gray-900 dark:text-blue-400"
        >
          <div className="form-text">Engine: </div>
        </label>
        <input
          type="text"
          id="engine"
          className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
          value={formData.engine}
          
          onChange={(e) => setFormData({ ...formData, engine: e.target.value })}
          required
        />
      </div>

      <div className="form-el">
        <label
          htmlFor="max-power"
          className="block mb-2 text-sm font-large text-gray-900 dark:text-blue-400"
        >
          <div className="form-text">Maximum Power: </div>
        </label>
        <input
          type="text"
          id="max-power"
          className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
          value={formData.max_power}
          
          onChange={(e) => setFormData({ ...formData, max_power: e.target.value })}
          required
        />
      </div>

      <div className="form-el">
        <label
          htmlFor="seats"
          className="block mb-2 text-sm font-large text-gray-900 dark:text-blue-400"
        >
          <div className="form-text">Seats: </div>
        </label>
        <input
          type="text"
          id="seats"
          className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
          value={formData.seats}
          
          onChange={(e) => setFormData({ ...formData, seats: e.target.value })}
          required
        />
      </div>

      <div className="dropdown-row">
        <label
          htmlFor="brand"
          className="dropdown-label text-sm font-large text-gray-900 dark:text-blue-400"
        >
          <div className="form-text">Brand of car:</div>
        </label>
        <select 
        className="dropdown-select block appearance-none w-full bg-gray-700 border border-gray-400 hover:border-gray-500 px-4 py-2 pr-8 rounded shadow leading-tight focus:outline-none focus:shadow-outline text-white"
         value={formData.brand}
         onChange={(e) => setFormData({ ...formData, brand: e.target.value })}
         >
          <option> </option>
          <option>BMW</option>
          <option>Datsun</option>
          <option>Force</option>
          <option>Ford</option>
          <option>Honda</option>
          <option>Hyundai</option>
          <option>ISUZU</option>
          <option>Jaguar</option>
          <option>Jeep</option>
          <option>Kia</option>
          <option>Rover</option>
          <option>Lexus</option>
          <option>MG</option>
          <option>Mahindra</option>
          <option>Maruti</option>
          <option>Mercedes Benz</option>
          <option>Mini</option>
          <option>Nissan</option>
          <option>Porsche</option>
          <option>Renault</option>
          <option>Skoda</option>
          <option>Tata</option>
          <option>Toyota</option>
          <option>Volkswagen</option>
          <option>Volvo</option>
        </select>
      </div>

      <div className="dropdown-row">
        <label
          htmlFor="fuel_type"
          className="dropdown-label text-sm font-large text-gray-900 dark:text-blue-400"
        >
          <div className="form-text">Fuel Type:</div>
        </label>
        <select
        value={formData.fuel}
        onChange={(e) => setFormData({ ...formData, fuel: e.target.value })} 
        className="dropdown-select block appearance-none w-full bg-gray-700 border border-gray-400 hover:border-gray-500 px-4 py-2 pr-8 rounded shadow leading-tight focus:outline-none focus:shadow-outline text-white">
          <option> </option>
          <option>Petrol</option>
          <option>Diesel</option>
          <option>LPG</option>
          <option>Electric</option>
        </select>
      </div>

      <div className="dropdown-row">
        <label
          htmlFor="transmission"
          className="dropdown-label text-sm font-large text-gray-900 dark:text-blue-400"
        >
          <div className="form-text">Transmission Type:</div>
        </label>
        <select 
        value={formData.transmission}
  onChange={(e) => setFormData({ ...formData, transmission: e.target.value })}
        className="dropdown-select block appearance-none w-full bg-gray-700 border border-gray-400 hover:border-gray-500 px-4 py-2 pr-8 rounded shadow leading-tight focus:outline-none focus:shadow-outline text-white">
          <option> </option>
          <option>Automatic</option>
          <option>Manual</option>
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

export default OldForm;
