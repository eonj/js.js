js.js
=====

A **very simple** [Microsoft WSH](http://en.wikipedia.org/wiki/Windows_Script_Host) based ECMAScript (aka JScript) console.

Requisite
---------

JScript files (`.js`) should run with `cscript.exe`. It means,
* `[HKCR\JSFile\Shell]\@ = "Open2"`. It can be achieved by running the command `cscript -h:cscript`.

When `cscript.exe` is used, `-nologo` is recommended.
* `[HKCR\JSFile\Shell\Open2\Command]\@ = "C:\Windows\System32\CScript.exe `**`-nologo`**` "%1" %*"`

How to use
----------

`> `**`js`**. So simple.
