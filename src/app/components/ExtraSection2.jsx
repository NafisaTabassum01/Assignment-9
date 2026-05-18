import React from "react";

const HowItWorks = () => {
  return (
    <section className="bg-gray-50 py-16 px-4">
      <div className="max-w-6xl mx-auto text-center mb-12">
        <h2 className="text-3xl font-bold text-[#163161]">
          How MediQueue Works
        </h2>
        <p className="text-gray-500 mt-2">
          Simple steps to start your learning journey
        </p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-6 max-w-6xl mx-auto">
        
        {/* Step 1 */}
        <div className="bg-white shadow-md rounded-xl p-8 hover:shadow-xl transition">
          <h3 className="text-4xl font-bold text-gray-300">01</h3>
          <h4 className="text-xl font-semibold text-[#163161] mt-3">
            Find Tutor
          </h4>
          <p className="text-gray-500 mt-2">
            Search and discover expert tutors based on your subject and needs.
          </p>
        </div>

        {/* Step 2 */}
        <div className="bg-white shadow-md rounded-xl p-8 hover:shadow-xl transition">
          <h3 className="text-4xl font-bold text-gray-300">02</h3>
          <h4 className="text-xl font-semibold text-[#163161] mt-3">
            Book Session
          </h4>
          <p className="text-gray-500 mt-2">
            Choose your preferred time slot and book sessions instantly.
          </p>
        </div>

        {/* Step 3 */}
        <div className="bg-white shadow-md rounded-xl p-8 hover:shadow-xl transition">
          <h3 className="text-4xl font-bold text-gray-300">03</h3>
          <h4 className="text-xl font-semibold text-[#163161] mt-3">
            Start Learning
          </h4>
          <p className="text-gray-500 mt-2">
            Join live classes and track your learning progress easily.
          </p>
        </div>

      </div>
    </section>
  );
};

export default HowItWorks;