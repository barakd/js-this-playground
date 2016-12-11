function add(num) {
  this.count = this.count || 0;
  this.count += num;
  log(this.count);
  render()
}

var lexicalAdd = (num) => {
  log('lexical');
  this.count = this.count || 0;
  this.count += num;
  log(this.count);
  render();
};


function intervalCount() {
  if(this.activeInterval){
    this.activeInterval();
    this.activeInterval = null;
     log('stopped interval');
    return;
  }
  log('starting interval, current count:');
  log(this.count);
  this.activeInterval = clearInterval.bind(null, setInterval(function() {
    this.add(1);
  }, 2000));
}

var counter = {
  add: add,
  intervalCount,
  count: 0,
};

function methodInvocation() {
  log('method invocation');
  counter.add(1);
}

function functionInvoke(){
  log('function invocation');
  add(1);
}

function applyInvocation() {
  log('apply');
  add.call(counter, 1);
}

function functionInvokeStrict() {
  log('function strict');
  addStrict(1);
}

