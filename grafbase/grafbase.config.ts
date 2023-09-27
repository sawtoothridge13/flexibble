import { auth, config, g } from '@grafbase/sdk';

const User = g.model('User', {
  name: g.string().length({ min: 2, max: 20 }),
  email: g.string().unique(),
});

export default config({
  schema: g,
});
