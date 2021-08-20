import { useState, useEffect } from 'react'
import { supabase } from '../utils/supabaseClient'
import Auth from '../components/Auth'
import Account from '../components/Account'

export default function Home() {
  const [session, setSession] = useState(null)

  useEffect(() => {
    setSession(supabase.auth.session())

    supabase.auth.onAuthStateChange((_event, session) => {
      setSession(session)
    })
  }, [])

  return (
    <div className="container" style={{ padding: '50px 0 100px 0' }}>
      {!session ? <Auth /> : <Account key={session.user.id} session={session} />}
    </div>
  )
}



// import Head from "next/head";
// import { useState, useEffect } from "react";
// import useSWR from "swr";
// import { useRouter } from "next/router";
// import useUser from "../lib/useUser";

// // CSS Modules
// import styles from "../styles/Home.module.scss";

// // Local components
// import Layout from "../components/Layout";
// import LoginForm from "../components/LoginForm";
// import LoginButton from "../components/LoginButton";

// const Home = (props) => {
//   const { user } = useUser({ redirectTo: "/login" });

//   // const postFetcher = (url) =>
//   //   fetch(url, {
//   //     body: JSON.stringify({
//   //       login: router.query.login,
//   //     }),
//   //     headers: {
//   //       "Content-Type": "application/json",
//   //     },
//   //     method: "POST",
//   //   }).then((r) => r.json());

//   // const shouldFetch = typeof router.query.login !== "undefined";

//   // const { data, error } = useSWR(
//   //   shouldFetch ? "/api/decode-login" : null,
//   //   postFetcher
//   // );

//   // const { data, error } = useSWR("/api/user", postFetcher);

//   // if (data) console.log(data);

//   const onMount = async () => {
//     console.log("Mounted...");
//   };

//   const onUser = async () => {
//     console.log(user);
//   };

//   useEffect(() => {
//     onMount();
//   }, []);

//   useEffect(() => {
//     if (typeof user !== "undefined") onUser();
//   }, [user]);

//   return (
//     <Layout>
//       <Head>
//         <title>Hypr</title>
//         <link rel="icon" href="/favicon.ico" />
//       </Head>
//       Hello {user?.username}
//       {/* <LoginButton /> */}
//     </Layout>
//   );
// };

// export default Home;
