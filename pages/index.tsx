import Head from 'next/head'
import {Box} from "@mui/system";
import HomePage from "../src/components/HomePage/HomePage";

export default function Home() {
  return (
    <>
      <Head>
        <title>Bosh Sahifa</title>
        <meta name="description" content="Generated by create next app" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
        <Box>
            <HomePage />
        </Box>
    </>
  )
}
