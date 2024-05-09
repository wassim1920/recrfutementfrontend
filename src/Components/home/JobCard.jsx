import React from 'react';

const JobCard = ({ company, image, title, description }) => {
  return (
    <div className="bg-white rounded-lg shadow-md p-4 mb-4 flex items-center">
      <img src={image} alt={company} className="w-16 h-16 rounded-5 mr-4" />
      <div>
        <h3 className="text-lg font-semibold">{title}</h3>
        <p className="text-gray-600">{company}</p>
        <p className="text-sm text-gray-700 mt-2">{description}</p>
      </div>
    </div>
  );
};

export default JobCard;
