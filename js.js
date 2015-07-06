(new Function( // reconstructed repl routine

(function($_$) { // lexical closure

return (function() { // internal repl routine

var $ToString$ = (function(o) {
	var result = "";
	if (o instanceof Array) {
		for (var i = 0; i < o.length; i++) {
			if (result.length) {
				result += ",";
			}
			result += $ToString$(o[i]);
		}
		result = "[" + result + "]";
	} else if (typeof o == "object") {
		for (var i in o) {
			if (result.length) {
				result += ",";
			}
			result += "\"" + i + "\":" + $ToString$(o[i]);
		}
		result = "{" + result + "}";
	} else if (typeof o == "string") {
		result = new String(o).replace(/\\/g, "\\\\").replace(/\"/g, "\\\"");
		result = "\"" + result + "\"";
	} else if (typeof o == "undefined") {
		result = "undefined";
	} else {
		result += "" + o;
	}
	return result;
});

while (true) {
	var $Line$;
	WScript.StdOut.Write(":> ");
	try {
		$Line$ = WScript.StdIn.ReadLine();
	} catch (e) {
		WScript.Echo("Read Error " + e.message);
		continue;
	}
	WScript.StdOut.Write("<: ");
	try {
		WScript.Echo($ToString$(eval($Line$)));
	} catch (e) {
		WScript.Echo("Eval Error " + e.message);
		continue;
	}
}

}) // end of internal repl routine
.toString()
.replace(/\$ToString\$/g, $_$())
.replace(/\$Line\$/g, $_$())
+ "()"
;

})( // invoking lexical closure with arguments

$_$ = (function() {
	var pool = "0123456789ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz_"
	var res = "$";
	while (res.length < 15)
		res += pool.charAt(Math.floor(Math.random() * 63));
	return res;
})

) // end of lexical closure

))(); // end of reconstructed repl routine, invoked here
