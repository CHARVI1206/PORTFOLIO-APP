import React from "react";
import p from "../images/p.jpeg";
function About() {
  return (
    <div className="min-h-screen w-full bg-gradient-to-b from-white to-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        {/* Hero Section */}
        <div className="text-center space-y-8 mb-16">
          <h1 className="text-5xl font-bold bg-gradient-to-r from-teal-600 to-indigo-500 bg-clip-text text-transparent">
            Hi, I'm Charvi Goel
          </h1>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed">
            I'm a passionate Full Stack Developer. I love turning complex
            problems into simple, beautiful, and intuitive solutions. Still
            learning and always eager to learn more and develop more.
          </p>
        </div>

        {/* Profile Image */}
        <div className="relative flex justify-center mb-16">
          <div className="absolute inset-0 bg-gradient-to-r from-teal-600 to-indigo-500 rounded-full blur-lg opacity-20"></div>
          <img
            src={p}
            alt="Profile"
            className="rounded-full transform hover:scale-110 transition duration-300 shadow-lg relative z-10 border-4 border-white w-48 h-48 object-cover"
          />
        </div>

        {/* Professional Background */}
        <div className="bg-white p-8 rounded-xl shadow-lg mb-16">
          <h2 className="text-3xl font-semibold text-gray-800 mb-6 text-center">
            Educational Journey
          </h2>
          <div className="space-y-6 text-left max-w-4xl mx-auto">
            <p className="text-lg text-gray-600">
              I started my journey in web development back in 2023, my interest
              in web development took a boost in this year. Learned from
              different platforms. Made difeerent projects and also participated
              in hacakthons like Google solution challenge and Smart Delhi
              Ideathon.
            </p>
            <p className="text-lg text-gray-600">
              Currently, I'm focused on building modern web applications using
              React, Next.js, and Gen Ai. I'm passionate about creating
              solutions that not only look great but also perform exceptionally
              well.
            </p>
          </div>
        </div>

        {/* Skills Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-16">
          <div className="p-6 bg-white rounded-xl shadow-lg hover:shadow-xl transition-shadow duration-300">
            <h3 className="text-2xl text-indigo-600 font-semibold mb-4">
              Frontend Development
            </h3>
            <p className="text-lg text-gray-600">
              Creating beautiful and responsive user interfaces with React,
              Next, and modern CSS frameworks
            </p>
          </div>
          <div className="p-6 bg-white rounded-xl shadow-lg hover:shadow-xl transition-shadow duration-300">
            <h3 className="text-2xl text-purple-600 font-semibold mb-4">
              Backend Development
            </h3>
            <p className="text-lg text-gray-600">
              Building robust and scalable server solutions with Node.js,
              Python, and cloud services.
            </p>
          </div>
          <div className="p-6 bg-white rounded-xl shadow-lg hover:shadow-xl transition-shadow duration-300">
            <h3 className="text-2xl text-teal-600 font-semibold mb-4">
              App Development
            </h3>
            <p className="text-lg text-gray-600">
              A bit Starting Knowledge. Want to know more and hope to build apps
              in future.
            </p>
          </div>
        </div>

        {/* Personal Interests */}
        <div className="bg-white p-8 rounded-xl shadow-lg mb-16">
          <h2 className="text-3xl font-semibold text-gray-800 mb-8 text-center">
            Beyond Coding
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 text-left max-w-4xl mx-auto">
            <div className="space-y-3">
              <h3 className="text-2xl text-blue-600 font-semibold">
                Team Management
              </h3>
              <p className="text-lg text-gray-600">
                Managed events in college and school. Served as lead of the
                team.
              </p>
            </div>
            <div className="space-y-3">
              <h3 className="text-2xl text-violet-600 font-semibold">
                Creative Mind
              </h3>
              <p className="text-lg text-gray-600">
                A good hand on creativity. Just as a hobby and like to do such
                things in leisure time.
              </p>
            </div>
            <div className="space-y-3">
              <h3 className="text-2xl text-teal-600 font-semibold">NSS</h3>
              <p className="text-lg text-gray-600">
                Volunteer of NSS, Eager to serve the community as much as I can.
              </p>
            </div>
            <div className="space-y-3">
              <h3 className="text-2xl text-blue-600 font-semibold">
                Continuous Learning
              </h3>
              <p className="text-lg text-gray-600">
                Always exploring new technologies and methodologies to stay at
                the forefront of web development
              </p>
            </div>
          </div>
        </div>

        {/* Call to Action */}
        <div className="bg-gradient-to-r from-indigo-600 via-purple-600 to-teal-500 p-12 rounded-xl text-white text-center">
          <h2 className="text-4xl font-semibold mb-6">Let's Work Together</h2>
          <p className="text-xl mb-8 max-w-2xl mx-auto">
            I'm always open to discussing new projects, creative ideas, or
            opportunities to be part of your vision.
          </p>
          <a
            href="src\components\Contact.js"
            className="inline-block bg-white text-indigo-600 px-8 py-3 rounded-lg font-semibold text-lg hover:bg-opacity-90 transition-colors duration-200"
          >
            Get in Touch
          </a>
        </div>
      </div>
    </div>
  );
}

export default About;
