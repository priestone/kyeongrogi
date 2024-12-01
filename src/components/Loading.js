// const LoadingComponent = CircularIndeterminate()

import { Box, CircularProgress } from "@mui/material";
import styled from "styled-components";

const Container = styled.div`
  width: 100px;
  height: 100vh;
  margin: 0 auto;
`;

const Loading = () => {
  return (
    <Container>
      <Box sx={{ display: "flex", justifyContent: "center" }}>
        <CircularProgress />
      </Box>
    </Container>
  );
};

export default Loading;
