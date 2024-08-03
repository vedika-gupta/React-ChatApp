// import { auth } from "./firebase";
// import { useAuthState } from "react-firebase-hooks/auth";
// import "./App.css";
// import NavBar from "./components/NavBar";
// import ChatBox from "./components/ChatBox";
// import Welcome from "./components/Welcome";

// function App() {
//   const [user] = useAuthState(auth);

//   return (
//     <div className="App">
//       <NavBar />
//       {!user ? (
//         <Welcome />
//       ) : (
//         <>
//           <ChatBox />
//         </>
//       )}
//     </div>
//   );
// }

// export default App;
import React from 'react';
import { auth } from "./firebase";
import { useAuthState } from "react-firebase-hooks/auth";
import "./App.css";
import NavBar from "./components/NavBar";
import ChatBox from "./components/ChatBox";
import Welcome from "./components/Welcome";

function App() {
  const [user] = useAuthState(auth);

  return (
    <div className="App">
      <NavBar />
      <div className="app-content">
       <main className="main-content">
          {!user ? (
            <Welcome />
          ) : (
            <ChatBox />
          )}
        </main>
      </div>
    </div>
  );
}

export default App;
