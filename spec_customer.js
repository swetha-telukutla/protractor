let winston = require('winston');
const logger = winston.createLogger({
    level: 'info',
    format: winston.format.json(),
    transports: [
      new winston.transports.File({ filename: './reports/winstonBasicLog.log', level: 'info' }),
    ]
  });


  // this will give logs into console
  logger.add(new winston.transports.Console({
    format: winston.format.simple()
  }));

var data=require(process.cwd()+'/utilites/Bankformdata.json');
var LoginPage=require(process.cwd()+'/login_page.js');

describe('Banking E2E Automation', function(){
	
	beforeEach(function(){
		browser.manage().window().maximize();
		browser.get(data.url);
    })
    afterEach(function(){
        //console.log('testcase executed')
        logger.info( "Test case Executed");
    })
    it('Validate Login Page', function(){		
		LoginPage.presentButton('customer');
		
    })
    it('For Customer Login',function(){
		var customer=LoginPage.goToCustomer();
		var account=customer.selectAccount(data.account.name);
		account.checkAccount(data.account.name);
		account.goToTransactions();
	})
	
	it('verify Currnecy Type', function(){
		var customer=LoginPage.goToCustomer();
		var account=customer.selectAccount(data.account.name);
		account.selectAccountNo(data.account.accNo[0]);
		account.verifyCurrency(data.account.currency[0]);
		account.selectAccountNo(data.account.accNo[1]);
		account.verifyCurrency(data.account.currency[1]);
		account.selectAccountNo(data.account.accNo[2]);
		account.verifyCurrency(data.account.currency[2]);
	})
	
	it('Initial Transaction',function(){
		var customer=LoginPage.goToCustomer();
		var account=customer.selectAccount(data.account.name);
		account.goToTransactions();
		account.validateTransaction();
	})
	
	it('Deposit Money',function(){
		var customer=LoginPage.goToCustomer();
		var account=customer.selectAccount(data.deposit.name);
		account.selectAccountNo(data.deposit.accNo);
		account.deposit(data.deposit.amnt,data.deposit.successMsg);
	})
	
	it('Transaction after Deposit',function(){
		var customer=LoginPage.goToCustomer();
		var account=customer.selectAccount(data.deposit.name);
		account.selectAccountNo(data.deposit.accNo);
//		account.deposit(data.deposit.amnt,data.deposit.successMsg);
		account.goToTransactions();
		account.validateTracsactionAmnt(data.deposit.amnt,"Credit");
	})
	
	it('Withdrawl Error',function(){
		var customer=LoginPage.goToCustomer();
		var account=customer.selectAccount(data.withdrawFail.name);
		account.selectAccountNo(data.withdrawFail.accNo);
		account.withDraw(data.withdrawFail.amnt,data.withdrawFail.failMsg);
	})
	
	it('Withdrawl Success',function(){
		var customer=LoginPage.goToCustomer();
		var account=customer.selectAccount(data.withdrawSucc.name);
		account.selectAccountNo(data.withdrawSucc.accNo);
		account.withDraw(data.withdrawSucc.amnt,data.withdrawSucc.successMsg);
	})
	
	it('Transaction after withdraw', function(){
		var customer=LoginPage.goToCustomer();
		var account=customer.selectAccount(data.withdrawSucc.name);
		account.selectAccountNo(data.withdrawSucc.accNo);
		account.withDraw(data.withdrawSucc.amnt,data.withdrawSucc.successMsg);
		browser.sleep(5000);
		account.goToTransactions();
		account.validateTracsactionAmnt(data.withdrawSucc.amnt,"Debit");
	})
	
	it("Transaction Reset",function(){
		var customer=LoginPage.goToCustomer();
		var account=customer.selectAccount(data.account.name);
		account.goToTransactions();
		account.resetTransactions;
		account.validateTransaction();
	})
})