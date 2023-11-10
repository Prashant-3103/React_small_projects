import Header from './components/Header';
import Auth from './components/Auth';
import Counter from './components/Counter';
import {Fragment} from 'react'
import UserProfile from './components/UserProfile';
import { UseSelector, useSelector } from 'react-redux/es/hooks/useSelector';
import { useDispatch } from 'react-redux';
function App() {
 const isAuth =  useSelector(state=>state.auth.isAuthenticated)
  return (
<Fragment>
  <Header/>
{!isAuth &&  <Auth/>}
{isAuth && <UserProfile/>}
  <Counter/>

</Fragment>

  );
}

export default App;
