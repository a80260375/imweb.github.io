(window.webpackJsonp=window.webpackJsonp||[]).push([[18],{RT0s:function(n,e,t){"use strict";t.r(e),t.d(e,"_frontmatter",(function(){return m})),t.d(e,"default",(function(){return y}));t("5hJT"),t("W1QL"),t("K/PF"),t("t91x"),t("75LO"),t("PJhk");var a=t("mXGw"),s=t("/FXl"),i=t("TjRS"),o=t("rP5Z"),r=t("JZbt"),c=(t("a+Sd"),t("ZFoC"));t("aD51");function l(){return(l=Object.assign||function(n){for(var e=1;e<arguments.length;e++){var t=arguments[e];for(var a in t)Object.prototype.hasOwnProperty.call(t,a)&&(n[a]=t[a])}return n}).apply(this,arguments)}function d(n){if(void 0===n)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return n}function u(n,e){n.prototype=Object.create(e.prototype),n.prototype.constructor=n,n.__proto__=e}var m={};void 0!==m&&m&&m===Object(m)&&Object.isExtensible(m)&&!m.hasOwnProperty("__filemeta")&&Object.defineProperty(m,"__filemeta",{configurable:!0,value:{name:"_frontmatter",filename:"components/picker/Picker.mdx"}});p="Example";var p,b={_frontmatter:m},h=i.a;function y(n){var e,t,p,y,S,v=n.components,f=function(n,e){if(null==n)return{};var t,a,s={},i=Object.keys(n);for(a=0;a<i.length;a++)t=i[a],e.indexOf(t)>=0||(s[t]=n[t]);return s}(n,["components"]);return Object(s.b)(h,l({},b,f,{components:v,mdxType:"MDXLayout"}),Object(s.b)("h1",{id:"picker"},"Picker"),Object(s.b)("h2",{id:"props--methods"},"Props & Methods"),Object(s.b)(c.d,{of:o.a,mdxType:"Props"}),Object(s.b)("h2",{id:"basic-usage"},"Basic Usage"),Object(s.b)(c.c,{__position:1,__code:'() => {\n  class Example extends React.Component {\n    constructor(props) {\n      super(props)\n      this.state = {\n        visibleBasic: false,\n      }\n      this.mockOptions = this.mockOptions.bind(this)\n    }\n    mockOptions(count, name) {\n      if (!name) {\n        name = Math.random()\n      }\n      let re = []\n      for (let i = 0; i < count; i++) {\n        re.push({ id: `${i}-${name}`, selected: false })\n      }\n      return re\n    }\n    render() {\n      return (\n        <>\n          <Button onClick={() => this.setState({ visibleBasic: true })}>\n            Click me to pick\n          </Button>\n          <Picker\n            visible={this.state.visibleBasic}\n            name="课程包"\n            maxSelected={5}\n            detail="支持选择最多关联5门课程（包）"\n            data={this.mockOptions(40)}\n            onClose={() => this.setState({ visibleBasic: false })}\n            onSave={data => {\n              console.log(\'selected:\', data)\n            }}\n            onChange={data => {\n              console.log(data)\n            }}\n          />\n        </>\n      )\n    }\n  }\n  return <Example />\n}',__scope:(e={props:f,DefaultLayout:i.a,Picker:o.a,Button:r.a,Playground:c.c,Props:c.d},e.DefaultLayout=i.a,e._frontmatter=m,e),mdxType:"Playground"},(function(){var n=function(n){function e(e){var t;return(t=n.call(this,e)||this).state={visibleBasic:!1},t.mockOptions=t.mockOptions.bind(d(t)),t}u(e,n);var t=e.prototype;return t.mockOptions=function(n,e){e||(e=Math.random());for(var t=[],a=0;a<n;a++)t.push({id:a+"-"+e,selected:!1});return t},t.render=function(){var n=this;return Object(s.b)(a.Fragment,null,Object(s.b)(r.a,{onClick:function(){return n.setState({visibleBasic:!0})},mdxType:"Button"},"Click me to pick"),Object(s.b)(o.a,{visible:this.state.visibleBasic,name:"课程包",maxSelected:5,detail:"支持选择最多关联5门课程（包）",data:this.mockOptions(40),onClose:function(){return n.setState({visibleBasic:!1})},onSave:function(n){console.log("selected:",n)},onChange:function(n){console.log(n)},mdxType:"Picker"}))},e}(a.Component);return Object(s.b)(n,{mdxType:"Example"})})),Object(s.b)("h2",{id:"nested-data"},"Nested Data"),Object(s.b)(c.c,{__position:2,__code:"() => {\n  class Example extends React.Component {\n    constructor(props) {\n      super(props)\n      this.state = {\n        visibleNest: false,\n      }\n    }\n    render() {\n      return (\n        <>\n          <Button onClick={() => this.setState({ visibleNest: true })}>\n            Nested\n          </Button>\n          <Picker\n            visible={this.state.visibleNest}\n            name=\"嵌套课程包\"\n            data={[\n              {\n                id: 1,\n                display: <strong style={{ color: 'red' }}>红</strong>,\n                search: '红',\n              },\n              {\n                id: 2,\n                display: <strong style={{ color: 'blue' }}>蓝</strong>,\n                search: '蓝色',\n              },\n              {\n                id: 3,\n                display: <strong style={{ color: 'green' }}>绿</strong>,\n                search: '绿色',\n              },\n            ]}\n            onClose={() => this.setState({ visibleNest: false })}\n            onSave={() => this.setState({ visibleNest: false })}\n          />\n        </>\n      )\n    }\n  }\n  return <Example />\n}",__scope:(t={props:f,DefaultLayout:i.a,Picker:o.a,Button:r.a,Playground:c.c,Props:c.d},t.DefaultLayout=i.a,t._frontmatter=m,t),mdxType:"Playground"},(function(){var n=function(n){function e(e){var t;return(t=n.call(this,e)||this).state={visibleNest:!1},t}return u(e,n),e.prototype.render=function(){var n=this;return Object(s.b)(a.Fragment,null,Object(s.b)(r.a,{onClick:function(){return n.setState({visibleNest:!0})},mdxType:"Button"},"Nested"),Object(s.b)(o.a,{visible:this.state.visibleNest,name:"嵌套课程包",data:[{id:1,display:Object(s.b)("strong",{style:{color:"red"}},"红"),search:"红"},{id:2,display:Object(s.b)("strong",{style:{color:"blue"}},"蓝"),search:"蓝色"},{id:3,display:Object(s.b)("strong",{style:{color:"green"}},"绿"),search:"绿色"}],onClose:function(){return n.setState({visibleNest:!1})},onSave:function(){return n.setState({visibleNest:!1})},mdxType:"Picker"}))},e}(a.Component);return Object(s.b)(n,{mdxType:"Example"})})),Object(s.b)("h2",{id:"selected-settings"},"Selected Settings"),Object(s.b)(c.c,{__position:3,__code:"() => {\n  class Example extends React.Component {\n    constructor(props) {\n      super(props)\n      this.state = {\n        visibleSelected: false,\n        visibleMaxSelected: false,\n      }\n    }\n    render() {\n      return (\n        <>\n          <Button onClick={() => this.setState({ visibleSelected: true })}>\n            Select one by default\n          </Button>\n          <Picker\n            visible={this.state.visibleSelected}\n            name=\"设置选中课程包\"\n            data={[\n              {\n                id: 1,\n                display: 'Option 1',\n                name: '1',\n              },\n              {\n                id: 2,\n                display: 'Option 2',\n                name: '2',\n              },\n              {\n                id: 3,\n                display: 'Option 3',\n                name: '3',\n              },\n            ]}\n            selectedIdList={[1]}\n            preselectedIdList={[2]}\n            maxSelected={3}\n            onClose={() => this.setState({ visibleSelected: false })}\n            onSave={() => this.setState({ visibleSelected: false })}\n          />\n          <Button onClick={() => this.setState({ visibleMaxSelected: true })}>\n            Set max selected\n          </Button>\n          <Picker\n            visible={this.state.visibleMaxSelected}\n            name=\"最多选中数课程包\"\n            maxSelected={1}\n            data={[\n              {\n                id: 1,\n                display: 'Option 1',\n                name: '1',\n              },\n              {\n                id: 2,\n                display: 'Option 2',\n                name: '2',\n              },\n              {\n                id: 3,\n                display: 'Option 3',\n                name: '3',\n              },\n            ]}\n            onClose={() => this.setState({ visibleMaxSelected: false })}\n            onSave={() => this.setState({ visibleMaxSelected: false })}\n          />\n        </>\n      )\n    }\n  }\n  return <Example />\n}",__scope:(p={props:f,DefaultLayout:i.a,Picker:o.a,Button:r.a,Playground:c.c,Props:c.d},p.DefaultLayout=i.a,p._frontmatter=m,p),mdxType:"Playground"},(function(){var n=function(n){function e(e){var t;return(t=n.call(this,e)||this).state={visibleSelected:!1,visibleMaxSelected:!1},t}return u(e,n),e.prototype.render=function(){var n=this;return Object(s.b)(a.Fragment,null,Object(s.b)(r.a,{onClick:function(){return n.setState({visibleSelected:!0})},mdxType:"Button"},"Select one by default"),Object(s.b)(o.a,{visible:this.state.visibleSelected,name:"设置选中课程包",data:[{id:1,display:"Option 1",name:"1"},{id:2,display:"Option 2",name:"2"},{id:3,display:"Option 3",name:"3"}],selectedIdList:[1],preselectedIdList:[2],maxSelected:3,onClose:function(){return n.setState({visibleSelected:!1})},onSave:function(){return n.setState({visibleSelected:!1})},mdxType:"Picker"}),Object(s.b)(r.a,{onClick:function(){return n.setState({visibleMaxSelected:!0})},mdxType:"Button"},"Set max selected"),Object(s.b)(o.a,{visible:this.state.visibleMaxSelected,name:"最多选中数课程包",maxSelected:1,data:[{id:1,display:"Option 1",name:"1"},{id:2,display:"Option 2",name:"2"},{id:3,display:"Option 3",name:"3"}],onClose:function(){return n.setState({visibleMaxSelected:!1})},onSave:function(){return n.setState({visibleMaxSelected:!1})},mdxType:"Picker"}))},e}(a.Component);return Object(s.b)(n,{mdxType:"Example"})})),Object(s.b)("h2",{id:"async"},"Async"),Object(s.b)(c.c,{__position:4,__code:'() => {\n  class Example extends React.Component {\n    constructor(props) {\n      super(props)\n      this.state = {\n        visibleAsync: false,\n        visibleAsyncSearch: false,\n        visibleAsyncLoadmore: false,\n        dataAsyncSearch: null,\n        dataAsync: null,\n        dataAsyncLoadmore: null,\n        loadingAsyncLoadmore: false,\n      }\n      this.onAsnycSearch = this.onAsnycSearch.bind(this)\n      this.onAsnycLoadmore = this.onAsnycLoadmore.bind(this)\n      this.mockOptions = this.mockOptions.bind(this)\n    }\n    componentDidMount() {\n      this.timer = window.setTimeout(() => {\n        this.setState({\n          dataAsync: this.mockOptions(40),\n          dataAsyncSearch: this.mockOptions(40),\n          dataAsyncLoadmore: this.mockOptions(40),\n        })\n      }, 5000)\n    }\n    componentWillUnmount() {\n      window.clearTimeout(this.timer)\n    }\n    onAsnycSearch(searchKeyword, data) {\n      this.setState({\n        loadingAsyncSearch: true,\n      })\n      this.timer = window.setTimeout(() => {\n        this.setState({\n          dataAsyncSearch: data.concat(this.mockOptions(10, searchKeyword)),\n          loadingAsyncSearch: false,\n        })\n      }, 1000)\n    }\n    onAsnycLoadmore(searchKeyword, data) {\n      this.setState({\n        loadingAsyncLoadmore: true,\n      })\n      this.timer = window.setTimeout(() => {\n        if (data != null) {\n          this.setState({\n            dataAsyncLoadmore: data.concat(\n              this.mockOptions(10, searchKeyword),\n            ),\n            loadingAsyncLoadmore: false,\n          })\n        }\n      }, 1000)\n    }\n    mockOptions(count, name) {\n      if (!name) {\n        name = Math.random()\n      }\n      let re = []\n      for (let i = 0; i < count; i++) {\n        re.push({ id: `${i}-${name}`, selected: false })\n      }\n      return re\n    }\n    render() {\n      return (\n        <>\n          <Button onClick={() => this.setState({ visibleAsync: true })}>\n            Async Data\n          </Button>\n          <Picker\n            visible={this.state.visibleAsync}\n            name="异步课程包"\n            data={this.dataAsync}\n            onClose={() => this.setState({ visibleAsync: false })}\n            onSave={() => this.setState({ visibleAsync: false })}\n          />\n          <Button onClick={() => this.setState({ visibleAsyncSearch: true })}>\n            Async Search\n          </Button>\n          <Picker\n            visible={this.state.visibleAsyncSearch}\n            name="异步搜索"\n            maxSelected={3}\n            data={this.state.dataAsyncSearch}\n            onClose={() => this.setState({ visibleAsyncSearch: false })}\n            onSave={() => this.setState({ visibleAsyncSearch: false })}\n            onSearch={this.onAsnycSearch}\n            loading={this.loadingAsyncSearch}\n          />\n          <Button\n            onClick={() => this.setState({ visibleAsyncLoadmore: true })}\n          >\n            Async Load More\n          </Button>\n          <Picker\n            visible={this.state.visibleAsyncLoadmore}\n            name="异步加载更多"\n            maxSelected={3}\n            data={this.state.dataAsyncLoadmore}\n            onClose={() => this.setState({ visibleAsyncLoadmore: false })}\n            onSave={() => this.setState({ visibleAsyncLoadmore: false })}\n            onNeedMoreData={this.onAsnycLoadmore}\n            loading={this.state.loadingAsyncLoadmore}\n          />\n        </>\n      )\n    }\n  }\n  return <Example />\n}',__scope:(y={props:f,DefaultLayout:i.a,Picker:o.a,Button:r.a,Playground:c.c,Props:c.d},y.DefaultLayout=i.a,y._frontmatter=m,y),mdxType:"Playground"},(function(){var n=function(n){function e(e){var t;return(t=n.call(this,e)||this).state={visibleAsync:!1,visibleAsyncSearch:!1,visibleAsyncLoadmore:!1,dataAsyncSearch:null,dataAsync:null,dataAsyncLoadmore:null,loadingAsyncLoadmore:!1},t.onAsnycSearch=t.onAsnycSearch.bind(d(t)),t.onAsnycLoadmore=t.onAsnycLoadmore.bind(d(t)),t.mockOptions=t.mockOptions.bind(d(t)),t}u(e,n);var t=e.prototype;return t.componentDidMount=function(){var n=this;this.timer=window.setTimeout((function(){n.setState({dataAsync:n.mockOptions(40),dataAsyncSearch:n.mockOptions(40),dataAsyncLoadmore:n.mockOptions(40)})}),5e3)},t.componentWillUnmount=function(){window.clearTimeout(this.timer)},t.onAsnycSearch=function(n,e){var t=this;this.setState({loadingAsyncSearch:!0}),this.timer=window.setTimeout((function(){t.setState({dataAsyncSearch:e.concat(t.mockOptions(10,n)),loadingAsyncSearch:!1})}),1e3)},t.onAsnycLoadmore=function(n,e){var t=this;this.setState({loadingAsyncLoadmore:!0}),this.timer=window.setTimeout((function(){null!=e&&t.setState({dataAsyncLoadmore:e.concat(t.mockOptions(10,n)),loadingAsyncLoadmore:!1})}),1e3)},t.mockOptions=function(n,e){e||(e=Math.random());for(var t=[],a=0;a<n;a++)t.push({id:a+"-"+e,selected:!1});return t},t.render=function(){var n=this;return Object(s.b)(a.Fragment,null,Object(s.b)(r.a,{onClick:function(){return n.setState({visibleAsync:!0})},mdxType:"Button"},"Async Data"),Object(s.b)(o.a,{visible:this.state.visibleAsync,name:"异步课程包",data:this.dataAsync,onClose:function(){return n.setState({visibleAsync:!1})},onSave:function(){return n.setState({visibleAsync:!1})},mdxType:"Picker"}),Object(s.b)(r.a,{onClick:function(){return n.setState({visibleAsyncSearch:!0})},mdxType:"Button"},"Async Search"),Object(s.b)(o.a,{visible:this.state.visibleAsyncSearch,name:"异步搜索",maxSelected:3,data:this.state.dataAsyncSearch,onClose:function(){return n.setState({visibleAsyncSearch:!1})},onSave:function(){return n.setState({visibleAsyncSearch:!1})},onSearch:this.onAsnycSearch,loading:this.loadingAsyncSearch,mdxType:"Picker"}),Object(s.b)(r.a,{onClick:function(){return n.setState({visibleAsyncLoadmore:!0})},mdxType:"Button"},"Async Load More"),Object(s.b)(o.a,{visible:this.state.visibleAsyncLoadmore,name:"异步加载更多",maxSelected:3,data:this.state.dataAsyncLoadmore,onClose:function(){return n.setState({visibleAsyncLoadmore:!1})},onSave:function(){return n.setState({visibleAsyncLoadmore:!1})},onNeedMoreData:this.onAsnycLoadmore,loading:this.state.loadingAsyncLoadmore,mdxType:"Picker"}))},e}(a.Component);return Object(s.b)(n,{mdxType:"Example"})})),Object(s.b)("h2",{id:"warning-message"},"Warning Message"),Object(s.b)(c.c,{__position:5,__code:"() => {\n  class Example extends React.Component {\n    constructor(props) {\n      super(props)\n      this.state = {\n        visibleWarning: false,\n        warning: '',\n      }\n    }\n    render() {\n      return (\n        <>\n          <Button\n            onClick={() =>\n              this.setState({ warning: `${this.state.warning}警告信息` })\n            }\n          >\n            Set Warning Message\n          </Button>\n          <Picker\n            visible={this.state.visibleWarning}\n            name=\"动态设置警告信息\"\n            maxSelected={3}\n            data={[\n              {\n                id: 1,\n                display: 'Option 1',\n                name: '1',\n              },\n              {\n                id: 2,\n                display: 'Option 2',\n                name: '2',\n              },\n              {\n                id: 3,\n                display: 'Option 3',\n                name: '3',\n              },\n            ]}\n            warning={this.state.warning}\n            onClose={() => this.setState({ visibleWarning: false })}\n            onSave={() => this.setState({ visibleWarning: false })}\n          />\n        </>\n      )\n    }\n  }\n  return <Example />\n}",__scope:(S={props:f,DefaultLayout:i.a,Picker:o.a,Button:r.a,Playground:c.c,Props:c.d},S.DefaultLayout=i.a,S._frontmatter=m,S),mdxType:"Playground"},(function(){var n=function(n){function e(e){var t;return(t=n.call(this,e)||this).state={visibleWarning:!1,warning:""},t}return u(e,n),e.prototype.render=function(){var n=this;return Object(s.b)(a.Fragment,null,Object(s.b)(r.a,{onClick:function(){return n.setState({warning:n.state.warning+"警告信息"})},mdxType:"Button"},"Set Warning Message"),Object(s.b)(o.a,{visible:this.state.visibleWarning,name:"动态设置警告信息",maxSelected:3,data:[{id:1,display:"Option 1",name:"1"},{id:2,display:"Option 2",name:"2"},{id:3,display:"Option 3",name:"3"}],warning:this.state.warning,onClose:function(){return n.setState({visibleWarning:!1})},onSave:function(){return n.setState({visibleWarning:!1})},mdxType:"Picker"}))},e}(a.Component);return Object(s.b)(n,{mdxType:"Example"})})))}void 0!==y&&y&&y===Object(y)&&Object.isExtensible(y)&&!y.hasOwnProperty("__filemeta")&&Object.defineProperty(y,"__filemeta",{configurable:!0,value:{name:"MDXContent",filename:"components/picker/Picker.mdx"}}),y.isMDXComponent=!0}}]);
//# sourceMappingURL=component---components-picker-picker-mdx-5d450199ae194f679cdf.js.map