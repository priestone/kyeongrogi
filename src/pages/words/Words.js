import styled from "styled-components";
import { designFont } from "../../GlobalStyled";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faPlus } from "@fortawesome/free-solid-svg-icons";
import {
  Button,
  Dialog,
  DialogActions,
  DialogContent,
  DialogContentText,
  DialogTitle,
  TextField,
} from "@mui/material";
import React, { useState } from "react";

const Container = styled.div`
  padding: 0 5%;

  h1 {
    font-size: 26px;
    font-family: ${designFont.styleFont};
    font-weight: 700;
    margin-top: 20px;
    margin-bottom: 40px;
  }
`;

const BoxWrap = styled.div`
  width: 90%;
  height: 100vh;

  display: grid;
  grid-template-columns: 300px 300px 300px 300px 300px;
  grid-template-rows: 150px 150px 150px 150px;

  gap: 20px;
  /* margin: 0 auto; */
`;

const Box = styled.div`
  width: 300px;
  height: 150px;
  border-radius: 10px;
  background-color: #d9d9d9;
`;

const PlusBox = styled.div`
  width: 300px;
  height: 150px;
  border-radius: 10px;
  background-color: #d9d9d9;
  display: flex;
  justify-content: center;
  align-items: center;
  svg {
    font-size: 40px;
  }
`;

const Words = () => {
  const [open, setOpen] = useState(false);

  const handleClickOpen = () => {
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  };

  return (
    <Container>
      <h1>단어장</h1>
      <BoxWrap>
        <Box></Box>
        <PlusBox>
          <FontAwesomeIcon icon={faPlus} />
        </PlusBox>
        <Button variant="outlined" onClick={handleClickOpen}>
          새 단어 추가
        </Button>
        <Dialog
          open={open}
          onClose={handleClose}
          PaperProps={{
            component: "form",
            onSubmit: (event) => {
              event.preventDefault();
              const formData = new FormData(event.currentTarget);
              const formJson = Object.fromEntries(formData.entries());
              const email = formJson.email;
              console.log(email);
              handleClose();
            },
          }}
        >
          <DialogTitle>새 단어 입력</DialogTitle>
          <DialogContent>
            <DialogContentText>
              새로운 단어를 입력하고 뜻을 적어 기록해보세요.
            </DialogContentText>
            <TextField
              autoFocus
              required
              margin="dense"
              id="name"
              name="word"
              label="단어명"
              type="text"
              fullWidth
              variant="standard"
            />
            <TextField
              autoFocus
              required
              margin="dense"
              id="name"
              name="value"
              label="단어 뜻"
              type="email"
              fullWidth
              variant="standard"
            />
          </DialogContent>
          <DialogActions>
            <Button onClick={handleClose}>취소</Button>
            <Button type="submit">작성 완료</Button>
          </DialogActions>
        </Dialog>
      </BoxWrap>
    </Container>
  );
};

export default Words;
