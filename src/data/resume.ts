export const profile = {
  name: "Mishra Aman Arun",
  role: "Backend Engineer",
  location: "Karnataka, India",
  phone: "+91 7400253222",
  email: "aman.work.mishra@gmail.com",
  linkedin: "https://linkedin.com/in/aman-mishra13",
  github: "https://github.com/aman-mishra01",
  summary:
    "MCA Candidate at PES University, Bengaluru, with a focus on backend development, Python, Django and FastAPI. Experienced in building dynamic web applications, integrating ML APIs into FastAPI backends, developing custom machine-learning models, and working with MongoDB and Docker. Interested in AI, Machine Learning and Data Science.",
};

export const skills: { group: string; items: string[] }[] = [
  { group: "Backend", items: ["Python", "Django", "FastAPI", "MongoDB", "PostgreSQL", "SQL"] },
  { group: "Machine Learning", items: ["Scikit-learn", "Matplotlib", "NumPy", "Pandas"] },
  { group: "Big Data", items: ["MapReduce", "PyFlink", "PySpark"] },
  { group: "Front-End", items: ["HTML", "Bootstrap", "CSS", "JavaScript"] },
  { group: "Programming", items: ["Python", "Java"] },
];

export const projects: { title: string; points: string[]; tags: string[] }[] = [
  {
    title: "Portfolio Projects",
    points: [
      "Full-stack FastAPI + MongoDB backend for image storage + ML model integration (classification/regression).",
      "Dynamic website combining all skills: Python, FastAPI, MongoDB, Scikit-learn.",
    ],
    tags: ["FastAPI", "MongoDB", "Scikit-learn"],
  },
  {
    title: "Weather Forecasting (Python)",
    points: [
      "Built a Python and PyQt5 weather app using the OpenWeatherMap API to fetch live weather data, providing practical experience with API integration and GUI development.",
    ],
    tags: ["Python", "PyQt5", "REST API"],
  },
  {
    title: "Water Quality Classification Using Machine Learning",
    points: [
      "Classifies whether water is safe or unsafe for drinking and identifies potential waterborne diseases that may occur due to contamination.",
    ],
    tags: ["Machine Learning", "Classification"],
  },
  {
    title: "Voice Translator Headphone using NLP",
    points: [
      "AI/ML-powered headphone that converts speech into text, translates it into the desired language using NLP, and provides real-time translated voice output.",
    ],
    tags: ["NLP", "Speech", "AI/ML"],
  },
];

export const education: { degree: string; school: string; date: string; place: string }[] = [
  { degree: "Master of Computer Application", school: "PES University", date: "07/2027", place: "Karnataka" },
  { degree: "Bachelor of Computer Application", school: "K.R. Mangalam University", date: "05/2025", place: "Haryana / New Delhi" },
  { degree: "12th Grade", school: "Red Eagle Public School", date: "04/2021", place: "Uttar Pradesh" },
  { degree: "10th Grade", school: "St. Lawrence High School", date: "04/2019", place: "Navi Mumbai" },
];

export const certifications: { title: string; issuer?: string }[] = [
  { title: "Foundation to AI, Data Science & Data Analytics" },
  { title: "Bootcamp on Drone Technology", issuer: "IIT Mandi" },
  { title: "Big Data Engineer", issuer: "IBM" },
];
