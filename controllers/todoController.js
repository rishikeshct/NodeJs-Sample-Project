
var bodyParser = require('body-parser');
module.exports = function(app){

var data = [{item : "BatMan"},{item : "SuperMan"},{item : "DoctorMan"}];

var urlencodedParser = bodyParser.urlencoded({ extended: false })


app.get('/todo', function(req,res){
  res.render('todo',{todos:data});
});

app.post('/todo', urlencodedParser,function(req,res){
  data.push(req.body);
  res.json(data);
});

app.delete('/todo/:item', function(req,res){
    data = data.filter(function(todo){
        return todo.item.replace(/ /g,'-') !== req.params.item;
    });

  res.json(data);
});

}
