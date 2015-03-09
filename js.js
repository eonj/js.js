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
		WScript.Echo(eval(NHqK6i6xWR$pT25xXVV6K2xzFEOcDGHTz7lwJy_Y9ymbIjETcWxli$sPxAuJ_uS));
	} catch (e) {
		WScript.Echo("Eval Error " + e.message);
		continue;
	}
}
