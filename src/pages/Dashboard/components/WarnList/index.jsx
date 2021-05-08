import React from 'react';
import {Table,Button,Icon} from '@alifd/next';
import { render } from 'react-dom';
import styles from './index.module.scss';

const dataSource=[
  {
    'id':'1232',
    'type':'温传',
  },
  {
    'id':'1452',
    'type':'光传',
  },
  {
    'id':'1232',
    'type':'温传',
  },
  {
    'id':'1452',
    'type':'光传',
  },
 
]
const render1=()=>{
  return <a href='javascript'>详情</a>
}
const onSort=()=>{

}
const propsConf={
  style:{
    background:'#132040',
    color:'skyblue'
  }
}
const setRowProps=(record,index)=>{
  return propsConf;
}

export default function WarnList() {
  return (
    <div>
      <Table dataSource={dataSource}
        hasBorder={true}
        onSort={onSort}
        size={'small'}
        emptyContent={'暂无故障设备！'}
        //useVirtual={true}
        useVirtual scrollToRow={5}
        maxBodyHeight={100}
        className={styles.list} cellProps={setRowProps}>
          <Table.Column width='50px' title='编号' dataIndex='id'/>
          <Table.Column width='50px' title='类别' dataIndex='type'/>
          <Table.Column  title='操作' cell={render1} />
      </Table>
    </div>
  );
}