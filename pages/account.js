import React from "react";

import { useSession, signIn, signOut } from "next-auth/react";

const account = () => {
    const { data: session } = useSession();
    if (session) {
        return (
            <>
                Signed in as {session.user.email} <br />
                <button onClick={() => signOut()}>Sign out</button>
            </>
        );
    }
    return (
        <div>
            <div></div>
            <div>
                <h1>Login</h1>
                <button onClick={signIn}>Login with google</button>
            </div>
        </div>
    );
};

export default account;
