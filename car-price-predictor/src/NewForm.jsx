import React from "react";
import "./index.css";

function NewForm() {
  return (
    <form className="form">
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
          required
        />
      </div>

      <div className="form-el">
        <label
          htmlFor="engine_volume"
          className="block mb-2 text-sm font-large text-gray-900 dark:text-blue-400"
        >
          <div className="form-text">Engine Volume : </div>
        </label>
        <input
          type="text"
          id="engine_volume"
          className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
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
          required
        />
      </div>

      <div className="form-el">
        <label
          htmlFor="air_bags"
          className="block mb-2 text-sm font-large text-gray-900 dark:text-blue-400"
        >
          <div className="form-text">Air Bags: </div>
        </label>
        <input
          type="text"
          id="air_bags"
          className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
          required
        />
      </div>

      <div className="dropdown-row">
        <label
          htmlFor="gearbox"
          className="dropdown-label text-sm font-large text-gray-900 dark:text-blue-400"
        >
          <div className="form-text">Gear Box Type : </div>
        </label>
        <select className="dropdown-select block appearance-none w-full bg-gray-700 border border-gray-400 hover:border-gray-500 px-4 py-2 pr-8 rounded shadow leading-tight focus:outline-none focus:shadow-outline text-white">
          <option> </option>
          <option>Automatic</option>
          <option>Tiptronic</option>
          <option>Variator</option>
          <option>Manual</option>
        </select>
      </div>

      <div className="dropdown-row">
        <label
          htmlFor="category"
          className="dropdown-label text-sm font-large text-gray-900 dark:text-blue-400"
        >
          <div className="form-text">Category : </div>
        </label>
        <select className="dropdown-select block appearance-none w-full bg-gray-700 border border-gray-400 hover:border-gray-500 px-4 py-2 pr-8 rounded shadow leading-tight focus:outline-none focus:shadow-outline text-white">
          <option> </option>
          <option>Hatchback</option>
          <option>Minivan</option>
          <option>Coupe</option>
          <option>Sedan</option>
          <option>Jeep</option>
        </select>
      </div>

      <div className="dropdown-row">
        <label
          htmlFor="fuel_type"
          className="dropdown-label text-sm font-large text-gray-900 dark:text-blue-400"
        >
          <div className="form-text">Fuel Type : </div>
        </label>
        <select className="dropdown-select block appearance-none w-full bg-gray-700 border border-gray-400 hover:border-gray-500 px-4 py-2 pr-8 rounded shadow leading-tight focus:outline-none focus:shadow-outline text-white">
          <option> </option>
          <option>Petrol</option>
          <option>Diesel</option>
          <option>Hybrid</option>
          <option>LPG</option>
          <option>CNG</option>
        </select>
      </div>

      <div className="dropdown-row">
        <label
          htmlFor="leather"
          className="dropdown-label text-sm font-large text-gray-900 dark:text-blue-400"
        >
          <div className="form-text">Leather Interior : </div>
        </label>
        <select className="dropdown-select block appearance-none w-full bg-gray-700 border border-gray-400 hover:border-gray-500 px-4 py-2 pr-8 rounded shadow leading-tight focus:outline-none focus:shadow-outline text-white">
          <option> </option>
          <option>Yes</option>
          <option>No</option>
        </select>
      </div>

      <div className="dropdown-row">
        <label
          htmlFor="drive_wheels"
          className="dropdown-label text-sm font-large text-gray-900 dark:text-blue-400"
        >
          <div className="form-text">Drive Wheels: </div>
        </label>
        <select className="dropdown-select block appearance-none w-full bg-gray-700 border border-gray-400 hover:border-gray-500 px-4 py-2 pr-8 rounded shadow leading-tight focus:outline-none focus:shadow-outline text-white">
          <option> </option>
          <option>Front</option>
          <option>Rear</option>
          <option>4X4</option>
        </select>
      </div>

      <div className="dropdown-row">
        <label
          htmlFor="wheel"
          className="dropdown-label text-sm font-large text-gray-900 dark:text-blue-400"
        >
          <div className="form-text">Wheel:</div>
        </label>
        <select className="dropdown-select block appearance-none w-full bg-gray-700 border border-gray-400 hover:border-gray-500 px-4 py-2 pr-8 rounded shadow leading-tight focus:outline-none focus:shadow-outline text-white">
          <option> </option>
          <option>Left Wheel</option>
          <option>Right Hand Drive</option>
        </select>
      </div>

      <button
        type="submit"
        className="submit-button bg-gray-900 hover:bg-blue-900 text-white font-bold py-2 px-4 border border-gray-700 rounded"
      >
        Submit
      </button>
    </form>
  );
}

export default NewForm;
