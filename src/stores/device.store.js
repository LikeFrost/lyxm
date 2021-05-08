import request from '@/utils/request';
import {createStore} from '@ice/store';
import user from '@/utils/user';
import axios from 'axios';
import {useState} from 'react';

const device = {
    state:[
        {value:97, type:'温度', name:'温度正常'},
        {value:3, type:'温度', name:'温度异常'},
        {value:90, type:'湿度', name:'湿度正常'},
        {value:10, type:'湿度', name:'湿度异常'},
        {value:94, type:'光照', name:'光照正常'},
        {value:6, type:'光照', name:'光照异常'},
    ],
    effects:()=>({
        async getDevice(){
            try{
                await axios.post('///'

                ).then(res=>{
                    setState(res.data)
                })
            }catch(e){
                console.log('get device error');
            }
        }
    })
}

export default device;