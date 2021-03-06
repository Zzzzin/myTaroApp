import Taro, { Component, Config } from '@tarojs/taro'
import { View, Text } from '@tarojs/components'
import './my.scss'
import { AtAvatar } from 'taro-ui'

export default class My extends Component {

  componentWillMount () { }

  componentDidMount () { }

  componentWillUnmount () { }

  componentDidShow () { }

  componentDidHide () { }

  /**
   * 指定config的类型声明为: Taro.Config
   *
   * 由于 typescript 对于 object 类型推导只能推出 Key 的基本类型
   * 对于像 navigationBarTextStyle: 'black' 这样的推导出的类型是 string
   * 提示和声明 navigationBarTextStyle: 'black' | 'white' 类型冲突, 需要显示声明类型
   */
  config: Config = {
    navigationBarTitleText: '我的'
  }

  render () {
    return (
      <View className='my'>
        <AtAvatar className='atavatar' circle text='头像' image='https://jdc.jd.com/img/200'></AtAvatar>
        <Text>Hello world!</Text>
      </View>
    )
  }
}
