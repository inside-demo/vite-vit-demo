import type { UserConfig } from 'vite';
import vitApp from '@vitjs/vit';

const config: UserConfig = {
  plugins: [
    vitApp({
      // Configure routing according to the project structure, and import components uniformly from the `src` directory
      // icon currently supports automatic escaping as icons in [`@ant-design/icons`](https://ant.design/components/icon/#List-of-icons)
      routes: [
        {
          path: '/',
          component: './layouts/BasicLayout',
          routes: [
            {
              path: '/',
              redirect: '/welcome',
              exact: true,
            },
            {
              path: '/welcome',
              icon: 'smile',
              name: 'Welcome',
              component: './pages/Welcome',
            },
          ],
        },
      ],
    }),
  ],
};

export default config;