import { message } from 'antd'
import { EffectsCommandMap, Model } from 'dva'
import { AnyAction, Reducer } from 'redux'


message.config({
    top: 300,
    maxCount: 1
})

export type Effect = (
    action: AnyAction,
    effects: EffectsCommandMap & { select: <T> (func: (state: StateType) => T) => T },
) => void;

interface StateType {
    knockNum: number,
    eggList: any
}
interface ModelType {
    namespace: string;
    state: StateType;
    effects: {};
    reducers: {}
}

const initstate = {
    isShow:false,  //显示敲击金蛋情况
    knockNum: 3,
    eggStaute: '', //00中奖，01未中奖
    eggList: [
        {
            id: 1,
            name: '未中奖',
        },
        {
            id: 2,
            name: '未中奖',
        }, 
        {
            id: 3,
            name: '未中奖',
        }
    ]
}

const Model: ModelType = {
    namespace: 'EggInfo',
    state: {
        ...initstate
    },
    effects: {},
    reducers: {
        SaveKnockNum(state: any, datas: any) {
            return { ...state, ...datas }
        }
    }
}
export default Model;