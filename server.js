console.log('server running');

const express = require('express');
const MongoClient = require('mongodb').MongoClient;
const app = express();
// 設定靜態網頁的資料夾
app.use(express.static(__dirname))

let db
var db1 = 'ans'
var js1 = 'database/01_stat.json'
var js2 = 'database/01.json'

const url = 'mongodb://localhost:27017'
var A, B, C, D, E, F
MongoClient.connect(url, (error, client) => {
        if (error) {
            console.log('資料庫連接失敗')
            return
        }
        console.log('資料庫連接成功')

        db = client.db('quiz')

        db.collection(db1, (error, collection) => {
            if (error) {
                console.log('資料庫內無 ans 的 collection')
                return
            }
            collection.find().toArray((error, docs) => {
                if (error) {
                    console.log('查詢 ans 資料失敗')
                    return
                }
                // 將查詢的資料印出來
                //for (let i = 0; i < docs.length; i++) {
                //    console.dir(docs[i])
                //}
                // 確定資料讀取完畢再關掉 client
                //client.close()
            })
        });

        var filter = { "option": "A" }
        db.collection(db1).count(filter, (err, result) => {

            if (err) { return console.log(err) }
            A = result
            console.log('A = ', A)

        })
        filter = { "option": "B" }
        db.collection(db1).count(filter, (err, result) => {

            if (err) { return console.log(err) }
            B = result
            console.log('B = ', B)

        })

        filter = { "option": "C" }
        db.collection(db1).count(filter, (err, result) => {

            if (err) { return console.log(err) }
            C = result
            console.log('C = ', C)

        })

        filter = { "option": "D" }
        db.collection(db1).count(filter, (err, result) => {

            if (err) { return console.log(err) }
            D = result
            console.log('D = ', D)

        })

        filter = { "option": "E" }
        db.collection(db1).count(filter, (err, result) => {

            if (err) { return console.log(err) }
            E = result
            console.log('E = ', E)

        })



    })
    // 設定app的PORT
app.set('port', process.env.PORT || 8080)

app.get('/', (req, res) => {
    res.sendFile(__dirname + '/index.html');
});



app.listen(app.get('port'), () => {

    console.log('Server running at 127.0.0.1:' + app.get('port'))
})

//var A, B, C, D, E

app.post('/clickA', (req, res) => {
    var doc = { "option": "A" }

    db.collection(db1).save(doc, (err, result) => {
        if (err) {
            return console.log(err)
        }
        console.log('A added to db')
        res.sendStatus(201);
    })
    var filter = { "option": "A" }
    db.collection(db1).count(filter, (err, result) => {

        if (err) { return console.log(err) }
        A = result
        console.log('A = ', A)

    })
    var obj = [];
    obj.push({ 'option': 'A', 'value': A });
    obj.push({ 'option': 'B', 'value': B });
    obj.push({ 'option': 'C', 'value': C });
    obj.push({ 'option': 'D', 'value': D });
    obj.push({ 'option': 'E', 'value': E });

    var json = JSON.stringify(obj, null, 2);

    var fs = require('fs')
    fs.writeFile(js1, json, 'utf8', (err) => {
        if (err) throw err
    })


})

app.post('/clickB', (req, res) => {
    var doc = { "option": "B" }

    db.collection(db1).save(doc, (err, result) => {
        if (err) {
            return console.log(err);
        }
        console.log('B added to db');
        res.sendStatus(201);
    })
    var filter = { "option": "B" }
    db.collection(db1).count(filter, (err, result) => {

        if (err) { return console.log(err) }
        B = result
        console.log('B = ', B)

    })
    var obj = [];
    obj.push({ 'option': 'A', 'value': A });
    obj.push({ 'option': 'B', 'value': B });
    obj.push({ 'option': 'C', 'value': C });
    obj.push({ 'option': 'D', 'value': D });
    obj.push({ 'option': 'E', 'value': E });

    var json = JSON.stringify(obj, null, 2);

    var fs = require('fs')
    fs.writeFile(js1, json, 'utf8', (err) => {
        if (err) throw err
    })
})

app.post('/clickC', (req, res) => {
    var doc = { "option": "C" }

    db.collection(db1).save(doc, (err, result) => {
        if (err) {
            return console.log(err);
        }
        console.log('C added to db');
        res.sendStatus(201);
    })
    var filter = { "option": "C" }
    db.collection(db1).count(filter, (err, result) => {

        if (err) { return console.log(err) }
        C = result
        console.log('C = ', C)

    })
    var obj = [];
    obj.push({ 'option': 'A', 'value': A });
    obj.push({ 'option': 'B', 'value': B });
    obj.push({ 'option': 'C', 'value': C });
    obj.push({ 'option': 'D', 'value': D });
    obj.push({ 'option': 'E', 'value': E });

    var json = JSON.stringify(obj, null, 2);

    var fs = require('fs')
    fs.writeFile(js1, json, 'utf8', (err) => {
        if (err) throw err
    })
})

app.post('/clickD', (req, res) => {
    var doc = { "option": "D" }

    db.collection(db1).save(doc, (err, result) => {
        if (err) {
            return console.log(err);
        }
        console.log('D added to db');
        res.sendStatus(201);
    })
    var filter = { "option": "D" }
    db.collection(db1).count(filter, (err, result) => {

        if (err) { return console.log(err) }
        D = result
        console.log('D = ', D)

    })
    var obj = [];
    obj.push({ 'option': 'A', 'value': A });
    obj.push({ 'option': 'B', 'value': B });
    obj.push({ 'option': 'C', 'value': C });
    obj.push({ 'option': 'D', 'value': D });
    obj.push({ 'option': 'E', 'value': E });

    var json = JSON.stringify(obj, null, 2);

    var fs = require('fs')
    fs.writeFile(js1, json, 'utf8', (err) => {
        if (err) throw err
    })
    var fs = require('fs');
    let a = {
        "problem": "xx",
        "A": { "option": "A.黑森林蛋糕", "result": "A.你的夢想是否已向著名利進展呢？選擇黑森林蛋糕，代表你希望找到一份薪酬高且容易出名的工作。" },
        "B": { "option": "B.士多啤梨慕絲", "result": "B.士多啤梨慕絲呈粉紅色，意味著你的夢想也是充滿浪漫和激情，你希望遇上你的白馬王子/白雪公主，然後舉行盛大婚禮，並長相廝守。" },
        "C": { "option": "C.水果派", "result": "C.你是一個踏實、務實的人，所以在云云甜點中選擇了較傳統的水果派。你的夢想可能只是「日出而作、日落而息」，孜孜不倦地工作，不能說你是個沒變化的人，正因這是人之常情嘛！" },
        "D": { "option": "D.巧克力甜點", "result": "D.巧克力甜點由幾種好吃又好看的材料組成，正代表你亦是個擁有相當程度條件的人。既然你擁有優厚條件，你的夢想就是活在別人的讚賞之中。" },
        "E": { "option": "E.新鮮水果", "result": "E.凡是你所做的每一件事，所經手的每一件東西，都力求自然舒適。如此才能夠自由行動、自由表達。你不涂指甲油，不喜歡化粧。你的雙手是用來工作而不是用來作秀的。如果有人想認識你，你家的墻上有裝了框的證書，上頭載明瞭你的地位和所參與的團體。 " }
    }

    fs.writeFile(js2, JSON.stringify(a, null, 2), function(err) {

        if (err) return console.log(err);

    })
})

app.post('/clickE', (req, res) => {
    var doc = { "option": "E" }

    db.collection(db1).save(doc, (err, result) => {
        if (err) {
            return console.log(err);
        }
        console.log('E added to db');
        res.sendStatus(201);
    })
    var filter = { "option": "E" }
    db.collection(db1).count(filter, (err, result) => {

        if (err) { return console.log(err) }
        E = result
        console.log('E = ', E)

    })
    var obj = [];
    obj.push({ 'option': 'A', 'value': A });
    obj.push({ 'option': 'B', 'value': B });
    obj.push({ 'option': 'C', 'value': C });
    obj.push({ 'option': 'D', 'value': D });
    obj.push({ 'option': 'E', 'value': E });

    var json = JSON.stringify(obj, null, 2);

    var fs = require('fs')
    fs.writeFile(js1, json, 'utf8', (err) => {
        if (err) throw err

    })
    var fs2 = require('fs');
    let a = {
        "problem": "a",
        "A": { "option": "A.a", "result": "A.你的夢想是否已向著名利進展呢？選擇黑森林蛋糕，代表你希望找到一份薪酬高且容易出名的工作。" },
        "B": { "option": "B.b", "result": "B.士多啤梨慕絲呈粉紅色，意味著你的夢想也是充滿浪漫和激情，你希望遇上你的白馬王子/白雪公主，然後舉行盛大婚禮，並長相廝守。" },
        "C": { "option": "C.c", "result": "C.你是一個踏實、務實的人，所以在云云甜點中選擇了較傳統的水果派。你的夢想可能只是「日出而作、日落而息」，孜孜不倦地工作，不能說你是個沒變化的人，正因這是人之常情嘛！" },
        "D": { "option": "D.d", "result": "D.巧克力甜點由幾種好吃又好看的材料組成，正代表你亦是個擁有相當程度條件的人。既然你擁有優厚條件，你的夢想就是活在別人的讚賞之中。" },
        "E": { "option": "E.e", "result": "E.凡是你所做的每一件事，所經手的每一件東西，都力求自然舒適。如此才能夠自由行動、自由表達。你不涂指甲油，不喜歡化粧。你的雙手是用來工作而不是用來作秀的。如果有人想認識你，你家的墻上有裝了框的證書，上頭載明瞭你的地位和所參與的團體。 " }
    }

    fs2.writeFile(js2, JSON.stringify(a, null, 2), function(err) {

        if (err) return console.log(err);

    })
})
app.post('/QQ', (req, res) => {
    var fs = require('fs');
    let a = {
        "problem": "a",
        "A": { "option": "A.a", "result": "A.你的夢想是否已向著名利進展呢？選擇黑森林蛋糕，代表你希望找到一份薪酬高且容易出名的工作。" },
        "B": { "option": "B.b", "result": "B.士多啤梨慕絲呈粉紅色，意味著你的夢想也是充滿浪漫和激情，你希望遇上你的白馬王子/白雪公主，然後舉行盛大婚禮，並長相廝守。" },
        "C": { "option": "C.c", "result": "C.你是一個踏實、務實的人，所以在云云甜點中選擇了較傳統的水果派。你的夢想可能只是「日出而作、日落而息」，孜孜不倦地工作，不能說你是個沒變化的人，正因這是人之常情嘛！" },
        "D": { "option": "D.d", "result": "D.巧克力甜點由幾種好吃又好看的材料組成，正代表你亦是個擁有相當程度條件的人。既然你擁有優厚條件，你的夢想就是活在別人的讚賞之中。" },
        "E": { "option": "E.e", "result": "E.凡是你所做的每一件事，所經手的每一件東西，都力求自然舒適。如此才能夠自由行動、自由表達。你不涂指甲油，不喜歡化粧。你的雙手是用來工作而不是用來作秀的。如果有人想認識你，你家的墻上有裝了框的證書，上頭載明瞭你的地位和所參與的團體。 " }
    }

    fs.writeFile(js2, JSON.stringify(a, null, 2), function(err) {

        if (err) return console.log(err);

    })
})


/*var fs = require('fs');
let a = {
    "problem": "a",
    "A": { "option": "A.a", "result": "A.你的夢想是否已向著名利進展呢？選擇黑森林蛋糕，代表你希望找到一份薪酬高且容易出名的工作。" },
    "B": { "option": "B.b", "result": "B.士多啤梨慕絲呈粉紅色，意味著你的夢想也是充滿浪漫和激情，你希望遇上你的白馬王子/白雪公主，然後舉行盛大婚禮，並長相廝守。" },
    "C": { "option": "C.c", "result": "C.你是一個踏實、務實的人，所以在云云甜點中選擇了較傳統的水果派。你的夢想可能只是「日出而作、日落而息」，孜孜不倦地工作，不能說你是個沒變化的人，正因這是人之常情嘛！" },
    "D": { "option": "D.d", "result": "D.巧克力甜點由幾種好吃又好看的材料組成，正代表你亦是個擁有相當程度條件的人。既然你擁有優厚條件，你的夢想就是活在別人的讚賞之中。" },
    "E": { "option": "E.e", "result": "E.凡是你所做的每一件事，所經手的每一件東西，都力求自然舒適。如此才能夠自由行動、自由表達。你不涂指甲油，不喜歡化粧。你的雙手是用來工作而不是用來作秀的。如果有人想認識你，你家的墻上有裝了框的證書，上頭載明瞭你的地位和所參與的團體。 " }
}

fs.writeFile(js2, JSON.stringify(a, null, 2), function(err) {

    if (err) return console.log(err);

})*/