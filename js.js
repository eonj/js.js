while (true) {
	WScript.StdOut.Write(":> ")
	try {
		var s = WScript.StdIn.ReadLine();
	} catch (e) {
		WScript.Echo("Read Error " + e.message);
		continue;
	}
	WScript.StdOut.Write("<: ")
	try {
		WScript.Echo(eval(s));
	} catch (e) {
		WScript.Echo("Eval Error " + e.message);
		continue;
	}
}
