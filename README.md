js.js
=====

A **very simple** [Microsoft WSH](http://en.wikipedia.org/wiki/Windows_Script_Host) based ECMAScript (aka JScript [\[MSDN\]](https://msdn.microsoft.com/library/hbxc2t98%28vs.85%29.aspx) [\[WP\]](http://en.wikipedia.org/wiki/JScript)) console.

How to use
----------

`> `**`js`**. So easy!

If you have no administrative rights, don't care about the requisite below. Type `> cscript -nologo `**`js.js`**. 

Requisite
---------

JScript files (`.js`) should run with `cscript.exe`. It means,
* `[HKCR\JSFile\Shell]\@ = "Open2"`. It can be achieved by running the command `cscript -h:cscript`.

When `cscript.exe` is used, `-nologo` is recommended.
* `[HKCR\JSFile\Shell\Open2\Command]\@ = "C:\Windows\System32\CScript.exe `**`-nologo`**` "%1" %*"`

When it helps
-------------

It's helpful when you need an advanced calculator or something that you can't download or install the executables, and in case you can write a program with ECMAScript.

Attention
---------

This is a WSH JScript console, not a JavaScript console. It means,

* There is no [HTML DOM](http://www.w3schools.com/js/js_htmldom.asp).
* Syntactic & built-in language features are [restricted to ECMAScript Edition 3](https://msdn.microsoft.com/ko-kr/library/hbxc2t98%28vs.85%29.aspx).
* You can use [COM](http://en.wikipedia.org/wiki/Component_Object_Model) framework.
