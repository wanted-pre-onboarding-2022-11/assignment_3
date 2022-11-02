// import { useEffect } from "react";
// import { getAllType } from "./api/index";

import Router from "@/routes/index";

function App() {
  // const type = async () => {
  //   try {
  //     const { payload } = await getAllType();
  //     console.log("fetch", payload);
  //   } catch (e) {
  //     console.log(e);
  //   }
  // };

  // useEffect(() => {
  //   type();
  // }, []);
  return <Router />;
}

export default App;
