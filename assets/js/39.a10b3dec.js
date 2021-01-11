(window.webpackJsonp=window.webpackJsonp||[]).push([[39],{526:function(s,a,n){"use strict";n.r(a);var t=n(4),e=Object(t.a)({},(function(){var s=this,a=s.$createElement,n=s._self._c||a;return n("ContentSlotsDistributor",{attrs:{"slot-key":s.$parent.slotKey}},[n("h2",{attrs:{id:"安装"}},[n("a",{staticClass:"header-anchor",attrs:{href:"#安装"}},[s._v("#")]),s._v(" 安装")]),s._v(" "),n("p",[s._v("使用yum安装非常简单：")]),s._v(" "),n("div",{staticClass:"language-sh line-numbers-mode"},[n("pre",{pre:!0,attrs:{class:"language-sh"}},[n("code",[s._v("yum "),n("span",{pre:!0,attrs:{class:"token function"}},[s._v("install")]),s._v(" subversion\n")])]),s._v(" "),n("div",{staticClass:"line-numbers-wrapper"},[n("span",{staticClass:"line-number"},[s._v("1")]),n("br")])]),n("h2",{attrs:{id:"配置"}},[n("a",{staticClass:"header-anchor",attrs:{href:"#配置"}},[s._v("#")]),s._v(" 配置")]),s._v(" "),n("p",[s._v("2.1. 创建仓库\n我们这里在/home下建立一个名为svn的仓库（repository），以后所有代码都放在这个下面，创建成功后在svn下面多了几个文件夹。")]),s._v(" "),n("div",{staticClass:"language-sh line-numbers-mode"},[n("pre",{pre:!0,attrs:{class:"language-sh"}},[n("code",[n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("[")]),s._v("root@localhost /"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("]")]),n("span",{pre:!0,attrs:{class:"token comment"}},[s._v("# cd /home")]),s._v("\n"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("[")]),s._v("root@localhost home"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("]")]),n("span",{pre:!0,attrs:{class:"token comment"}},[s._v("# mkdir svn")]),s._v("\n"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("[")]),s._v("root@localhost home"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("]")]),n("span",{pre:!0,attrs:{class:"token comment"}},[s._v("# svnadmin create /home/svn")]),s._v("\n"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("[")]),s._v("root@localhost home"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("]")]),n("span",{pre:!0,attrs:{class:"token comment"}},[s._v("# ls svn")]),s._v("\nconf  db  "),n("span",{pre:!0,attrs:{class:"token function"}},[s._v("format")]),s._v("  hooks  locks  README.txt\n")])]),s._v(" "),n("div",{staticClass:"line-numbers-wrapper"},[n("span",{staticClass:"line-number"},[s._v("1")]),n("br"),n("span",{staticClass:"line-number"},[s._v("2")]),n("br"),n("span",{staticClass:"line-number"},[s._v("3")]),n("br"),n("span",{staticClass:"line-number"},[s._v("4")]),n("br"),n("span",{staticClass:"line-number"},[s._v("5")]),n("br")])]),n("p",[s._v("我们这里特别关注一下conf文件夹，这个是存放配置文件的")]),s._v(" "),n("div",{staticClass:"language-sh line-numbers-mode"},[n("pre",{pre:!0,attrs:{class:"language-sh"}},[n("code",[n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("[")]),s._v("root@localhost home"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("]")]),n("span",{pre:!0,attrs:{class:"token comment"}},[s._v("# cd svn/conf")]),s._v("\n"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("[")]),s._v("root@localhost conf"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("]")]),n("span",{pre:!0,attrs:{class:"token comment"}},[s._v("# ls")]),s._v("\nauthz  "),n("span",{pre:!0,attrs:{class:"token function"}},[s._v("passwd")]),s._v("  svnserve.conf\n")])]),s._v(" "),n("div",{staticClass:"line-numbers-wrapper"},[n("span",{staticClass:"line-number"},[s._v("1")]),n("br"),n("span",{staticClass:"line-number"},[s._v("2")]),n("br"),n("span",{staticClass:"line-number"},[s._v("3")]),n("br")])]),n("p",[s._v("其中：\nauthz 是权限控制文件\npasswd 是帐号密码文件\nsvnserve.conf 是SVN服务配置文件\n接下来我们依次修改这3个文件。\n2.2. 配置passwd")]),s._v(" "),n("div",{staticClass:"language-sh line-numbers-mode"},[n("pre",{pre:!0,attrs:{class:"language-sh"}},[n("code",[n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("[")]),s._v("root@localhost conf"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("]")]),n("span",{pre:!0,attrs:{class:"token comment"}},[s._v("# vi passwd ")]),s._v("\n"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("[")]),s._v("users"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("]")]),s._v("\n"),n("span",{pre:!0,attrs:{class:"token assign-left variable"}},[s._v("test1")]),n("span",{pre:!0,attrs:{class:"token operator"}},[s._v("=")]),n("span",{pre:!0,attrs:{class:"token number"}},[s._v("123456")]),s._v("\n"),n("span",{pre:!0,attrs:{class:"token assign-left variable"}},[s._v("test2")]),n("span",{pre:!0,attrs:{class:"token operator"}},[s._v("=")]),n("span",{pre:!0,attrs:{class:"token number"}},[s._v("123456")]),s._v("\n\n")])]),s._v(" "),n("div",{staticClass:"line-numbers-wrapper"},[n("span",{staticClass:"line-number"},[s._v("1")]),n("br"),n("span",{staticClass:"line-number"},[s._v("2")]),n("br"),n("span",{staticClass:"line-number"},[s._v("3")]),n("br"),n("span",{staticClass:"line-number"},[s._v("4")]),n("br"),n("span",{staticClass:"line-number"},[s._v("5")]),n("br")])]),n("p",[s._v("上面的例子中我们创建了2个用户，一个test1，一个test2")]),s._v(" "),n("p",[s._v("2.3. 配置authz")]),s._v(" "),n("div",{staticClass:"language- line-numbers-mode"},[n("pre",{pre:!0,attrs:{class:"language-text"}},[n("code",[s._v("[root@localhost conf]# vi authz \n[/] # 仓库下所有文件\nliuxianan=rw # 可读可写\ntest1=r # 只读\ntest2=r\n*= # 其他用户无任何权限\n")])]),s._v(" "),n("div",{staticClass:"line-numbers-wrapper"},[n("span",{staticClass:"line-number"},[s._v("1")]),n("br"),n("span",{staticClass:"line-number"},[s._v("2")]),n("br"),n("span",{staticClass:"line-number"},[s._v("3")]),n("br"),n("span",{staticClass:"line-number"},[s._v("4")]),n("br"),n("span",{staticClass:"line-number"},[s._v("5")]),n("br"),n("span",{staticClass:"line-number"},[s._v("6")]),n("br")])]),n("p",[s._v("上面配置的含义是，liuxianan对/home/svn/下所有文件具有可读可写权限，test只有只读权限，除此之外，其它用户均无任何权限，最后一行*=很重要不能少。")]),s._v(" "),n("p",[s._v("2.3.1. 拓展：使用用户分组\n这个我一般不用，但是记录下来。\n还是这个文件：")]),s._v(" "),n("div",{staticClass:"language-sh line-numbers-mode"},[n("pre",{pre:!0,attrs:{class:"language-sh"}},[n("code",[n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("[")]),s._v("root@localhost conf"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("]")]),n("span",{pre:!0,attrs:{class:"token comment"}},[s._v("# vi authz")]),s._v("\n"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("[")]),s._v("groups"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("]")]),s._v("\ngroup1 "),n("span",{pre:!0,attrs:{class:"token operator"}},[s._v("=")]),s._v(" liuxianan\ngroup2 "),n("span",{pre:!0,attrs:{class:"token operator"}},[s._v("=")]),s._v(" test1,test2\n"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("[")]),s._v("/"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("]")]),s._v("\n@group1 "),n("span",{pre:!0,attrs:{class:"token operator"}},[s._v("=")]),s._v(" rw\n@group2 "),n("span",{pre:!0,attrs:{class:"token operator"}},[s._v("=")]),s._v(" r\n* "),n("span",{pre:!0,attrs:{class:"token operator"}},[s._v("=")]),s._v("\n")])]),s._v(" "),n("div",{staticClass:"line-numbers-wrapper"},[n("span",{staticClass:"line-number"},[s._v("1")]),n("br"),n("span",{staticClass:"line-number"},[s._v("2")]),n("br"),n("span",{staticClass:"line-number"},[s._v("3")]),n("br"),n("span",{staticClass:"line-number"},[s._v("4")]),n("br"),n("span",{staticClass:"line-number"},[s._v("5")]),n("br"),n("span",{staticClass:"line-number"},[s._v("6")]),n("br"),n("span",{staticClass:"line-number"},[s._v("7")]),n("br"),n("span",{staticClass:"line-number"},[s._v("8")]),n("br")])]),n("p",[s._v("上面配置中创建了2个分组，分组1的用户可读可写，分组2的用户只读。\n格式说明：\n版本库目录格式：")]),s._v(" "),n("div",{staticClass:"language- line-numbers-mode"},[n("pre",{pre:!0,attrs:{class:"language-text"}},[n("code",[s._v("[<版本库>:/项目/目录]\n@<用户组名> = <权限>\n<用户名> = <权限>\n\n")])]),s._v(" "),n("div",{staticClass:"line-numbers-wrapper"},[n("span",{staticClass:"line-number"},[s._v("1")]),n("br"),n("span",{staticClass:"line-number"},[s._v("2")]),n("br"),n("span",{staticClass:"line-number"},[s._v("3")]),n("br"),n("span",{staticClass:"line-number"},[s._v("4")]),n("br")])]),n("p",[s._v("2.4. 配置svnserve.conf")]),s._v(" "),n("div",{staticClass:"language-sh line-numbers-mode"},[n("pre",{pre:!0,attrs:{class:"language-sh"}},[n("code",[n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("[")]),s._v("root@localhost conf"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("]")]),n("span",{pre:!0,attrs:{class:"token comment"}},[s._v("# vi svnserve.conf ")]),s._v("\n")])]),s._v(" "),n("div",{staticClass:"line-numbers-wrapper"},[n("span",{staticClass:"line-number"},[s._v("1")]),n("br")])]),n("p",[s._v("打开下面的5个注释\nanon-access = read #匿名用户可读\nauth-access = write #授权用户可写\npassword-db = passwd #使用哪个文件作为账号文件\nauthz-db = authz #使用哪个文件作为权限文件\nrealm = /home/svn # 认证空间名，版本库所在目录")]),s._v(" "),n("p",[s._v("2点注意：\n最后一行的realm记得改成你的svn目录\n打开注释时切记前面不要留有空格，否则可能有问题（网上说的，我没有亲测）")]),s._v(" "),n("h2",{attrs:{id:"启动与停止"}},[n("a",{staticClass:"header-anchor",attrs:{href:"#启动与停止"}},[s._v("#")]),s._v(" 启动与停止")]),s._v(" "),n("div",{staticClass:"language-sh line-numbers-mode"},[n("pre",{pre:!0,attrs:{class:"language-sh"}},[n("code",[n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("[")]),s._v("root@localhost conf"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("]")]),n("span",{pre:!0,attrs:{class:"token comment"}},[s._v("# svnserve -d -r /home/svn（启动）")]),s._v("\n"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("[")]),s._v("root@localhost conf"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("]")]),n("span",{pre:!0,attrs:{class:"token comment"}},[s._v("#killall svnserve（停止）")]),s._v("\n")])]),s._v(" "),n("div",{staticClass:"line-numbers-wrapper"},[n("span",{staticClass:"line-number"},[s._v("1")]),n("br"),n("span",{staticClass:"line-number"},[s._v("2")]),n("br")])]),n("p",[s._v("上述启动命令中，-d表示守护进程， -r 表示在后台执行。停止还可以采用杀死进程的方式：")]),s._v(" "),n("div",{staticClass:"language-sh line-numbers-mode"},[n("pre",{pre:!0,attrs:{class:"language-sh"}},[n("code",[n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("[")]),s._v("root@localhost conf"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("]")]),n("span",{pre:!0,attrs:{class:"token comment"}},[s._v("# ps -ef|grep svnserve")]),s._v("\nroot      "),n("span",{pre:!0,attrs:{class:"token number"}},[s._v("4908")]),s._v("     "),n("span",{pre:!0,attrs:{class:"token number"}},[s._v("1")]),s._v("  "),n("span",{pre:!0,attrs:{class:"token number"}},[s._v("0")]),s._v(" "),n("span",{pre:!0,attrs:{class:"token number"}},[s._v("21")]),s._v(":32 ?        00:00:00 svnserve -d -r /home/svn\nroot      "),n("span",{pre:!0,attrs:{class:"token number"}},[s._v("4949")]),s._v("  "),n("span",{pre:!0,attrs:{class:"token number"}},[s._v("4822")]),s._v("  "),n("span",{pre:!0,attrs:{class:"token number"}},[s._v("0")]),s._v(" "),n("span",{pre:!0,attrs:{class:"token number"}},[s._v("22")]),s._v(":05 pts/0    00:00:00 "),n("span",{pre:!0,attrs:{class:"token function"}},[s._v("grep")]),s._v(" svnserve\n"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("[")]),s._v("root@localhost conf"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("]")]),n("span",{pre:!0,attrs:{class:"token comment"}},[s._v("# kill -9 4908")]),s._v("\n")])]),s._v(" "),n("div",{staticClass:"line-numbers-wrapper"},[n("span",{staticClass:"line-number"},[s._v("1")]),n("br"),n("span",{staticClass:"line-number"},[s._v("2")]),n("br"),n("span",{staticClass:"line-number"},[s._v("3")]),n("br"),n("span",{staticClass:"line-number"},[s._v("4")]),n("br")])]),n("p",[s._v("客户端连接\n这里使用TortoiseSVN，输入地址svn://你的IP 即可，不出意外输入用户名和密码就能连接成功了。\n默认端口3690，如果你修改了端口，那么要记得加上端口号。")]),s._v(" "),n("h2",{attrs:{id:"总结"}},[n("a",{staticClass:"header-anchor",attrs:{href:"#总结"}},[s._v("#")]),s._v(" 总结")]),s._v(" "),n("p",[s._v("总的来说，如果你不需要杂七杂八的权限配置只是自己一个人用的话，安装配置还是比较简单的，并不像网上说的那么麻烦，我按照网上的方法一次性成功了。\n扩展：yum安装路径\n以svn为例：")]),s._v(" "),n("div",{staticClass:"language-sh line-numbers-mode"},[n("pre",{pre:!0,attrs:{class:"language-sh"}},[n("code",[n("span",{pre:!0,attrs:{class:"token comment"}},[s._v("# rpm -qa | grep subversion")]),s._v("\nsubversion-1.6.11-15.el6_7.x86_64\n"),n("span",{pre:!0,attrs:{class:"token comment"}},[s._v("# rpm -ql subversion-1.6.11-15.el6_7.x86_64")]),s._v("\n"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("..")]),s._v(".\n/usr/share/doc/subversion-1.6.11\n/usr/share/doc/subversion-1.6.11/BUGS\n/usr/share/doc/subversion-1.6.11/CHANGES\n"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("..")]),s._v(".\n")])]),s._v(" "),n("div",{staticClass:"line-numbers-wrapper"},[n("span",{staticClass:"line-number"},[s._v("1")]),n("br"),n("span",{staticClass:"line-number"},[s._v("2")]),n("br"),n("span",{staticClass:"line-number"},[s._v("3")]),n("br"),n("span",{staticClass:"line-number"},[s._v("4")]),n("br"),n("span",{staticClass:"line-number"},[s._v("5")]),n("br"),n("span",{staticClass:"line-number"},[s._v("6")]),n("br"),n("span",{staticClass:"line-number"},[s._v("7")]),n("br"),n("span",{staticClass:"line-number"},[s._v("8")]),n("br")])]),n("h2",{attrs:{id:"说明"}},[n("a",{staticClass:"header-anchor",attrs:{href:"#说明"}},[s._v("#")]),s._v(" 说明")]),s._v(" "),n("p",[s._v("rpm -qa 查询所有安装的rpm包，可以配合grep命令。\nrpm -qi 查询某个具体包的介绍。\nrpm -ql 列出某个具体包的所有文件\nrpm几个默认安装路径：\n/etc    一些设置文件放置的目录\n/usr/bin    一些可执行文件\n/usr/lib64  一些程序使用的动态函数库\n/usr/share/doc  一些基本的软件使用手册与帮助文档\n/usr/share/man  一些man page文件")])])}),[],!1,null,null,null);a.default=e.exports}}]);