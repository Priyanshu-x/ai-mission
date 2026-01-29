// import React, { useState } from "react";
// import { toast } from "react-toastify";

// const BMICalculator = () => {
//   const [height, setHeight] = useState("");
//   const [weight, setWeight] = useState("");
//   const [gender, setGender] = useState("");
//   const [bmi, setBmi] = useState("");

//   const calculateBMI = (e) => {
//     e.preventDefault();

//     if (!height || !weight || !gender) {
//       toast.error("Please enter valid height, weight, and gender.");
//       return;
//     }

//     const heightInMeters = height / 100;
//     const bmiValue = (weight / (heightInMeters * heightInMeters)).toFixed(2);
//     setBmi(bmiValue);

//     if (bmiValue < 18.5) {
//       toast.warning(
//         "You are underweight. Consider seeking advice from a healthcare provider."
//       );
//     } else if (bmiValue >= 18.5 && bmiValue < 24.9) {
//       toast.success(
//         "You have normal weight. Keep maintaining a healthy lifestyle."
//       );
//     } else if (bmiValue >= 25 && bmiValue < 29.9) {
//       toast.warning(
//         "You are overweight. Consider seeking advice from a healthcare provider."
//       );
//     } else {
//       toast.error(
//         "You are in the obese range. It is recommended to seek advice from a healthcare specialist."
//       );
//     }
//   };

//   return (
//     <section className="flex flex-col items-center gap-8 py-12 bg-gradient-to-r from-blue-900 via-gray-700 to-gray-900 text-white">
//       <h1 className="text-3xl font-bold uppercase tracking-widest text-center">
//         BMI CALCULATOR
//       </h1>
//       <div className="flex flex-col md:flex-row gap-12 max-w-5xl w-full items-center">
//         <div className="w-full md:w-1/2">
//           <form
//             onSubmit={calculateBMI}
//             className="flex flex-col gap-6 bg-gray-800 p-8 rounded-lg shadow-lg"
//           >
//             <div className="flex flex-col gap-1">
//               <label className="text-lg font-medium">Height (cm)</label>
//               <input
//                 type="number"
//                 value={height}
//                 onChange={(e) => setHeight(e.target.value)}
//                 className="p-2 text-lg bg-transparent border-b border-white focus:outline-none focus:border-blue-400"
//                 required
//               />
//             </div>
//             <div className="flex flex-col gap-1">
//               <label className="text-lg font-medium">Weight (kg)</label>
//               <input
//                 type="number"
//                 value={weight}
//                 onChange={(e) => setWeight(e.target.value)}
//                 className="p-2 text-lg bg-transparent border-b border-white focus:outline-none focus:border-blue-400"
//                 required
//               />
//             </div>
//             <div className="flex flex-col gap-1">
//               <label className="text-lg font-medium">Gender</label>
//               <select
//                 value={gender}
//                 onChange={(e) => setGender(e.target.value)}
//                 className="p-2 text-lg bg-transparent border-b border-white focus:outline-none focus:border-blue-400"
//               >
//                 <option value="" className="text-black">
//                   Select Gender
//                 </option>
//                 <option value="Male" className="text-black">
//                   Male
//                 </option>
//                 <option value="Female" className="text-black">
//                   Female
//                 </option>
//               </select>
//             </div>
//             <button
//               type="submit"
//               className="bg-white text-blue-600 text-lg font-semibold py-3 px-6 rounded-lg hover:bg-blue-500 hover:text-white transition"
//             >
//               Calculate BMI
//             </button>
//           </form>
//         </div>
//         <div className="w-full md:w-1/2">
//           <img src="/bmi.jpg" alt="BMI Chart" className="w-full rounded-lg shadow-lg" />
//         </div>
//       </div>
//     </section>
//   );
// };

// export default BMICalculator;


// Step1:Prompt Create a React functional component called BMICalculator. Use useState to manage three input fields: height (cm), weight (kg), and gender. Initialize all states as empty strings. Also, add a state variable bmi to store the calculated BMI value.
// Render a simple form with input fields for height and weight and a dropdown for selecting gender.

import React, { useState } from "react";
import { toast } from "react-toastify";
import 'react-toastify/dist/ReactToastify.css';

const BMICalculator = () => {
  const [height, setHeight] = useState("");
  const [weight, setWeight] = useState("");
  const [gender, setGender] = useState("");
  const [bmi, setBmi] = useState("");

  const calculateBMI = (e) => {
    e.preventDefault();

    if (!height || !weight || !gender) {
      toast.error("Please enter valid height, weight, and gender.");
      return;
    }

    const heightInMeters = height / 100;
    const bmiValue = (weight / (heightInMeters * heightInMeters)).toFixed(2);
    setBmi(bmiValue);

    if (bmiValue < 18.5) {
      toast.warning("You are underweight. Consider seeking advice from a healthcare provider.");
    } else if (bmiValue >= 18.5 && bmiValue < 24.9) {
      toast.success("You have normal weight. Keep maintaining a healthy lifestyle.");
    } else if (bmiValue >= 25 && bmiValue < 29.9) {
      toast.warning("You are overweight. Consider seeking advice from a healthcare provider.");
    } else {
      toast.error("You are in the obese range. It is recommended to seek advice from a healthcare specialist.");
    }
  };

  return (
    <section className="flex flex-col items-center gap-8 py-12 bg-gradient-to-r from-blue-900 via-gray-700 to-gray-900 text-white">
      <h1 className="text-3xl font-bold uppercase tracking-widest text-center">
        BMI CALCULATOR
      </h1>
      <div className="flex flex-col md:flex-row gap-12 max-w-5xl w-full items-center">
        <div className="w-full md:w-1/2">
          <form onSubmit={calculateBMI} className="flex flex-col gap-6 bg-gray-800 p-8 rounded-lg shadow-lg">
            <div className="flex flex-col gap-1">
              <label className="text-lg font-medium">Height (cm)</label>
              <input
                type="number"
                value={height}
                onChange={(e) => setHeight(e.target.value)}
                className="p-2 text-lg bg-transparent border-b border-white focus:outline-none focus:border-blue-400"
                required
              />
            </div>
            <div className="flex flex-col gap-1">
              <label className="text-lg font-medium">Weight (kg)</label>
              <input
                type="number"
                value={weight}
                onChange={(e) => setWeight(e.target.value)}
                className="p-2 text-lg bg-transparent border-b border-white focus:outline-none focus:border-blue-400"
                required
              />
            </div>
            <div className="flex flex-col gap-1">
              <label className="text-lg font-medium">Gender</label>
              <select
                value={gender}
                onChange={(e) => setGender(e.target.value)}
                className="p-2 text-lg bg-transparent border-b border-white focus:outline-none focus:border-blue-400"
                required
              >
                <option value="" className="text-black">
                  Select Gender
                </option>
                <option value="Male" className="text-black">
                  Male
                </option>
                <option value="Female" className="text-black">
                  Female
                </option>
              </select>
            </div>
            <button
              type="submit"
              className="bg-white text-blue-600 text-lg font-semibold py-3 px-6 rounded-lg hover:bg-blue-500 hover:text-white transition"
            >
              Calculate BMI
            </button>
          </form>
        </div>
        <div className="w-full md:w-1/2">
          <img src="/bmi.jpg" alt="BMI Chart" className="w-full rounded-lg shadow-lg" />
        </div>
      </div>
      {bmi && (
        <div className="text-center mt-8">
          <h2 className="text-2xl font-bold">Your BMI: {bmi}</h2>
        </div>
      )}
    </section>
  );
};

export default BMICalculator;