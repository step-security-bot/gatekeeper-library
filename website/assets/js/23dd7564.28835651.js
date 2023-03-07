"use strict";(self.webpackChunkwebsite=self.webpackChunkwebsite||[]).push([[8587],{3905:(e,a,n)=>{n.d(a,{Zo:()=>m,kt:()=>u});var t=n(7294);function r(e,a,n){return a in e?Object.defineProperty(e,a,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[a]=n,e}function i(e,a){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var t=Object.getOwnPropertySymbols(e);a&&(t=t.filter((function(a){return Object.getOwnPropertyDescriptor(e,a).enumerable}))),n.push.apply(n,t)}return n}function s(e){for(var a=1;a<arguments.length;a++){var n=null!=arguments[a]?arguments[a]:{};a%2?i(Object(n),!0).forEach((function(a){r(e,a,n[a])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):i(Object(n)).forEach((function(a){Object.defineProperty(e,a,Object.getOwnPropertyDescriptor(n,a))}))}return e}function l(e,a){if(null==e)return{};var n,t,r=function(e,a){if(null==e)return{};var n,t,r={},i=Object.keys(e);for(t=0;t<i.length;t++)n=i[t],a.indexOf(n)>=0||(r[n]=e[n]);return r}(e,a);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(t=0;t<i.length;t++)n=i[t],a.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(r[n]=e[n])}return r}var o=t.createContext({}),p=function(e){var a=t.useContext(o),n=a;return e&&(n="function"==typeof e?e(a):s(s({},a),e)),n},m=function(e){var a=p(e.components);return t.createElement(o.Provider,{value:a},e.children)},c={inlineCode:"code",wrapper:function(e){var a=e.children;return t.createElement(t.Fragment,{},a)}},d=t.forwardRef((function(e,a){var n=e.components,r=e.mdxType,i=e.originalType,o=e.parentName,m=l(e,["components","mdxType","originalType","parentName"]),d=p(n),u=r,g=d["".concat(o,".").concat(u)]||d[u]||c[u]||i;return n?t.createElement(g,s(s({ref:a},m),{},{components:n})):t.createElement(g,s({ref:a},m))}));function u(e,a){var n=arguments,r=a&&a.mdxType;if("string"==typeof e||r){var i=n.length,s=new Array(i);s[0]=d;var l={};for(var o in a)hasOwnProperty.call(a,o)&&(l[o]=a[o]);l.originalType=e,l.mdxType="string"==typeof e?e:r,s[1]=l;for(var p=2;p<i;p++)s[p]=n[p];return t.createElement.apply(null,s)}return t.createElement.apply(null,n)}d.displayName="MDXCreateElement"},1680:(e,a,n)=>{n.r(a),n.d(a,{assets:()=>o,contentTitle:()=>s,default:()=>c,frontMatter:()=>i,metadata:()=>l,toc:()=>p});var t=n(7462),r=(n(7294),n(3905));const i={id:"disallowedrepos",title:"Disallowed Repositories"},s="Disallowed Repositories",l={unversionedId:"validation/disallowedrepos",id:"validation/disallowedrepos",title:"Disallowed Repositories",description:"Description",source:"@site/docs/validation/disallowedrepos.md",sourceDirName:"validation",slug:"/validation/disallowedrepos",permalink:"/gatekeeper-library/website/validation/disallowedrepos",draft:!1,editUrl:"https://github.com/open-policy-agent/gatekeeper-library/edit/master/website/docs/validation/disallowedrepos.md",tags:[],version:"current",frontMatter:{id:"disallowedrepos",title:"Disallowed Repositories"},sidebar:"docs",previous:{title:"Required Resources",permalink:"/gatekeeper-library/website/validation/containerresources"},next:{title:"Disallow Anonymous Access",permalink:"/gatekeeper-library/website/validation/disallowanonymous"}},o={},p=[{value:"Description",id:"description",level:2},{value:"Template",id:"template",level:2},{value:"Usage",id:"usage",level:3},{value:"Examples",id:"examples",level:2}],m={toc:p};function c(e){let{components:a,...n}=e;return(0,r.kt)("wrapper",(0,t.Z)({},m,n,{components:a,mdxType:"MDXLayout"}),(0,r.kt)("h1",{id:"disallowed-repositories"},"Disallowed Repositories"),(0,r.kt)("h2",{id:"description"},"Description"),(0,r.kt)("p",null,"Disallowed container repositories that begin with a string from the specified list."),(0,r.kt)("h2",{id:"template"},"Template"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-yaml"},'apiVersion: templates.gatekeeper.sh/v1\nkind: ConstraintTemplate\nmetadata:\n  name: k8sdisallowedrepos\n  annotations:\n    metadata.gatekeeper.sh/title: "Disallowed Repositories"\n    metadata.gatekeeper.sh/version: 1.0.0\n    description: >-\n      Disallowed container repositories that begin with a string from the specified list.\nspec:\n  crd:\n    spec:\n      names:\n        kind: K8sDisallowedRepos\n      validation:\n        # Schema for the `parameters` field\n        openAPIV3Schema:\n          type: object\n          properties:\n            repos:\n              description: The list of prefixes a container image is not allowed to have.\n              type: array\n              items:\n                type: string\n  targets:\n    - target: admission.k8s.gatekeeper.sh\n      rego: |\n        package k8sdisallowedrepos\n\n        violation[{"msg": msg}] {\n          container := input.review.object.spec.containers[_]\n          image := container.image\n          startswith(image, input.parameters.repos[_])\n          msg := sprintf("container <%v> has an invalid image repo <%v>, disallowed repos are %v", [container.name, container.image, input.parameters.repos])\n        }\n\n        violation[{"msg": msg}] {\n          container := input.review.object.spec.initContainers[_]\n          image := container.image\n          startswith(image, input.parameters.repos[_])\n          msg := sprintf("initContainer <%v> has an invalid image repo <%v>, disallowed repos are %v", [container.name, container.image, input.parameters.repos])\n        }\n\n        violation[{"msg": msg}] {\n          container := input.review.object.spec.ephemeralContainers[_]\n          image := container.image\n          startswith(image, input.parameters.repos[_])\n          msg := sprintf("ephemeralContainer <%v> has an invalid image repo <%v>, disallowed repos are %v", [container.name, container.image, input.parameters.repos])\n        }\n\n')),(0,r.kt)("h3",{id:"usage"},"Usage"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-shell"},"kubectl apply -f https://raw.githubusercontent.com/open-policy-agent/gatekeeper-library/master/library/general/disallowedrepos/template.yaml\n")),(0,r.kt)("h2",{id:"examples"},"Examples"),(0,r.kt)("details",null,(0,r.kt)("summary",null,"allowed-repos"),(0,r.kt)("blockquote",null,(0,r.kt)("details",null,(0,r.kt)("summary",null,"constraint"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-yaml"},'apiVersion: constraints.gatekeeper.sh/v1beta1\nkind: K8sDisallowedRepos\nmetadata:\n  name: repo-must-not-be-k8s-gcr-io\nspec:\n  match:\n    kinds:\n      - apiGroups: [""]\n        kinds: ["Pod"]\n  parameters:\n    repos:\n      - "k8s.gcr.io/"\n\n')),(0,r.kt)("p",null,"Usage"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-shell"},"kubectl apply -f https://raw.githubusercontent.com/open-policy-agent/gatekeeper-library/master/library/general/disallowedrepos/samples/repo-must-not-be-k8s-gcr-io/constraint.yaml\n"))),(0,r.kt)("details",null,(0,r.kt)("summary",null,"example-allowed"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-yaml"},"apiVersion: v1\nkind: Pod\nmetadata:\n  name: kustomize-allowed\nspec:\n  containers:\n    - name: kustomize\n      image: registry.k8s.io/kustomize/kustomize:v3.8.9\n\n")),(0,r.kt)("p",null,"Usage"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-shell"},"kubectl apply -f https://raw.githubusercontent.com/open-policy-agent/gatekeeper-library/master/library/general/disallowedrepos/samples/repo-must-not-be-k8s-gcr-io/example_allowed.yaml\n"))),(0,r.kt)("details",null,(0,r.kt)("summary",null,"container-disallowed"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-yaml"},"apiVersion: v1\nkind: Pod\nmetadata:\n  name: kustomize-disallowed\nspec:\n  containers:\n    - name: kustomize\n      image: k8s.gcr.io/kustomize/kustomize:v3.8.9\n\n\n")),(0,r.kt)("p",null,"Usage"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-shell"},"kubectl apply -f https://raw.githubusercontent.com/open-policy-agent/gatekeeper-library/master/library/general/disallowedrepos/samples/repo-must-not-be-k8s-gcr-io/example_disallowed_container.yaml\n"))),(0,r.kt)("details",null,(0,r.kt)("summary",null,"initcontainer-disallowed"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-yaml"},"apiVersion: v1\nkind: Pod\nmetadata:\n  name: kustomize-disallowed\nspec:\n  initContainers:\n  - name: kustomizeinit\n    image: k8s.gcr.io/kustomize/kustomize:v3.8.9\n  containers:\n    - name: kustomize\n      image: registry.k8s.io/kustomize/kustomize:v3.8.9\n\n")),(0,r.kt)("p",null,"Usage"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-shell"},"kubectl apply -f https://raw.githubusercontent.com/open-policy-agent/gatekeeper-library/master/library/general/disallowedrepos/samples/repo-must-not-be-k8s-gcr-io/example_disallowed_initcontainer.yaml\n"))),(0,r.kt)("details",null,(0,r.kt)("summary",null,"both-disallowed"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-yaml"},"apiVersion: v1\nkind: Pod\nmetadata:\n  name: kustomize-disallowed\nspec:\n  initContainers:\n  - name: kustomizeinit\n    image: k8s.gcr.io/kustomize/kustomize:v3.8.9\n  containers:\n    - name: kustomize\n      image: k8s.gcr.io/kustomize/kustomize:v3.8.9\n\n")),(0,r.kt)("p",null,"Usage"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-shell"},"kubectl apply -f https://raw.githubusercontent.com/open-policy-agent/gatekeeper-library/master/library/general/disallowedrepos/samples/repo-must-not-be-k8s-gcr-io/example_disallowed_both.yaml\n"))),(0,r.kt)("details",null,(0,r.kt)("summary",null,"all-disallowed"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-yaml"},"apiVersion: v1\nkind: Pod\nmetadata:\n  name: kustomize-disallowed\nspec:\n  initContainers:\n  - name: kustomize\n    image:  k8s.gcr.io/kustomize/kustomize:v3.8.9\n  containers:\n    - name: kustomize\n      image: k8s.gcr.io/kustomize/kustomize:v3.8.9\n  ephemeralContainers:\n    - name: kustomize\n      image: k8s.gcr.io/kustomize/kustomize:v3.8.9\n\n")),(0,r.kt)("p",null,"Usage"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-shell"},"kubectl apply -f https://raw.githubusercontent.com/open-policy-agent/gatekeeper-library/master/library/general/disallowedrepos/samples/repo-must-not-be-k8s-gcr-io/disallowed_all.yaml\n"))))))}c.isMDXComponent=!0}}]);