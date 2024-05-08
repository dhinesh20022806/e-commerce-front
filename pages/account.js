import Account from "@/components/Account";
import Header from "@/components/Header";
import LoginForm from "@/components/LoginForm";
import SignupForm from "@/components/SignupForm";
import { CartContext } from "@/components/CartContext";
import { useContext } from "react";

const account = () => {
    const {state,handleLogin, handleLogout, handleSignup , loginInfo} = useContext(CartContext)
    

    

    if(state.state === null && state.data !== null){
        return (<>
            <Header></Header>
            <Account email={state.data} handleLogout={handleLogout} />

        </>)
    }


       
    return (<>
       <Header />
      {state.state? <LoginForm handleSignup={handleSignup} loginInfo={loginInfo} /> : <SignupForm handleLogin={handleLogin} />}
    </>);
};

export default account;
