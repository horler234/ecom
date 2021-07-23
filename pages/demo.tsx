import Head from "next/head";
import {
  ArrowDownCircleIcon,
  ArrowDownIcon,
  ArrowDownLeftIcon,
  ArrowDownRightIcon,
  ArrowLeftCircleIcon,
  ArrowLeftIcon,
  ArrowRightCircleIcon,
  ArrowRightIcon,
  ArrowUpCircleIcon,
  ArrowUpIcon,
  ArrowUpLeftIcon,
  ArrowUpRightIcon,
  CartIcon,
} from "../components/icons";

export default function DemoPage() {
  return (
    <>
      <Head>
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <title>Ecom | Home</title>
      </Head>
      Home
      <ArrowDownCircleIcon />
      <ArrowUpCircleIcon />
      <ArrowLeftCircleIcon />
      <ArrowRightCircleIcon />
      <ArrowDownIcon />
      <ArrowLeftIcon />
      <ArrowRightIcon />
      <ArrowUpIcon />
      <ArrowUpLeftIcon />
      <ArrowUpRightIcon />
      <ArrowDownLeftIcon />
      <ArrowDownRightIcon />
      <CartIcon />
    </>
  );
}
