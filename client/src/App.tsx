import {LoginForm} from "./components/LoginForm";

function App() {
  return (
    <div className="App">
      <LoginForm></LoginForm>
    </div>
  );
}

export default App;


// <button type="button" onClick={() => {
//         fetch('/api/data')
//         .then((res) => {
//           return res.json();
//         })
//         .then((data) => {
//           console.log(data);
//         });
//       }}>get data</button>