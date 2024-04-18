import { useAppContext } from "../../context/ContextProvider";

export const useLeftBar = () => {
  const { setOpenLeftBar } = useAppContext();

  const toggleDrawer = (newOpen) => () => {
    console.log(newOpen);
    setOpenLeftBar(newOpen);
  };

  return { toggleDrawer };
};
