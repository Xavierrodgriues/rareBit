// src/App.jsx
import { ReactFlowProvider } from "@xyflow/react";
import FlowCanvas from "./components/FlowCanvas";

const App = () => {
  return (
    <ReactFlowProvider>
      <FlowCanvas />
    </ReactFlowProvider>
  );
};

export default App;
