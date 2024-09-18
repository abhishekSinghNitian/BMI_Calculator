// 

import React, { useState } from "react";

const BMICalculator = () => {
  // const [input, setInput] = useState("");
  const [weight, setWeight] = useState("");
  const [height, setHeight] = useState("");
  const [result, setResult] = useState("");

  const calculateBMI = () => {
    try {
      // Validate inputs
      const weightNum = parseFloat(weight);
      const heightNum = parseFloat(height);

      if (isNaN(weightNum) || isNaN(heightNum) || heightNum <= 0) {
        setResult("Please enter valid values");
        return;
      }

      // Calculate BMI: BMI = weight (kg) / height^2 (m)
      const bmi = (weightNum / Math.pow(heightNum / 100, 2)).toFixed(2);

      setResult(`Your BMI is: ${bmi}`);
      setHeight('');
      setWeight('');
    } catch (error) {
      setResult("Error in calculation");
    }
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    calculateBMI();
  };

  return (
    <div className="flex items-center justify-center min-h-fit bg-gray-100">
      <div className="bg-white p-6 rounded-lg shadow-md w-full max-w-md">
        <h1 className="text-2xl font-bold mb-4 text-center">BMI Calculator</h1>
        <form onSubmit={handleSubmit} className="space-y-2">
          <div>
            <label htmlFor="weight" className="block text-sm font-medium text-gray-700">
              Weight (kg):
            </label>
            <input
              type="text"
              id="weight"
              value={weight}
              onChange={(e) => setWeight(e.target.value)}
              className="mt-1 block w-full px-3 py-2 border border-gray-900 rounded-md shadow-sm focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
              placeholder="Enter your weight in kg"
            />
          </div>

          <div>
            <label htmlFor="height" className="block text-sm font-medium text-gray-700">
              Height (cm):
            </label>
            <input
              type="text"
              id="height"
              value={height}
              onChange={(e) => setHeight(e.target.value)}
              className="mt-1 block w-full px-3 py-2 border border-gray-900 rounded-md shadow-sm focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
              placeholder="Enter your height in cm"
            />
          </div>

          <button
            type="submit"
            className="w-full bg-indigo-500 text-white py-2 px-4 rounded-md shadow hover:bg-indigo-600 transition-colors"
          >
            Calculate BMI
          </button>
        </form>

        {result && (
          <div className="mt-4 p-4 bg-gray-200 rounded-lg text-center">
            {result}
          </div>
        )}
      </div>
    </div>
  );
};

export default BMICalculator;
