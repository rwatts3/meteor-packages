## rwatts:meteordump Public API ##

Dumps variables and objects to the browser in a visual table.

_API documentation automatically generated by [docmeteor](https://github.com/raix/docmeteor)._

-

### <a name="meteordump"></a>meteordump(dump, options)&nbsp;&nbsp;<sub><i>Client</i></sub> ###


__Arguments__

* __dump__ *{Object}*  

 Takes any variable or object and creates a visual dump.

* __options__ *{Object}*  

 Additional Options to be passed to control the dumps presentation.


__Returns__  *{*}*


Turns nodedump into a method that can be called on the client.

> ```meteordump = function (dump, options) { ...``` [lib/meteordump.js:20](../lib/meteordump.js#L20)


-

### <a name="Template.registerHelper"></a>*Template*.registerHelper()&nbsp;&nbsp;<sub><i>Client</i></sub> ###

*This method __registerHelper__ is defined in `Template`*

__Returns__  *{*}*


Registers the meteordump helper to be used within the template.

> ```Template.registerHelper(``` [lib/meteordump.js:33](../lib/meteordump.js#L33)


