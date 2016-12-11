
function addStrict(num){
  'use strict';
  this.count = this.count || 0;
  this.count+= num; 
  log(this.count);
  render();
}


function decStrict(num){
    'use strict';
  this.count = this.count || 0;
  this.count-= num;
  log(this.count);
}

var lexicalAddStrict = (num) => {
  'use strict';
  this.count = this.count || 0;
  this.count+= num; 
    log('lexical strict');
  log(this.count);
  render();
};
