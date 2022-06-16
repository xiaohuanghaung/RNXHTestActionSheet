import {NativeModules} from 'react-native';
import {RCIMIWEngineOptions} from '../Options/RCIMIWEngineOptions'
import {RCIMIWConversationType} from './RCIMIWDefines';

const RongIMWrapperModule = NativeModules.RongIMWrapperModule;

export default class RCIMIWEngine {

  /**
   * 初始化
   */
  static create(appkey: string) {
    RongIMWrapperModule?.create(appkey)
  }

  static createByOptions(appkey: string, options?: RCIMIWEngineOptions) {
    RongIMWrapperModule?.create(appkey, options)
  }

  static destroy() {
    RongIMWrapperModule?.destroy()
  }

  /**
   * 连接 & 断开链接
   */
  static connet(token: string, timeout: number) {
    RongIMWrapperModule?.connet(token, timeout)
  }

  static disconnet(receivePush: boolean) {
    RongIMWrapperModule?.disconnet(receivePush)
  }

  /**
   * 消息创建
   */
   static createTextMessage(conversationType: RCIMIWConversationType, targetId?: string, channelId?: string, text?: string, callback?: (message: any) => void) {
    RongIMWrapperModule?.createTextMessage(conversationType, targetId, channelId, text).then((message: any) => {
      if (callback) {
        callback(message)
      }
    })
  }

  /**
   * 发送消息
   */
  static sendMessage(message: any, callback?: (code) => void) {
    RongIMWrapperModule?.sendMessage(message).then((code: number) => {
      if (callback) {
        callback(code)
      }
    })
  }
}
