import { storiesOf } from '@storybook/react';
import { exampleStory } from '../../../../.storybook/lucid-docs-addon';

import ButtonCode from '!!raw-loader!./stories/ButtonsCode'; // eslint-disable-line
import ButtonComponent from './stories/ExampleComponent';
import Button from './stories/DocComponent';

storiesOf('Button', module)
    .add('Button with text',
        exampleStory({
            component: Button,
            example: ButtonComponent,
            code: ButtonCode,
            options: { showAddonPanel: true }
        })
    );
