function Log ()
{
	this._log = '';
	this._logElement = void 0;
	
	this.log = function (message)
	{
		this._log += message + '<br />';
		
		if (this._logElement !== void 0)
			this.updateLog ();
	}
	
	this.setLogElement = function (element)
	{
		this._logElement = element;
		this.updateLog ();
	}
	
	this.clearLog = function ()
	{
		this._log = '';
		this.updateLog ();
	}
	
	this.updateLog = function ()
	{
		document.getElementById (this._logElement).innerHTML = this._log;
	}
}