import React from "react";

import ExeInput from "./ExeInput";
import VideoElement from "./VideoElement";
import CustomHook from "./CustomHook";
import CustomHookUseFetch from "./CustomHookUseFetch";
import Exemplo1 from "./Exemplo1";
import { UserContextProvider } from "./Components/UserContext";
import Header from "./Components/Header";
import Content from "./Components/Content";
import ReduceForm from "./ReduceForm";

function App() {
  return (
    <div>
      {/*    <Exemplo1 />
      <p>------------------------------------------</p>
      <ExeInput />
      <p>------------------------------------------</p>
      <VideoElement />
      <p>------------------------------------------</p>
      <CustomHook />
      <p>------------------------------------------</p>
      <CustomHookUseFetch />
      <p>------------------------------------------</p>
      <UserContextProvider>
        <Header />
        <Content />
      </UserContextProvider> */}
      <p>------------------------------------------</p>
      <ReduceForm />
    </div>
  );
}

export default App;
