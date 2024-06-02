// src/pages/SpecialitiesPage.js
import React from "react";
import TopSpecialitiesCard from "../components/TopSpecialitiesCard";

// sample data in the component 

const specialities = [
  {
    name: "Cardiology",
    icon: "❤️",
    desc: "For heart and blood pressure problems",
    symptoms: "Chest pain, Heart Failure, Cholesterol",
  },
  {
    name: "Dermatology",
    icon: "🌿",
    desc: "Specialists for skin and hair treatments",
    symptoms: "Rashes, Pimples, Acne, Hairfall, Dandruff",
  },
  {
    name: "ENT",
    icon: "👂",
    desc: "ENT specialists for Ear, Nose and Throat",
    symptoms: "Earache, Bad breath, Swollen neck, Vertigo",
  },
  {
    name: "General Physician/Internal Medicine",
    icon: "🩺",
    desc: "Managing acute medical conditions",
    symptoms: "Typhoid, Abdominal Pain, Migraine, Infections",
  },
  {
    name: "Neurology",
    icon: "🧠",
    desc: "Managing issues of the nervous system, brain",
    symptoms: "Stroke, Dementia, Epilepsy, Movement issues",
  },
  {
    name: "Obstetrics & Gynaecology",
    icon: "🤰",
    desc: "For women health issues and surgeries",
    symptoms: "Irregular periods, Pregnancy, PCOD/PCOS",
  },
  {
    name: "Orthopaedics",
    icon: "🦴",
    desc: "Managing issues of bones, joints, knees",
    symptoms: "Knee Pain, Shoulder Pain, Bone deformity",
  },
  {
    name: "Paediatrics",
    icon: "👶",
    desc: "Specialists to care and treat children",
    symptoms: "Constipation, Puberty, Nutrition, Autism",
  },
];
const SpecialitiesPage = () => {
  return (
    <div className="w-full min-h-screen my-20 text-center">
      <h1 className="text-4xl font-bold mb-10 text-dark_theme">
        Top Specialities
      </h1>
      <div className="flex flex-wrap justify-center gap-8">
        {specialities.map((speciality, index) => (
          <TopSpecialitiesCard key={index} speciality={speciality} />
        ))}
      </div>
    </div>
  );
};

export default SpecialitiesPage;
