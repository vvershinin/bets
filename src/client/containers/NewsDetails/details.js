import React, { Component } from 'react';
import { connect } from 'react-redux';
import { translate } from 'react-i18next';
import { Sticky } from 'semantic-ui-react';
import { Link } from 'react-router-dom';
import { posts } from '../../actions';
import Tags from '../../components/Tags';
import SocialLinks from '../../components/SocialLinks';
import Disqus from '../../components/Disqus';
import TopNews3 from '../../components/TopNews3';
import TopNews from '../../components/TopNews';
import constant from '../../constants/';

import './details.scss';
import WindowResizeListenerHOC from '../../components/WindowResize/windowResizeHOC';

@translate(['common'])
class Details extends Component {
    constructor(props) {
        super(props);
        this.state = {};
    }

    componentWillMount() {
        this.loadData();
    }

    componentDidMount() {
        this.scrollTop();
    }

    componentDidUpdate(prevProps) {
        const { match } = this.props;
        if (prevProps.match.params.id !== match.params.id) {
            this.loadData();
            this.scrollTop();
        }
    }

    loadData = () => {
        const lang = this.props.i18n.language;
        const id = this.props.match.params.id;

        this.props.dispatch(posts.getPostDetails.init({ lang, id }));
        this.props.dispatch(posts.getPostComments.init({ lang, id }));
        this.props.dispatch(posts.getTop3News.init({ lang }));
    };

    handleContextRef = contextRef => this.setState({ contextRef });

    scrollTop = () => {
        window && window.scroll({
            top: 0,
            left: 0,
            behavior: 'smooth'
        });
    };

    render() {
        const {
            t,
            posts: {
                details,
                top3
            },
            windowSize: {
                windowWidth
            }
        } = this.props;

        const { contextRef } = this.state;
        const postDetails = details ? details.data : null;
        const recommendedNews = (top3 ? top3.data : []).slice(0, 2);

        return (
            <div className="postDetailsContainer ">
                { postDetails &&
                    <div>
                        <TopNews3 data={ [postDetails] } isDetailsPage={ true } />
                        <div
                            key="content"
                            ref={ this.handleContextRef }
                            className="postContent"
                        >
                            <Sticky
                                className="stickyElement"
                                context={ contextRef }
                                pushing
                            >
                                <div className="detailsLeftBlock">
                                    <Link
                                        className="ui button backToNewsBtn"
                                        to={ t('path.news') }
                                    >{ t('back') }
                                    </Link>
                                    <div className="socialLinks">
                                        <SocialLinks type={ 'vertical' } />
                                    </div>
                                </div>
                            </Sticky>
                            <div className="detailsMainBlock">
                                { postDetails &&
                                    <div
                                        className="detailsContent"
                                        dangerouslySetInnerHTML={
                                            { __html: postDetails
                                                && postDetails.content.rendered
                                            } }
                                    />
                                }
                                { postDetails.tags.length > 0 &&
                                    <div className="detailsTagsBlock">
                                        <Tags list={ postDetails.tags } />
                                    </div>
                                }
                            </div>
                            <div className="detailsMainBlock detailsMainBlockDisqus">
                                <div className="container">
                                    {
                                        recommendedNews.length > 0 &&
                                        <TopNews
                                            data={ recommendedNews }
                                            title={ t('recommendedNews') }
                                        />
                                    }
                                </div>
                                {
                                    windowWidth > constant.application.lgScreenMin &&
                                    <Disqus
                                        disqusURL={ 'https://bets-io-1.disqus.com/embed.js' }
                                        identifierID={ 'disqus_thread' }
                                        shortName={ 'shortName' }
                                        title={ 'news pate' }
                                    />
                                }
                            </div>
                        </div>
                    </div>
                }
            </div>
        );
    }
}

const mapStateToProps = state => (state);

export default connect(mapStateToProps)(WindowResizeListenerHOC(Details));
