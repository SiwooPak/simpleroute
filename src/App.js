import logo from "./logo.svg";
import "./App.css";
import { BrowserRouter, Switch, Route, Link } from "react-router-dom";

// Home
function Home() {
  return <h1>Home</h1>;
}

function MyPage() {
  return <h1>MyPage</h1>;
}

function DashBoard() {
  return <h1>DashBoard</h1>;
}

function App() {
  return (
    <BrowserRouter>
      <div className="App">
        <nav>
          <ul>
            <li>
              {/* Link 태그와 to속성을 이용하여 path 주소에 연결  */}
              <Link to="/" >Home</Link>
            </li>
            <li>
              <Link to="/about">MyPage</Link>
            </li>
            <li>
              <Link to="/dashboard">DashBoard</Link>
            </li>
          </ul>
        </nav>
        <Switch>
          {/* exact 주어진 경로와 정확히 일치해야만 그 컴포넌트를 보여줌. */}
          <Route exact path="/">
            <Home />
          </Route>
          <Route path="/about">
            <MyPage />
          </Route>
          <Route path="/dashboard">
            <DashBoard />
          </Route>
        </Switch>
      </div>
    </BrowserRouter>
  );
}

export default App;
