import React from 'react';
import { ResponsiveGrid } from '@alifd/next';
import Guide from './components/Guide';
import PieChart from './components/PieChart';
import store from '@/stores/index';
import Position from './components/Position';
import styles from './index.module.scss'
import LineChart from'./components/LineChart';
import WarnList from'./components/WarnList';

const {Provider} = store;

const { Cell } = ResponsiveGrid;

const Dashboard = () => {
  return (
    <Provider>
      <ResponsiveGrid gap={5}>
        <Cell className={styles.title} colSpan ={12} rowSpan={1}>
          <h1>森林指标监测系统</h1>
        </Cell>
        <Cell className={styles.subtitle1} colSpan ={12} rowSpan={1}>
          <h2>设备状态监控</h2>
        </Cell>
        <Cell className={styles.subtitle2} colSpan ={12} rowSpan={1}>
          <h2>最新告警信息</h2>
        </Cell>
        <Cell className={styles.subtitle3} colSpan ={12} rowSpan={1}>
          <h2>设备位置分布散点图</h2>
        </Cell>
        <Cell className={styles.subtitle4} colSpan ={12} rowSpan={1}>
          <h2>设备访问人数</h2>
        </Cell>
        <Cell className={styles.subtitle5} colSpan ={12} rowSpan={1}>
          <h2>故障设备列表</h2>
        </Cell>
        <Cell className={styles.subtitle6} colSpan ={12} rowSpan={1}>
          <h2>专家建议</h2>
        </Cell>
        <Cell className={styles.subtitle7} colSpan ={12} rowSpan={1}>
          <h2>累计使用人数</h2>
        </Cell>
        <Cell className={styles.warn}colSpan ={12} rowSpan={1}>
              时间 : 2021.05.01 18:54:23,<br/>
              设备编号 : 234682359,<br/>
              设备类别 : 温度传感器，<br/>
              设备位置 : 北纬21度，西经38度,<br/>
              告警详情 : 此处设备供电异常<br/>
        </Cell>
        <Cell className={styles.list}colSpan ={12} rowSpan={1}>
              <WarnList/>
        </Cell>
        <Cell className={styles.sug}colSpan ={12} rowSpan={1}>
              &emsp;&emsp;林业是经济发展新常态下优化结构、提高质量效益的重要环节，是践行五大发展理念、转变发展方式的重要体现，是全面建成小康社会的重要任务，是构建生态安全屏障的重要支柱，是建设美丽中国的重要内容。
        </Cell>
        <Cell className={styles.num}colSpan ={12} rowSpan={1}>
              <h1>24329325</h1>
        </Cell>
      <Cell className={styles.chart} colSpan={4} rowSpan={4}>
        <PieChart/> 
      </Cell>
      <Cell className={styles.posi} colSpan={5} rowSpan ={2}>
        <Position/>
      </Cell>
      <Cell className={styles.linechart} colSpan={5} rowSpan ={2}>
        <LineChart/>
      </Cell>
      
    </ResponsiveGrid>
    </Provider>
    
  );
};

export default Dashboard;
