import{r as p,u as m,a as c,c as n,b as o,w as _,d as a,v as i,e as f,o as u}from"./index-C45gY_-d.js";import{_ as v}from"./_plugin-vue_export-helper-DlAUqK2U.js";const w="/silenzio-bruno/assets/silenzio_bruno-Qkhf1FvM.png",g={class:"background"},b={class:"container"},h={key:0,class:"error"},k={__name:"LoginView",setup(V){const e=p({username:"",password:"",error:!1}),r=m(),l=c();function d(){r.checkCredential(e)?(r.setUser(e),l.push({name:"note"})):e.error=!0}return(x,s)=>(u(),n("div",g,[o("div",b,[s[3]||(s[3]=o("img",{class:"logo",src:w,alt:"Logo"},null,-1)),o("div",null,[o("form",{onSubmit:_(d,["prevent"])},[a(o("input",{type:"text",placeholder:"Usuário","onUpdate:modelValue":s[0]||(s[0]=t=>e.username=t),id:"username"},null,512),[[i,e.username]]),a(o("input",{type:"password",placeholder:"Senha","onUpdate:modelValue":s[1]||(s[1]=t=>e.password=t),id:"password"},null,512),[[i,e.password]]),e.error?(u(),n("p",h,"Eu gosto de você 😢")):f("",!0),s[2]||(s[2]=o("button",{type:"submit"},"Entrar",-1))],32)])])]))}},U=v(k,[["__scopeId","data-v-4eb79faf"]]);export{U as default};
