(window.webpackJsonp=window.webpackJsonp||[]).push([[8],{366:function(e,t,n){"use strict";n.r(t);var a=n(44),o=Object(a.a)({},(function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("ContentSlotsDistributor",{attrs:{"slot-key":e.$parent.slotKey}},[n("h1",{attrs:{id:"hello-bundle"}},[n("a",{staticClass:"header-anchor",attrs:{href:"#hello-bundle"}},[e._v("#")]),e._v(" Hello bundle")]),e._v(" "),n("p",[e._v("Hey developers,")]),e._v(" "),n("p",[e._v("The day has come to learn more and share about this great feature that makes developers' lives easier when working with Entando.")]),e._v(" "),n("p",[e._v("What would you say if I tell you that there is a simple and intuitive way to define your Entando components, share them, manage the different versions and deploy and install them into your targeted environment.")]),e._v(" "),n("p",[e._v("There is a way to stop wasting time trying to deploy your microservices and micro frontend in an agnostic way. The solution is already here.")]),e._v(" "),n("p"),n("div",{staticClass:"table-of-contents"},[n("ul",[n("li",[n("a",{attrs:{href:"#everything-is-a-component"}},[e._v("Everything is a Component")])]),n("li",[n("a",{attrs:{href:"#a-bundle-to-rule-them-all"}},[e._v("A Bundle To Rule Them All")]),n("ul",[n("li",[n("a",{attrs:{href:"#ntroduction-to-bundles"}},[e._v("NTRODUCTION TO BUNDLES")])]),n("li",[n("a",{attrs:{href:"#the-bundle-descriptor"}},[e._v("THE BUNDLE DESCRIPTOR")])]),n("li",[n("a",{attrs:{href:"#the-component-descriptor"}},[e._v("THE COMPONENT DESCRIPTOR")])])])]),n("li",[n("a",{attrs:{href:"#the-bundle-lifecycle"}},[e._v("The Bundle Lifecycle")])]),n("li",[n("a",{attrs:{href:"#conclusion"}},[e._v("Conclusion")])])])]),n("p"),e._v(" "),n("h2",{attrs:{id:"everything-is-a-component"}},[n("a",{staticClass:"header-anchor",attrs:{href:"#everything-is-a-component"}},[e._v("#")]),e._v(" Everything is a Component")]),e._v(" "),n("p",[e._v("Before starting on the bundle we need to understand what a component is in an Entando Application. You can have micro frontends, simple html fragments, microservices, pages to host them all and so on…Every one of these is a component.")]),e._v(" "),n("p",[e._v("These are all of the different components that can be included in an Entando bundle:")]),e._v(" "),n("ul",[n("li",[e._v("Plugin (microservice)")]),e._v(" "),n("li",[e._v("Content Template")]),e._v(" "),n("li",[e._v("Widget (micro frontend)")]),e._v(" "),n("li",[e._v("Content")]),e._v(" "),n("li",[e._v("Fragment")]),e._v(" "),n("li",[e._v("Categories")]),e._v(" "),n("li",[e._v("Page Template")]),e._v(" "),n("li",[e._v("Groups")]),e._v(" "),n("li",[e._v("Page")]),e._v(" "),n("li",[e._v("Labels")]),e._v(" "),n("li",[e._v("CMS Asset")]),e._v(" "),n("li",[e._v("Languages")]),e._v(" "),n("li",[e._v("Content Type")]),e._v(" "),n("li",[e._v("Static resources")])]),e._v(" "),n("p",[e._v("Entando uses specific terminology to name different components in a bundle. For example, a micro frontend can be added to a page as a widget and a microservice is deployed as a plugin.")]),e._v(" "),n("p",[e._v("We will review all of the component types in detail in future blog posts. For the moment keep in mind that each piece of an application used in an Entando instance is a component and the bundle will help you install and use them.")]),e._v(" "),n("h2",{attrs:{id:"a-bundle-to-rule-them-all"}},[n("a",{staticClass:"header-anchor",attrs:{href:"#a-bundle-to-rule-them-all"}},[e._v("#")]),e._v(" A Bundle To Rule Them All")]),e._v(" "),n("h3",{attrs:{id:"ntroduction-to-bundles"}},[n("a",{staticClass:"header-anchor",attrs:{href:"#ntroduction-to-bundles"}},[e._v("#")]),e._v(" NTRODUCTION TO BUNDLES")]),e._v(" "),n("p",[e._v("When working with components, the bundle will be your best friend. It will guide you in two ways: define your components and wrap them all into a descriptor file. You can think of bundles as “Entando as code.”")]),e._v(" "),n("p",[e._v("A bundle has the following characteristics:")]),e._v(" "),n("ul",[n("li",[e._v("Written in Yaml")]),e._v(" "),n("li",[e._v("Define structured components by type")]),e._v(" "),n("li",[e._v("Define relationships between different components")]),e._v(" "),n("li",[e._v("Finally, inventory all of the components in a descriptor file")])]),e._v(" "),n("p",[e._v("By convention, each component is sorted by type under a dedicated folder (e.g fragments, widgets, plugins). Depending on your use case you can organize the folders as needed. Note that static resources are not referenced in the descriptor.yaml itself but in the component descriptor where they are used.")]),e._v(" "),n("p",[e._v("The only hard requirement is that the bundle descriptor is placed at the root folder and be named “descriptor.yaml”.")]),e._v(" "),n("p",[e._v("Please check the standard-demo-bundle repository to have a complete example of what a bundle could be.")]),e._v(" "),n("h3",{attrs:{id:"the-bundle-descriptor"}},[n("a",{staticClass:"header-anchor",attrs:{href:"#the-bundle-descriptor"}},[e._v("#")]),e._v(" THE BUNDLE DESCRIPTOR")]),e._v(" "),n("p",[e._v("As we said before the bundle is first of all a way to wrap multiple components together and make their deployment and installation easier.")]),e._v(" "),n("p",[e._v("For achieving this, the bundle needs to declare the components it has under its responsibility. This is what the bundle descriptor does.")]),e._v(" "),n("p",[e._v("In addition to these declarations, we will define some metadata to define the bundle itself.")]),e._v(" "),n("p",[e._v("Here is my bundle descriptor:")]),e._v(" "),n("div",{staticClass:"language- extra-class"},[n("pre",{pre:!0,attrs:{class:"language-text"}},[n("code",[e._v("code: my-demo\ndescription: My Demo bundle\ncomponents:\n  fragments:\n    - fragments/myFragment-descriptor.yaml\n    - fragments/myFragment-ftl-descriptor.yaml\n")])])]),n("p",[e._v("Note: If you want to include other components in addition to fragments, you can update the bundle descriptor to include those additional component types. For example, in the screenshot below widgets and plugins have been added to the descriptor.")]),e._v(" "),n("div",{staticClass:"language- extra-class"},[n("pre",{pre:!0,attrs:{class:"language-text"}},[n("code",[e._v("components:\n  fragments:\n    - fragments/myFragment-descriptor.yaml\n    - fragments/myFragment-ftl-descriptor.yaml\n  widgets:\n    - widgets/myWidget-descriptor.yaml\n  plugins:\n    [...]\n")])])]),n("h3",{attrs:{id:"the-component-descriptor"}},[n("a",{staticClass:"header-anchor",attrs:{href:"#the-component-descriptor"}},[e._v("#")]),e._v(" THE COMPONENT DESCRIPTOR")]),e._v(" "),n("h2",{attrs:{id:"the-bundle-lifecycle"}},[n("a",{staticClass:"header-anchor",attrs:{href:"#the-bundle-lifecycle"}},[e._v("#")]),e._v(" The Bundle Lifecycle")]),e._v(" "),n("h2",{attrs:{id:"conclusion"}},[n("a",{staticClass:"header-anchor",attrs:{href:"#conclusion"}},[e._v("#")]),e._v(" Conclusion")])])}),[],!1,null,null,null);t.default=o.exports}}]);