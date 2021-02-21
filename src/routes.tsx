import { Route , Switch } from 'react-router-dom'
import { Provider } from 'react-redux'
import { store } from './store'

import Cadastro from './pages/Cadastro'
import Home from './pages/Home'
import Carrinho from './pages/Carrinho'

function Routes() {
    return (
        <Provider store={store}>
            <Switch>
                <Route path='/' exact component={Cadastro} />
                <Route path='/home' exact component={Home} />
                <Route path='/carrinho' exact component={Carrinho} />
            </Switch>
        </Provider>
    )
}

export default Routes