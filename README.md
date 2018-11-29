# 前端项目测试脚本
### 1.描述：

这是我前端测试脚本，有两个语言，bash与node，执行脚本，会自动创建目录，目录里面有`index.html`,`css/style.css`,`js/main.js` 和一些测试代码。

### 2.使用方法
#### 第一步 拉取本仓库到本地
```
git clone git@github.com:qiuzp94/test-script.git
```

#### 第二步 执行脚本
```
脚本位置\demo.脚本后缀 [新建目录名]

例子：
~/test-script/demo.js hello
然后就会在该目录下新建hello目录，可以使用tree命令查看新建目录结构

tree .
.
└── hello
    ├── css
    │   └── style.css
    ├── index.html
    └── js
        └── main.js
```

### 3.更新历史：
2018/11/29 上传第一版代码

