### 五道口前端公共文件库

*  前端代码引用地址
*  

#### bootstrap 


*   [bootstrap文档](http://www.bootcss.com/)    

1.  引用bootstrap的js        
    日常  //g-assets.daily.taobao.net/hema/lib/0.0.1/bootstrap/bootstrap.js        
    预发或线上  //g.alicdn.com/hema/lib/0.0.1/bootstrap/bootstrap.js      

2.  引用bootstrap的css     
    日常  //g-assets.daily.taobao.net/hema/lib/0.0.1/bootstrap/bootstrap.css     
    预发或线上  //g.alicdn.com/hema/lib/0.0.1/bootstrap/bootstrap.css      

3.  引用bootstrap-theme的css          
    日常  //g-assets.daily.taobao.net/hema/lib/0.0.1/bootstrap/bootstrap-theme.css     
    预发或线上  //g-assets.daily.taobao.net/hema/lib/0.0.1/bootstrap/bootstrap-theme.css    

#### jQuery     

 * jQuery 2.0版本以下支持ie低版本浏览器 2.0以上不支持      
 
 1. 引用1.11.3版本      
    日常   //g-assets.daily.taobao.net/hema/lib/0.0.1/jquery/1.11.3/jquery.js         
    预发或线上  //g.alicdn.com/hema/lib/0.0.1/jquery/1.11.3/jquery.js     
    
 2. 引用2.1.4版本      
    日常   //g-assets.daily.taobao.net/hema/lib/0.0.1/jquery/2.1.4/jquery.js     
    预发或线上  //g.alicdn.com/hema/lib/0.0.1/jquery/2.1.4/jquery.js 

 *	jQuery 的表单验证和显示日期时间的组件

 1. 引用jquery.validate.js<br>
 	日常	//g-assets.daily.taobao.net/hema/lib/0.0.1/jquery/2.1.4/jquery.validate.js<br>
 	预发或线上	//g.alicdn.com/hema/lib/0.0.1/jquery/2.1.4/jquery.validate.js<br>

 1.1 表单验证组件的使用方式

    默认提示为英文，可以引用中文提示 //g-assets.daily.taobao.net/hema/lib/0.0.1/jquery/2.1.4/messages_zh.js

    1.1.1 将校验规则写在控件中
    ```html
    <script src="../js/jquery.js" type="text/javascript"></script>
    <script src="../js/jquery.validate.js" type="text/javascript"></script>
    <script src="../js/jquery.metadata.js" type="text/javascript"></script>

    $().ready(function() {
     $("#signupForm").validate();
    });


    <form id="signupForm" method="get" action="">
        <p>
            <label for="firstname">Firstname</label>
            <input id="firstname" name="firstname" class="required" />
        </p>
        <p>
            <label for="email">E-Mail</label>
            <input id="email" name="email" class="required email" />
        </p>
        <p>
            <label for="password">Password</label>
            <input id="password" name="password" type="password" class="{required:true,minlength:5}" />
        </p>
        <p>
            <label for="confirm_password">确认密码</label>
            <input id="confirm_password" name="confirm_password" type="password" class="{required:true,minlength:5,equalTo:'#password'}" />
        </p>
        <p>
            <input class="submit" type="submit" value="Submit"/>
        </p>
    </form>

    1.1.2 将校验规则写在js代码中

    ```js
    $().ready(function() {
        $("#signupForm").validate({
            rules: {
                firstname: "required",
                email: {
                    required: true,
                    email: true
                },
                password: {
                    required: true,
                    minlength: 5
                },
                confirm_password: {
                    required: true,
                    minlength: 5,
                    equalTo: "#password"
                }
            },
            messages: {
                firstname: "请输入姓名",
                email: {
                    required: "请输入Email地址",
                    email: "请输入正确的email地址"
                },
                password: {
                    required: "请输入密码",
                    minlength: jQuery.format("密码不能小于{0}个字 符")
                },
                confirm_password: {
                    required: "请输入确认密码",
                    minlength: "确认密码不能小于5个字符",
                    equalTo: "两次输入密码不一致不一致"
                }
            }
        });
    });

    messages 处，如果某个控件没有 message，将调用默认的信息

 2. 引用日期组件laydate.js<br>
 	日常	//g-assets.daily.taobao.net/hema/lib/0.0.1/jquery/2.1.4/laydate/laydate.js<br>
 	预发或线上	//g.alicdn.com/hema/lib/0.0.1/jquery/2.1.4/laydate/laydate.js