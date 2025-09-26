import React from 'react';

export const PageContainer = ({ children, className = '' }) => {
  return (
    <div className={`max-w-7xl mx-auto p-4 sm:p-6 lg:p-8 ${className}`}>
      {children}
    </div>
  );
};

export const PageHeader = ({ title, subtitle, className = '' }) => {
  return (
    <div className={`text-center mb-8 ${className}`}>
      <h1 className="text-3xl font-bold text-gray-900 mb-2">{title}</h1>
      {subtitle && <p className="text-gray-600">{subtitle}</p>}
    </div>
  );
};
