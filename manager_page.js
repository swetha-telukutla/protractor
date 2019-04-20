var manager_page=function(){
    var addCustomer=element(by.buttonText('Add Customer'));
    var firstName=element(by.model('fName'));
	var lastName=element(by.model('lName'));
	var postCode=element(by.model('postCd'));
	var submitButton=element(by.className('btn btn-default'));
    var openAccount=element(by.buttonText('Open Account'));
    var custName=element(by.name('userSelect'));
    var currency=element(by.name('currency'));
    var process=element(by.buttonText('Process'));
	var customers=element(by.buttonText('Customers'));
	var searchCust=element(by.model('searchCustomer'));
    var delButton=element(by.buttonText('Delete'));
    this.presentButton=function(text){
		if(text=='AddCustomer'){
			expect(addCustomer.isPresent()).toBe(true);
		}
		if(text=='OpenAccount'){
			expect(openAccount.isPresent()).toBe(true);
		}
		if(text=='Customers'){
			expect(customers.isPresent()).toBe(true);
		}
	}

	this.addCustomerDetails=function(fname,lname,code){
		addCustomer.click();
		firstName.sendKeys(fname);
		lastName.sendKeys('lname');
		postCode.sendKeys('code');
		browser.sleep(3000);
		submitButton.click();
		browser.sleep(3000);
		browser.switchTo().alert().accept();
	}
	
	this.openAccountDetails=function(name,cur,msg){
		openAccount.click();
			if(name=='Hermoine Granger'){
				custName.$('[value="1"]').click();
			}
			if(name=='Harry Potter'){
				custName.$('[value="2"]').click();
			}
			if(name=='Ron Weasly'){
				custName.$('[value="3"]').click();
			}
			if(name=='Albus Dumbledore'){
				custName.$('[value="4"]').click();
			}
			if(name=='Neville Longbottom'){
				custName.$('[value="5"]').click();
			}
			
			if(cur=='dollar'){
				currency.$('[value="Dollar"]').click();
			}
			if(cur=='pound'){
				currency.$('[value="Pound"]').click();
			}
			if(cur=='rupee'){
				currency.$('[value="Rupee"]').click();
			}
		browser.sleep(3000);
		process.click();
		var alert=browser.switchTo().alert();
		expect(alert.getText()).toContain(msg);
		alert.accept();
	}
	
	this.deleteCustomer=function(custName,url){
		customers.click();
		searchCust.sendKeys(custName);
		delButton.click();
		browser.sleep(3000);
//		browser.getCurrentUrl().then(function(text){
//			expect(text).toEqual(url);
//		})
		
	}
}

module.exports=new manager_page();
