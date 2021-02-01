(this["webpackJsonpreact-portfolio"]=this["webpackJsonpreact-portfolio"]||[]).push([[0],[,,,,,,,,,,,,,,,function(e,t,a){},function(e,t,a){},function(e,t,a){},function(e,t,a){},function(e,t,a){},function(e,t,a){},function(e,t,a){},function(e,t,a){},function(e,t,a){},function(e,t,a){"use strict";a.r(t);var s=a(0),c=a(1),n=a.n(c),r=a(8),i=a.n(r),o=(a(15),a(2)),l=a(3),d=a(5),j=a(4),h=a.p+"static/media/chase-w-edwards-resume.57ea80ea.pdf",m=(a(16),function(e){Object(d.a)(a,e);var t=Object(j.a)(a);function a(){return Object(o.a)(this,a),t.apply(this,arguments)}return Object(l.a)(a,[{key:"render",value:function(){return Object(s.jsxs)("nav",{children:[Object(s.jsx)("div",{className:"brand-name",children:Object(s.jsx)("li",{children:Object(s.jsx)("a",{href:"#about",children:"Chase Edwards"})})}),Object(s.jsxs)("div",{className:"nav-links",children:[Object(s.jsx)("li",{children:Object(s.jsx)("a",{href:"#portfolio",children:"Portfolio"})}),Object(s.jsx)("li",{children:Object(s.jsx)("a",{href:"#contact",children:"Contact"})}),Object(s.jsx)("li",{children:Object(s.jsx)("a",{href:h,target:"_blank",rel:"noreferrer",children:"Resume"})})]})]})}}]),a}(c.Component)),b=(a(17),function(e){Object(d.a)(a,e);var t=Object(j.a)(a);function a(){return Object(o.a)(this,a),t.apply(this,arguments)}return Object(l.a)(a,[{key:"render",value:function(){return Object(s.jsxs)("header",{className:"hero",children:[Object(s.jsx)("div",{className:"background-image"}),Object(s.jsxs)("div",{className:"hero-content-area",children:[Object(s.jsx)("h1",{children:"Hello! I'm Chase."}),Object(s.jsx)("h3",{children:"Full-Stack Web Developer"}),Object(s.jsx)("a",{href:h,target:"_blank",rel:"noreferrer",children:"View My Resume"})]})]})}}]),a}(c.Component)),p=(a(18),a.p+"static/media/professional-pic.37757059.jpg"),u=a.p+"static/media/college-grad.ad06984a.jpg",f=function(e){Object(d.a)(a,e);var t=Object(j.a)(a);function a(){return Object(o.a)(this,a),t.apply(this,arguments)}return Object(l.a)(a,[{key:"render",value:function(){return Object(s.jsxs)("div",{children:[Object(s.jsxs)("div",{className:"row d-flex mt-2 justify-content-center aboutSec",children:[Object(s.jsx)("div",{className:"col-md-6 mb-3 d-flex flex-column justify-content-center",children:Object(s.jsx)("p",{className:"aboutPar",children:"I am a Full Stack Web Developer with a background in Information Systems and a dedication to continuous learning. I am always finding creative and efficient ways to solve issues. I am known among staff and peers as a hard worker with a strong attention to detail. I am currently studying Full Stack Web Development at Case Western Reserve University. I am learning React in my free time."})}),Object(s.jsx)("div",{className:"col-md-4 d-flex justify-content-center align-items-center",children:Object(s.jsx)("img",{src:p,className:"aboutPics",alt:"Chase in a suit"})})]}),Object(s.jsxs)("div",{className:"row d-flex justify-content-center aboutSec",children:[Object(s.jsx)("div",{className:"col-md-4 d-flex justify-content-center align-items-center order-2 order-md-1",children:Object(s.jsx)("img",{src:u,className:"aboutPics",alt:"Chase at college graduation in cap and gown"})}),Object(s.jsx)("div",{className:"col-md-6 d-flex flex-column justify-content-center order-1 order-md-2",children:Object(s.jsx)("p",{className:"aboutPar",children:"I graduated from The University of Akron in December of 2019 with a BBA in Information Systems Management. This is where I was first exposed to programming as well as data structures. Although they were more introductory courses to help compliment my business and data analytics side, they opened my eyes to the world of technology and from there my interest in software and web development grew."})})]})]})}}]),a}(c.Component),O=function(e){Object(d.a)(a,e);var t=Object(j.a)(a);function a(){return Object(o.a)(this,a),t.apply(this,arguments)}return Object(l.a)(a,[{key:"render",value:function(){var e=this.props,t=e.image,a=e.alt,c=e.name,n=e.desc,r=e.appLink,i=e.repoLink;return Object(s.jsxs)("div",{className:"card",children:[Object(s.jsx)("img",{src:t,className:"card-img-top",alt:a}),Object(s.jsxs)("div",{className:"card-body",children:[Object(s.jsx)("h5",{className:"card-title",children:c}),Object(s.jsx)("p",{className:"card-text",children:n}),Object(s.jsxs)("a",{href:r,target:"_blank",rel:"noreferrer",className:"app-link",children:[Object(s.jsx)("i",{className:"fas fa-link"})," App"]}),Object(s.jsxs)("a",{href:i,target:"_blank",rel:"noreferrer",className:"repo-link",children:[Object(s.jsx)("i",{className:"far fa-folder-open"})," Repo"]})]})]})}}]),a}(c.Component),x=(a(19),a.p+"static/media/smart-money-img.12e89791.PNG"),g=a.p+"static/media/book-search-img.e008574c.PNG",v=a.p+"static/media/petit-img.95c77b19.PNG",y=a.p+"static/media/employee-directory-img.db0d32f1.PNG",k=function(e){Object(d.a)(a,e);var t=Object(j.a)(a);function a(){return Object(o.a)(this,a),t.apply(this,arguments)}return Object(l.a)(a,[{key:"render",value:function(){var e=this.props.projects.map((function(e){return Object(s.jsx)(O,{image:e.image,alt:e.alt,name:e.name,desc:e.desc,appLink:e.appLink,repoLink:e.repoLink},e.id)}));return Object(s.jsx)("div",{className:"card-container",children:e})}}]),a}(c.Component);k.defaultProps={projects:[{id:1,image:x,alt:"A dashboard that shows the user's budget, a list of their inputted transactions, and a graph to represent their spending by category.",name:"Budget Tracker",desc:"A full-stack app used for tracking monthly transactions and bills to pay.",appLink:"https://smart-money-app.herokuapp.com/",repoLink:"https://github.com/cwedwards9/budget-tracker"},{id:2,image:v,alt:"A post of a kitten resting in a persons arm.",name:"PetIt - Social Media App (In development)",desc:"A social media for users to post pictures of their pets. All pets welcome!",appLink:"https://pet-it.herokuapp.com/",repoLink:"https://github.com/cwedwards9/social-media-pet-app"},{id:3,image:g,alt:"A search bar with the word, 'Lord of the Flies' typed into it and a result for the book with a description and the book cover.",name:"Book Search",desc:"An app that allows a user to search for book titles, save them, and refer back to them later.",appLink:"https://books-search-react-app.herokuapp.com/",repoLink:"https://github.com/cwedwards9/book-app"},{id:4,image:y,alt:"A heading that reads 'Employee Directory' and below it is a list of employees names and their picture.",name:"Employee Directory",desc:"An employee list that can be sorted and filtered based on user input, made with React.",appLink:"https://cwedwards9.github.io/employee-directory-react/",repoLink:"https://github.com/cwedwards9/employee-directory-react"}]};var w=k,N=a(9),C=a(6),S=(a(20),function(e){Object(d.a)(a,e);var t=Object(j.a)(a);function a(e){var s;return Object(o.a)(this,a),(s=t.call(this,e)).state={name:"",email:"",message:"",status:""},s.handleChange=s.handleChange.bind(Object(C.a)(s)),s.handleSubmit=s.handleSubmit.bind(Object(C.a)(s)),s}return Object(l.a)(a,[{key:"handleChange",value:function(e){this.setState(Object(N.a)({},e.target.name,e.target.value))}},{key:"handleSubmit",value:function(e){var t=this;e.preventDefault();var a=e.target,s=new FormData(a),c=new XMLHttpRequest;c.open(a.method,a.action),c.setRequestHeader("Accept","application/json"),c.onreadystatechange=function(){c.readyState===XMLHttpRequest.DONE&&(200===c.status?(a.reset(),t.setState({status:"SUCCESS"})):t.setState({status:"ERROR"}))},c.send(s),this.setState({name:"",email:"",message:"",status:""})}},{key:"render",value:function(){var e=this.state,t=e.name,a=e.email,c=e.message,n=e.status;return Object(s.jsxs)("div",{className:"contact-card",children:[Object(s.jsxs)("div",{className:"contact-info",children:[Object(s.jsx)("h1",{className:"contact-info-head",children:"Contact"}),Object(s.jsxs)("ul",{className:"contact-list",children:[Object(s.jsxs)("li",{children:[Object(s.jsx)("i",{className:"fas fa-phone-square-alt contact-icon"})," 330-815-3079"]}),Object(s.jsxs)("li",{children:[Object(s.jsx)("i",{className:"far fa-envelope contact-icon"})," chase.w.edwards9@gmail.com"]}),Object(s.jsxs)("li",{children:["Or send me a message here ",Object(s.jsx)("i",{className:"fas fa-arrow-right contact-icon"}),Object(s.jsx)("i",{className:"fas fa-arrow-down contact-icon"})]})]}),Object(s.jsxs)("div",{className:"contact-socials",children:[Object(s.jsx)("a",{href:"https://www.linkedin.com/in/chase-w-edwards/",target:"_blank",rel:"noreferrer",children:Object(s.jsx)("i",{className:"fab fa-linkedin fa-2x mr-3"})}),Object(s.jsx)("a",{href:"https://github.com/cwedwards9",target:"_blank",rel:"noreferrer",children:Object(s.jsx)("i",{className:"fab fa-github-square fa-2x"})})]})]}),Object(s.jsxs)("form",{action:"https://formspree.io/f/xgepdlvq",method:"POST",onSubmit:this.handleSubmit,children:[Object(s.jsx)("h1",{children:"Get In Touch"}),Object(s.jsxs)("div",{className:"form-input",children:[Object(s.jsx)("label",{htmlFor:"name",children:"Name:"}),Object(s.jsx)("input",{type:"text",id:"name",value:t,name:"name",onChange:this.handleChange,required:!0})]}),Object(s.jsxs)("div",{className:"form-input",children:[Object(s.jsx)("label",{htmlFor:"email",children:"Email:"}),Object(s.jsx)("input",{type:"email",id:"email",value:a,name:"email",onChange:this.handleChange,required:!0})]}),Object(s.jsxs)("div",{className:"form-input",children:[Object(s.jsx)("label",{htmlFor:"message",children:"Message:"}),Object(s.jsx)("textarea",{id:"message",rows:"4",value:c,name:"message",onChange:this.handleChange,required:!0})]}),Object(s.jsxs)("div",{id:"btnDiv",children:["SUCCESS"===n?Object(s.jsx)("p",{children:"Message Sent Sucessfully!"}):Object(s.jsx)("button",{id:"btnContact",type:"submit",children:"Let's Talk"}),"ERROR"===n&&Object(s.jsx)("p",{children:"Ooops! There was an error."})]})]})]})}}]),a}(c.Component)),L=(a(21),function(e){Object(d.a)(a,e);var t=Object(j.a)(a);function a(){return Object(o.a)(this,a),t.apply(this,arguments)}return Object(l.a)(a,[{key:"render",value:function(){return Object(s.jsxs)("footer",{children:[Object(s.jsx)("div",{children:Object(s.jsx)("p",{children:"\xa9 2021 Chase Edwards"})}),Object(s.jsx)("div",{children:Object(s.jsx)("p",{children:"Feel free to check out my other links..."})}),Object(s.jsxs)("div",{className:"socialLinks",children:[Object(s.jsx)("a",{href:"https://www.linkedin.com/in/chase-w-edwards/",target:"_blank",rel:"noreferrer",children:Object(s.jsx)("i",{className:"fab fa-linkedin fa-2x mr-1"})}),Object(s.jsx)("a",{href:"https://github.com/cwedwards9",target:"_blank",rel:"noreferrer",children:Object(s.jsx)("i",{className:"fab fa-github-square fa-2x my-1"})}),Object(s.jsx)("a",{href:"./assets/chase-w-edwards-resume.pdf",target:"_blank",rel:"noreferrer",children:Object(s.jsx)("i",{className:"fas fa-file-alt fa-2x ml-1"})})]})]})}}]),a}(c.Component)),A=(a(22),function(e){Object(d.a)(a,e);var t=Object(j.a)(a);function a(){return Object(o.a)(this,a),t.apply(this,arguments)}return Object(l.a)(a,[{key:"render",value:function(){return Object(s.jsxs)("div",{className:"Portfolio",children:[Object(s.jsx)(m,{}),Object(s.jsx)(b,{}),Object(s.jsxs)("main",{className:"container-fluid px-0",children:[Object(s.jsxs)("section",{id:"about",children:[Object(s.jsx)("div",{className:"row d-flex justify-content-center mb-2",children:Object(s.jsxs)("div",{className:"col-md-8 text-center",children:[Object(s.jsx)("h1",{className:"sectionTitle",children:"About Me"}),Object(s.jsx)("hr",{})]})}),Object(s.jsx)(f,{})]}),Object(s.jsxs)("section",{id:"portfolio",children:[Object(s.jsx)("div",{className:"row d-flex justify-content-center mb-4",children:Object(s.jsxs)("div",{className:"col-md-8 text-center",children:[Object(s.jsx)("h1",{className:"mb-4 sectionTitle",children:"My Projects"}),Object(s.jsx)("p",{className:"sectionDesc",children:"This portfolio showcases the latest projects that I have completed. Click on a project's link to go to the repository or to see the deployed version."}),Object(s.jsx)("hr",{})]})}),Object(s.jsx)(w,{})]}),Object(s.jsxs)("section",{id:"contact",children:[Object(s.jsx)("div",{className:"row d-flex justify-content-center mb-4",children:Object(s.jsxs)("div",{className:"col-md-8 text-center",children:[Object(s.jsx)("h1",{className:"mb-4 sectionTitle",children:"Contact Me!"}),Object(s.jsx)("p",{className:"sectionDesc",children:"Feel free to reach out to me! I am always open to meeting new people and making new professional connections!"}),Object(s.jsx)("hr",{})]})}),Object(s.jsx)(S,{})]})]}),Object(s.jsx)(L,{})]})}}]),a}(c.Component)),I=(a(23),function(e){Object(d.a)(a,e);var t=Object(j.a)(a);function a(){return Object(o.a)(this,a),t.apply(this,arguments)}return Object(l.a)(a,[{key:"render",value:function(){return Object(s.jsx)("div",{className:"App",children:Object(s.jsx)(A,{})})}}]),a}(c.Component)),P=function(e){e&&e instanceof Function&&a.e(3).then(a.bind(null,25)).then((function(t){var a=t.getCLS,s=t.getFID,c=t.getFCP,n=t.getLCP,r=t.getTTFB;a(e),s(e),c(e),n(e),r(e)}))};i.a.render(Object(s.jsx)(n.a.StrictMode,{children:Object(s.jsx)(I,{})}),document.getElementById("root")),P()}],[[24,1,2]]]);
//# sourceMappingURL=main.05229b9d.chunk.js.map