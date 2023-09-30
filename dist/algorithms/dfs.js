import Node from"../node/Node.js";import Algorithm from"./Algorithm.js";export default class DepthFirstSearch extends Algorithm{constructor(s){super(s),this.rows=this.stateManager.getRows(),this.cols=this.stateManager.getCols(),this.startNode=s.find((s=>s.is_start)),this.finishNode=s.find((s=>s.is_finish)),this.get_1d_index=(s,t)=>s*this.cols+t}solve(){for(let s of this.nodes)s.distance=1/0,s.is_visited=!1,s.prev=null;for(this.openSet=[this.startNode];this.openSet.length;){let s=this.openSet.pop();if(s==this.finishNode)break;let t=this.get_1d_index(s.row,s.col);s.is_visited||s.is_wall||(s.is_visited=!0,this.steps.push({type:"visited",indices:[t]}),this.updateNeighbors(s))}return this.steps.push({type:"finish",indices:this.dfsGetPath()}),this.steps}dfsGetPath(s=this.finishNode){const t=[];let i=s;for(;null!==i;)t.unshift(this.get_1d_index(i.row,i.col)),i=i.prev;return t}updateNeighbors(s){const t=this.getNeighbors(s);for(const i of t){const t=this.get_1d_index(i.row,i.col);i.prev=s,i.distance=-12,this.steps.push({type:"updated",indices:[t]}),this.openSet.push(i)}}getNeighbors(s){const t=[],{row:i,col:e}=s,{rows:h,cols:o}=this;return e>0&&t.push(this.nodes[this.get_1d_index(i,e-1)]),e<o-1&&t.push(this.nodes[this.get_1d_index(i,e+1)]),i>0&&t.push(this.nodes[this.get_1d_index(i-1,e)]),i<h-1&&t.push(this.nodes[this.get_1d_index(i+1,e)]),t.filter((s=>!s.is_visited&&!s.is_wall))}}
//# sourceMappingURL=dfs.js.map