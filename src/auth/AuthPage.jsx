import React, { useEffect, useState } from "react";
import { getCurrentUser, signInWithEmailAndPass, signInWithGoogle, signOutUser, signUpWithEmailAndPass } from "auth/auth.utils";

const AuthPage = () => {
  const [user, changeUser] = useState(null);
  useEffect(() => {
    const newUser = getCurrentUser();
    (newUser) && changeUser(newUser);
  }, [])
  if (user) {
    return <button onClick={() => signOutUser() || changeUser(null)}>sign out</button>
  }

  return (
    <div>
      <form className="sign-in" onSubmit={async (event) => {
        event.preventDefault();
        const { password, email } = event.target.elements;
        const userdoc = await signInWithEmailAndPass({ email: email.value, password: password.value });
        changeUser(userdoc);
      }}>
        <h1>Sign in</h1>
        <input type="email" placeholder="email" required name="email" />
        <input type="password" placeholder="pass" required name="password" />
        <button type="submit">Submit</button>
        <button onClick={() => signInWithGoogle().then(changeUser)}>Sign in with google</button>
      </form>
      <form className="sign-up" onSubmit={async (event) => {
        event.preventDefault();
        const { displayName, password, email, phoneNumber } = event.target.elements;
        const userdoc = await signUpWithEmailAndPass({ displayName: displayName.value, password: password.value, email: email.value, phoneNumber: phoneNumber.value });
        changeUser(userdoc);
      }}>
        <h1>Sign up</h1>
        <input type="email" placeholder="email" name="email" required />
        <input type="password" placeholder="pass" name="password" required />
        <input type="text" placeholder="user name" name="displayName" required />
        <input type="tel" placeholder="phone" name="phoneNumber" required />
        <button type="submit">Submit</button>
      </form>
    </div>
  )
}

export default AuthPage;