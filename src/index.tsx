import { useEffect, useRef } from "react";
import { createRoot } from "react-dom/client";
// import EventComponent from "./events/EventComponent";
import UserSearch from "./refs/UserSearch";
const App = () => {
  const count = useRef(0);

  useEffect(() => {
    count.current = count.current + 1;
  });

  return (
    <div>
      <UserSearch />
      <h1>Render Count: {count.current}</h1>
    </div>
  );
};
createRoot(document.querySelector("#root")!).render(<App />);
