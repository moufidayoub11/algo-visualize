import Dijkstra from"./dijkstra.js";import Node from"../node/Node.js";import Astar from"./AStar.js";import DepthFirstSearch from"./dfs.js";import BreadthFirstSearch from"./bfs.js";import GameOfLife from"./GameOfLife.js";export default class AlgorithmsManager{constructor(r){this.nodes=r}dijkstra(){return new Dijkstra(this.nodes).solve()}aStar(){return new Astar(this.nodes).solve()}depthFS(){return new DepthFirstSearch(this.nodes).solve()}breadthFS(){return new BreadthFirstSearch(this.nodes).solve()}gol(){return new GameOfLife(this.nodes).solve()}}
//# sourceMappingURL=AlgorithmsManager.js.map