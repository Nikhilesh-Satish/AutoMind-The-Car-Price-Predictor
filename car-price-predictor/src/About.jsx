import "./index.css"; // Tailwind styles
function About() {
  return (
    <section className="about-section ">
      <h1 className="bg-gradient-to-r from-red-600 to-blue-600 bg-clip-text text-transparent about-title">
        <center>About Us</center>
      </h1>
      <p class="about-text text-center bg-gradient-to-r from-red-400 to-blue-400 bg-clip-text text-transparent">
        This platform has been developed as part of an academic initiative
        focused on solving real-world problems using machine learning. Built by
        a team of undergraduate students, the system leverages Python,
        scikit-learn, and modern regression techniques to deliver precise car
        price predictions. It is designed to handle both new and used vehicle
        pricing through tailored preprocessing pipelines and feature engineering
        strategies. Core input features include mileage, accident history,
        vehicle condition, year of manufacture, and market trends, all of which
        are analyzed using trained regression models for optimal prediction
        accuracy. The web interface is developed using React and Tailwind CSS to
        ensure a responsive, clean, and user-friendly experience. The backend
        models are trained on curated datasets and evaluated using standard
        validation techniques. Emphasis has been placed on model
        interpretability, allowing users to understand the key factors
        influencing price estimates. This project highlights the integration of
        AI with practical applications in the automobile domain. It reflects our
        goal to build scalable, intelligent systems that bring real value to
        everyday decision-making in the automotive market.
      </p>
    </section>
  );
}

export default About;
