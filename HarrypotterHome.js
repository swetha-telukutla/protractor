var accounts=function(){
	var transactions=element(by.buttonText('Transactions'));
	var deposit=element(by.buttonText('Deposit'));
	var withdrawl=element(by.buttonText('Withdrawl'));
	var details=element(by.xpath('/html/body/div[3]/div/div[2]/div/div[2]'));
	var acc=element(by.className('fontBig ng-binding'));
	var transTable=element.all(by.repeater('transactions | orderBy:sortType:sortReverse | sDate:startDate:end'));
	var acntNo=element(by.name('accountSelect'));
	var amntToDeposit=element(by.model('amount'));
	var depositButton=element(by.className('btn btn-default'));
	var displyMsg=element(by.className('error ng-binding'));
	var reset=element(by.buttonText('Reset'));
	var back=element(by.buttonText('Back'));
	var custName=element(by.className('fontBig ng-binding'));
	var logout=element(by.buttonText('Logout'));
	
	
	this.checkAccount=function(custName){
		expect(acc.getText()).toBe(custName);
	}
	
	this.letsLogout=function(){
		logout.click();
		var cust=require('./customer_page.js');
		cust.elementPresent();
	}
	
	this.goToTransactions=function(){
		transactions.click();
	}
	
	this.resetTransactions=function(){
		reset.click();
		return this;
	}
	
	this.goBack=function(customer){
		back.click();
		expect(custName.getText()).toContain(customer);
	}
		
	this.validateTransaction=function(){
		expect(transTable.isPresent()).toBe(false);
	}
	
	this.validateTracsactionAmnt=function(amnt,type){
		browser.sleep(5000);
		transTable.then(function(text){
			var i=text.length-1;
			expect(text[i].getText()).toContain(amnt);
			expect(text[i].getText()).toContain(type);
		})
	}
	
	this.selectAccountNo=function(acc){
		var accNo="[value=\"number:"+acc+"\"]";
		acntNo.$(accNo).click();//'[value="number:1006"]'
		return this;
	}
	
	this.verifyCurrency=function(curr){
		browser.sleep(5000);
		expect(details.getText()).toContain(curr);
	}
	
	this.deposit=function(amnt,msg){
		deposit.click();
		amntToDeposit.sendKeys(amnt);
		depositButton.click();
		browser.sleep(5000);
		expect(displyMsg.getText()).toEqual(msg);
		expect(details.getText()).toContain(amnt);
	}
	
	this.withDraw=function(amnt,msg){
		withdrawl.click();
		amntToDeposit.sendKeys(amnt);
		depositButton.click();
		expect(displyMsg.getText()).toEqual(msg);
	}
}

module.exports=new accounts();