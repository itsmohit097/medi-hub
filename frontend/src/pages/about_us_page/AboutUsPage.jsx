import React from "react";

function AboutUsPage() {
  return (
    <div className="container mx-auto py-8">
      <h1 className="text-3xl font-bold mb-4 text-center">About Us</h1>
      <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
        <div className="p-6 bg-blue-100 rounded-lg shadow-md">
          <h2 className="text-xl font-semibold mb-2 text-blue-800">
            Welcome to Our Platform
          </h2>
          <p className="text-gray-700">
            A web-based platform facilitating seamless management of healthcare
            services, including appointments, patient records, and doctor
            interactions.
          </p>
        </div>
        <div className="p-6 bg-green-100 rounded-lg shadow-md">
          <h2 className="text-xl font-semibold mb-2 text-green-800">
            Secure User Authentication
          </h2>
          <p className="text-gray-700">
            Implemented robust user authentication and authorization
            functionalities to ensure secure access to patient and doctor and
            admin portals.
          </p>
        </div>
        <div className="p-6 bg-yellow-100 rounded-lg shadow-md">
          <h2 className="text-xl font-semibold mb-2 text-yellow-800">
            File Upload Management with Cloud Services
          </h2>
          <p className="text-gray-700">
            Utilized Multer and integrated Cloudinary to efficiently handle file
            uploads, particularly images, ensuring optimal storage, retrieval,
            and user experience.
          </p>
        </div>
        <div className="p-6 bg-purple-100 rounded-lg shadow-md">
          <h2 className="text-xl font-semibold mb-2 text-purple-800">
            Version Control with Git
          </h2>
          <p className="text-gray-700">
            Utilized Git for version control, enabling efficient project
            tracking and management of code changes throughout the development
            lifecycle.
          </p>
        </div>
        <div className="p-6 bg-red-100 rounded-lg shadow-md">
          <h2 className="text-xl font-semibold mb-2 text-red-800">
            Admin Dashboard Development
          </h2>
          <p className="text-gray-700">
            Developed an intuitive admin dashboard facilitating user management,
            appointment scheduling, and data analytics, empowering
            administrators with comprehensive control and insights.
          </p>
        </div>
      </div>
    </div>
  );
}

export default AboutUsPage;
