import React, { useState } from "react";
import { Button } from "@/components/ui/button";
import { Menu, X } from "lucide-react";

const Main = () => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <div className="flex h-screen bg-gray-100">
      {/* Left Sliding Panel */}
      <div
        className={`fixed top-0 left-0 h-full bg-white shadow-lg w-64 transform ${
          isOpen ? "translate-x-0" : "-translate-x-full"
        } transition-transform duration-300 ease-in-out`}
      >
        <div className="p-4 flex justify-between items-center border-b"> 
          <h2 className="text-lg font-semibold">Options</h2>
          <Button variant="ghost" onClick={() => setIsOpen(false)}>
            <X className="h-5 w-5" />
          </Button>
        </div>
        <ul className="p-4 space-y-2">
          <li className="p-2 hover:bg-gray-200 rounded cursor-pointer">Option 1</li>
          <li className="p-2 hover:bg-gray-200 rounded cursor-pointer">Option 2</li>
          <li className="p-2 hover:bg-gray-200 rounded cursor-pointer">Option 3</li>
        </ul>
      </div>

      {/* Open Button */}
      <div className="p-4">
        <Button onClick={() => setIsOpen(true)}>
          <Menu className="h-5 w-5 mr-2" /> Open Panel
        </Button>
      </div>

      {/* Right Chat Section (Placeholder) */}
      <div className="flex-1 p-4">Right Chat Section</div>
    </div>
  );
};

export default Main;