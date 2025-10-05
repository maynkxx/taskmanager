import React from 'react';
// Use your specific image file name here
// import UI_IMG from '../../assets/images/23 Clever Social Network Designs To Inspire You.jpeg'; 

const AuthLayout = ({ children }) => {
  return (
    // Replaced the invalid 'mdiv-w-60vw]' with 'h-screen' and 'overflow-auto' for responsiveness
    <div className="flex w-screen h-screen overflow-auto">
      
      {/* 1. Auth Content Area (This is where the forms will render) */}
      <div className="w-full h-full md:w-[60vw] md:max-w-xl p-12 flex flex-col items-center justify-center">
        
        {/* Logo/Title */}
        <h2 className="text-xl font-bold text-black mb-8">Task Manager</h2>
        
        {/* CRITICAL: The forms (Login/SignUp) render here */}
        {children} 
        
      </div>

      {/* 2. Auth Image/Design Area (The blue panel) */}
      <div 
        className="hidden md:flex w-[40vw] h-screen items-center justify-center 
                   bg-blue-50 bg-[url('/bg-img.png')] bg-cover bg-no-repeat bg-center 
                   overflow-hidden"
      >
        {/* <img 
            src={UI_IMG} 
            className="w-full h-full object-cover" 
            alt="Social Network Design Illustration" 
        />  */}
      </div>
    </div>
  );
};

export default AuthLayout;