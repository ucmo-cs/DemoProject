import './App.css'
import 'bootstrap/dist/css/bootstrap.min.css';
import {Container} from 'react-bootstrap';
import {Route} from 'react-router-dom';
import Header from './components/Header'
import SaveForm from './components/pages/user/SaveForm'
import Home from './components/pages/book/Home';
import LoginForm from './components/pages/user/LoginForm';
import JoinForm from './components/pages/user/JoinForm';
import UpdateForm from './components/pages/user/UpdateForm';
import Detail from './components/pages/book/Detail';


function App() {
  return (
    <div>
      <Header/>
      <Container>
        <Route path="/" exact={true} component={Home}/>
        <Route path="/save" exact={true} component={SaveForm}/>
        <Route path="/book/:id" exact={true} component={Detail}/>
        <Route path="/login" exact={true} component={LoginForm}/>
        <Route path="/join" exact={true} component={JoinForm}/>
        <Route path="/update/:id" exact={true} component={UpdateForm}/>
      </Container>    
    </div>
  );
}

export default App
