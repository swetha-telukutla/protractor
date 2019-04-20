var Login=function(){

  var customerLogin=element(by.partialButtonText('Customer'));
	var managerLogin=element( by.partialButtonText('Manager'));
  this.presentButton=function(text){
		if(text=='customer'){
			expect(customerLogin.isPresent()).toBe(true);
		}
		if(text=='manager'){
			expect(managerLogin.isPresent()).toBe(true);
		}
	}
	
	
		this.goToManager=function(){
      managerLogin.click();
		return require('./manager_page.js');
	}
  
	this.goToCustomer=function(){
		customerLogin.click();
		return require('./customer_page.js');
	}

  }
            
module.exports=new Login();