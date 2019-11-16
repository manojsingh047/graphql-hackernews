import React from "react";
import "./../styles/App.css";
import { LinkList } from "./LinkList";
import CreateLink from "./CreateLink";

function App() {
  return (
    <div>
      <LinkList />
      <CreateLink />
    </div>
  );
}

export default App;
