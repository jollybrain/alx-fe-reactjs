import React from 'react';

const UserProfile = () => {
  return (
    <div className="p-6 md:p-8 sm:p-4 max-w-xs md:max-w-sm bg-gray-100 mx-auto my-20 rounded-lg shadow-lg hover:shadow-xl transition-shadow duration-300 ease-in-out">
      <img
        src="profile-image-url.jpg"
        alt="User Profile"
        className="w-32 h-32 sm:w-24 sm:h-24 md:w-36 md:h-36 rounded-full object-cover transition-transform duration-300 ease-in-out hover:scale-110"
      />
      <h1 className="text-lg md:text-xl font-semibold text-blue-800 hover:text-blue-500 transition-colors duration-300 my-4">
        John Doe
      </h1>
      <p className="text-base text-gray-600 my-4">
        Software Developer
      </p>
    </div>
  );
};

export default UserProfile;

