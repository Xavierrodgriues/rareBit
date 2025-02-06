import React, { useCallback, useEffect, useRef, useState } from 'react';
import {
  Background,
  ReactFlow,
  useNodesState,
  useEdgesState,
  addEdge,
  useReactFlow,
  ReactFlowProvider,
} from '@xyflow/react';
 
import '@xyflow/react/dist/style.css';
import CustomNodes from '../components/custom/nodes/CustomNodes';
import { useLocation } from 'react-router';
import { BACKEND_URL } from '../../constants/backend';
import axios from 'axios';
 

 
let id = 1;
const getId = () => `${id++}`;
const nodeOrigin = [0.5, 0];
 
const AddNodeOnEdgeDrop = () => {
  const data = useLocation()
  const reactFlowWrapper = useRef(null);
  const [nodes, setNodes, onNodesChange] = useNodesState([]);
  const [edges, setEdges, onEdgesChange] = useEdgesState([]);
  const [projectId,setProjectId] = useState(null)
  const { screenToFlowPosition } = useReactFlow();
  const [messages,setMessages] = useState([])
  const onConnect = useCallback(
    (params) => setEdges((eds) => addEdge(params, eds)),
    [],
  );
 
  const nodeTypes = {
    custom: CustomNodes,
  };

  
  const onConnectEnd = useCallback(
    (event, connectionState) => {
      if (!connectionState.isValid) {
        const id = getId();
        const { clientX, clientY } =
          'changedTouches' in event ? event.changedTouches[0] : event;
        const newNode = {
          id,
          position: screenToFlowPosition({
            x: clientX,
            y: clientY,
          }),
          data: { label: `Hello world` },
          origin: [0.5, 0.0],
        };
 
        setNodes((nds) => nds.concat(newNode));
        setEdges((eds) =>
          eds.concat({ id, source: connectionState.fromNode.id, target: id }),
        );
      }
    },
    [screenToFlowPosition],
  );

  async function init(projectid,prompt){
    try {
      let data = await axios.post(`${BACKEND_URL}/api/v1/chat`,{
        projectId : projectid,
        messages : messages,
        question : prompt,
        nodeId : nodes[nodes.length - 1].id,
        connectionId : [],
        position : {
          x : 0,
          y : 50
        }
      })
      console.log({data},'data')
      setMessages(data.data.result.messags)
    } catch (error) {
      console.log(error)
    }
    
  }

  useEffect(() => {
    let projectId = data.search.split("=")[1]
    let prompt = data.state.prompt
    setProjectId(projectId)
    init(projectId,prompt)
  },[])
 
  return (
    <div className="wrapper" ref={reactFlowWrapper}>
      <ReactFlow
        style={{ backgroundColor: "white" }}
        colorMode='dark'
        nodes={nodes}
        edges={edges}
        onNodesChange={onNodesChange}
        nodeTypes={nodeTypes}
        onEdgesChange={onEdgesChange}
        onConnect={onConnect}
        onConnectEnd={onConnectEnd}
        fitView
        fitViewOptions={{ padding: 2 }}
        nodeOrigin={nodeOrigin}
    >
      <Background  color='black' />
    </ReactFlow>
    </div>
  );
};
 
export default () => (
<div  style={{ height : "100vh", width : "100vw"}}>

  <ReactFlowProvider>
    <AddNodeOnEdgeDrop />
  </ReactFlowProvider>
  </div>
);
