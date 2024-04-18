import Box from "@mui/material/Box";
import Drawer from "@mui/material/Drawer";
import ShoppingBagIcon from "@mui/icons-material/ShoppingBag";
import List from "@mui/material/List";
import Divider from "@mui/material/Divider";
import ListItem from "@mui/material/ListItem";
import ListItemButton from "@mui/material/ListItemButton";
import ListItemIcon from "@mui/material/ListItemIcon";
import ListItemText from "@mui/material/ListItemText";
import { useAppContext } from "../context/ContextProvider";
import { useLeftBar } from "./hooks/useLeftBar";
import WomanIcon from "@mui/icons-material/Woman";
import ManIcon from "@mui/icons-material/Man";
import ComputerIcon from "@mui/icons-material/Computer";
import FavoriteOutlinedIcon from "@mui/icons-material/FavoriteOutlined";
import LogoutIcon from "@mui/icons-material/Logout";
import SupportAgentIcon from "@mui/icons-material/SupportAgent";

export const LeftBar = () => {
  const { openLeftBar } = useAppContext();

  const { toggleDrawer } = useLeftBar();

  const products = [
    {
      name: "Mis productos",
      icon: <ShoppingBagIcon />,
    },
    {
      name: "Lista de deseados",
      icon: <FavoriteOutlinedIcon />,
    },
    {
      name: "Hombre",
      icon: <WomanIcon />,
    },
    {
      name: "Mujer",
      icon: <ManIcon />,
    },
    {
      name: "Electrónica",
      icon: <ComputerIcon />,
    },
  ];

  const options = [
    {
      name: "Soporte",
      icon: <SupportAgentIcon />,
    },
    {
      name: "Cerrar sesión",
      icon: <LogoutIcon />,
    },
  ];

  const DrawerList = (
    <Box sx={{ width: 250 }} role="presentation" onClick={toggleDrawer(false)}>
      <List>
        {products.map((element) => (
          <ListItem key={element.name} disablePadding>
            <ListItemButton>
              <ListItemIcon>{element.icon}</ListItemIcon>
              <ListItemText primary={element.name} />
            </ListItemButton>
          </ListItem>
        ))}
      </List>
      <Divider />
      <List>
        {options.map((element) => (
          <ListItem key={element.name} disablePadding>
            <ListItemButton>
              <ListItemIcon>{element.icon}</ListItemIcon>
              <ListItemText primary={element.name} />
            </ListItemButton>
          </ListItem>
        ))}
      </List>
    </Box>
  );

  return (
    <div>
      <Drawer open={openLeftBar} onClose={toggleDrawer(false)}>
        {DrawerList}
      </Drawer>
    </div>
  );
};
