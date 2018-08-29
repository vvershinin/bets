import React from 'react';
import { Switch } from 'react-router-dom';
import { connect } from 'react-redux';
import Cookies from 'js-cookie';
import { translate } from 'react-i18next';
import universal, { setHasBabelPlugin } from 'react-universal-component';

import RouteWithLayout from './components/RouteWithLayout';
import Layout from './containers/Layout/layout';
import Contact from './containers/Contact/contact.universal';
import Home from './containers/Home/home.universal';
import News from './containers/News/news.universal';
import Details from './containers/NewsDetails/details.universal';

setHasBabelPlugin();

const mapStateToProps = state => ({
    isLoggedIn: !!Cookies.get('test') || !!state.auth.IsLoggedOn
});

@translate(['common'])
@connect(mapStateToProps)
class App extends React.Component {
    home = universal(Home);
    contact = universal(Contact);
    news = universal(News);
    details = universal(Details);

    render() {
        const { t, isLoggedIn } = this.props;
        return (
            <Switch>
                <RouteWithLayout
                    path={ t('path.home') }
                    exact
                    layout={ Layout }
                    component={ this.home }
                    isLoggedIn={ isLoggedIn }
                />
                <RouteWithLayout
                    path={ t('path.news') }
                    exact
                    layout={ Layout }
                    component={ this.news }
                    isLoggedIn={ isLoggedIn }
                />
                <RouteWithLayout
                    path={ t('path.contact') }
                    exact
                    layout={ Layout }
                    component={ this.contact }
                    isLoggedIn={ isLoggedIn }
                />
                <RouteWithLayout
                    path={ t('path.details') }
                    layout={ Layout }
                    component={ this.details }
                    isLoggedIn={ isLoggedIn }
                />
            </Switch>
        );
    }
}

export default App;
