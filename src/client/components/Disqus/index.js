import React from 'react';
import PropTypes from 'prop-types';

const DISQUS = undefined;

class EntryComments extends React.Component {
    disqusSetupAttempts = 0;

    setupDisqus = () => {
        const {
            disqusURL
        } = this.props;

        const d = document;
        const s = d.createElement('script');

        s.src = disqusURL;
        s.setAttribute('data-timestamp', +new Date());
        (d.head || d.body).appendChild(s);
    };

    componentDidMount() {
        const {
            title,
            shortName,
            identifierID
        } = this.props;

        this.setupDisqus();

        const disqusSetupAttempt = setInterval(
            () => {
                if (typeof DISQUS !== 'undefined') {
                    DISQUS.reset({
                        reload: true,
                        config() {
                            this.page.title = title;
                            this.page.url = window.location.href;
                            this.page.shortName = shortName;
                            this.page.identifier = identifierID;
                        }
                    });
                    clearInterval(disqusSetupAttempt);
                }

                this.disqusSetupAttempts += 1;
                if (this.disqusSetupAttempts >= 3) {
                    clearInterval(disqusSetupAttempt);
                }
            },
            1000,
        );
    }

    render() {
        const {
            identifierID
        } = this.props;

        return (
            <div id={ identifierID } className="disqusComponent" />
        );
    }
}

EntryComments.propTypes = {
    title: PropTypes.string,
    shortName: PropTypes.string,
    disqusURL: PropTypes.string.isRequired,
    identifierID: PropTypes.string.isRequired
};

EntryComments.defaultProps = {
    title: '',
    shortName: ''
};

export default EntryComments;
