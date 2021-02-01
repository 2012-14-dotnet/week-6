- what is JS? (prototypal language, oloo = object linked to other object, dynamic language, compiled)
- what are datatypes? null, undefined, string, boolean, number, symbol, object(function, array)
- difference between null and undefined? null is a value, undefined is not declared
- difference between =, ==, ===? assignment, type coercion, strict equality
- what is type coercion? convert both operands to a single datatype and then compare
- what is truthy and falsy values? NaN, empty string, 0, -0, false, null, undefined
- what is hoisting? automatically declare a resource prior to execution if not explicitly defined, var, function statement
- what are the different scopes? window, document, function, block
- how can you do block scoping? let, const
- difference betwwen let and const? let is variable, const is constant
- what is naming convention for JS? camelCasing
- what is the DOM? HTML document representation in object form, tree-like structure, allow JS to access HTML elements
- how do you select an element? querySelector, querySelectorAll
- how do you access the DOM? document
- how do you write to an element? innerHTML, innerText, nodeValue
- how can you create an element? createElement + appendChild (prependChild)
- how do you create object? object literal (JSON), object constructor (function + this), object creator (Object.create)
- how do you create a function? function expression (let f = function), function statement (function), IIFE (function statement expression) = (function ())()
- what is closure? access private resource from an outer function from an inner function outside of its scope
- what is Ajax? framework to allow JS to communicate with any other system using HTTP and JSON
- how do you implement Ajax? XMLHttpRequest, Fetch API
- what is a promise? initial response with HttpHandler to handle response fulfillment when ready based on success or failure
- what is a callback? function to invoke at alter time when an event is completed
- what are HTTP Status Codes? 100-series network information, 200-series successful, 300-series redirects, 400-series client errors, 500-series server errors
- what are HTTP Verbs/Methods? GET = read information, POST = create information, PUT = update information, DELETE = remove information, PATCH = update part of information, OPTIONS = list available resources, HEAD = list available request headers
- what is event propagation? event bubbling, event capturing
- what is TS? JS with type-checking, class structure, transpilation, bundling + minification, module system
- how do you implement the module system? import + export
- what is transpilation? conversion from a high language (TS) to another high level language (JS)
- how to you bundle and minify? webpack
- how to implement JS with modules? script element with type=module, ES2015
- difference between MVC and SPA? MVC = page-driven web client, SPA = component-driven web client
- what is Angular? module > components + directives + services + routes + pipes
- what is data binding? transfer of data between a component and its template
- different type of data binding? 1-way (interpolation {{}}, property []), event (), 2-way [()]
- what is the structure of NG app? workspace (root module, root component), decorators, command line with ng new, ng test, ng generate
- what are decorators? attribute to transform a TS structure into an NG structure, @NgModule, @Component
- what are properties of a decorator? declarations = list of components for the module, imports = list of submodules to import, exports = list of submodules to export, providers = list of services for the module, bootstrap = root compoment on root module
- difference between TS import/export and NG import/export? TS for reference, NG for state
- what is routing? represent current state of the single page, path + module/component
- what are directives? html elements, html attributes, NG constructs (ngIf, ngFor, ngModel), attribute directives, structural directives, built-in directives

