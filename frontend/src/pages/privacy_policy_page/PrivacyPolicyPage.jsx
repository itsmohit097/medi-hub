import React from "react";

function PrivacyPolicyPage() {
  return (
    <div className="container mx-auto py-8">
      <h1 className="text-3xl font-bold mb-4 text-center">Privacy Policy</h1>
      <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
        <div className="p-6 bg-blue-100 rounded-lg shadow-md">
          <h2 className="text-xl font-semibold mb-2 text-blue-800">
            Purpose of Information
          </h2>
          <p className="text-gray-700">
            Clearly state the purpose for which the collected information will
            be used. For instance, scheduling appointments, communicating test
            results, etc.
          </p>
        </div>
        <div className="p-6 bg-green-100 rounded-lg shadow-md">
          <h2 className="text-xl font-semibold mb-2 text-green-800">
            Cookies and Tracking
          </h2>
          <p className="text-gray-700">
            Explain if your website uses cookies or other tracking technologies,
            and how they are used to enhance the user experience. Provide users
            with options to manage cookie preferences.
          </p>
        </div>
        <div className="p-6 bg-yellow-100 rounded-lg shadow-md">
          <h2 className="text-xl font-semibold mb-2 text-yellow-800">
            Children's Privacy
          </h2>
          <p className="text-gray-700">
            f your website collects information from children under the age of
            13 (or any other applicable age), comply with relevant laws such as
            the Children's Online Privacy Protection Act (COPPA).
          </p>
        </div>
        <div className="p-6 bg-purple-100 rounded-lg shadow-md">
          <h2 className="text-xl font-semibold mb-2 text-purple-800">
            Contact Information
          </h2>
          <p className="text-gray-700">
            Provide contact details for users to reach out with questions or
            concerns about the privacy policy or their personal data.
          </p>
        </div>
        <div className="p-6 bg-red-100 rounded-lg shadow-md">
          <h2 className="text-xl font-semibold mb-2 text-red-800">
            Updates to Privacy Policy
          </h2>
          <p className="text-gray-700">
            State that the privacy policy may be updated from time to time, and
            how users will be notified of any changes.
          </p>
        </div>
        <div className="p-6 bg-blue-100 rounded-lg shadow-md">
          <h2 className="text-xl font-semibold mb-2 text-blue-800">
            User Rights
          </h2>
          <p className="text-gray-700">
            {" "}
            Inform users about their rights regarding their personal data,
            including the right to access, update, or delete their information.
          </p>
        </div>
      </div>
    </div>
  );
}

export default PrivacyPolicyPage;
