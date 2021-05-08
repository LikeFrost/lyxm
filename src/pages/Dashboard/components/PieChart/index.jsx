import React from 'react';
import { useState, useEffect } from 'react';
import { withRouter, Link } from 'react-router-dom';
import user from '@/utils/user';
import {createStore} from '@ice/store';
import request from '@/utils/request';
import store from '@/stores/index';
import { createHashHistory } from 'ice';
import { Chart, Interval, Tooltip, Axis,Legend, Coordinate,View} from 'bizcharts';
import styles from './index.module.scss';
import { DataView } from '@antv/data-set';

const { useModel } = store;
export default function PieChart() {
  const [state, dispatchers] = useModel('device');
  const { getDevice } = dispatchers;
  useEffect(()=>{
    getDevice()
  },1000)
  const dv = new DataView();
  dv.source(state).transform({
    type: 'percent',
    field: 'value',
    dimension: 'type',
    as: 'percent',
  });
  
  const dv1 = new DataView();
  dv1.source(state).transform({
    type: 'percent',
    field: 'value',
    dimension: 'name',
    as: 'percent',
  });

  return (
    <Chart
      className={styles.chart}
      height={290}
      data={dv.rows}
      autoFit
      scale={{
        percent: {
          formatter: (val) => {
            val = `${(val * 100).toFixed(2)}%`;
            return val;
          },
        }
      }}
    >
      <Coordinate type="theta" radius={0.5} />
      <Axis visible={false} />
      <Legend visible={false} />
      <Tooltip showTitle={false} />
      <Interval
        position="percent"
        adjust="stack"
        color="type"
        element-highlight
        style={{
          lineWidth: 1,
          stroke: '#fff',
        }}
        label={['type', {
           offset: -15,
        }]}
      />
      <View data={dv1.rows}>
        <Coordinate type="theta" radius={0.75} innerRadius={0.5 / 0.75} />
        <Interval
          position="percent"
          adjust="stack"
          color={['name', ['#BAE7FF', '#7FC9FE', '#71E3E3', '#ABF5F5', '#8EE0A1', '#BAF5C4']]}
          element-highlight
          style={{
            lineWidth: 1,
            stroke: '#fff',
          }}
          
          label={['name',{
            style:{fill:'skyblue'}
          }]}
        />
      </View>
    </Chart>
  );
}
