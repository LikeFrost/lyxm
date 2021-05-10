import React, {useState} from 'react';
import {Table,Button,Icon,Dialog} from '@alifd/next';
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
  const [visible,setVisible]=useState(false);
  const onClick=()=>{
    setVisible(true);
  }
  const render1=()=>{
    return <a onClick={onClick}>详情</a>
  }
  const onOk=()=>{
    setVisible(false);
  }
  const onCancel=()=>{
    setVisible(false);
  }
  const onClose=()=>{
    setVisible(false);
  }

  return (
    <div>
      <Dialog
        title='设备故障详情'
        visible={visible}
        onOk={onOk}
        onCancel={onCancel}
        onClose={onClose}>
          时间 : 2021.05.01 18:54:23,<br/>
          设备编号 : 234682359,<br/>
          设备类别 : 温度传感器，<br/>
          设备位置 : 北纬21度，西经38度,<br/>
          告警详情 : 此处设备供电异常<br/>
        </Dialog>
      <Table dataSource={dataSource}
        hasBorder={true}
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