import React from "react";
import Chairyoga from "./images/Chair yoga.jpg";
import Streching from "./images/Streching.jpg";

const ExerciseAdvisor = () => {
  const predefinedExercises = [
    {
      title: "Chair yoga",
      imageUrl: Chairyoga,
      instructions:
        "Chair yoga is a low-impact form of exercise that improves muscle strength, mobility, balance and flexibility, all of which are crucial health aspects for seniors. Chair yoga is an accessible form of yoga that provides less stress on muscles, joints, and bones than more conventional forms of yoga. As an added bonus, chair yoga has been shown to improve mental health in older adults. Regular chair yoga participants have better quality sleep, lower instances of depression, and report a general sense of well-being.",
      ageGroup: "adult",
    },
    {
      title: "Resistance band workouts",
      imageUrl: Streching,
      instructions:
        "Resistance bands are stretchy strips of rubber that add resistance to workouts with reduced stress on your body. Resistance band workouts are user-friendly and accessible for beginners.",
      ageGroup: "senior",
    },
  ];

  return (
    <div className="exercise-advisor">
      <h1>Exercise Advisor</h1>

      <div className="suggested-exercises">
        <h2>Suggested Exercises</h2>
        {predefinedExercises.map((exercise, index) => (
          <div key={index} className="exercise-card">
            <h3>{exercise.title}</h3>
            <p>{exercise.instructions}</p>
            <img src={exercise.imageUrl} alt={`Exercise ${exercise.title}`} />
          </div>
        ))}
      </div>
    </div>
  );
};

export default ExerciseAdvisor;
