
var Tests = module.exports;
var My_word = require('./my_word');


Tests['tokenize tests'] = function(test) {
   var my=new My_word()
   test.deepEqual(my.tokenize("beta  cameron diaz's eglington"), [ 'beta', 'cameron', 'diaz', 'eglington' ]);
   test.deepEqual(my.tokenize("beta cameron-diaz eglington"), [ 'beta', 'cameron', 'diaz', 'eglington' ]);
   test.deepEqual(my.tokenize("beta cameron diaz eglington"), [ 'beta', 'cameron', 'diaz', 'eglington' ]);
   test.deepEqual(my.tokenize(" beta's  "), [ 'beta' ]);
   test.done();
};

Tests['subtring matches - paris hilton'] = function(test) {
   var my=new My_word()
   my.add("paris")
   my.add("paris hilton")
   var result=my.search("we saw paris hilton in canada")
   // test.deepEqual(result, [ 'paris hilton' ]);


   my=new My_word()
   my.add("cameron diaz")
   my.add("cameron")
   my.add("david cameron")
   result= my.search("he is david cameron")
   test.deepEqual(result, [ 'david cameron' ])


   test.done();
};

Tests['array add - paris hilton'] = function(test) {
   var my=new My_word()
   my=new My_word()
   my.add("paris")
   my.add("paris hilton")
   var result=my.search("we saw paris in canada")
   test.deepEqual(result, ['paris'] );
   test.done();
};
