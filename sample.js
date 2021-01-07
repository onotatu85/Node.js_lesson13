db.collection("contacts")
.insert({name:"Freeddie Mercury",email:"fred@queen.com"
},(error,db) => {
  if(error)throw error;console.log(db);
});