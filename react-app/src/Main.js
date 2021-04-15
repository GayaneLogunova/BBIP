import { Switch, Route } from 'react-router-dom'
import Registration from "./Registration"
import App from "./App"
import Cards_render from "./Cards_render"

const Main = () => (
  <main>
    <Switch>
      <Route path='/registration' component={Registration}/>
      <Route path='/table' component={Cards_render}/>
    </Switch>
  </main>
)
export default Main;