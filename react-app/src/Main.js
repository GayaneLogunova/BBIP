import { Switch, Route } from 'react-router-dom'
import Registration from "./Registration"
import App from "./App"

const Main = () => (
  <main>
    <Switch>
      <Route exact path='/' component={App}/>
      <Route path='/registration' component={Registration}/>
    </Switch>
  </main>
)
export default Main;