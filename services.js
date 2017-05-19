
app.config(["AppName","AppVersion",function(AppName,AppVersion){
	console.log("This IS conifg:constant   "  +AppName)
	
}])

app.run(["AppName","AppVersion",function(AppName,AppVersion){
	console.log("This IS run -constant   "  +AppName)
	console.log("this is suresh from value"+AppVersion)
}])

app.provider("example", function(){
	var myObj={};
	myObj.firstName="JohnGalt";
	myObj.lastName="bangalore"

	myObj.getName=function(){
		return this.firstName+"  "+this.lastName;
	}
	this.$get= function(){
		return myObj;
	}
})

app.service("CustomService", function(){
	this.getCustomerDetails=function(){
		return "this will return Customer Details!!"
	}
})

app.factory("CustomFactory",function(){

	return "this is my facory service";

})

app.constant("AppName","Angular Services")
app.value("AppVersion","1.0.0.0")