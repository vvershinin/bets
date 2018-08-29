import { storiesOf } from '@storybook/react';
import { exampleStory } from '../../../../.storybook/lucid-docs-addon';

import GameLogoCode from '!!raw-loader!./stories/GameLogoCode'; // eslint-disable-line
import GameLogoColorCode from '!!raw-loader!./stories/GameLogoColorCode'; // eslint-disable-line

import GameLogoComponent from './stories/ExampleComponent';

import GameLogo from './stories/DocComponent';


storiesOf('GameLogo', module)
    .add('GameLogo',
        exampleStory({
            component: GameLogo,
            example: GameLogoComponent,
            code: GameLogoCode,
            options: { showAddonPanel: true }
        })
    );
