import { useCallback, useRef, useState } from "react";
import {
  Background,
  ReactFlow,
  useNodesState,
  useEdgesState,
  addEdge,
  useReactFlow,
  MiniMap,
} from "@xyflow/react";

import "@xyflow/react/dist/style.css";
import "../index.css";

const initialNodes = [
  {
    id: "0",
    type: "input",
    data: { label: "Node" },
    position: { x: 0, y: 50 },
  },
];

let id = 1;
const getId = () => `${id++}`;

const nodeOrigin = [0.5, 0];

const FlowCanvas = () => {
  const reactFlowWrapper = useRef(null);
  const [nodes, setNodes, onNodesChange] = useNodesState(initialNodes);
  const [edges, setEdges, onEdgesChange] = useEdgesState([]);
  const { screenToFlowPosition } = useReactFlow();

  // Dark Mode State
  const [darkMode, setDarkMode] = useState(false);

  const onConnect = useCallback(
    (params) => setEdges((eds) => addEdge({ ...params, animated: true }, eds)),
    []
  );

  const onConnectEnd = useCallback(
    (event, connectionState) => {
      if (!connectionState.isValid) {
        const id = getId();
        const { clientX, clientY } =
          "changedTouches" in event ? event.changedTouches[0] : event;
        const newNode = {
          id,
          position: screenToFlowPosition({ x: clientX, y: clientY }),
          data: { label: `Node ${id}` },
          origin: [0.5, 0.0],
        };

        setNodes((nds) => [...nds, newNode]);
        setEdges((eds) => [
          ...eds,
          {
            id,
            source: connectionState.fromNode.id,
            target: id,
            animated: true,
          },
        ]);
      }
    },
    [screenToFlowPosition]
  );

  // Handle Theme Change
  const handleThemeChange = (event) => {
    setDarkMode(event.target.value === "dark");
  };

  return (
    <div
      className={`wrapper ${darkMode ? "dark" : "light"}`}
      ref={reactFlowWrapper}
      style={{
        height: "100vh",
        width: "100vw",
        backgroundColor: darkMode ? "#1E1E1E" : "#F7F9FB",
        color: darkMode ? "#FFFFFF" : "#000000",
        position: "relative",
      }}
    >
      {/* Dropdown to toggle theme */}
      <div
        style={{
          position: "absolute",
          top: "10px",
          right: "10px",
          zIndex: 10,
        }}
      >
        <select
          onChange={handleThemeChange}
          value={darkMode ? "dark" : "light"}
          style={{
            padding: "8px",
            backgroundColor: darkMode ? "#333" : "#fff",
            color: darkMode ? "#fff" : "#333",
            border: "1px solid",
            borderColor: darkMode ? "#fff" : "#333",
            fontSize: "14px",
            cursor: "pointer",
          }}
        >
          <option value="light">Light Mode</option>
          <option value="dark">Dark Mode</option>
        </select>
      </div>

      <ReactFlow
        style={{
          backgroundColor: darkMode ? "#282C34" : "#F7F9FB",
        }}
        nodes={nodes}
        edges={edges}
        onNodesChange={onNodesChange}
        onEdgesChange={onEdgesChange}
        onConnect={onConnect}
        onConnectEnd={onConnectEnd}
        fitView
        fitViewOptions={{ padding: 2 }}
        nodeOrigin={nodeOrigin}
      >
        <Background style={{ color: darkMode ? "#FFFFFF" : "#000000" }} />
        <MiniMap />
      </ReactFlow>
    </div>
  );
};

export default FlowCanvas;
