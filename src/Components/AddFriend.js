

function AddFriend(graph, user, target){
    graph.sendFriend(user, target);
    return graph;
}

export default AddFriend;