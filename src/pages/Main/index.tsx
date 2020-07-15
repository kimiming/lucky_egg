import React from 'react';
import * as styles from './style.less';
import Egg from './component/Egg'
import { connect } from 'dva'
import { Toast } from 'antd-mobile'

interface IProps { };

class Main extends React.Component<any> {
  constructor(props: any) {
    super(props)
    document.title='惠蓉保-砸金蛋'
  }
  handleEgg = (v: any) => {
    console.log(v)
    let { knockNum, isShow } = this.props.EggInfo
    if (knockNum > 0) {
      knockNum--
      this.props.dispatch({
        type: 'EggInfo/SaveKnockNum',
        ...{ knockNum, isShow: true }
      })
    } else {
      Toast.info('你今天的次数已经用完', 3)
    }
  }
  closeShow = () =>{
    this.props.dispatch({
      type:'EggInfo/SaveKnockNum',
      isShow:false
    })
  }
  render() {
    const { knockNum, isShow } = this.props.EggInfo
    return (
      <div className={styles.main}>
        <Egg
          datas={{ knockNum, isShow, }}
          handleEgg={this.handleEgg}
          closeShow={this.closeShow}
        />
      </div>

    )
  }
}
function mapStateTopProps(state: any) {

  return {
    EggInfo: state.EggInfo
  }
}
export default connect(mapStateTopProps)(Main);