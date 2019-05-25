# What is a graph?

> Nodes + Connections between those nodes, they are free form, no pattern like a tree
> A set of nodes, together with a set of pairs of the verticies, connected together.

## Where would we use this?

> Social Networking

    - A way of representing friendships and relationships.
    - Actors and their relationships on movies
    - Wikipedia, pages that link to other pages
    - the internet, pages linking to others

> Location/Mapping

    - Nodes (cities, restaruant...) and roads that connect to them. So there are many different routes to
    - Get to a destination. Googole maps calculates the fastest way to get to the destination.
    -

> Recommendation engines

    - People also watched
    - You might also like this product
    - People you might know
    - Clicks when someone views one product
    - What two video games have in common, what games have the most in common, or share the most nodes
    - You should buy this...

> Routing algorithms
> Visual Hierarchy

    - This site with a music history graph

## Types of graphs

> Vertex: a node
> Edge: connection between the nodes

> Undirected graph

    - There is not direction or polarity to the edges, there are two way connections
    - Useful for facebook, when you request a friend, they have to accepted, so now we are both friends

> Directed graph

    - Usually represented with arrows.
    - There is a direction assigned to the edge, the connection of verticies.

> UnWeighted graph: Each connection between the nodes, has no value associated with it
> Weighted Grpah: When we assign a value to the edges, there is info about the connection itself

    - A map graph, to calculate the shortest path, we would use a weighted graph

## How do we model a graph

> We nodes and the verticies, and a way to store the connections.
> Adjacency matrix:

- A 2d structure, infor stored in rows and columns
- We store the edges in a nested array
  > Adjacency list:
- We use an array or list to store the edges, use the positions of arrays.
- But what if our nodes are not numeric?
  - We can use a hash table
    - {
      "A" : ["B", "C"]
      "B" : ["A", "C"]
      }

## Big O

> Adjacency List:

    - Add vertex O(1)
    - Delete vertex O(1)
    - Query O(V + E)
    - Can take up less space (in sparse graphs)
    - Faster to iterate over all edges
    - Can be slower to lookup specific edge

> Adjacency Matrix:

    - Query something O(1)
    - Remove Edge O(1)
    - Takes up more space (in sparse graphs)
    - Slower to iterate over all edge
    - Faster to lookup a specific edge

## Visiting/Updating/Checking Each Vertex in a Graph

> there is no starting point in a graph, there is no head
> we must specify the starting point
> for every node in a graph, there is no guarantee that there is one unique path to get there

## Graph Traversal Uses (Why do we care)

> Peer to peer networking (social media)
> Web crawlers (follow every link)
> Finding "closest"
> Matches/recommendations (transversing fron one vertix to another

    - Friends on facebook, to make recommendations for friends)
    - To find similarities between two video games

> Shortest path problems

    - GPS Navigation (billiions of vertices, how do we find the best path from one place to another)
    - Solving mazes

> AI (shortest path to win the game)

## Depth First Traversal

>

## Dijkstra's Algorithm 

> One of the most famous and widely used algorithms around! 
> Finds the shortest path between two verticies on a graph
> "Whats the fastest way to get from point A to point B?"

** Who is he? A dutch programmer, he helped to advance the field of c.s. from an "art" to an academic disipline. Alot of his discoveries are still used today. 

> Why is it useful?
  - GPS - finding fastest route
  - Network routing = finds open shortest path for data
  - Biology: Used to model the spread of viruses amoung humans
  - Airline tickets: Finding cheapest route to your destination 