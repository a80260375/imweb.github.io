(window.webpackJsonp=window.webpackJsonp||[]).push([[10],{"XQs+":function(t,n,e){"use strict";e("LEAW")("small",(function(t){return function(){return t(this,"small","","")}}))},pXuz:function(t,n,e){"use strict";e.r(n),e.d(n,"_frontmatter",(function(){return d})),e.d(n,"default",(function(){return j}));e("5hJT"),e("W1QL"),e("K/PF"),e("t91x"),e("75LO"),e("PJhk"),e("XQs+");var o=e("mXGw"),l=e("/FXl"),r=e("TjRS"),i=e("JZbt"),a=e("uXuz"),s=e("ak8V"),u=e("ZFoC"),c=e("sR1b"),b=e("QCqx"),p=e("IYK3");e("mhMB"),e("aD51");function g(){return(g=Object.assign||function(t){for(var n=1;n<arguments.length;n++){var e=arguments[n];for(var o in e)Object.prototype.hasOwnProperty.call(e,o)&&(t[o]=e[o])}return t}).apply(this,arguments)}function m(t){if(void 0===t)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return t}function f(t,n){t.prototype=Object.create(n.prototype),t.prototype.constructor=t,t.__proto__=n}var d={};void 0!==d&&d&&d===Object(d)&&Object.isExtensible(d)&&!d.hasOwnProperty("__filemeta")&&Object.defineProperty(d,"__filemeta",{configurable:!0,value:{name:"_frontmatter",filename:"components/dialog/Dialog.mdx"}});h="Example";var h,y={_frontmatter:d},O=r.a;function j(t){var n,e,h,j,x,B=t.components,C=function(t,n){if(null==t)return{};var e,o,l={},r=Object.keys(t);for(o=0;o<r.length;o++)e=r[o],n.indexOf(e)>=0||(l[e]=t[e]);return l}(t,["components"]);return Object(l.b)(O,g({},y,C,{components:B,mdxType:"MDXLayout"}),Object(l.b)("h1",{id:"dialog"},"Dialog"),Object(l.b)("h2",{id:"props--methods"},"Props & Methods"),Object(l.b)(u.d,{of:p.a,mdxType:"Props"}),Object(l.b)("h2",{id:"types"},"Types"),Object(l.b)(u.c,{__position:1,__code:'() => {\n  class Example extends React.Component {\n    constructor(props) {\n      super(props)\n      this.state = {}\n      this.toggle = this.toggle.bind(this)\n    }\n    toggle(ref) {\n      if (!ref || !this.refs[ref]) {\n        return\n      }\n      let newState = {}\n      newState[ref] = !this.state[ref]\n      this.setState(newState)\n    }\n    render() {\n      return (\n        <>\n          <Button onClick={() => this.toggle(\'succ\')}>success</Button>\n          <Button onClick={() => this.toggle(\'info\')}>info</Button>\n          <Button onClick={() => this.toggle(\'alert\')}>alert</Button>\n          <Button onClick={() => this.toggle(\'ques\')}>question</Button>\n          <Dialog\n            ref="succ"\n            visible={this.state.succ}\n            onClose={() => this.toggle(\'succ\')}\n            type="success"\n            msg="Congrats! You got this!"\n            subMsg="See More..."\n            button={[\n              <Button onClick={() => this.toggle(\'succ\')} key="confirm">\n                确定\n              </Button>,\n            ]}\n          />\n          <Dialog\n            ref="info"\n            visible={this.state.info}\n            onClose={() => this.toggle(\'info\')}\n            type="info"\n            msg="This is a piece of information for you!"\n            subMsg="See More..."\n            button={[\n              <Button onClick={() => this.toggle(\'info\')} key="confirm">\n                确定\n              </Button>,\n            ]}\n          />\n          <Dialog\n            ref="alert"\n            visible={this.state.alert}\n            onClose={() => this.toggle(\'alert\')}\n            type="alert"\n            msg="Warning! You haven\'t reach your KPI this month!"\n            subMsg="See More..."\n            button={[\n              <Button onClick={() => this.toggle(\'alert\')} key="confirm">\n                确定\n              </Button>,\n            ]}\n          />\n          <Dialog\n            ref="ques"\n            visible={this.state.ques}\n            onClose={() => this.toggle(\'ques\')}\n            type="question"\n            msg="Are you sure about that?"\n            subMsg="See More..."\n            button={[\n              <Button onClick={() => this.toggle(\'ques\')} key="confirm">\n                确定\n              </Button>,\n            ]}\n          />\n        </>\n      )\n    }\n  }\n  return <Example />\n}',__scope:(n={props:C,DefaultLayout:r.a,Button:i.a,Input:a.a,Radio:s.a,RadioGroup:s.b,Playground:u.c,Props:u.d,Form:c.a,FormRow:c.b,Label:c.c,Statusbox:b.a,Dialog:p.a},n.DefaultLayout=r.a,n._frontmatter=d,n),mdxType:"Playground"},(function(){var t=function(t){function n(n){var e;return(e=t.call(this,n)||this).state={},e.toggle=e.toggle.bind(m(e)),e}f(n,t);var e=n.prototype;return e.toggle=function(t){if(t&&this.refs[t]){var n={};n[t]=!this.state[t],this.setState(n)}},e.render=function(){var t=this;return Object(l.b)(o.Fragment,null,Object(l.b)(i.a,{onClick:function(){return t.toggle("succ")},mdxType:"Button"},"success"),Object(l.b)(i.a,{onClick:function(){return t.toggle("info")},mdxType:"Button"},"info"),Object(l.b)(i.a,{onClick:function(){return t.toggle("alert")},mdxType:"Button"},"alert"),Object(l.b)(i.a,{onClick:function(){return t.toggle("ques")},mdxType:"Button"},"question"),Object(l.b)(p.a,{ref:"succ",visible:this.state.succ,onClose:function(){return t.toggle("succ")},type:"success",msg:"Congrats! You got this!",subMsg:"See More...",button:[Object(l.b)(i.a,{onClick:function(){return t.toggle("succ")},key:"confirm",mdxType:"Button"},"确定")],mdxType:"Dialog"}),Object(l.b)(p.a,{ref:"info",visible:this.state.info,onClose:function(){return t.toggle("info")},type:"info",msg:"This is a piece of information for you!",subMsg:"See More...",button:[Object(l.b)(i.a,{onClick:function(){return t.toggle("info")},key:"confirm",mdxType:"Button"},"确定")],mdxType:"Dialog"}),Object(l.b)(p.a,{ref:"alert",visible:this.state.alert,onClose:function(){return t.toggle("alert")},type:"alert",msg:"Warning! You haven't reach your KPI this month!",subMsg:"See More...",button:[Object(l.b)(i.a,{onClick:function(){return t.toggle("alert")},key:"confirm",mdxType:"Button"},"确定")],mdxType:"Dialog"}),Object(l.b)(p.a,{ref:"ques",visible:this.state.ques,onClose:function(){return t.toggle("ques")},type:"question",msg:"Are you sure about that?",subMsg:"See More...",button:[Object(l.b)(i.a,{onClick:function(){return t.toggle("ques")},key:"confirm",mdxType:"Button"},"确定")],mdxType:"Dialog"}))},n}(o.Component);return Object(l.b)(t,{mdxType:"Example"})})),Object(l.b)("h2",{id:"sizes"},"Sizes"),Object(l.b)(u.c,{__position:2,__code:'() => {\n  class Example extends React.Component {\n    constructor(props) {\n      super(props)\n      this.state = {}\n      this.toggle = this.toggle.bind(this)\n    }\n    toggle(ref) {\n      if (!ref || !this.refs[ref]) {\n        return\n      }\n      let newState = {}\n      newState[ref] = !this.state[ref]\n      this.setState(newState)\n    }\n    render() {\n      return (\n        <>\n          <Button onClick={() => this.toggle(\'small\')}>small</Button>\n          <Button onClick={() => this.toggle(\'medium\')}>medium</Button>\n          <Button onClick={() => this.toggle(\'large\')}>large</Button>\n          <Dialog\n            ref="small"\n            visible={this.state.small}\n            onClose={() => this.toggle(\'small\')}\n            type="success"\n            size="small"\n            msg="This is a small dialog!"\n            subMsg="See more..."\n            button={[\n              <Button onClick={() => this.toggle(\'small\')} key="confirm">\n                确定\n              </Button>,\n            ]}\n          />\n          <Dialog\n            ref="medium"\n            visible={this.state.medium}\n            onClose={() => this.toggle(\'medium\')}\n            title="报名提示"\n            size="medium"\n            button={[\n              <Button onClick={() => this.toggle(\'medium\')} key="confirm">\n                确定\n              </Button>,\n            ]}\n          >\n            <Statusbox size="l" type="success">\n              您已成功报名！\n            </Statusbox>\n            <Form>\n              <FormRow>\n                <Label required>手机号</Label>\n                <Input\n                  name="field1"\n                  placeholder="请填写您的手机号"\n                  data-required\n                  data-patterns={[\n                    {\n                      key: \'mobile\',\n                      msg: \'格式不正确\',\n                    },\n                  ]}\n                />\n              </FormRow>\n              <FormRow>\n                <Label>邮箱</Label>\n                <Input\n                  name="field2"\n                  placeholder="请填写您的邮箱"\n                  data-patterns={[\n                    {\n                      key: \'email\',\n                      msg: \'格式不正确\',\n                    },\n                  ]}\n                />\n              </FormRow>\n              <FormRow>\n                <Label required>性别</Label>\n                <RadioGroup name="field4" data-required data-patterns={[]}>\n                  <Radio value="0">男</Radio>\n                  <Radio value="1">女</Radio>\n                </RadioGroup>\n              </FormRow>\n            </Form>\n          </Dialog>\n          <Dialog\n            ref="large"\n            visible={this.state.large}\n            onClose={() => this.toggle(\'large\')}\n            title="内容编辑框"\n            size="large"\n            button={[\n              <Button onClick={() => this.toggle(\'large\')} key="confirm">\n                提交资料\n              </Button>,\n            ]}\n          >\n            <Form>\n              <FormRow>\n                <Label required>手机号</Label>\n                <Input name="field1" placeholder="请填写您的手机号" />\n              </FormRow>\n              <FormRow>\n                <Label>邮箱</Label>\n                <Input name="field2" placeholder="请填写您的邮箱" />\n              </FormRow>\n              <FormRow>\n                <Label required>性别</Label>\n                <RadioGroup name="field4">\n                  <Radio value="0">男</Radio>\n                  <Radio value="1">女</Radio>\n                </RadioGroup>\n              </FormRow>\n            </Form>\n          </Dialog>\n        </>\n      )\n    }\n  }\n  return <Example />\n}',__scope:(e={props:C,DefaultLayout:r.a,Button:i.a,Input:a.a,Radio:s.a,RadioGroup:s.b,Playground:u.c,Props:u.d,Form:c.a,FormRow:c.b,Label:c.c,Statusbox:b.a,Dialog:p.a},e.DefaultLayout=r.a,e._frontmatter=d,e),mdxType:"Playground"},(function(){var t=function(t){function n(n){var e;return(e=t.call(this,n)||this).state={},e.toggle=e.toggle.bind(m(e)),e}f(n,t);var e=n.prototype;return e.toggle=function(t){if(t&&this.refs[t]){var n={};n[t]=!this.state[t],this.setState(n)}},e.render=function(){var t=this;return Object(l.b)(o.Fragment,null,Object(l.b)(i.a,{onClick:function(){return t.toggle("small")},mdxType:"Button"},"small"),Object(l.b)(i.a,{onClick:function(){return t.toggle("medium")},mdxType:"Button"},"medium"),Object(l.b)(i.a,{onClick:function(){return t.toggle("large")},mdxType:"Button"},"large"),Object(l.b)(p.a,{ref:"small",visible:this.state.small,onClose:function(){return t.toggle("small")},type:"success",size:"small",msg:"This is a small dialog!",subMsg:"See more...",button:[Object(l.b)(i.a,{onClick:function(){return t.toggle("small")},key:"confirm",mdxType:"Button"},"确定")],mdxType:"Dialog"}),Object(l.b)(p.a,{ref:"medium",visible:this.state.medium,onClose:function(){return t.toggle("medium")},title:"报名提示",size:"medium",button:[Object(l.b)(i.a,{onClick:function(){return t.toggle("medium")},key:"confirm",mdxType:"Button"},"确定")],mdxType:"Dialog"},Object(l.b)(b.a,{size:"l",type:"success",mdxType:"Statusbox"},"您已成功报名！"),Object(l.b)(c.a,{mdxType:"Form"},Object(l.b)(c.b,{mdxType:"FormRow"},Object(l.b)(c.c,{required:!0,mdxType:"Label"},"手机号"),Object(l.b)(a.a,{name:"field1",placeholder:"请填写您的手机号","data-required":!0,"data-patterns":[{key:"mobile",msg:"格式不正确"}],mdxType:"Input"})),Object(l.b)(c.b,{mdxType:"FormRow"},Object(l.b)(c.c,{mdxType:"Label"},"邮箱"),Object(l.b)(a.a,{name:"field2",placeholder:"请填写您的邮箱","data-patterns":[{key:"email",msg:"格式不正确"}],mdxType:"Input"})),Object(l.b)(c.b,{mdxType:"FormRow"},Object(l.b)(c.c,{required:!0,mdxType:"Label"},"性别"),Object(l.b)(s.b,{name:"field4","data-required":!0,"data-patterns":[],mdxType:"RadioGroup"},Object(l.b)(s.a,{value:"0",mdxType:"Radio"},"男"),Object(l.b)(s.a,{value:"1",mdxType:"Radio"},"女"))))),Object(l.b)(p.a,{ref:"large",visible:this.state.large,onClose:function(){return t.toggle("large")},title:"内容编辑框",size:"large",button:[Object(l.b)(i.a,{onClick:function(){return t.toggle("large")},key:"confirm",mdxType:"Button"},"提交资料")],mdxType:"Dialog"},Object(l.b)(c.a,{mdxType:"Form"},Object(l.b)(c.b,{mdxType:"FormRow"},Object(l.b)(c.c,{required:!0,mdxType:"Label"},"手机号"),Object(l.b)(a.a,{name:"field1",placeholder:"请填写您的手机号",mdxType:"Input"})),Object(l.b)(c.b,{mdxType:"FormRow"},Object(l.b)(c.c,{mdxType:"Label"},"邮箱"),Object(l.b)(a.a,{name:"field2",placeholder:"请填写您的邮箱",mdxType:"Input"})),Object(l.b)(c.b,{mdxType:"FormRow"},Object(l.b)(c.c,{required:!0,mdxType:"Label"},"性别"),Object(l.b)(s.b,{name:"field4",mdxType:"RadioGroup"},Object(l.b)(s.a,{value:"0",mdxType:"Radio"},"男"),Object(l.b)(s.a,{value:"1",mdxType:"Radio"},"女"))))))},n}(o.Component);return Object(l.b)(t,{mdxType:"Example"})})),Object(l.b)("h2",{id:"customize-buttons"},"Customize Buttons"),Object(l.b)(u.c,{__position:3,__code:"() => {\n  class Example extends React.Component {\n    constructor(props) {\n      super(props)\n      this.state = {}\n      this.toggle = this.toggle.bind(this)\n    }\n    toggle(ref) {\n      if (!ref || !this.refs[ref]) {\n        return\n      }\n      let newState = {}\n      newState[ref] = !this.state[ref]\n      this.setState(newState)\n    }\n    render() {\n      return (\n        <>\n          <Button onClick={() => this.toggle('customBtns')}>Click me</Button>\n          <Dialog\n            ref=\"customBtns\"\n            visible={this.state.customBtns}\n            onClose={() => this.toggle('customBtns')}\n            zIndex={6003}\n            button={[\n              <Button onClick={() => this.toggle('customBtns')} key=\"confirm\">\n                确认\n              </Button>,\n              <Button\n                onClick={() => this.toggle('customBtns')}\n                color=\"weak\"\n                key=\"cancel\"\n              >\n                取消\n              </Button>,\n            ]}\n          >\n            <p>按钮示例</p>\n          </Dialog>\n        </>\n      )\n    }\n  }\n  return <Example />\n}",__scope:(h={props:C,DefaultLayout:r.a,Button:i.a,Input:a.a,Radio:s.a,RadioGroup:s.b,Playground:u.c,Props:u.d,Form:c.a,FormRow:c.b,Label:c.c,Statusbox:b.a,Dialog:p.a},h.DefaultLayout=r.a,h._frontmatter=d,h),mdxType:"Playground"},(function(){var t=function(t){function n(n){var e;return(e=t.call(this,n)||this).state={},e.toggle=e.toggle.bind(m(e)),e}f(n,t);var e=n.prototype;return e.toggle=function(t){if(t&&this.refs[t]){var n={};n[t]=!this.state[t],this.setState(n)}},e.render=function(){var t=this;return Object(l.b)(o.Fragment,null,Object(l.b)(i.a,{onClick:function(){return t.toggle("customBtns")},mdxType:"Button"},"Click me"),Object(l.b)(p.a,{ref:"customBtns",visible:this.state.customBtns,onClose:function(){return t.toggle("customBtns")},zIndex:6003,button:[Object(l.b)(i.a,{onClick:function(){return t.toggle("customBtns")},key:"confirm",mdxType:"Button"},"确认"),Object(l.b)(i.a,{onClick:function(){return t.toggle("customBtns")},color:"weak",key:"cancel",mdxType:"Button"},"取消")],mdxType:"Dialog"},Object(l.b)("p",null,"按钮示例")))},n}(o.Component);return Object(l.b)(t,{mdxType:"Example"})})),Object(l.b)("h2",{id:"超长内容"},"超长内容"),Object(l.b)(u.c,{__position:4,__code:'() => {\n  class Example extends React.Component {\n    constructor(props) {\n      super(props)\n      this.state = {}\n      this.toggle = this.toggle.bind(this)\n    }\n    toggle(ref) {\n      if (!ref || !this.refs[ref]) {\n        return\n      }\n      let newState = {}\n      newState[ref] = !this.state[ref]\n      this.setState(newState)\n    }\n    render() {\n      return (\n        <>\n          <Button onClick={() => this.toggle(\'longlong\')}>Click me</Button>\n          <Dialog\n            ref="longlong"\n            visible={this.state.longlong}\n            onClose={() => this.toggle(\'longlong\')}\n            size="large"\n            button={[\n              <Button\n                onClick={() => this.toggle(\'longlong\')}\n                size="m"\n                key="confirm"\n              >\n                确认\n              </Button>,\n              <Button\n                onClick={() => this.toggle(\'longlong\')}\n                size="m"\n                color="weak"\n                key="cancel"\n              >\n                取消\n              </Button>,\n            ]}\n          >\n            <p>超长内容的滚动条</p>\n            <p>\n              一般内容不应该超长, 整框高度最大600px, 如有超出,\n              再根据设计稿另行定制\n            </p>\n            <p>超长内容</p>\n            <p>超长内容</p>\n            <p>超长内容</p>\n            <p>超长内容</p>\n            <p>超长内容</p>\n            <p>超长内容</p>\n            <p>超长内容</p>\n            <p>超长内容</p>\n            <p>超长内容</p>\n            <p>超长内容</p>\n            <p>超长内容</p>\n            <p>超长内容</p>\n            <p>超长内容</p>\n            <p>超长内容</p>\n            <p>超长内容</p>\n            <p>超长内容</p>\n            <p>超长内容</p>\n            <p>超长内容</p>\n            <p>超长内容</p>\n            <p>超长内容</p>\n            <p>超长内容</p>\n            <p>超长内容</p>\n            <p>超长内容</p>\n            <p>超长内容</p>\n            <p>超长内容</p>\n            <p>超长内容</p>\n            <p>超长内容</p>\n            <p>超长内容</p>\n            <p>超长内容</p>\n            <p>超长内容</p>\n            <p>超长内容</p>\n            <p>超长内容</p>\n            <p>超长内容</p>\n            <p>超长内容</p>\n            <p>超长内容</p>\n            <p>超长内容</p>\n            <p>超长内容</p>\n            <p>这也太长了吧</p>\n          </Dialog>\n        </>\n      )\n    }\n  }\n  return <Example />\n}',__scope:(j={props:C,DefaultLayout:r.a,Button:i.a,Input:a.a,Radio:s.a,RadioGroup:s.b,Playground:u.c,Props:u.d,Form:c.a,FormRow:c.b,Label:c.c,Statusbox:b.a,Dialog:p.a},j.DefaultLayout=r.a,j._frontmatter=d,j),mdxType:"Playground"},(function(){var t=function(t){function n(n){var e;return(e=t.call(this,n)||this).state={},e.toggle=e.toggle.bind(m(e)),e}f(n,t);var e=n.prototype;return e.toggle=function(t){if(t&&this.refs[t]){var n={};n[t]=!this.state[t],this.setState(n)}},e.render=function(){var t=this;return Object(l.b)(o.Fragment,null,Object(l.b)(i.a,{onClick:function(){return t.toggle("longlong")},mdxType:"Button"},"Click me"),Object(l.b)(p.a,{ref:"longlong",visible:this.state.longlong,onClose:function(){return t.toggle("longlong")},size:"large",button:[Object(l.b)(i.a,{onClick:function(){return t.toggle("longlong")},size:"m",key:"confirm",mdxType:"Button"},"确认"),Object(l.b)(i.a,{onClick:function(){return t.toggle("longlong")},size:"m",color:"weak",key:"cancel",mdxType:"Button"},"取消")],mdxType:"Dialog"},Object(l.b)("p",null,"超长内容的滚动条"),Object(l.b)("p",null,"一般内容不应该超长, 整框高度最大600px, 如有超出, 再根据设计稿另行定制"),Object(l.b)("p",null,"超长内容"),Object(l.b)("p",null,"超长内容"),Object(l.b)("p",null,"超长内容"),Object(l.b)("p",null,"超长内容"),Object(l.b)("p",null,"超长内容"),Object(l.b)("p",null,"超长内容"),Object(l.b)("p",null,"超长内容"),Object(l.b)("p",null,"超长内容"),Object(l.b)("p",null,"超长内容"),Object(l.b)("p",null,"超长内容"),Object(l.b)("p",null,"超长内容"),Object(l.b)("p",null,"超长内容"),Object(l.b)("p",null,"超长内容"),Object(l.b)("p",null,"超长内容"),Object(l.b)("p",null,"超长内容"),Object(l.b)("p",null,"超长内容"),Object(l.b)("p",null,"超长内容"),Object(l.b)("p",null,"超长内容"),Object(l.b)("p",null,"超长内容"),Object(l.b)("p",null,"超长内容"),Object(l.b)("p",null,"超长内容"),Object(l.b)("p",null,"超长内容"),Object(l.b)("p",null,"超长内容"),Object(l.b)("p",null,"超长内容"),Object(l.b)("p",null,"超长内容"),Object(l.b)("p",null,"超长内容"),Object(l.b)("p",null,"超长内容"),Object(l.b)("p",null,"超长内容"),Object(l.b)("p",null,"超长内容"),Object(l.b)("p",null,"超长内容"),Object(l.b)("p",null,"超长内容"),Object(l.b)("p",null,"超长内容"),Object(l.b)("p",null,"超长内容"),Object(l.b)("p",null,"超长内容"),Object(l.b)("p",null,"超长内容"),Object(l.b)("p",null,"超长内容"),Object(l.b)("p",null,"超长内容"),Object(l.b)("p",null,"这也太长了吧")))},n}(o.Component);return Object(l.b)(t,{mdxType:"Example"})})),Object(l.b)("h2",{id:"apis"},"APIs"),Object(l.b)(u.c,{__position:5,__code:"() => {\n  class Example extends React.Component {\n    constructor(props) {\n      super(props)\n      this.state = {}\n      this.toggle = this.toggle.bind(this)\n    }\n    toggle(ref) {\n      if (!ref || !this.refs[ref]) {\n        return\n      }\n      let newState = {}\n      newState[ref] = !this.state[ref]\n      this.setState(newState)\n    }\n    render() {\n      return (\n        <>\n          <Button onClick={() => Dialog.show({ msg: '没有Icon的msg' })}>\n            Show\n          </Button>\n          <Button onClick={() => Dialog.info('Info')}>Info</Button>\n          <Button onClick={() => Dialog.success('Success')}>Success</Button>\n          <Button onClick={() => Dialog.alert('Alert')}>Alert</Button>\n          <Button\n            onClick={() =>\n              Dialog.confirm({\n                msg: 'Confirm',\n                onOk: () => {\n                  console.log('选择确定')\n                },\n                onCancel: () => {\n                  console.log('选择取消')\n                },\n              })\n            }\n          >\n            Confirm\n          </Button>\n        </>\n      )\n    }\n  }\n  return <Example />\n}",__scope:(x={props:C,DefaultLayout:r.a,Button:i.a,Input:a.a,Radio:s.a,RadioGroup:s.b,Playground:u.c,Props:u.d,Form:c.a,FormRow:c.b,Label:c.c,Statusbox:b.a,Dialog:p.a},x.DefaultLayout=r.a,x._frontmatter=d,x),mdxType:"Playground"},(function(){var t=function(t){function n(n){var e;return(e=t.call(this,n)||this).state={},e.toggle=e.toggle.bind(m(e)),e}f(n,t);var e=n.prototype;return e.toggle=function(t){if(t&&this.refs[t]){var n={};n[t]=!this.state[t],this.setState(n)}},e.render=function(){return Object(l.b)(o.Fragment,null,Object(l.b)(i.a,{onClick:function(){return p.a.show({msg:"没有Icon的msg"})},mdxType:"Button"},"Show"),Object(l.b)(i.a,{onClick:function(){return p.a.info("Info")},mdxType:"Button"},"Info"),Object(l.b)(i.a,{onClick:function(){return p.a.success("Success")},mdxType:"Button"},"Success"),Object(l.b)(i.a,{onClick:function(){return p.a.alert("Alert")},mdxType:"Button"},"Alert"),Object(l.b)(i.a,{onClick:function(){return p.a.confirm({msg:"Confirm",onOk:function(){console.log("选择确定")},onCancel:function(){console.log("选择取消")}})},mdxType:"Button"},"Confirm"))},n}(o.Component);return Object(l.b)(t,{mdxType:"Example"})})),Object(l.b)("h2",{id:"onblur"},"onBlur"))}void 0!==j&&j&&j===Object(j)&&Object.isExtensible(j)&&!j.hasOwnProperty("__filemeta")&&Object.defineProperty(j,"__filemeta",{configurable:!0,value:{name:"MDXContent",filename:"components/dialog/Dialog.mdx"}}),j.isMDXComponent=!0}}]);
//# sourceMappingURL=component---components-dialog-dialog-mdx-9bf7477d460faff1ff6c.js.map