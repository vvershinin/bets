import { storiesOf } from '@storybook/react';
import { exampleStory } from '../../../../.storybook/lucid-docs-addon';

import ImageCode from '!!raw-loader!./stories/ImageCode'; // eslint-disable-line
import ImageComponent from './stories/ExampleComponent';
import ImageDoc from './stories/DocComponent';

storiesOf('Image', module)
    .add('Image Simple',
        exampleStory({
            component: ImageDoc,
            example: ImageComponent,
            code: ImageCode,
            options: { showAddonPanel: true }
        })
    );
