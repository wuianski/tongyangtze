"use client";

/* MUI */
import { Box, Paper, Stack, styled } from "@mui/material";

const Item = styled(Paper)(({ theme }) => ({
  textAlign: "left",
  color: "#000",
  width: "max-content",
  boxShadow: "none",
  background: "none",
  fontSize: 15,

  [theme.breakpoints.down("md")]: {
    width: "100%",
    textAlign: "left",
  },
}));

export default function AboutList({ timelines }) {
  return (
    <>
      <Stack direction="column" spacing={0}>
        {timelines.map((timeline, index) => (
          <Item sx={{ width: { xs: "100%", sm: "100%" } }} key={index}>
            <Box>
              <Stack direction="row" spacing={0}>
                <Item sx={{ width: { xs: "20%", sm: "12%" } }}>
                  <Box mt={1}>{timeline.year}</Box>
                </Item>
                <Item sx={{ width: { xs: "80%", sm: "88%" } }}>
                  <Box mt={1}>
                    {timeline.link ? (
                      <a href={timeline.link} target="_blank">
                        <Box
                          sx={{ textDecoration: "underline" }}
                          className="hover_ex_tab"
                        >
                          {timeline.title}
                        </Box>
                      </a>
                    ) : (
                      timeline.title
                    )}
                  </Box>
                </Item>
              </Stack>
            </Box>
          </Item>
        ))}
      </Stack>
    </>
  );
}
