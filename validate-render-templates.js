#!/usr/bin/env node
'use strict';
const fs=require('fs'),path=require('path'),vm=require('vm');
const root=path.resolve(__dirname,'..'); let checks=0; const failures=[]; const assert=(c,l)=>{checks++;if(!c)failures.push(l)};
class Storage{constructor(){this.m=new Map()}get length(){return this.m.size}key(i){return [...this.m.keys()][i]??null}getItem(k){return this.m.has(k)?this.m.get(k):null}setItem(k,v){this.m.set(String(k),String(v))}removeItem(k){this.m.delete(k)}}
const localStorage=new Storage();
localStorage.setItem('versa-profile-v2',JSON.stringify({name:'Validação',dailyMinutes:45,onboarded:true,theme:'light'}));
localStorage.setItem('versa-active-course',JSON.stringify('cfaq'));
const rootNode={innerHTML:''};
const sandbox={
  window:{localStorage,addEventListener:()=>{},removeEventListener:()=>{}}, localStorage, URL, console, confirm:()=>true, scrollTo:()=>{}, setInterval:()=>1, clearInterval:()=>{},
  document:{documentElement:{dataset:{}},getElementById:(id)=>id==='root'?rootNode:null,querySelector:()=>null,querySelectorAll:()=>[],activeElement:null,addEventListener:()=>{},removeEventListener:()=>{},createElement:()=>({append:()=>{},replaceChildren:()=>{},className:'',textContent:''})},
  location:{reload:()=>{}}, setTimeout, Date, Math, JSON, Object, Array, Set, Map, String, Number, Boolean, RegExp,
};
sandbox.window.window=sandbox.window; sandbox.window.document=sandbox.document; sandbox.window.URL=URL; sandbox.window.Date=Date; sandbox.window.Math=Math; sandbox.window.confirm=()=>true; sandbox.window.scrollTo=()=>{};
for(const filename of ['security-bootstrap.js','cfaq-data.js','dataprev-history-data.js','transpetro-cyber-data.js','flashcards-priority-data.js','flashcards-data.js','flashcards-engine.js','adaptive-engine.js']){
  vm.runInNewContext(fs.readFileSync(path.join(root,filename),'utf8'),sandbox,{filename,timeout:15000});
}
let app=fs.readFileSync(path.join(root,'app.js'),'utf8');
app=app.replace(/render\(\);\s*\}\)\(\);?\s*$/,`window.__RENDER_TEST={COURSES,state,normalizeProgress,dashboard,learningPath,lessonPage,reviews,errors,performance,simulation,diagnostic,studySession,course,progress};})()`);
vm.runInNewContext(app,sandbox,{filename:'app.js',timeout:30000});
const t=sandbox.window.__RENDER_TEST;
assert(Boolean(t),'Funções de renderização expostas no ambiente de teste');
assert(Object.keys(t.COURSES).length===5,'Cinco trilhas carregadas');
for(const [id,c] of Object.entries(t.COURSES)){
  t.state.activeCourse=id; t.state.view='dashboard'; t.state.lessonId=null; t.state.sim=null; t.state.smartSession=null;
  const dash=t.dashboard();
  assert(/ÍNDICE DE MAESTRIA/.test(dash),`Dashboard Mastery renderiza em ${id}`);
  assert(/Estudar agora — 30 min/.test(dash),`Atalho de sessão renderiza em ${id}`);
  const pathHtml=t.learningPath();
  assert((pathHtml.match(/lesson-card/g)||[]).length>=c.lessons.length,`Trilha renderiza lições em ${id}`);
  const first=c.lessons[0]; t.state.lessonId=first.id; t.state.lessonPrep={skipped:false,selected:null,confidence:null,startedAt:Date.now()};
  const pre=t.lessonPage();
  assert(/pretest-card/.test(pre),`Pré-teste renderiza em ${id}`);
  const p=t.progress(id); p.pretests[first.id]={skipped:true,date:'2026-08-13'}; localStorage.setItem('versa-progress-'+id,JSON.stringify(p));
  const lesson=t.lessonPage();
  assert(/recall-draft/.test(lesson),`Recuperação aberta renderiza em ${id}`);
  assert(/confidence-box/.test(lesson),`Confiança renderiza nas questões em ${id}`);
  const review=t.reviews(); assert(/Revisões inteligentes/.test(review),`Revisões inteligentes renderizam em ${id}`);
  const perf=t.performance(); assert(/VERSA MASTERY ENGINE/.test(perf)&&/VERSA PACE/.test(perf),`Desempenho Mastery/Pace renderiza em ${id}`);
  t.state.sim=null; const sim=t.simulation(); assert(/adaptive-mixed/.test(sim)&&/data-sim-start="transfer"/.test(sim),`Treinos cognitivos renderizam em ${id}`);
  t.state.diag={index:0,answers:[],details:[],selected:null,confidence:null,startedAt:Date.now(),done:false};
  const diag=t.diagnostic(); assert(/data-diag-confidence/.test(diag),`Confiança do diagnóstico renderiza em ${id}`);
  const plan=sandbox.window.VERSA_ADAPTIVE_ENGINE.buildDailyPlan(c,t.progress(id),30,'2026-08-13');
  t.state.smartSession={courseId:id,startedAt:Date.now(),plan,completed:[],currentIndex:null};
  const session=t.studySession(); assert(/SESSÃO GUIADA/.test(session)&&(session.match(/session-step/g)||[]).length>=plan.blocks.length,`Sessão guiada renderiza em ${id}`);
}
const payload={status:failures.length?'failed':'passed',checks,failures,summary:{courses:5,templates:['dashboard','path','pretest','lesson','reviews','performance','simulation','diagnostic','studySession']}};
console.log(JSON.stringify(payload,null,2)); if(failures.length)process.exit(1);
