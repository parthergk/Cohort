// "use client"
// import { SessionProvider, signIn, signOut, useSession } from "next-auth/react";

import { getServerSession } from "next-auth";

export default async function Home() {
  const session = await getServerSession();

  return (
    <div>{
      JSON.stringify(session)
      }</div>
    // <SessionProvider>
    // <Landing/>
    //  </SessionProvider>
  );
}

// function Landing (){
//   const session = useSession();
//   return <div>
//     {session.status === "authenticated" && <button onClick={()=> signOut()}>Sign Out</button>}
//     {session.status === "unauthenticated" && <button onClick={()=> signIn()}>Sign In</button>}
//   </div>
// }
