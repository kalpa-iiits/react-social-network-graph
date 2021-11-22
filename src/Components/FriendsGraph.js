
function FriendsGraph() {
    var friends = this.friends = {}; 
    this.addPeople = function(u){
        friends[u] = [];
    }
    this.sendFriend = function (u, v) {
      friends[u].push(v);
     };
    this.confirmFriend = function(u,v){                                
      friends[v].push(u);  
    }; 
    this.display = function() {
        for (const [key, value] of Object.entries(friends)) {
            console.log(`${key}: ${value}`);
        }
    };
    return this;
}

export default FriendsGraph;
  
