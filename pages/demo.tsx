import Head from "next/head";
import React, { useState } from "react";
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
  HamburgerIcon,
  PlayCircleIcon,
} from "../components/icons";
import { signIn } from "next-auth/client";
import { useRouter } from "next/router";

export default function DemoPage() {
  const [name, setName] = useState<string>("");
  const [email, setEmail] = useState<string>("");
  const [password, setPassword] = useState<string>("");

  const router = useRouter();

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    try {
      const res = await fetch("/api/auth/signup", {
        method: "POST",
        body: JSON.stringify({ name, email, password, isRegistered: false }),
        headers: {
          "Content-Type": "application/json",
        },
      });

      const data = await res.json();
      console.log(data);
      if (data._id) {
        const result = await signIn("credentials", {
          redirect: false,
          email,
          password,
        });

        console.log(data.password, password);

        console.log(result);
      }

      // setName("");
      // setEmail("");
      // setPassword("");

      // console.log(res);
    } catch (err) {
      console.log(err);
    }
  };

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
      <HamburgerIcon />
      <PlayCircleIcon />
      <form onSubmit={handleSubmit}>
        <input
          type="text"
          id="user_name"
          placeholder="Enter Name"
          onChange={(e) => setName(e.target.value)}
          value={name}
        />
        <input
          type="text"
          id="user_email"
          placeholder="Enter Email"
          onChange={(e) => setEmail(e.target.value)}
          value={email}
        />
        <input
          type="password"
          id="user_password"
          placeholder="Enter Password"
          onChange={(e) => setPassword(e.target.value)}
          value={password}
        />
        <input type="submit" value="SUBMIT" />
      </form>
    </>
  );
}
