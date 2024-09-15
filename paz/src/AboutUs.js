import React from "react";

const AboutUs = () => {
  return (
    <div className="flex flex-col items-center justify-center min-h-screen bg-gray-100 p-4">
      <h1 className="text-4xl font-bold mb-4">About Us</h1>
      <div className="max-w-4xl text-center mb-8">
        <p className="text-lg mb-4">
          Welcome to Paz Modern Terrazzo! We specialize in creating beautiful and timeless terrazzo designs that bring elegance and sophistication to any space. Our team of skilled artisans and designers are dedicated to crafting unique and high-quality terrazzo products that meet the needs and preferences of our clients.
        </p>
        <p className="text-lg mb-4">
          At Paz Modern Terrazzo, we believe in the power of design to transform spaces and create lasting impressions. Our commitment to excellence and attention to detail ensures that every project we undertake is completed to the highest standards.
        </p>
        <p className="text-lg mb-4">
          Thank you for choosing Paz Modern Terrazzo. We look forward to working with you to bring your vision to life!
        </p>
      </div>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
        <img src="/assets/terrazzo1.jpg" alt="Terrazzo Design 1" className="w-full h-auto rounded-lg shadow-lg" />
        <img src="/assets/terrazzo2.jpg" alt="Terrazzo Design 2" className="w-full h-auto rounded-lg shadow-lg" />
        <img src="/assets/terrazzo3.jpg" alt="Terrazzo Design 3" className="w-full h-auto rounded-lg shadow-lg" />
        <img src="/assets/terrazzo4.jpg" alt="Terrazzo Design 4" className="w-full h-auto rounded-lg shadow-lg" />
      </div>
    </div>
  );
};

export default AboutUs; 
