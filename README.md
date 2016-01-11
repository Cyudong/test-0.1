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
    ```

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
    ```

    messages 处，如果某个控件没有 message，将调用默认的信息

 2. 引用日期组件laydate.js<br>
 	日常	//g-assets.daily.taobao.net/hema/lib/0.0.1/jquery/2.1.4/laydate/laydate.js<br>
 	预发或线上	//g.alicdn.com/hema/lib/0.0.1/jquery/2.1.4/laydate/laydate.js<br>

    2.1 日期组件的使用

    2.1.1 jQuery方式调用
        ```js
        $(function(){
            $('#id').calendar();
        });
        ```
    2.1.2 id参数方式调用
        ```javascript
        $.calendar({ id:'#id' });
        ```
    2.1.3 是否显示底部的按钮栏和时间
        ```javascript
        $.calendar({ format:'yyyy年MM月dd日 HH时mm分ss秒' });
        ```
        <p>日期格式表</p>
        <table width="100%" border="0" cellspacing="1" bgcolor="#000000">
            <tr>
                <th width="12%">格式</th>
                <th width="88%">说明</th>
            </tr>
            <tr>
                <td align="center">yy</td>
                <td>将年份表示为二位数字。</td>
            </tr>
            <tr>
                <td align="center">yyyy</td>
                <td>将年份表示为四位数字。如果少于四位数，前面补零。</td>
            </tr>
            <tr>
                <td align="center">M</td>
                <td>将月份表示为从 1 至 12 的数字</td>
            </tr>
            <tr>
                <td align="center">MM</td>
                <td>同上，如果小于两位数，前面补零。</td>
            </tr>
            <tr>
                <td align="center">d</td>
                <td>将月中日期表示为从 1 至 31 的数字。</td>
            </tr>
            <tr>
                <td align="center">dd</td>
                <td>同上，如果小于两位数，前面补零。</td>
            </tr>
            <tr>
                <td align="center">H </td>
                <td>将小时表示为从 0 至 23 的数字。</td>
            </tr>
            <tr>
                <td align="center">HH</td>
                <td>同上，如果小于两位数，前面补零。</td>
            </tr>
            <tr>
                <td align="center">m</td>
                <td>将分钟表示为从 0 至 59 的数字。</td>
            </tr>
            <tr>
                <td align="center">mm</td>
                <td>同上，如果小于两位数，前面补零。</td>
            </tr>
            <tr>
                <td align="center">s</td>
                <td>将秒表示为从 0 至 59 的数字。</td>
            </tr>
            <tr>
                <td align="center">ss</td>
                <td>同上，如果小于两位数，前面补零。</td>
            </tr>
        </table>
        <p>示例(只列出了常用的几种格式，如需要其它格式请自行设置)</p>
        <table width="100%" border="0" cellspacing="1" bgcolor="#000000">
            <tr>
                <th width="191">格式字符串</th>
                <th>值</th>
            </tr>
            <tr>
                <td align="center">yyyy-MM-dd HH:mm:ss</td>
                <td>2008-03-12 19:20:00</td>
            </tr>
            <tr>
                <td align="center">yy年M月</td>
                <td>08年3月</td>
            </tr>
            <tr>
                <td align="center">yyyyMMdd</td>
                <td>20080312</td>
            </tr>
            <tr>
                <td align="center">MM/dd/yyyy</td>
                <td>03/12/2008</td>
            </tr>
        </table>