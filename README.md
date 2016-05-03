### 前端公共文件库

*  前端代码引用地址
*

#### bootstrap


*   [bootstrap文档](http://www.bootcss.com/)

1.  引用bootstrap的js


2.  引用bootstrap的css


3.  引用bootstrap-theme的css


#### jQuery

 * jQuery 2.0版本以下支持ie低版本浏览器 2.0以上不支持

 1. 引用1.11.3版本


 2. 引用2.1.4版本


 *	jQuery 的表单验证和显示日期时间的组件

 1. 引用jquery.validate.js<br>


 1.1 表单验证组件的使用方式<br>

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
    ```javascript
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


    2.1 日期组件的使用

    2.1.1 jQuery方式调用
    ```javascript
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
    | 格式  | 说明 |
    | ------------- | ------------- |
    | yy  | 将年份表示为二位数字。 |
    | yyyy  | 将年份表示为四位数字。如果少于四位数，前面补零。  |
    |   M   |  将月份表示为从 1 至 12 的数字。  |
    |   MM   |   同上，如果小于两位数，前面补零。   |
    |   d   |   将月中日期表示为从 1 至 31 的数字。   |
    |   dd   |   同上，如果小于两位数，前面补零。   |
    |   H   |   将小时表示为从 0 至 23 的数字。   |
    |   HH   |   同上，如果小于两位数，前面补零。   |
    |   m   |   将分钟表示为从 0 至 59 的数字。   |
    |   mm   |   同上，如果小于两位数，前面补零。   |
    |   s   |   将秒表示为从 0 至 59 的数字。   |
    |   ss   |   同上，如果小于两位数，前面补零。   |
    <p>示例(只列出了常用的几种格式，如需要其它格式请自行设置)</p>
    | 格式字符串 | 值          |
    | ------------- | ----------- |
    | yyyy-MM-dd HH:mm:ss      | 2008-03-12 19:20:00 |
    | yy年M月     | 08年3月     |
    | yyyyMMdd     | 20080312     |
    | MM/dd/yyyy     | 03/12/2008     |
    2.1.4 日期范围限制

        1. 静态限制
    ```javascript
        /*限制日期的范围是 2012-03-08到2012-05-27 (注意minDate和maxDate的格式一定要是yyyy-MM-dd)*/
        $.calendar({ minDate:'2012-03-08', maxDate:'2012-05-27' });
    ```
        2. 动态限制
    ```javascript
        /*只能选择今天以后的日期，包括今天*/
        $.calendar({ maxDate:'%y-%M-%d' });
    ```
        3. 只能选择今天以后的日期(不包括今天)
    ```javascript
        /*参数noToday为true时指不包括今天，为false或不写此参数为包括今天*/
        $.calendar({ minDate:'%y-%M-%d', noToday:true });
    ```
        4. 只能选择当前年当前月3号到2014年12前月的当前天之间的日期
    ```javascript
        $.calendar({ minDate:'%y-%M-03', maxDate:'2014-12-%d' });
    ```
        5. 前面的日期不能大于后面的日期
    ```javascript
        $.calendar({ maxDate:'#inp12' });
        $.calendar({ minDate:'#inp11' });
    ```
        6. 前面的日期不能大于后面的日期(targetFormat参数示例)
    ```javascript
        $.calendar({ maxDate:'#inp14', format:'yyyyMMdd', targetFormat:'yyyy年MM月dd日' });
        $.calendar({ minDate:'#inp13', format:'yyyy年MM月dd日', targetFormat:'yyyyMMdd' });
    ```
        7. 无效周(可以使用此功能禁用周日至周六所对应的日期,相关属性:disWeek (0至6 分别代表 周日至周六))
    ```javascript
        $.calendar({ disWeek:'6' });
        $.calendar({ disWeek:'0,4' });
    ```
    2.1.5 无效日期(可以使用此功能禁用,所指定的一个或多个日期)

        1. 禁用每个月份的 5日 15日 25日
    ```javascript
        /*'5$' 表示以 5 结尾 注意 $ 的用法*/
        $.calendar({ disDate:['5$'] });
    ```
        2. 禁用所有早于2000-01-01的日期
    ```javascript
        $.calendar({ disDate:['^19'] });
    ```
        3. 禁用2012-05-05 和 2012-05-24
    ```javascript
        $.calendar({ disDate:['2012-05-05','2012-05-24'] });
    ```
        4. 禁用2012-所有月份-04 和 2012-05-29
    ```javascript
        $.calendar({ disDate:['2012-..-04','2012-05-29'] });
    ```
        5. 禁用[2000至2008]-05-01 和 2012-03-29
    ```javascript
        $.calendar({ disDate:['200[0-8]-05-01','2012-03-29'] });
    ```
        6. 禁用所有年份和所有月份的第7天和今天
    ```javascript
        $.calendar({ disDate:['....-..-07','%y-%M-%d'] });
    ```
    2.1.6 有效日期(启用少部分日期,enDate 默认为false, 为true时,无效日期变成有效日期)

        1. 启用 每个月份的 5日 15日 25日
    ```javascript
        $.calendar({ disDate:['5$'], enDate:true });
    ```
