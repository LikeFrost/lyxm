import request from '@/utils/request';
import {createStore} from '@ice/store';
import login from './login.store';
import device from './device.store';

const models = {
    login,
    device,
} 

const store = createStore(models);

export default store;