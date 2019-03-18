const avatar = require('../img/me.png');
const zhihu = require('../img/zhihu.gif');
const houtai = require('../img/houtai.gif');
const todo = require('../img/todo.gif');

let info = {
  language: [{
      name: '中文',
      id: 'chinese',
      checked: true,
      sections: [{
          id: 'host',
          icon: 'zhuye',
          checked: true,
          greet: 'Hello!',
          author: 'Luis',
          img: avatar,
          note: '前端新人',
          contact: [{
            name: 'github',
            url: 'https://github.com/xiannvjiadexiaogouzi'
          }, {
            name: 'email',
            url: 'mailto:IBMkt36@163.com'
          }]
        },
        {
          id: 'introduction',
          icon: 'user',
          checked: false,
          name: '个人简介',
          introduction: '高效的自主学习能力 热爱发现以及解决问题',
          status: '前端工程师，求职中',
          baseInfo: [{
              dis: '1994',
              logo: 'birthday'
            }, {
              dis: '上海海洋大学 本科',
              logo: 'degree'

            },
            {
              dis: '上海',
              logo: 'position'

            },
            {
              dis: 'IBMkt36@163.com',
              logo: 'email2'

            },
          ]
        },
        {
          id: 'skill',
          icon: 'jishu',
          checked: false,
          name: '技能',
          skills: [{
            name: 'HTML',
            per: 80,
            color: '#e54d25'
          }, {
            name: 'CSS',
            per: 70,
            color: '#0070ba'
          }, {
            name: 'Javascript',
            per: 60,
            color: '#fac052'
          }, {
            name: 'Vue',
            per: 50,
            color: '#41b883'
          }, {
            name: 'webpack',
            per: 30,
            color: '#1c78c0'
          }]
        },
        {
          id: 'project',
          icon: 'xiangmu',
          checked: false,
          name: '项目',
          btns:['预览','源码'],
          projects: [{
              name: '知乎日报',
              img: zhihu,
              preview:'https://xiannvjiadexiaogouzi.github.io/zhihu/dist/index.html',
              source:'https://github.com/xiannvjiadexiaogouzi/zhihu',              
              note: ['尽可能模仿的知乎日报APP', '无限下拉拖取之前的日报内容', '直接从文章内容进入下一篇文章']
            },
            {
              name: '后台管理项目',
              img: houtai,
              preview:'https://github.com/xiannvjiadexiaogouzi/retail-terminal-b',
              source:'https://github.com/xiannvjiadexiaogouzi/retail-terminal-b',              
              note: ['有二级菜单的管理页面', '可与后端进行部分数据交互', '列表单页显示数量控制', '完整的上传图片以及提交表单等功能']
            },
            {
              name: 'To Do List',
              img: todo,
              preview:'https://xiannvjiadexiaogouzi.github.io/demo/vue-todolist/todolist.html',
              source:'https://github.com/xiannvjiadexiaogouzi/demo/tree/master/vue-todolist',              
              note: ['保存数据于localStorage，方便读取', '多添加‘important’标签']
            }
          ],
          more: {
            name: '更多项目请前往Github',
            url: 'https://github.com/xiannvjiadexiaogouzi',
            icon: 'github'
          }
        }
      ],
    },
    {
      name: 'English',
      id: 'english',
      checked: false,
      sections: [{
          id: 'host',
          icon: 'zhuye',
          checked: true,
          greet: 'Hello!',
          author: 'Luis',
          img: avatar,
          note: 'New in FrontEnd',
          contact: [{
            name: 'github',
            url: 'https://github.com/xiannvjiadexiaogouzi'
          }, {
            name: 'email',
            url: 'mailto:IBMkt36@163.com'
          }]
        },
        {
          id: 'introduction',
          icon: 'user',
          checked: false,
          name: 'Introduction',
          introduction: 'Efficient self-learning ability, love to discover and solve problems',
          status: 'Front-End Engineer, familiar with javascript,  job hunting',
          baseInfo: [{
              dis: '1994',
              logo: 'birthday'
            }, {
              dis: 'SHOU bachelor',
              logo: 'degree'

            },
            {
              dis: 'Shanghai',
              logo: 'position'

            },
            {
              dis: 'IBMkt36@163.com',
              logo: 'email2'

            },
          ]
        },
        {
          id: 'skill',
          icon: 'jishu',
          checked: false,
          name: 'Skill',
          skills: [{
            name: 'HTML',
            per: 80,
            color: '#e54d25'
          }, {
            name: 'CSS',
            per: 70,
            color: '#0070ba'
          }, {
            name: 'Javascript',
            per: 60,
            color: '#fac052'
          }, {
            name: 'Vue',
            per: 50,
            color: '#41b883'
          }, {
            name: 'webpack',
            per: 30,
            color: '#1c78c0'
          }]
        },
        {
          id: 'project',
          icon: 'xiangmu',
          checked: false,
          name: 'Project',
          btns:['Preview','Source'],
          projects: [{
              name: 'ZhihuDaily by Vue.js',
              img: zhihu,
              note: ['Make as much similiar as ZhihuDaily App', 'Support infinite scroll for past news', 'Get next news on the news page instead of list page']
            },
            {
              name: 'Backstage management',
              img: houtai,
              note: ['Support secondary menu', 'Support data interaction with server', 'Support changing data per table', 'Uploading of images and submission of forms and more']
            },
            {
              name: 'To Do List',
              img: todo,
              note: ['Data saved in localStroage as convenience', "Add 'important' label"]
            }
          ],
          more: {
            name: 'More on Github',
            url: 'https://github.com/xianshenglu',
            icon: 'github'
          }
        }
      ]
    }
  ]
}

export default info