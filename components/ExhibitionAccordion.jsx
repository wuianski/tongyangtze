"use client";

import React, { useState, useEffect } from "react";
/* MUI */
import {
  Box,
  //   Accordion,
  //   AccordionSummary,
  //   AccordionDetails,
  Typography,
} from "@mui/material";
import ExpandMoreIcon from "@mui/icons-material/ExpandMore";
import { styled } from "@mui/material/styles";
import MuiAccordion from "@mui/material/Accordion";
import MuiAccordionSummary from "@mui/material/AccordionSummary";
import MuiAccordionDetails from "@mui/material/AccordionDetails";
/* Components */
import AboutList from "@/components/AboutList";

const Accordion = styled((props) => (
  <MuiAccordion disableGutters elevation={0} square {...props} />
))(({ theme }) => ({
  border: `none`,
  "&:not(:last-child)": {
    borderBottom: 0,
  },
  "&::before": {
    display: "none",
  },
}));

const AccordionSummary = styled((props) => <MuiAccordionSummary {...props} />)(
  ({ theme }) => ({
    // backgroundColor: "rgba(0, 0, 0, .03)",
    padding: 0,
    color: "#222222ff",
  })
);

const AccordionDetails = styled(MuiAccordionDetails)(({ theme }) => ({
  padding: theme.spacing(0),
  //   borderTop: "1px solid rgba(0, 0, 0, .125)",
}));

export default function ExhibitionAccordion({
  currentExs,
  pastExs,
  upcomingExs,
}) {
  const [expanded, setExpanded] = useState("panel1");

  const handleChange = (panel) => (event, newExpanded) => {
    setExpanded(newExpanded ? panel : false);
  };
  return (
    <>
      <Box>
        <Box sx={{ color: "#000", fontFamily: "apparat" }}>EXHIBITIONS</Box>
        <Accordion
          expanded={expanded === "panel1"}
          onChange={handleChange("panel1")}
        >
          <AccordionSummary
            expandIcon={<ExpandMoreIcon />}
            aria-controls="panel1-content"
            id="panel1-header"
          >
            <Typography>Current</Typography>
          </AccordionSummary>
          <AccordionDetails>
            <AboutList timelines={currentExs} />
          </AccordionDetails>
        </Accordion>
        <Accordion
          expanded={expanded === "panel2"}
          onChange={handleChange("panel2")}
        >
          <AccordionSummary
            expandIcon={<ExpandMoreIcon />}
            aria-controls="panel2-content"
            id="panel2-header"
          >
            <Typography>Past</Typography>
          </AccordionSummary>
          <AccordionDetails>
            <AboutList timelines={pastExs} />
          </AccordionDetails>
        </Accordion>
        <Accordion
          expanded={expanded === "panel3"}
          onChange={handleChange("panel3")}
        >
          <AccordionSummary
            expandIcon={<ExpandMoreIcon />}
            aria-controls="panel3-content"
            id="panel3-header"
          >
            <Typography>Upcoming</Typography>
          </AccordionSummary>
          <AccordionDetails>
            <AboutList timelines={upcomingExs} />
          </AccordionDetails>
        </Accordion>
      </Box>
    </>
  );
}
