"use strict";(self.webpackChunkella_website=self.webpackChunkella_website||[]).push([[9628],{9628:(e,t,i)=>{i.d(t,{Repulser:()=>c});var s=i(4409),n=i(9066);const o="repulse";class c extends s.sJ{constructor(e,t){super(t),this._clickRepulse=()=>{var e;const t=this.container,i=t.actualOptions.interactivity.modes.repulse;if(!i)return;const n=null!==(e=t.repulse)&&void 0!==e?e:{particles:[]};if(n.finish||(n.count||(n.count=0),n.count++,n.count===t.particles.count&&(n.finish=!0)),n.clicking){const e=t.retina.repulseModeDistance;if(!e||e<0)return;const o=Math.pow(e/6,3),c=t.interactivity.mouse.clickPosition;if(void 0===c)return;const r=new s.jl(c.x,c.y,o),l=t.particles.quadTree.query(r,(e=>this.isEnabled(e)));for(const t of l){const{dx:e,dy:r,distance:l}=(0,s.vr)(c,t.position),a=l**2,u=-o*i.speed/a;if(a<=o){n.particles.push(t);const i=s.Mi.create(e,r);i.length=u,t.velocity.setTo(i)}}}else if(!1===n.clicking){for(const e of n.particles)e.velocity.setTo(e.initialVelocity);n.particles=[]}},this._hoverRepulse=()=>{const e=this.container,t=e.interactivity.mouse.position,i=e.retina.repulseModeDistance;!i||i<0||!t||this._processRepulse(t,i,new s.jl(t.x,t.y,i))},this._processRepulse=(e,t,i,n)=>{var o;const c=this.container,r=c.particles.quadTree.query(i,(e=>this.isEnabled(e))),l=c.actualOptions.interactivity.modes.repulse;if(!l)return;const{easing:a,speed:u,factor:p,maxSpeed:d}=l,f=(0,s.il)(a),h=(null!==(o=null===n||void 0===n?void 0:n.speed)&&void 0!==o?o:u)*p;for(const v of r){const{dx:i,dy:n,distance:o}=(0,s.vr)(v.position,e),c=(0,s.qE)(f(1-o/t)*h,0,d),r=s.Mi.create(o?i/o*c:h,o?n/o*c:h);v.position.addTo(r)}},this._singleSelectorRepulse=(e,t)=>{const i=this.container,n=i.actualOptions.interactivity.modes.repulse;if(!n)return;const o=document.querySelectorAll(e);o.length&&o.forEach((e=>{const o=e,c=i.retina.pixelRatio,r={x:(o.offsetLeft+.5*o.offsetWidth)*c,y:(o.offsetTop+.5*o.offsetHeight)*c},l=.5*o.offsetWidth*c,a="circle"===t.type?new s.jl(r.x,r.y,l):new s.M_(o.offsetLeft*c,o.offsetTop*c,o.offsetWidth*c,o.offsetHeight*c),u=n.divs,p=(0,s.NV)(u,o);this._processRepulse(r,l,a,p)}))},this._engine=e,t.repulse||(t.repulse={particles:[]}),this.handleClickMode=e=>{const i=this.container.actualOptions.interactivity.modes.repulse;if(!i||e!==o)return;t.repulse||(t.repulse={particles:[]});const n=t.repulse;n.clicking=!0,n.count=0;for(const s of t.repulse.particles)this.isEnabled(s)&&s.velocity.setTo(s.initialVelocity);n.particles=[],n.finish=!1,setTimeout((()=>{t.destroyed||(n.clicking=!1)}),i.duration*s.Xu)}}clear(){}init(){const e=this.container,t=e.actualOptions.interactivity.modes.repulse;t&&(e.retina.repulseModeDistance=t.distance*e.retina.pixelRatio)}async interact(){const e=this.container,t=e.actualOptions,i=e.interactivity.status===s.Rb,n=t.interactivity.events,c=n.onHover,r=c.enable,l=c.mode,a=n.onClick,u=a.enable,p=a.mode,d=n.onDiv;i&&r&&(0,s.hn)(o,l)?this._hoverRepulse():u&&(0,s.hn)(o,p)?this._clickRepulse():(0,s.U6)(o,d,((e,t)=>this._singleSelectorRepulse(e,t))),await Promise.resolve()}isEnabled(e){var t;const i=this.container,n=i.actualOptions,c=i.interactivity.mouse,r=(null!==(t=null===e||void 0===e?void 0:e.interactivity)&&void 0!==t?t:n.interactivity).events,l=r.onDiv,a=r.onHover,u=r.onClick,p=(0,s.iK)(o,l);if(!(p||a.enable&&c.position||u.enable&&c.clickPosition))return!1;const d=a.mode,f=u.mode;return(0,s.hn)(o,d)||(0,s.hn)(o,f)||p}loadModeOptions(e){e.repulse||(e.repulse=new n.Z);for(var t=arguments.length,i=new Array(t>1?t-1:0),s=1;s<t;s++)i[s-1]=arguments[s];for(const n of i)e.repulse.load(null===n||void 0===n?void 0:n.repulse)}reset(){}}}}]);
//# sourceMappingURL=9628.21f96b99.chunk.js.map