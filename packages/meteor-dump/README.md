# Meteor Dump `v.0.1.0`

**Meteor Dump** is a package inspired by Coldfusion and NodeDump. 
This package allows you to pass any variable or object, and render a visual representation of the object's data in the browser.

---


### Installation

*From the command line run the following code.*

```sh
$ meteor add rwatts:meteordump
```


### Explanation of Use
Inspired by Coldfusion , the npm package `nodedump` successfully ported the `cfdump` like method to Node.js. Meteor Dump is a re-work of the client side variant of this package. 


### Quick API
**Options**
Options can be passed as an object whenever you nodedump a variable as the second parameter, e.g. nodedump(vartodump, options)

The available options are:

- label - String. Output on the header of the dump.
- expand - Boolean/Array. Defaults to true. The dump can be collapsed entirely by passing false. Simply click on the headers in order to expand them. An array of complex types can be passed and those types of objects will be expanded while everything else will remain collapsed. For e.g. ['Array', 'Object', 'Function']
collapse - Boolean/Array. Defaults to false. Works opposite the way expand does. The dump can be collapsed entirely by passing true. An array of types can be passed and those types of objects will be collapsed wherever they are in the dump. For e.g. ['Array', 'Object', 'Function']
- show - Array. A list of object keys / array positions to show. Others not in the list will be hidden.
- hide - Array. A list of object keys / array positions to hide.
- hideTypes - Array. A list of complex types of objects to exclude from being output. e.g. ['RegExp', 'Function'].
- top - Number. The number of array positions of the dump variable to show. For objects, this is the number of keys of the top level to show.
- levels - Number. How many nested levels of an object to dump down to.
- sortKeys - Boolean. Defaults to true. Tells nodedump to output the keys of objects sorted alphabetically. If false, keys will be output in whatever order node.js returns them (usually the order in which they were added).
- syntaxHighlight - Boolean. Defaults to true. Tells whether or not the dump of functions should be syntax highlighted (color-coded).
- dumpFunctionName - String. Defaults to 'nodedump'. Name to use for the nodedump function. E.g. if this is changed to 'dump' then in addition to doing nodedump(vartodump) you can do dump(vartodump).

>To review the api visit the **[docs](https://github.com/rwatts3/meteor-packages/tree/master/meteordump/docs)** directory and review the **api.md** file.
>**Credits** [ragamufin](https://www.npmjs.com/package/nodedump) the author of `nodedump`

**Using meteordump in your JS files.**
```js
meteordump(someObject);
```
<img src="http://goo.gl/cHdpdz" width="100%""/>

<img src="http://goo.gl/wrpwpS" width="100%"/>

*Using meteordump's template helper.'*
```html
{{meteordump someObject}}
```

<img src="http://goo.gl/Hj03gP" width="100%"/>

---

### Latest Updates
Version 0.1.0 is the initial release of this package. It contains a `meteordump` method that can be used anywhere on the client. And it also contains a `{{meteordump}}` Template helper which can be used within any template.


>For more information on advanced usage visit the repository , and review the **[docs](https://github.com/rwatts3/meteor-packages/tree/master/meteordump/docs)** directory.
