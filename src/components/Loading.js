import { Box, CircularProgress } from "@mui/material";
import styled from "styled-components";

const Container = styled.div`
  position: absolute;
  top: 50%;
  left: 50%;
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
