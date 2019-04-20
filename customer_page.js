var customer=function(){
	var login=element(by.buttonText('Login'));
	var yourname=element(by.name('userSelect'));
	
	this.elementPresent=function(){
		expect(yourname.isPresent()).toBe(true);
	}
	this.selectAccount=function(name){
		$$('select option').then(function(text) {
			if(name=='Hermoine Granger')
				text[1].click();
			if(name=='Harry Potter')
				text[2].click();
			if(name=='Ron Weasly')
				text[3].click();
			if(name=='Albus Dumbledore')
				text[4].click();
			if(name=='Neville Longbottom')
				text[5].click();
		})
		login.click();
		return require('./HarrypotterHome.js')
	}
}

module.exports=new customer();