import { BrowserRouter, Route, Switch } from 'react-router-dom'
import { CSSTransition, TransitionGroup } from 'react-transition-group'
import { Suspense, lazy } from 'react'

import Layout from './layout'
import Loader from './components/Loader'
import { TElement } from './types'

const Home = lazy(() => import('./pages/Home'))
const Details = lazy(() => import('./pages/Details'))
const Error404 = lazy(() => import('./pages/Error404'))

const App = (): TElement => {
   return (
      <Suspense fallback={<Loader />}>
         <BrowserRouter>
            <TransitionGroup>
               <CSSTransition
                  timeout={300}
                  classNames="fade"
                  key={location.href}
               >
                  <Layout>
                     <Switch>
                        <Route exact path="/" component={Home} />
                        <Route
                           exact
                           path="/pokemon/:pokedex"
                           component={Details}
                        />
                        <Route exact path="*" component={Error404} />
                     </Switch>
                  </Layout>
               </CSSTransition>
            </TransitionGroup>
         </BrowserRouter>
      </Suspense>
   )
}

export default App
