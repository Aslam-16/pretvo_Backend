const BaseUrl='/api/v1/';
module.exports=
    function(app){
        app.use(BaseUrl+"buyers",require('../controllers/buyers'))
}