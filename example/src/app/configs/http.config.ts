export const HttpConfig = {

    // 服务器接口地址
    // SERVER_URL: 'https://www.cool1024.com',
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
        TOKEN_ERROR: '您的登入已经过期，请重新登入',
        AUTH_ERROR: '您没有权限访问这些数据',
        NETWORK_ERROR: '网络好像出问题了',
        TIMEOUT_ERROR: '服务器很久没有响应了',
        RESPONSE_CONTENT_ERROR: '接收到一个错误的响应',
        CHECK_ERROR: '未授权的令牌~',
        OTHER_ERROR: '其他错误，异常的请求',
        PARAMS_ERROR: '参数错误'
    },

    // 权限头部参数配置
    AUTH_HEADER_PARAMS: ['ng-params-one', 'ng-params-two', 'ng-params-three'],

    // 平台参数配置
    PLATFORM_NAMWE: 'managerapi',

    // 401跳转页面
    TOKEN_ERROR_URL: '/dashboard/login',

    // 403跳转页面
    AUTH_ERROR_URL: '/dashboard/error',
};
