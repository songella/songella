"use strict";(self.webpackChunkella_website=self.webpackChunkella_website||[]).push([[6805],{6805:(e,s,n)=>{n.d(s,{Collider:()=>i});var o=n(4409);async function t(e,s,o,t){switch(e.options.collisions.mode){case"absorb":{const{absorb:i}=await n.e(9824).then(n.bind(n,9824));i(e,s,o,t);break}case"bounce":{const{bounce:o}=await n.e(4845).then(n.bind(n,4845));o(e,s);break}case"destroy":{const{destroy:o}=await n.e(1059).then(n.bind(n,1059));o(e,s);break}}}class i extends o.U4{constructor(e){super(e)}clear(){}init(){}async interact(e,s){if(e.destroyed||e.spawning)return;const n=this.container,i=e.getPosition(),a=e.getRadius(),c=n.particles.quadTree.queryCircle(i,2*a);for(const r of c){if(e===r||!r.options.collisions.enable||e.options.collisions.mode!==r.options.collisions.mode||r.destroyed||r.spawning)continue;const c=r.getPosition(),l=r.getRadius();if(Math.abs(Math.round(i.z)-Math.round(c.z))>a+l)continue;(0,o.Yf)(i,c)>a+l||await t(e,r,s,n.retina.pixelRatio)}}isEnabled(e){return e.options.collisions.enable}reset(){}}}}]);
//# sourceMappingURL=6805.ce083572.chunk.js.map