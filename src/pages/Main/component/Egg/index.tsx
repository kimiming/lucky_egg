import React, { Component } from 'react'
import * as styles from './style.less'
import GetEggInfo from '../GetEggInfo'


export default class Egg extends Component<any> {
    constructor(props: any) {
        super(props)
    }

    render() {
        const { handleEgg,closeShow } = this.props
        const { knockNum, isShow } = this.props.datas
        return (
            <div className={styles.eggMain}>
                <div className={styles.eggPrize}>
                    <ul>
                        <li onClick={(v) => handleEgg(1)}></li>
                        <li onClick={(v) => handleEgg(2)}></li>
                        <li onClick={(v) => handleEgg(3)}></li>
                    </ul>
                    <div className={styles.knockNum}>你今天还敲击的次数<span> {knockNum} </span></div>
                </div>
                {isShow && <GetEggInfo close={()=>closeShow()}/>}
            </div>
        )
    }
}
