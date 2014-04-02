function Chart ()
{
	try
	{
		this.data = new google.visualization.DataTable ();
		this.log = new Log ();
		this.type = 'pie';
	
		this.put = function (element)
		{
			var result = void 0;
		
			switch (this.type)
			{
				case 'column':
					result = new google.visualization.ColumnChart (document.getElementById (element));
					break;
				case 'bar':
					result = new google.visualization.BarChart (document.getElementById (element));
					break;
				case 'gauge':
					result = new google.visualization.Gauge (document.getElementById (element));
					break;
				case 'line':
					result = new google.visualization.LineChart (document.getElementById (element));
					break;
				case 'area':
					result = new google.visualization.AreaChart (document.getElementById (element));
					break;
				default:
					result = new google.visualization.PieChart (document.getElementById (element));
					break;
			}
			var options = { 'width': window.innerWidth, 'height': window.innerHeight, 'backgroundColor': 'transparent', 'is3D': (this.type == '3dPie' ? true : false) };
		
			result.draw (this.data, options);
		}
	}
	catch (ex)
	{
		alert ('Failed to load the Google Charts API. Please make sure you have an active internet connection.');
	}
}
