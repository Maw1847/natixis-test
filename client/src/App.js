import {BrowserRouter, Switch, Route} from "react-router-dom";
import Home from './pages/Home';
import List from './pages/List';
import ListIncomplete from './pages/ListIncomplete';
import NotFound from './pages/NotFound';
import Add from './pages/Add';
import Detail from "./pages/Detail";

function App() {
  return (
    <BrowserRouter>
      <Switch>
        <Route path="/" exact component={Home} />
        <Route path="/tasks" exact component={List} />
        <Route path="/tasks/add" exact component={Add} />
        <Route path="/tasks/incomplete" exact component={ListIncomplete } />
        <Route path="/tasks/detail" exact component={Detail} />
        <Route component={NotFound} />
      </Switch>
    </BrowserRouter>
  );
}

export default App;
