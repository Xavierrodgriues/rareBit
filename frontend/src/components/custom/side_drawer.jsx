import { Button } from "@chakra-ui/react"
import {
  DrawerActionTrigger,
  DrawerBackdrop,
  DrawerBody,
  DrawerCloseTrigger,
  DrawerContent,
  DrawerFooter,
  DrawerHeader,
  DrawerRoot,
  DrawerTitle,
  DrawerTrigger,
} from "../ui/drawer"
import { LuMoveRight } from "react-icons/lu";
import { FaListUl } from "react-icons/fa";
import { LuRabbit } from "react-icons/lu";
import Tab from "./Tab";
const Sidebar_drawer = ({open,onOpen}) => {
  return (
    <DrawerRoot placement="start" >  
      <DrawerBackdrop />
      <DrawerTrigger asChild>
        <Button position="absolute" zIndex={1000} top={2} left={2} variant="outline">
            <FaListUl />
        </Button>
      </DrawerTrigger>
      <DrawerContent>
        <DrawerHeader>
          <DrawerTitle className="draw-title">RareBit <LuRabbit /></DrawerTitle>
          
        </DrawerHeader>
        <DrawerBody className="drawer-body">
          <Tab />
          <Tab />
          <Tab />
        </DrawerBody>
        <DrawerFooter>
          <DrawerActionTrigger asChild>
            <Button variant="outline">Cancel</Button>
          </DrawerActionTrigger>
          <Button>Save</Button>
        </DrawerFooter>
        <DrawerCloseTrigger />
      </DrawerContent>
    </DrawerRoot>
  )
}


export default Sidebar_drawer;