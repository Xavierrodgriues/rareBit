import React, { useState } from "react";
import { Menu, X } from "lucide-react";

const Main = () => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <div className="h-screen bg-gray-100 flex">
      {/* Drawer Component */}
      <div className={`drawer ${isOpen ? "drawer-open" : ""}`}> 
        <input 
          id="my-drawer" 
          type="checkbox" 
          className="drawer-toggle" 
          checked={isOpen} 
          onChange={() => setIsOpen(!isOpen)} 
        />
        <div className="drawer-content flex flex-col items-center justify-center p-4">
          {/* Open Button */}
          <button 
            className="btn btn-primary flex items-center gap-2" 
            onClick={() => setIsOpen(true)}
          >
            <Menu className="h-5 w-5" /> Open Panel
          </button>
        </div>
        <div className="drawer-side">
          <label htmlFor="my-drawer" className="drawer-overlay" onClick={() => setIsOpen(false)}></label>
          <div className="menu p-4 w-64 min-h-full bg-white text-base-content shadow-xl">
            <div className="flex justify-between items-center border-b pb-3">
              <h2 className="text-lg font-semibold">Options</h2>
              <button className="p-2" onClick={() => setIsOpen(false)}>
                <X className="h-5 w-5" />
              </button>
            </div>
            <ul className="mt-4 space-y-2">
              <li className="p-3 rounded-lg hover:bg-gray-200 cursor-pointer">Option 1</li>
              <li className="p-3 rounded-lg hover:bg-gray-200 cursor-pointer">Option 2</li>
              <li className="p-3 rounded-lg hover:bg-gray-200 cursor-pointer">Option 3</li>
            </ul>
          </div>
        </div>
      </div>
      {/* Right Chat Section */}
      <div className="flex-1 p-4">Right Chat Section</div>
    </div>
  );
};

export default Main;
