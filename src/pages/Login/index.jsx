import React from 'react';
import { ResponsiveGrid } from '@alifd/next';
import LoginBlock from './components/LoginBlock';
import store from '@/stores/index';
import styles from './index.module.scss';

const { Cell } = ResponsiveGrid;
const {Provider} = store;

function Login () {
  return(
    <Provider>
      <div className={styles.body}>
      <ResponsiveGrid gap={20}>
        <Cell colSpan={12}>
          <LoginBlock />
        </Cell>
    </ResponsiveGrid>
    </div>
    </Provider>
  )
};
export default Login;