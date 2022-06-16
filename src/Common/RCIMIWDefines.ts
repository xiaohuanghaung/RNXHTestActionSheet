// 错误码
export enum RCIMIWErrorCode {
  RCIMIWErrorCodeSuccess = 0,
  RCIMIWErrorCodeParamError = -101,
  RCIMIWErrorCodeEngineDestroyed = -102,
  RCIMIWErrorCodeNativeOperationError = -103,
  RCIMIWErrorCodeResultUnknown = -104,
}

// 连接状态
export enum RCIMIWConnectionStatus {
    /*!
     连接过程中，当前设备网络不可用
     @discussion 当网络恢复可用时，SDK 会做好自动重连，开发者无须处理。
     */
    RCIMIWConnectionStatusNetworkUnavailable = 0,
    
    /*!
     连接成功
     */
    RCIMIWConnectionStatusConnected = 1,
    
    /*!
     连接中
     */
    RCIMIWConnectionStatusConnecting = 2,

    /*!
     连接失败或未连接
     */
    RCIMIWConnectionStatusUnconnected = 3,
    
    /*!
     当前用户在其他设备上登录，此设备被踢下线
     */
    RCIMIWConnectionStatusKickedOfflineByOtherClient = 4,
    
    /*!
     Token无效

     @discussion
     Token 无效一般有两种原因。一是 token 错误，请您检查客户端初始化使用的 AppKey 和您服务器获取 token 使用的 AppKey
     是否一致；二是 token 过期，是因为您在开发者后台设置了 token 过期时间，您需要请求您的服务器重新获取 token
     并再次用新的 token 建立连接。
     */
    RCIMIWConnectionStatusTokenIncorrect = 5,
    
    /*!
     与服务器的连接已断开,用户被封禁
     */
    RCIMIWConnectionStatusConnUserBlocked = 6,
    
    /*!
     已登出
     */
    RCIMIWConnectionStatusSignOut = 7,
    
    /*!
     连接暂时挂起（多是由于网络问题导致），SDK 会在合适时机进行自动重连
    */
    RCIMIWConnectionStatusSuspend = 8,
    
    /*!
     自动连接超时，SDK 将不会继续连接，用户需要做超时处理，再自行调用 connectWithToken 接口进行连接
    */
    RCIMIWConnectionStatusTimeout = 9,
    
    /*!
     未知状态

     @discussion 建立连接中出现异常的临时状态，SDK 会做好自动重连，开发者无须处理。
     */
    RCIMIWConnectionStatusUnknown = 10,
};

// 会话类型
export enum RCIMIWConversationType {
    /*!
     无效类型
     */
    RCIMIWConversationTypeInvalid = 0,
    
    /*!
     单聊
     */
    RCIMIWConversationTypePrivate = 1,

    /*!
     群组
     */
    RCIMIWConversationTypeGroup = 2,

    /*!
     聊天室
     */
    RCIMIWConversationTypeChatroom = 3,

    /*!
     系统会话
     */
    RCIMIWConversationTypeSystem = 4,

    /*!
     超级群
     */
    RCIMIWConversationTypeUltraGroup = 5,
};