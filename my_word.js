
//each node is a char
//make trie of nodes
//map the fail-scenarios

//the failure function of a string is the longest suffix that is a prefix.

var My_word=function(){
  var the= this

  var Node=function(word) {
    this.word = word;
    this.payload = null;
    this.is_done = null;
    this.full_word= null;
    this.fail_node=null;
    this.next = {};
  }

  this.root=new Node();

  this.tokenize=function(str){
    return str.split(/\b/).filter(function(s){
      return s!="" && !s.match(/^ *$/) && s!="-" && s!="/" && s!="'"  && s!="s"
    })
  }

  //list all suffixes of an array
  var suffixes=function(arr){
    var all=[]
    var len=arr.length;
    for(var i=1; i<=len; i++){
      all.push(arr.slice(i, len))
    }
    return all
  }

  //find a node for this array, if we have it
  this.have_already=function(arr){
    var current=the.root;
    if(arr.length==0){
      return false
    }
    for(var i=0; i<arr.length; i++){
      current=current.next[arr[i]]
      if(!current){
        return false
      }
    }
    return current || false
  }

  var set_fail_node=function(arr){
    // console.log('finding fail node for '+JSON.stringify(arr))
    var tries=suffixes(arr)
    for(var i=0; i<tries.length; i++){
      // console.log('       '+JSON.stringify(tries[i]))
      var node=the.have_already(tries[i])
      if(node){
        // console.log('----found---')
        // console.log(node)
        return node
      }
    }
    return null
  }

  //add the new term as a series of nodes
  this.add=function(str){
    if(typeof str=="object" && str.length){
      return str.forEach(function(s){the.add(s)})
    }
    var arr=the.tokenize(str)
    var current=the.root;
    var word;
    //add each word as a new node, in the right places
    for(var i=0; i<arr.length; i++){
      word=arr[i]
      current.next= current.next || {}
      if(!current.next[word]){
        current.next[word]=new Node(word)
      }
      current=current.next[word]
      //find the largest suffix that already exists
     // current.fail_node= set_fail_node(arr.slice(0,i))
    }
    current.is_word=true
    current.full_word=str
  }

  // yes do it
  this.search=function(str){
    var arr=the.tokenize(str)
    var results=[]
    var current=the.root;
    var word;
    for(var i=0; i<arr.length; i++){
      word=arr[i]
      current.next= current.next || {}
      current=current.next[word] || current.fail_node
      if(!current){
        current= the.root.next[word] || the.root
      }
      if(current && current.is_word){
        results.push(current)
      }
    }
    return results.map(function(o){
      return o.full_word
    })
  }

  this.print=function(){
    Object.keys(the.root.next).forEach(function(k){
      console.log(k)
      Object.keys(the.root.next[k].next).forEach(function(k2){
        console.log('  '+k2)
        Object.keys(the.root.next[k].next[k2].next).forEach(function(k3){
          console.log('     '+k3)
        })
      })
    })
  }

}

if(typeof module !== 'undefined' && module.exports){
  module.exports = My_word;
}
// 1: "paris hiltond" - returns paris in a greedy way
// 2: "the paris hilton showd" -

// 3: he she his hers,
//  ushers

// my=new My_word()
// my.add("cameron diaz")
// my.add("cameron")
// my.add("david cameron")
// console.log(my.search("he is david cameron"))
