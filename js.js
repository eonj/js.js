while (true) {
	var s;
	WScript.StdOut.Write(":> ");
	try {
		s = WScript.StdIn.ReadLine();
	} catch (e) {
		WScript.Echo("Read Error " + e.message);
		continue;
	}
	WScript.StdOut.Write("<: ");
	try {
		WScript.Echo(eval(s));
	} catch (e) {
		WScript.Echo("Eval Error " + e.message);
		continue;
	}
}
