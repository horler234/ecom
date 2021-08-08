import Head from "next/head";
import React, { useState } from "react";

import { signIn, signOut, useSession } from "next-auth/client";
import { useRouter } from "next/router";

export default function SignedPage() {
  const router = useRouter();

  const [session, loading] = useSession();
  console.log(session);

  if (!session) {
    router.push('/demo')
  }

  return (
    <>
      <Head>
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <title>Ecom | Home</title>
      </Head>
      Home
      
        <button
        onClick={() => {
          signOut();
        }}
      >
        Log Out
      </button>
      
      
    </>
  );
}
