import React, { Component } from 'react';
import { connect } from 'react-redux';
import { translate } from 'react-i18next';

import { posts } from '../../actions';
import Infinite from '../../components/InfiniteScroller';
import TopNews3 from '../../components/TopNews3';
import TopNews from '../../components/TopNews';
import NewsFeeds from '../../components/NewsFeeds';
import Loader from '../../components/Loader';
import constant from '../../constants/';


import './news.scss';
import WindowResizeListenerHOC from '../../components/WindowResize/windowResizeHOC';

@translate(['common'])
class News extends Component {
    constructor(props) {
        super(props);

        this.pageTopNews = 1;
        this.pageNewsFeed = 1;

        this.data = [];

        this.getNewsfeed = this.getNewsfeed.bind(this);
        this.getTopNews = this.getTopNews.bind(this);
        this.getTop3News = this.getTop3News.bind(this);
    }

    resetNewsData = () => {
        this.props.dispatch(posts.resetNewsData());
    };

    getNewsfeed(width) {
        const {
            i18n: {
                language
            }
        } = this.props;

        const perPage = width > constant.application.lgScreenMin ?
            constant.application.PER_PAGE_NEWSFEED : constant.application.PER_PAGE_NEWSFEED_SM;

        this.props.dispatch(posts.getNewsfeed.init(
            { lang: language, page: this.pageNewsFeed, perPage })
        );
    }

    getTopNews() {
        const lang = this.props.i18n.language;
        this.props.dispatch(posts.getTopNews.init({ lang, page: this.pageTopNews }));
    }

    getTop3News() {
        const lang = this.props.i18n.language;
        this.props.dispatch(posts.getTop3News.init({ lang }));
    }

    handlerChangeLanguage = () => {
        this.resetNewsData();
        this.getNewsfeed(1024);
        this.getTopNews();
        this.getTop3News();
    };

    componentWillMount() {
        const {
            posts: {
                top3
            }
        } = this.props;

        !top3 && this.getTop3News(); // if data exists
    }

    componentDidMount() {
        const {
            posts: {
                top,
                all
            }
        } = this.props;

        const localWidth =
            window.innerWidth ||
            document.documentElement.clientWidth ||
            document.body.clientWidth;

        window.addEventListener('language', this.handlerChangeLanguage);

        (localWidth >= constant.application.lgScreenMin) && // if screen width > 1024
            !top && this.getTopNews(); // if data exists

        !all && this.getNewsfeed(localWidth); // if data data exists
    }

    componentWillUnmount() {
        window.removeEventListener('language', this.handlerChangeLanguage);
    }

    updatePageTop = () => {
        this.pageTopNews++;
    };

    updatePageNewsFeed = () => {
        this.pageNewsFeed++;
    };

    infiniteLoad() {
        this.updatePageTop();
        this.getTopNews();
    }

    infiniteLoadNewsFeed() {
        this.updatePageNewsFeed();
        this.getNewsfeed();
    }

    render() {
        const {
            t,
            posts: {
                loading,
                top,
                top3,
                all
            },
            windowSize: {
                windowWidth
            }
        } = this.props;

        const top3NewsData = (top3 ? top3.data : []);
        const topNewsData = (top ? top.data : []);
        const newsFeedData = (all ? all.data : []);

        const headers = (top && top.nextPageData) ? parseInt(top.nextPageData['x-wp-totalpages'], 10) : 1;
        const feedHeaders = (all && all.nextPageData) ? parseInt(all.nextPageData['x-wp-totalpages'], 10) : 1;

        const TopLoader = <Loader className={ 'topLoader' } text={ t('moreNews') } key={ 0 } />;
        const FeedLoader = <Loader className={ 'loaderFeed' } text={ t('moreNews') } key={ 0 } />;

        return (
            <div className="container">
                <div className="row">
                    <div className="col">
                        { top3NewsData.length > 0 ? <TopNews3 data={ top3NewsData } /> : <div /> }
                        <div className="row">
                            <div className="col-sm-12 col-lg-4">
                                <Infinite
                                    pageStart={ 0 }
                                    loadMore={ this.infiniteLoadNewsFeed.bind(this) }
                                    loader={ FeedLoader }
                                    useWindow={ true }
                                    hasMore={ !loading && (feedHeaders > this.pageNewsFeed) && newsFeedData.length > 0 } // true
                                >
                                    { newsFeedData.length > 0 ? <NewsFeeds data={ newsFeedData } /> : <div /> }
                                </Infinite>
                            </div>

                            {(windowWidth >= constant.application.lgScreenMin) &&
                                <div className="col-lg-8 hidden-sm visible-lg">
                                    <Infinite
                                        pageStart={ 0 }
                                        loadMore={ this.infiniteLoad.bind(this) }
                                        loader={ TopLoader }
                                        useWindow={ true }
                                        hasMore={ !loading && (headers > this.pageTopNews) && topNewsData.length > 0 } // true
                                    >
                                        { topNewsData.length > 0 ? <TopNews data={ topNewsData } title={ t('topNews') } /> : <div /> }
                                    </Infinite>
                                </div>
                            }
                        </div>
                    </div>
                </div>
            </div>
        );
    }
}

const mapStateToProps = state => (state);

export default connect(mapStateToProps)(WindowResizeListenerHOC(News));
