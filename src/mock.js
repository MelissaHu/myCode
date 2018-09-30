const Mock = require('mockjs');
const Random = Mock.Random;

const produceNewsData = function() {
    let articles = [];
    for (let i = 0; i < 100; i++) {
        let newArticleObject = {
            title: Random.csentence(5, 30),
            thumbnail_pic_s: Random.dataImage('300*250', 'mock的图片'),
            author_name: Random.cname(),
            date: Random.date() + '' + Random.time()
        }
        articles.push(newArticleObject)
    }
    return {
        articles: articles
    }
}


let loginInfo = {
    username: 'admin',
    password: '000'
}


const checkName = function(data) {
    var obj = JSON.parse(data.body);
    console.log(obj.username);
    if (obj.username === loginInfo.username && obj.password === loginInfo.password) {
        console.log('mock', '登陆成功')
    } else {
        console.log('mock', '失败')
    }

}


Mock.mock('/news/index', 'get', produceNewsData)
Mock.mock('/login', 'post', (req, res) => checkName(req))