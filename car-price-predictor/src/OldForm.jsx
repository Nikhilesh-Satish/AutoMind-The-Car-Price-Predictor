import "./index.css";
import { useState } from "react";
import defaultData from "./DefaultTemplate";
import DisplayResult from "./DisplayResult";

function OldForm() {
  const payload = { ...defaultData };

  const [formData, setFormData] = useState({
    year: '',
    km_driven: '',
    mileage: '',
    engine: '',
    max_power: '',
    seats: '',
    brand: '',
    fuel: '',
    transmission: '',
    seller:''
  });

  const [result, setResult] = useState(null);

 
const brandMap = {
    "BMW": "brand_BMW",
    "Bentley": "brand_Bentley",
    "Datsun": "brand_Datsun",
    "Force": "brand_Force",
    "Ford": "brand_Ford",
    "Honda": "brand_Honda",
    "Hyundai": "brand_Hyundai",
    "ISUZU": "brand_ISUZU",
    "Jaguar": "brand_Jaguar",
    "Jeep": "brand_Jeep",
    "Kia": "brand_Kia",
    "Rover": "brand_Land_Rover",
    "Lexus": "brand_Lexus",
    "MG": "brand_MG",
    "Mahindra": "brand_Mahindra",
    "Maruti": "brand_Maruti",
    "Maserati": "brand_Maserati",
    "Mercedes Benz": "brand_Mercedes_Benz",
    "Mercedes-AMG": "brand_Mercedes_AMG",
    "Mini": "brand_Mini",
    "Nissan": "brand_Nissan",
    "Porsche": "brand_Porsche",
    "Renault": "brand_Renault",
    "Skoda": "brand_Skoda",
    "Tata": "brand_Tata",
    "Toyota": "brand_Toyota",
    "Volkswagen": "brand_Volkswagen",
    "Volvo": "brand_Volvo"
  };

  const fuelMap = {
    Petrol: "fuel_type_Petrol",
    Diesel: "fuel_type_Diesel",
    Electric: "fuel_type_Electric",
    LPG: "fuel_type_LPG",
    CNG: "fuel_type_CNG"
  };

  const transMap = {
    Manual: "transmission_type_Manual",
    Automatic: "transmission_type_Automatic"
  };
  

 

  const onSubmit = async (e) => {
    e.preventDefault();

    payload.vehicle_age = parseInt(formData.year);
    payload.km_driven = parseInt(formData.km_driven);
    payload.mileage = parseFloat(formData.mileage);
    payload.engine = parseInt(formData.engine);
    payload.max_power = parseFloat(formData.max_power);
    payload.seats = parseInt(formData.seats);
    payload.seller_type = formData.seller;
    payload.brand = formData.brand;
    payload.fuel_type = formData.fuel;
    payload.transmission_type=formData.transmission;


    console.log(payload);

    try {
      const res = await fetch("https://car-price-api-v3tk.onrender.com/predict", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(payload),
      });

      const data = await res.json();
      console.log(data);
      setResult(data.predicted_price);
    } catch (err) {
      console.error("Error:", err);
    }
  };

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
            onChange={(e) => setFormData({ ...formData, km_driven: e.target.value })}
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
            {Object.keys(brandMap).map((brand) => (
              <option key={brand}>{brand}</option>
            ))}
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
            className="dropdown-select block appearance-none w-full bg-gray-700 border border-gray-400 hover:border-gray-500 px-4 py-2 pr-8 rounded shadow leading-tight focus:outline-none focus:shadow-outline text-white"
          >
            <option> </option>
            {Object.keys(fuelMap).map((fuel) => (
              <option key={fuel}>{fuel}</option>
            ))}
          </select>
        </div>
          


            <div className="dropdown-row">
          <label
            htmlFor="seller"
            className="dropdown-label text-sm font-large text-gray-900 dark:text-blue-400"
          >
            <div className="form-text">Seller :</div>
          </label>
          <select
            value={formData.seller}
            onChange={(e) => setFormData({ ...formData, seller: e.target.value })}
            className="dropdown-select block appearance-none w-full bg-gray-700 border border-gray-400 hover:border-gray-500 px-4 py-2 pr-8 rounded shadow leading-tight focus:outline-none focus:shadow-outline text-white"
          >
            <option> </option>
            <option>Individual</option>
            <option>Dealer</option>
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
            className="dropdown-select block appearance-none w-full bg-gray-700 border border-gray-400 hover:border-gray-500 px-4 py-2 pr-8 rounded shadow leading-tight focus:outline-none focus:shadow-outline text-white"
          >
            <option> </option>
            {Object.keys(transMap).map((type) => (
              <option key={type}>{type}</option>
            ))}
          </select>
        </div>

            
        <button
          type="submit"
          className="submit-button bg-gray-900 hover:bg-blue-900 text-white font-bold py-2 px-4 border border-gray-700 rounded"
        >
          Submit
        </button>
      </form>

      {result !== undefined && result !== null && <DisplayResult result={result} />}
    </div>
  );
}

export default OldForm;
