import { Outlet } from "react-router";
import ButtonUsage from "../components/ButtonUsage";
import Navbar from "../components/Navbar";
import Container from "@mui/material/Container";

export default function MainLayout() {
  return (
    <>
      <Navbar />
      <Container sx={{ mt: "3px" }}>
        <Outlet />
      </Container>
    </>
  );
}
