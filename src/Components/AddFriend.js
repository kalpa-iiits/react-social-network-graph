import Profile from "./Profile";

function AddFriend(graph, user, target){
    graph.sendFriend(user, target);
    return graph;
}

export default AddFriend;