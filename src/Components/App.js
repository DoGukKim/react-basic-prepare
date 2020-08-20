import React from "react";
import Screen from "./Screen";
import PropsTypes from "prop-types";

function App() {
  return (
    <>
      <Screen name="React!" favNum={355435416351}>
        I like TS and React!
      </Screen>
    </>
  );
}

Screen.PropsTypes = {
  name: PropsTypes.String,
  favNum: PropsTypes.string.isRequired,
};
export default App;
