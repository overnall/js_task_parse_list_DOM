var t=document.querySelectorAll("li");!function(e){for(var r=[],a=0;a<t.length;a++){var l=t[a].getAttribute("data-salary").slice(1),n=t[a].textContent.replaceAll("\n","").trim(),o=t[a].getAttribute("data-position"),u=t[a].getAttribute("data-age");r.push({name:n,position:o,salary:l,age:u})}}(0),function(e){for(var r=[],a=0;a<t.length;a++){var l=t[a].getAttribute("data-salary").slice(1),n=t[a].textContent.replaceAll("\n","").trim();l=Number(l.replaceAll(",","")),r.push({name:n,salary:l})}r.sort(function(t,e){return e.salary-t.salary}),document.querySelector("ul").textContent="";var o=!0,u=!1,i=void 0;try{for(var c,y=r[Symbol.iterator]();!(o=(c=y.next()).done);o=!0){var s=c.value,d=document.createElement("li");d.textContent=s.name,document.querySelector("ul").appendChild(d)}}catch(t){u=!0,i=t}finally{try{o||null==y.return||y.return()}finally{if(u)throw i}}}(0);
//# sourceMappingURL=index.a1bbc5cd.js.map
