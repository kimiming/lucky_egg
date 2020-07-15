import React, { Component } from 'react'
import * as styles from './style.less'

export default class GetEggInfo extends Component<any> {
    constructor(props:any){
        super(props)
    }
    render() {
        let {close} = this.props
        return (
            <div className={styles.infoMain}>
                <div className={styles.infoContent}>
                    <span>很遗憾你没有中奖</span>
                    <div>
                        <button onClick={close}>确定</button>
                    </div>

                </div>
            </div>
        )
    }
}
