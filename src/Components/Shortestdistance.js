import React from 'react'
import AddNodes from './AddNodes.js'
import Header from './Header.js'

function shortestPath(graph, source, target) {
    var arr = []
    if (source == target) {   
      arr = [source]         
      return arr;                
    }                         
    var queue = [ source ],
        visited = { source: true },
        predecessor = {},
        tail = 0;
    while (tail < queue.length) {
      var u = queue[tail++],  
          friends = graph.friends[u];
      for (var i = 0; i < friends.length; ++i) {
        var v = friends[i];
        if (visited[v]) {
          continue;
        }
        visited[v] = true;
        if (v === target) {   
          var path = [ v ];   
          while (u !== source) {
            path.push(u);
            u = predecessor[u];
          }
          path.push(u);
          path.reverse();
          arr = path.join(' -> ');
          return arr;
        }
        predecessor[v] = u;
        queue.push(v);
      }
    }
    arr = ["There is no no path from source to destination"];
    return arr;
  }


  function Shortestdistance(){
    var graph = AddNodes();

    const queryParams = new URLSearchParams(window.location.search);
    const source = queryParams.get('source');
    const target = queryParams.get('target');
   
    let array;
      return (
        <>
          <Header />
          <h1>This page is to find shortest path between two persons</h1>
          <h3>Please enter source and target persons</h3>
        
          <div className= "container">
              <form>
                   <div className="row">
                        <div className="col-md-6">
                            <select name="source" className="form-control" placeholder="Select Source">
                                <option value="Amit">Amit</option>
                                <option value="Chennai">Chennai</option>
                                <option value="Doctor">Doctor</option>
                                <option value="Eagle">Eagle</option>
                                <option value="Gardener">Gardener</option>
                            </select>
                        </div>
                        <div className="col-md-6">
                            <select name="target" className = "form-control" placeholder="Select Target">
                                <option value="Bibek">Bibek</option>
                                <option value="Chennai">Chennai</option>
                                <option value="Doctor">Doctor</option>
                                <option value="Eagle">Eagle</option>
                                <option value="Gardener">Gardener</option>
                            </select>
                        </div>
                    </div>
                  <button type = "submit" className= "btn btn-success form-control" onClick={array = shortestPath(graph, source, target)}>Submit</button>
                </form>

                <h1>For source {source} and destination {target} the shortest path is: </h1>
                <h1>{array}</h1>
          </div>
        </>
      )

  }


  export default Shortestdistance;