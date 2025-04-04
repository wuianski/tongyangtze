"use client";

import React, { useState } from "react";
/* MUI */
import { Box, Typography } from "@mui/material";
import ExpandMoreIcon from "@mui/icons-material/ExpandMore";
import NavArrowDown from "@/public/icons/nav-arrow-down.svg";
import { styled } from "@mui/material/styles";
import MuiAccordion from "@mui/material/Accordion";
import MuiAccordionSummary from "@mui/material/AccordionSummary";
import MuiAccordionDetails from "@mui/material/AccordionDetails";
/* Components */
import AboutList from "@/components/AboutList";

const Accordion = styled((props) => (
  <MuiAccordion disableGutters elevation={0} square {...props} />
))(({}) => ({
  border: `none`,
  "&:not(:last-child)": {
    borderBottom: 0,
  },
  "&::before": {
    display: "none",
  },
}));

const AccordionSummary = styled((props) => <MuiAccordionSummary {...props} />)(
  ({}) => ({
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
            expandIcon={<NavArrowDown />}
            aria-controls="panel1-content"
            id="panel1-header"
          >
            <Typography>Recent</Typography>
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
            expandIcon={<NavArrowDown />}
            aria-controls="panel2-content"
            id="panel2-header"
          >
            <Typography>Past</Typography>
          </AccordionSummary>
          <AccordionDetails>
            <AboutList timelines={pastExs} />
          </AccordionDetails>
        </Accordion>
        {/* <Accordion
          expanded={expanded === "panel3"}
          onChange={handleChange("panel3")}
        >
          <AccordionSummary
            expandIcon={<NavArrowDown />}
            aria-controls="panel3-content"
            id="panel3-header"
          >
            <Typography>Upcoming</Typography>
          </AccordionSummary>
          <AccordionDetails>
            <AboutList timelines={upcomingExs} />
          </AccordionDetails>
        </Accordion> */}
      </Box>
    </>
  );
}
