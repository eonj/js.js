var FV0IEh__qo76togShNc4ExIPkaagButmM17zwtGKNmh7Wjf$7lyJl$g7WGFuC0L = (function(o) {
	var result = "";
	if (o instanceof Array) {
		for (var i = 0; i < o.length; i++) {
			if (result.length) {
				result += ",";
			}
			result += FV0IEh__qo76togShNc4ExIPkaagButmM17zwtGKNmh7Wjf$7lyJl$g7WGFuC0L(o[i]);
		}
		result = "[" + result + "]";
	} else if (typeof o == "object") {
		for (var i in o) {
			if (result.length) {
				result += ",";
			}
			result += "\"" + i + "\":" + FV0IEh__qo76togShNc4ExIPkaagButmM17zwtGKNmh7Wjf$7lyJl$g7WGFuC0L(o[i]);
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
	var NHqK6i6xWR$pT25xXVV6K2xzFEOcDGHTz7lwJy_Y9ymbIjETcWxli$sPxAuJ_uS;
	WScript.StdOut.Write(":> ");
	try {
		NHqK6i6xWR$pT25xXVV6K2xzFEOcDGHTz7lwJy_Y9ymbIjETcWxli$sPxAuJ_uS = WScript.StdIn.ReadLine();
	} catch (e) {
		WScript.Echo("Read Error " + e.message);
		continue;
	}
	WScript.StdOut.Write("<: ");
	try {
		WScript.Echo(FV0IEh__qo76togShNc4ExIPkaagButmM17zwtGKNmh7Wjf$7lyJl$g7WGFuC0L(eval(NHqK6i6xWR$pT25xXVV6K2xzFEOcDGHTz7lwJy_Y9ymbIjETcWxli$sPxAuJ_uS)));
	} catch (e) {
		WScript.Echo("Eval Error " + e.message);
		continue;
	}
}
