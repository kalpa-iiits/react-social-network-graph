import FriendsGraph from "./FriendsGraph";

function AddNodes(){
    var graph = new FriendsGraph();
    graph.addPeople('Amit');
    graph.addPeople('Bibek');
    graph.addPeople('Chennai');
    graph.addPeople('Doctor');
    graph.addPeople('Eagle');
    graph.addPeople('Gardener');
    graph.sendFriend('Amit', 'Bibek');
    graph.confirmFriend('Amit', 'Bibek');
    graph.sendFriend('Bibek', 'Chennai');
    graph.confirmFriend('Bibek', 'Chennai');
    graph.sendFriend('Bibek', 'Eagle');
    graph.confirmFriend('Chennai', 'Eagle');
    graph.sendFriend('Chennai', 'Doctor');
    graph.confirmFriend('Chennai', 'Doctor');
    graph.sendFriend('Chennai', 'Eagle');
    graph.confirmFriend('Chennai', 'Eagle');
    graph.sendFriend('Chennai', 'Gardener');
    graph.confirmFriend('Chennai', 'Gardener');  

    return graph;
}

export default AddNodes;