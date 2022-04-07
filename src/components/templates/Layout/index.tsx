import * as React from "react";
import { styled } from "@mui/material/styles";
import Grid from "@mui/material/Grid";
import SideMenu from "../../organisms/SideBar";

interface Modalprops {
  children?: React.ReactNode;
}

const Wrapper = styled("abbr")({
  display: "grid",
  gridTemplateRows: "max-content calc(100vh - 80px)",
  gap: "80px",
});
const Content = styled("div")({
  marginTop: "100px",
  display: "grid",
  gridTemplateColumns: "max-content auto",
});

const Layout: React.FC<Modalprops> = ({ children }) => {
  return (
    <Wrapper>
      <Content>
        <SideMenu></SideMenu>
        <Grid item>{children}</Grid>
      </Content>
    </Wrapper>
  );
};

export default Layout;
