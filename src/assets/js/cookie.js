/*用export把方法暴露出来*/
/*设置cookie */
export function setCookie(c_name, value, expire) {
    var data = new Date()
        //这个是cookie有效期，将cookie的有效时间设成当前时间之前就是删除
    data.setSeconds(date.getSeconds() + expire)
    document.cookie = c_name + "=" + escape(value) + "; expires=" + date.toGMTString()
    console.log(document.cookie)
}