js.js
=====

A **very simple** [Microsoft WSH](http://en.wikipedia.org/wiki/Windows_Script_Host) based ECMAScript (aka JScript [\[MSDN\]](https://msdn.microsoft.com/library/hbxc2t98%28vs.85%29.aspx) [\[WP\]](http://en.wikipedia.org/wiki/JScript)) console.

It is so simple that you don't even need to make a clone to your local environment. Take a read, memorize, and write your own when you need it.

Why and When
------------

Because the powerful script host engine, WSH, does not provide an interactive console. **`js.js`** uses `eval` to translate the power of WSH to an interactive console.

You can do instantly; e.g.
* make an advanced calculator, using `Math` object and operators;
* process text file, using `RegExp` object;
* surf the Web;
* or anything using ECMAScript and the internal of Windows operating system plus COM applications, using `WScript` object and COM objects via `WScript.CreateObject`.

It's especially helpful when you can't download/install/build/run executables.

How to use
----------

`> `**`js`**. So easy!

If you have no administrative rights, don't care about the requisite below. Type `> cscript -nologo `**`js.js`** instead.

Requisite
---------

JScript files (`.js`) should run with `cscript.exe`. It means,
* `[HKCR\JSFile\Shell]\@ = "Open2"`. It can be achieved by running the command `cscript -h:cscript`.

When `cscript.exe` is used, `-nologo` is recommended.
* `[HKCR\JSFile\Shell\Open2\Command]\@ = "C:\Windows\System32\CScript.exe `**`-nologo`**` "%1" %*"`

Attention
---------

This is a WSH JScript console, not a JavaScript console. It means,

* There is no [HTML DOM](http://www.w3schools.com/js/js_htmldom.asp).
* Syntactic & built-in language features are [restricted to ECMAScript Edition 3](https://msdn.microsoft.com/ko-kr/library/hbxc2t98%28vs.85%29.aspx).
* You can use [COM](http://en.wikipedia.org/wiki/Component_Object_Model) framework.
