(window.webpackJsonp=window.webpackJsonp||[]).push([[20],{Vece:function(t,e,n){"use strict";n.r(e),n.d(e,"_frontmatter",(function(){return u})),n.d(e,"default",(function(){return g}));n("5hJT"),n("W1QL"),n("K/PF"),n("t91x"),n("75LO"),n("PJhk");var i=n("mXGw"),s=n("/FXl"),a=n("TjRS"),o=n("yZQM"),l=(n("dxKM"),n("JZbt")),r=n("ZFoC");n("aD51");function c(){return(c=Object.assign||function(t){for(var e=1;e<arguments.length;e++){var n=arguments[e];for(var i in n)Object.prototype.hasOwnProperty.call(n,i)&&(t[i]=n[i])}return t}).apply(this,arguments)}function h(t){if(void 0===t)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return t}function b(t,e){t.prototype=Object.create(e.prototype),t.prototype.constructor=t,t.__proto__=e}var u={};void 0!==u&&u&&u===Object(u)&&Object.isExtensible(u)&&!u.hasOwnProperty("__filemeta")&&Object.defineProperty(u,"__filemeta",{configurable:!0,value:{name:"_frontmatter",filename:"components/popconfirm/Popconfirm.mdx"}});d="Example";var d,p={_frontmatter:u},m=a.a;function g(t){var e,n,d,g,f,C=t.components,v=function(t,e){if(null==t)return{};var n,i,s={},a=Object.keys(t);for(i=0;i<a.length;i++)n=a[i],e.indexOf(n)>=0||(s[n]=t[n]);return s}(t,["components"]);return Object(s.b)(m,c({},p,v,{components:C,mdxType:"MDXLayout"}),Object(s.b)("h1",{id:"popconfirm"},"Popconfirm"),Object(s.b)("h2",{id:"props--methods"},"Props & Methods"),Object(s.b)(r.d,{of:o.a,mdxType:"Props"}),Object(s.b)("h2",{id:"basic-usage"},"Basic Usage"),Object(s.b)(r.c,{__position:1,__code:'() => {\n  class Example extends React.Component {\n    constructor(props) {\n      super(props)\n      this.state = {\n        visible: false,\n      }\n      this.handleClick = this.handleClick.bind(this)\n      this.getTarget = this.getTarget.bind(this)\n    }\n    handleClick() {\n      this.setState({\n        visible: !this.state.visible,\n      })\n    }\n    getTarget(index) {\n      return () => document.getElementsByClassName(`button-target${index}`)[0]\n    }\n    render() {\n      return (\n        <>\n          <Button onClick={this.handleClick} className="button-target0">\n            默认\n          </Button>\n          <Popconfirm\n            visible={this.state.visible}\n            content="美丽的泡沫，只是一霎烟火"\n            getTarget={this.getTarget(0)}\n          />\n        </>\n      )\n    }\n  }\n  return <Example />\n}',__scope:(e={props:v,DefaultLayout:a.a,Popconfirm:o.a,Button:l.a,Playground:r.c,Props:r.d},e.DefaultLayout=a.a,e._frontmatter=u,e),mdxType:"Playground"},(function(){var t=function(t){function e(e){var n;return(n=t.call(this,e)||this).state={visible:!1},n.handleClick=n.handleClick.bind(h(n)),n.getTarget=n.getTarget.bind(h(n)),n}b(e,t);var n=e.prototype;return n.handleClick=function(){this.setState({visible:!this.state.visible})},n.getTarget=function(t){return function(){return document.getElementsByClassName("button-target"+t)[0]}},n.render=function(){return Object(s.b)(i.Fragment,null,Object(s.b)(l.a,{onClick:this.handleClick,className:"button-target0",mdxType:"Button"},"默认"),Object(s.b)(o.a,{visible:this.state.visible,content:"美丽的泡沫，只是一霎烟火",getTarget:this.getTarget(0),mdxType:"Popconfirm"}))},e}(i.Component);return Object(s.b)(t,{mdxType:"Example"})})),Object(s.b)("h2",{id:"12-placement"},"12 Placement"),Object(s.b)(r.c,{__position:2,__code:'() => {\n  class Example extends React.Component {\n    constructor(props) {\n      super(props)\n      this.state = {\n        visible1: false,\n        visible2: false,\n        visible3: false,\n        visible4: false,\n      }\n      this.handleClick1 = this.handleClick1.bind(this)\n      this.handleClick2 = this.handleClick2.bind(this)\n      this.handleClick3 = this.handleClick3.bind(this)\n      this.handleClick4 = this.handleClick4.bind(this)\n      this.getTarget = this.getTarget.bind(this)\n    }\n    handleClick1() {\n      this.setState({\n        visible1: !this.state.visible1,\n      })\n    }\n    handleClick2() {\n      this.setState({\n        visible2: !this.state.visible2,\n      })\n    }\n    handleClick3() {\n      this.setState({\n        visible3: !this.state.visible3,\n      })\n    }\n    handleClick4() {\n      this.setState({\n        visible4: !this.state.visible4,\n      })\n    }\n    getTarget(index) {\n      return () => document.getElementsByClassName(`button-target${index}`)[0]\n    }\n    render() {\n      return (\n        <>\n          <Button onClick={this.handleClick1} className="button-target1">\n            Left\n          </Button>\n          <Popconfirm\n            visible={this.state.visible1}\n            content="美丽的泡沫，只是一霎烟火"\n            getTarget={this.getTarget(1)}\n            placement="left"\n          />\n          <Button onClick={this.handleClick2} className="button-target2">\n            Top\n          </Button>\n          <Popconfirm\n            visible={this.state.visible2}\n            content="美丽的泡沫，只是一霎烟火"\n            getTarget={this.getTarget(2)}\n            placement="top"\n          />\n          <Button onClick={this.handleClick3} className="button-target3">\n            Bottom\n          </Button>\n          <Popconfirm\n            visible={this.state.visible3}\n            content="美丽的泡沫，只是一霎烟火"\n            getTarget={this.getTarget(3)}\n            placement="bottom"\n          />\n          <Button onClick={this.handleClick4} className="button-target4">\n            Right\n          </Button>\n          <Popconfirm\n            visible={this.state.visible4}\n            content="美丽的泡沫，只是一霎烟火"\n            getTarget={this.getTarget(4)}\n            placement="right"\n          />\n        </>\n      )\n    }\n  }\n  return <Example />\n}',__scope:(n={props:v,DefaultLayout:a.a,Popconfirm:o.a,Button:l.a,Playground:r.c,Props:r.d},n.DefaultLayout=a.a,n._frontmatter=u,n),mdxType:"Playground"},(function(){var t=function(t){function e(e){var n;return(n=t.call(this,e)||this).state={visible1:!1,visible2:!1,visible3:!1,visible4:!1},n.handleClick1=n.handleClick1.bind(h(n)),n.handleClick2=n.handleClick2.bind(h(n)),n.handleClick3=n.handleClick3.bind(h(n)),n.handleClick4=n.handleClick4.bind(h(n)),n.getTarget=n.getTarget.bind(h(n)),n}b(e,t);var n=e.prototype;return n.handleClick1=function(){this.setState({visible1:!this.state.visible1})},n.handleClick2=function(){this.setState({visible2:!this.state.visible2})},n.handleClick3=function(){this.setState({visible3:!this.state.visible3})},n.handleClick4=function(){this.setState({visible4:!this.state.visible4})},n.getTarget=function(t){return function(){return document.getElementsByClassName("button-target"+t)[0]}},n.render=function(){return Object(s.b)(i.Fragment,null,Object(s.b)(l.a,{onClick:this.handleClick1,className:"button-target1",mdxType:"Button"},"Left"),Object(s.b)(o.a,{visible:this.state.visible1,content:"美丽的泡沫，只是一霎烟火",getTarget:this.getTarget(1),placement:"left",mdxType:"Popconfirm"}),Object(s.b)(l.a,{onClick:this.handleClick2,className:"button-target2",mdxType:"Button"},"Top"),Object(s.b)(o.a,{visible:this.state.visible2,content:"美丽的泡沫，只是一霎烟火",getTarget:this.getTarget(2),placement:"top",mdxType:"Popconfirm"}),Object(s.b)(l.a,{onClick:this.handleClick3,className:"button-target3",mdxType:"Button"},"Bottom"),Object(s.b)(o.a,{visible:this.state.visible3,content:"美丽的泡沫，只是一霎烟火",getTarget:this.getTarget(3),placement:"bottom",mdxType:"Popconfirm"}),Object(s.b)(l.a,{onClick:this.handleClick4,className:"button-target4",mdxType:"Button"},"Right"),Object(s.b)(o.a,{visible:this.state.visible4,content:"美丽的泡沫，只是一霎烟火",getTarget:this.getTarget(4),placement:"right",mdxType:"Popconfirm"}))},e}(i.Component);return Object(s.b)(t,{mdxType:"Example"})})),Object(s.b)("h2",{id:"with-title-and-content"},"With Title and Content"),Object(s.b)(r.c,{__position:3,__code:'() => {\n  class Example extends React.Component {\n    constructor(props) {\n      super(props)\n      this.state = {\n        visible: false,\n      }\n      this.handleClick = this.handleClick.bind(this)\n      this.handleClose = this.handleClose.bind(this)\n      this.getTarget = this.getTarget.bind(this)\n    }\n    handleClick() {\n      this.setState({\n        visible: !this.state.visible,\n      })\n    }\n    handleClose() {\n      this.setState({\n        visible: false,\n      })\n    }\n    getTarget(index) {\n      return () => document.getElementsByClassName(`button-target${index}`)[0]\n    }\n    render() {\n      return (\n        <>\n          <Button onClick={this.handleClick} className="button-target5">\n            A complex Popconfirm!\n          </Button>\n          <Popconfirm\n            visible={this.state.visible}\n            title="This is the title"\n            button={[\n              <Button onClick={this.handleClose} size="s" key="confirm">\n                Confirm\n              </Button>,\n              <Button onClick={this.handleClose} size="s" key="cancel">\n                Cancel\n              </Button>,\n            ]}\n            content="This is the content"\n            placement="top"\n            getTarget={this.getTarget(5)}\n          />\n        </>\n      )\n    }\n  }\n  return <Example />\n}',__scope:(d={props:v,DefaultLayout:a.a,Popconfirm:o.a,Button:l.a,Playground:r.c,Props:r.d},d.DefaultLayout=a.a,d._frontmatter=u,d),mdxType:"Playground"},(function(){var t=function(t){function e(e){var n;return(n=t.call(this,e)||this).state={visible:!1},n.handleClick=n.handleClick.bind(h(n)),n.handleClose=n.handleClose.bind(h(n)),n.getTarget=n.getTarget.bind(h(n)),n}b(e,t);var n=e.prototype;return n.handleClick=function(){this.setState({visible:!this.state.visible})},n.handleClose=function(){this.setState({visible:!1})},n.getTarget=function(t){return function(){return document.getElementsByClassName("button-target"+t)[0]}},n.render=function(){return Object(s.b)(i.Fragment,null,Object(s.b)(l.a,{onClick:this.handleClick,className:"button-target5",mdxType:"Button"},"A complex Popconfirm!"),Object(s.b)(o.a,{visible:this.state.visible,title:"This is the title",button:[Object(s.b)(l.a,{onClick:this.handleClose,size:"s",key:"confirm",mdxType:"Button"},"Confirm"),Object(s.b)(l.a,{onClick:this.handleClose,size:"s",key:"cancel",mdxType:"Button"},"Cancel")],content:"This is the content",placement:"top",getTarget:this.getTarget(5),mdxType:"Popconfirm"}))},e}(i.Component);return Object(s.b)(t,{mdxType:"Example"})})),Object(s.b)("h2",{id:"customize-the-placement"},"Customize the placement"),Object(s.b)(r.c,{__position:4,__code:"() => {\n  class Example extends React.Component {\n    constructor(props) {\n      super(props)\n      this.state = {\n        visible: false,\n      }\n      this.handleClick = this.handleClick.bind(this)\n      this.getTarget = this.getTarget.bind(this)\n    }\n    handleClick() {\n      this.setState({\n        visible: !this.state.visible,\n      })\n    }\n    getTarget(index) {\n      return () => document.getElementsByClassName(`button-target${index}`)[0]\n    }\n    render() {\n      return (\n        <>\n          <Button onClick={this.handleClick} className=\"button-target6\">\n            Customized\n          </Button>\n          <Popconfirm\n            visible={this.state.visible}\n            content=\"美丽的泡沫，只是一霎烟火\"\n            align={{\n              points: ['cc', 'cc'],\n              offset: [30, 45],\n            }}\n            getTarget={this.getTarget(6)}\n          />\n        </>\n      )\n    }\n  }\n  return <Example />\n}",__scope:(g={props:v,DefaultLayout:a.a,Popconfirm:o.a,Button:l.a,Playground:r.c,Props:r.d},g.DefaultLayout=a.a,g._frontmatter=u,g),mdxType:"Playground"},(function(){var t=function(t){function e(e){var n;return(n=t.call(this,e)||this).state={visible:!1},n.handleClick=n.handleClick.bind(h(n)),n.getTarget=n.getTarget.bind(h(n)),n}b(e,t);var n=e.prototype;return n.handleClick=function(){this.setState({visible:!this.state.visible})},n.getTarget=function(t){return function(){return document.getElementsByClassName("button-target"+t)[0]}},n.render=function(){return Object(s.b)(i.Fragment,null,Object(s.b)(l.a,{onClick:this.handleClick,className:"button-target6",mdxType:"Button"},"Customized"),Object(s.b)(o.a,{visible:this.state.visible,content:"美丽的泡沫，只是一霎烟火",align:{points:["cc","cc"],offset:[30,45]},getTarget:this.getTarget(6),mdxType:"Popconfirm"}))},e}(i.Component);return Object(s.b)(t,{mdxType:"Example"})})),Object(s.b)("h2",{id:"inline"},"Inline"),Object(s.b)(r.c,{__position:5,__code:'<Popconfirm\n  visible={true}\n  content="I am an inline Popconfirm! Isn\'t it pretty?"\n  inline\n/>',__scope:(f={props:v,DefaultLayout:a.a,Popconfirm:o.a,Button:l.a,Playground:r.c,Props:r.d},f.DefaultLayout=a.a,f._frontmatter=u,f),mdxType:"Playground"},Object(s.b)(o.a,{visible:!0,content:"I am an inline Popconfirm! Isn't it pretty?",inline:!0,mdxType:"Popconfirm"})))}void 0!==g&&g&&g===Object(g)&&Object.isExtensible(g)&&!g.hasOwnProperty("__filemeta")&&Object.defineProperty(g,"__filemeta",{configurable:!0,value:{name:"MDXContent",filename:"components/popconfirm/Popconfirm.mdx"}}),g.isMDXComponent=!0}}]);
//# sourceMappingURL=component---components-popconfirm-popconfirm-mdx-9a1638cc3f283931fc9a.js.map