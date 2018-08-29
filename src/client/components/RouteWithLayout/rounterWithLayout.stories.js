import { storiesOf } from '@storybook/react';
import { exampleStory } from '../../../../.storybook/lucid-docs-addon';

import RouteWithLayoutCode from '!!raw-loader!./stories/RouteWithLayoutCode'; // eslint-disable-line
import RouteWithLayoutExample from './stories/ExampleComponent';
import RouteWithLayoutDocument from './stories/DocComponent';

storiesOf('Route With Layout', module)
    .add('Route With Layout',
        exampleStory({
            component: RouteWithLayoutDocument,
            example: RouteWithLayoutExample,
            code: RouteWithLayoutCode,
            options: { showAddonPanel: true }
        })
    );
