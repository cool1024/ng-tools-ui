export const HttpConfig = {

    // 服务器接口地址
    SERVER_URL: 'http://127.0.0.1',

    // 请求超时时间
    TIME_OUT: 10000,

    // 错误提示时间
    TOAST_ERROR_TIME: 3000,

    // 响应错误提示消息
    HTTP_ERRORS: {
        API_DATA_ERROR: '服务器数据错误，无法解析的数据格式~',
        SERVER_ERROR: '服务器处理异常，无法获取正常的服务器响应',
        NOTFOUND_ERROR: '哎呀，请求地址不存在',
        AUTH_ERROR: '权限校验失败，请提供正确的令牌',
        NETWORK_ERROR: '网络好像出问题了',
        TIMEOUT_ERROR: '服务器很久没有响应了',
        OTHER_ERROR: '接收到一个错误的响应',
        CHECK_ERROR: '未授权的令牌~'
    }
};
