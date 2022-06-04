import * as React from "react";
import { styled } from "@mui/material/styles";
import Box from "@mui/material/Box";
import Paper from "@mui/material/Paper";
import Grid from "@mui/material/Grid";
import Container from "@mui/material/Container";
import Table1 from "../components/Tables/Table1.jsx";
import Table2 from "../components/Tables/Table2.jsx";
import Table3 from "../components/Tables/Table3.jsx";
import Table4 from "../components/Tables/Table4.jsx";

const Item = styled(Paper)(({ theme }) => ({
  backgroundColor: theme.palette.mode === "dark" ? "#1A2027" : "#fff",
  ...theme.typography.body2,
  padding: theme.spacing(1),
  textAlign: "center",
  color: theme.palette.text.secondary,
}));

export default function Home() {
  return (
    <Container>
      <Box sx={{ flexGrow: 1 }}>
        <Grid container spacing={2}>
          <Grid item xs={12}>
            <Item>
              <Table1 />
            </Item>
          </Grid>
          <Grid item xs={5}>
            <Item>
              <Table2 />
            </Item>
          </Grid>
          <Grid item xs={7}>
            <Grid container spacing={2}>
              <Grid item xs={12}>
                <Item>
                  <Table3 />
                </Item>
              </Grid>
              <Grid item xs={12}>
                <Item>
                  <Table4 />
                </Item>
              </Grid>
            </Grid>
          </Grid>
        </Grid>
      </Box>
    </Container>
  );
}
