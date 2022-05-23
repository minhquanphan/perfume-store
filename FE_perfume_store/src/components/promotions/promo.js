import { Box, Slide, Typography } from "@mui/material";
import { styled } from "@mui/material/styles";
import { useState, useEffect } from "react";

const PromotionsContainer = styled(Box)(({ theme }) => ({
  [theme.breakpoints.up("md")]: {
    padding: "40px 0px 40px 0px",
  },
  display: "flex",
  justifyContent: "center",
  alignItems: "center",
  padding: "20px 0px 20px 0px",
  overflow: "hidden",
  background: "#fbf9f9",
}));

export const MessageText = styled(Typography)(({ theme }) => ({
  fontFamily: "Courier New",
  [theme.breakpoints.up("md")]: {
    fontSize: "3rem",
  },
  color: "black",
  fontSize: "1.5rem",
}));

const messages = [
  "20% off on your first order!",
  "SUMMER IS HERE! an EXTRA 20% OFF!",
  "Register now",
];

function PromotionsSecondary() {
  const [messageIndex, setMessageIndex] = useState(0);
  const [show, setShow] = useState(true);
  useEffect(() => {
    setTimeout(() => {
      setShow(false);
    }, 3000);
    const intervalId = setInterval(() => {
      // get next message
      setMessageIndex((i) => (i + 1) % messages.length);

      // slide the message in
      setShow(true);

      setTimeout(() => {
        setShow(false);
      }, 3000);
    }, 4000);

    return () => {
      clearInterval(intervalId);
    };
  }, []);

  return (
    <PromotionsContainer>
      <Slide
        direction={show ? "left" : "right"}
        in={show}
        timeout={{
          enter: 500,
          exit: 100,
        }}
      >
        <Box display="flex" justifyContent="center" alignItems="center">
          <MessageText></MessageText>
        </Box>
      </Slide>
    </PromotionsContainer>
  );
}

export default PromotionsSecondary;
