const user = {
    name:"徐富康",
    birth:"1995",
    sex:"男",
    job:"前端开发",
    tel:"18582484767",
    email:"18582484767@163.com",
    school:{
        name:"四川师范大学",
        major:"软件工程",
        time:"2014-2018",
        grade:"本科"
    },
    skills:[
        "熟练掌握Html/CSS/Javascript",
        "精通React开发框架、React Hook和React全家桶,擅长使用React Hook",
        "熟练掌握webpack自动化构建工具,使用过vite等自动化构建工具",
        "熟练掌握node,熟悉next和express等node框架",
        "熟悉小程序开发流程,熟悉Taro等react在小程序端的解决方案"
    ],
    experience:[
        {
            companyName:"上海微问家信息技术有限公司",
            time:["2022.05","至今"],
            itemList:[
                {
                    name:"客户中心",
                    href:"https://kefu.weiwenjia.com/",
                    technology:["React","TypeScript","AntDesignPro"],
                    discription:[
                        "账号中心/机器人实施流程/任务管理等业务模块的开发",
                        "电话助手等外接话机拨号功能，逸创云知识库外部对接",
                        "企业微信侧边栏功能开发",
                    ]
                },
                {
                    name:"工单系统（重构）",
                    href:"https://lxcrm.weiwenjia.com/",
                    technology:["React","Craco","LxUI"],
                    discription:[
                        "工单系统重构项目搭建",
                        "工单列表/客服组/自定义字段等业务模块开发",
                    ]   
                },
            ]
        },
        {
            companyName:"中天智慧科技有限公司",
            time:["2018 01","2022.03"],
            itemList:[
                {
                    name:"天府商城",
                    technology:["React","Node"],
                    discription:[
                        "商品/订单/购物车等多个模块的业务开发",
                        "后管平台多个管理模块开发",
                        "webpack压缩资源"
                    ]
                },
                {
                    name:"商户平台",
                    technology:["React","Redux","Webpack"],
                    discription:[
                        "商品/订单/店铺/合同等管理模块的开发",
                        "店铺/活动页的可视化",
                        "webpack优化项目,提升性能"
                    ]
                },
                // {
                //     name:"张家口银行专属手机",
                //     technology:["Vue","Webpack"]
                // },
                // {
                //     name:"张家口银行移动展业",
                //     technology:["Angular","Cordova","TypeScript"]
                // },
                {
                    name:"四川天府银行小程序",
                    technology:["React","Redux","Trao"],
                    discription:[
                        "首页/我的/网点等模块的开发",
                        "支付功能对接微信支付API,网点功能对接百度地图API",
                        "C端推客/助力活动/合伙人等活动的开发",
                        "项目搭建,前端任务分发"
                    ]
                },
                {
                    name:"四川天府银行公众号（重构）",
                    technology:["React","Redux"],
                    discription:[
                        "项目搭建，整体功能对接",
                        "账号管理/余额查询/对公业务的重构工作",
                    ]
                }
            ]
        }

    ]
}
export default user