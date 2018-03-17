module.exports=(app)=>{
    let ds=app.dataSources.mysql_db;
    let model=app.models();
    // let model=ds.exam;
    // ds.createModel(model.name,model.properties,model.options);
    // let args=model.forEach(function(Model,cb){
    //     cb.append(Model.modelName);
    // })
    var arrModelNames=[];
    model.forEach(function(Model) {
        arrModelNames.push(Model.modelName);
       });
    arrModelNames.forEach((modelName)=>{
        ds.autoupdate(modelName, function (err, result) {
            ds.discoverModelProperties(modelName, function (err, props) {
            });
          });
    })
    
};
