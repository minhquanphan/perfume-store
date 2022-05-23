import { Box, Pagination } from "@mui/material";

function AppPagination() {
  return (
    <Box
      justifyContent="center"
      alignItems="center"
      display="flex"
      sx={{ margin: "20px 0px" }}
    >
      <Pagination count={10} />
    </Box>
  );
}

export default AppPagination;
