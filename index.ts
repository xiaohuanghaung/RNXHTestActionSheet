import RongIMWrapper from "./src/RongIMWrapper";
import RCIMIWEngine from './src/Common/RCIMIWEngine'
import {RCIMIWErrorCode, RCIMIWConnectionStatus, RCIMIWConversationType} from "./src/Common/RCIMIWDefines";
import {RCIMIWEngineOptions} from "./src/Options/RCIMIWEngineOptions";

function debugLog () {
  console.log('您好,您已成功接入RongIMWrapper,欢迎使用')
}

export {RongIMWrapper, RCIMIWEngine, RCIMIWErrorCode, RCIMIWConnectionStatus, RCIMIWConversationType, RCIMIWEngineOptions, debugLog}