import PropTypes from 'react-peek/prop-types';
import InfiniteScroller from '../index';

InfiniteScroller.displayName = 'InfiniteScroller';

InfiniteScroller.peek = {
    description: 'Infinitely load content using a React Component.',
    categories: ['component']
};

InfiniteScroller.propTypes = {
    children: PropTypes.node.isRequired,
    element: PropTypes.node`Name of the element that the component should render as.`,
    hasMore: PropTypes.bool`Whether there are more items to be loaded. Event listeners are removed if false.`,
    initialLoad: PropTypes.bool`Whether the component should load the first set of items.`,
    isReverse: PropTypes.bool`Whether new items should be loaded when user scrolls to the top of the scrollable area.`,
    // eslint-disable-next-line
    loadMore: PropTypes.func.isRequired`A callback when more items are requested by the user. Receives a single parameter specifying the page to load e.g. function handleLoadMore(page) { /* load more items here */ } }`,
    loader: PropTypes.node`A React component to render while more items are loading. The parent component must have a unique key prop.`,
    pageStart: PropTypes.number`The number of the first page to load, With the default of 0, the first page is 1.`,
    ref: PropTypes.func,
    threshold: PropTypes.number`The distance in pixels before the end of the items that will trigger a call to loadMore.`,
    useCapture: PropTypes.bool`Proxy to the useCapture option of the added event listeners.`,
    useWindow: PropTypes.bool`Add scroll listeners to the window, or else, the component's parentNode.`
};

export default InfiniteScroller;
