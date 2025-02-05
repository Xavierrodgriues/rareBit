import { Button, Container, Textarea } from "@chakra-ui/react";
import { useState, useRef } from "react";
import Sidebar_drawer from "../components/custom/side_drawer";
import { FaFileUpload } from "react-icons/fa";
import { useNavigate } from "react-router-dom";
import { BsGlobe } from "react-icons/bs";
import { IoIosSend } from "react-icons/io";

const Home = () => {
  const [open, setOpen] = useState(true);
  const router = useNavigate();
  const fileInputRef = useRef(null);

  function handleSubmitMove(e) {
    if (e.key === "Enter") {
      setOpen(!open);
    }
  }

  const handleFileChange = (event) => {
    const file = event.target.files[0];
    if (file) {
      console.log("Uploaded file:", file.name);
      // You can handle file upload logic here
    }
  };

  return (
    <div>
      <Sidebar_drawer open={open} onOpen={setOpen} />
      <Container onKeyDownCapture={handleSubmitMove} height="100vh" width="full" display="flex" flexDirection="column" justifyContent="center" alignItems="center">
        <center>
          <h1 className="title">What&apos;s the next rabbit hole you want to explore?</h1>
        </center>

        <Container height="30vh" width="80vh" borderRadius="2xl" backgroundColor="gray.900" padding={2} display="flex" flexDirection="column" justifyContent="space-between" alignItems="self-start">
          <Textarea border="none" background="transparent" outline="none" width="full" placeholder="Enter your prompt here" />

          <div className="buttons-exp">
            {/* Upload Button with Hidden File Input */}
            <Button background="transparent" border="1px solid" borderColor="gray.600" color="white" rounded="full" padding={2} onClick={() => fileInputRef.current.click()}>
              <FaFileUpload color="white" size="20px" />
            </Button>
            <input type="file" ref={fileInputRef} style={{ display: "none" }} onChange={handleFileChange} accept=".pdf,.doc,.docx" />

            <Button className="inp-btn" background="transparent" border="1px solid" borderColor="gray.600" color="white" rounded="full" padding={2}>
              <BsGlobe />
            </Button>

            <Button className="inp-btn" background="transparent" border="1px solid" borderColor="gray.600" color="white" rounded="full" padding={2}>
              <IoIosSend />
            </Button>
          </div>
        </Container>
      </Container>
    </div>
  );
};

export default Home;
