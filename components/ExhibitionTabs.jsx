"use client";

import React, { useState, useEffect } from "react";
/* MUI */
import { Box, Paper, Stack, styled, Tab, Tabs } from "@mui/material";
import PropTypes from "prop-types";
/* Components */
import AboutList from "@/components/AboutList";

function CustomTabPanel(props) {
  const { children, value, index, ...other } = props;

  return (
    <div
      role="tabpanel"
      hidden={value !== index}
      id={`simple-tabpanel-${index}`}
      aria-labelledby={`simple-tab-${index}`}
      {...other}
    >
      {value === index && <Box sx={{ pt: 0 }}>{children}</Box>}
    </div>
  );
}

CustomTabPanel.propTypes = {
  children: PropTypes.node,
  index: PropTypes.number.isRequired,
  value: PropTypes.number.isRequired,
};

function a11yProps(index) {
  return {
    id: `simple-tab-${index}`,
    "aria-controls": `simple-tabpanel-${index}`,
  };
}

const StyledTabs = styled((props) => (
  <Tabs
    {...props}
    TabIndicatorProps={{ children: <span className="MuiTabs-indicatorSpan" /> }}
  />
))({
  "& .MuiTabs-indicator": {
    display: "flex",
    justifyContent: "center",
    backgroundColor: "transparent",
  },
  "& .MuiTabs-indicatorSpan": {
    maxWidth: 40,
    width: "100%",
    backgroundColor: "#222222ff",
  },
});

const StyledTab = styled((props) => <Tab disableRipple {...props} />)(
  ({ theme }) => ({
    textTransform: "none",
    fontWeight: theme.typography.fontWeightRegular,
    fontSize: theme.typography.pxToRem(15),
    marginRight: theme.spacing(1),
    color: "#222222ff",
    "&.Mui-selected": {
      color: "#222222ff",
    },
    paddingBottom: 0,
    // "&.Mui-focusVisible": {
    //   backgroundColor: "rgba(100, 95, 228, 0.32)",
    // },
  })
);

export default function ExhibitionTabs({ currentExs, pastExs, upcomingExs }) {
  const [value, setValue] = useState(0);
  const handleChange = (event, newValue) => {
    setValue(newValue);
  };
  return (
    <>
      <Box>
        <Box>EXHIBITIONS</Box>
        <Box sx={{ width: "100%" }}>
          <Box
            ml={18}
            mt={-5}
            // sx={{ borderBottom: 1, borderColor: "divider" }}
          >
            <StyledTabs
              value={value}
              onChange={handleChange}
              aria-label="exhibitions tabs"
            >
              <StyledTab label="Current" {...a11yProps(0)} />
              <StyledTab label="Past" {...a11yProps(1)} />
              <StyledTab label="Upcoming" {...a11yProps(2)} />
            </StyledTabs>
          </Box>
          <CustomTabPanel value={value} index={0}>
            <AboutList timelines={currentExs} />
          </CustomTabPanel>
          <CustomTabPanel value={value} index={1}>
            <AboutList timelines={pastExs} />
          </CustomTabPanel>
          <CustomTabPanel value={value} index={2}>
            <AboutList timelines={upcomingExs} />
          </CustomTabPanel>
        </Box>
      </Box>
    </>
  );
}
