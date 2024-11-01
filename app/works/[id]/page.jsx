"use client";

/* Components */
import WorkContent from "@/components/WorkContent";
/* Data */
import { getWorks } from "@/data/data";
/* MUI */
import { Box, Paper, Stack, styled } from "@mui/material";
/* Next */
import Link from "next/link";

async function getWork(params) {
  const works = await getWorks();
  const work = works.find((work) => work.id == params.id.toString());
  return work;
}

async function getLastWork(params) {
  const works = await getWorks();
  const lastwork = works.find(
    (work) => work.id == (Number(params.id) + 1).toString()
  );
  return lastwork;
}

async function getNextWork(params) {
  const works = await getWorks();
  const nextwork = works.find(
    (work) => work.id == (Number(params.id) - 1).toString()
  );
  return nextwork;
}

export default async function Work({ params }) {
  const work = await getWork(params);
  const lastwork = await getLastWork(params);
  const nextwork = await getNextWork(params);
  // console.log(nextwork.id);
  return (
    <>
      <Box sx={{ color: "#aaaaaaff" }}>
        <WorkContent work={work} />
      </Box>
      <Box sx={{ color: "#aaaaaaff", position: "fixed", left: 16, bottom: 16 }}>
        {nextwork && (
          <>
            <Link href={`/works/${nextwork.id}`}>
              <Box>{nextwork.title}</Box>
            </Link>
          </>
        )}
      </Box>
      <Box
        sx={{ color: "#aaaaaaff", position: "fixed", right: 16, bottom: 16 }}
      >
        {lastwork && (
          <>
            <Link href={`/works/${lastwork.id}`}>
              <Box>{lastwork.title}</Box>
            </Link>
          </>
        )}
      </Box>
    </>
  );
}