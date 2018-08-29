import { storiesOf } from '@storybook/react';
import { exampleStory } from '../../../../.storybook/lucid-docs-addon';

import WindowResizeCode from '!!raw-loader!./stories/WindowResizeCode'; // eslint-disable-line
import WindowResizeHOCCode from '!!raw-loader!./stories/WindowResizeHOCCode'; // eslint-disable-line

import { WindowResizeExample, WindowResizeHOCExample } from './stories/ExampleComponent';

import WindowResizeDocument from './stories/DocComponent';

storiesOf('Window Resize Listener', module)
    .add('Window resize component',
        exampleStory({
            component: WindowResizeDocument,
            example: WindowResizeExample,
            code: WindowResizeCode,
            options: { showAddonPanel: true }
        })
    )
    .add('Window resize HOC function',
        exampleStory({
            component: WindowResizeDocument,
            example: WindowResizeHOCExample,
            code: WindowResizeHOCCode,
            options: { showAddonPanel: true }
        })
    );
