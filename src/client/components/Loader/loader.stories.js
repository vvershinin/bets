import { storiesOf } from '@storybook/react';
import { exampleStory } from '../../../../.storybook/lucid-docs-addon';

import LoaderNewsFeedCode from '!!raw-loader!./stories/LoaderNewsFeedCode'; // eslint-disable-line
import LoaderTopNewsCode from '!!raw-loader!./stories/LoaderTopNewsCode'; // eslint-disable-line

import LoaderTopNewsComponent from './stories/ExampleLoaderTopNewsComponent';
import LoaderNewsFeedComponent from './stories/ExampleLoaderNewsFeedComponent';

import LoaderDoc from './stories/DocComponent';

storiesOf('Loader', module)
    .add('Loader top news',
        exampleStory({
            component: LoaderDoc,
            example: LoaderTopNewsComponent,
            code: LoaderTopNewsCode,
            options: { showAddonPanel: true }
        })
    )
    .add('Loader feed news',
        exampleStory({
            component: LoaderDoc,
            example: LoaderNewsFeedComponent,
            code: LoaderNewsFeedCode,
            options: { showAddonPanel: true }
        })
    );
