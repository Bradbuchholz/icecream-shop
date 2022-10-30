import { Container } from "@mui/material";
import React from "react";
import Header from "./Header";
import IceCreamControl from "./IceCreamControl";

function App() {
  return (
    <Container sx={{ display: 'flex', flexDirection: 'column', alignItems: 'center' }}>
      <Header />
      <IceCreamControl />
    </Container>
  );
}

export default App;
