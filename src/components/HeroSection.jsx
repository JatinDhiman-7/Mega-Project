function HeroSection() {
  return (
    <section
      className="hero-section text-center text-white"
      style={{
        backgroundImage:
          "linear-gradient(rgba(0,0,0,0.7), rgba(0,0,0,0.7)), url('https://images.unsplash.com/photo-1504674900247-0877df9cc836?auto=format&fit=crop&w=1920&q=80')",
        backgroundSize: "cover",
        backgroundPosition: "center",
        padding: "100px 0",
        marginBottom: "40px",
      }}
    >
      <div className="container">
        <h1 className="display-4">Delicious Food Delivered</h1>
        <p className="lead">
          Order your favorite meals from the best restaurants in town
        </p>
      </div>
    </section>
  );
}

export default HeroSection;
