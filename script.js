var chart;
var foxtailBgPositionX = 0;

google.load ('visualization', '1', { 'packages': [ 'corechart', 'gauge' ] });
google.setOnLoadCallback (init);

function init ()
{
	chart = new Chart ();
	
	setInterval (foxtailCycle, 100);
	
	/*$('#step1').submit
	(
		function (e)
		{
			e.preventDefault ();
			
			if (checkFields ('#step1'))
			{
				chart.data.addColumn ('string', $('#column0').val ());
				chart.data.addColumn ('number', $('#column1').val ());
				
				$('#step1').addClass ('disabled');
				$('#step2').removeClass ('disabled');
			}
		}
	);*/
	$('#step1').submit
	(
		function (e)
		{
			e.preventDefault ();
			
			chart.data.addColumn ('string');
			chart.data.addColumn ('number');
			
			if (checkFields ('#step1'))
			{
				$('#step1 .row').each
				(
					function (i)
					{
						var subject = $(this).find ('input.subject').val ();
						var value = parseFloat ($(this).find ('input.value').val ());
						var pair = [ subject, value ];
						
						chart.data.addRow (pair);
					}
				);
				
				$('#step1').addClass ('disabled');
				$('#step2').removeClass ('disabled');
			}
		}
	);
	$('#step1 #btnAddField').click
	(
		function ()
		{
			$(this).before
			(
				'<fieldset class="row">'
					+ '<table>'
						+ '<tr>'
							+ '<td><label>Subject: </label></td>'
							+ '<td><input type="text" class="subject" required /></td>'
						+ '</tr>'
						+ '<tr>'
							+ '<td><label>Value: </label></td>'
							+ '<td><input type="number" class="value" required /></td>'
						+ '</tr>'
					+ '</table>'
				+ '</fieldset>'
			);
		}
	);
	$('#step2').submit
	(
		function (e)
		{
			e.preventDefault ();
			
			if (checkFields ('#step2'))
			{
				chart.type = $('#step2 select').val ();
				
				$('#step2').addClass ('disabled');
				$('#step3').removeClass ('disabled');
				$('#background').animate ( { 'opacity': 0.32 }, 400);
				
				chart.put ('chart');
			}
		}
	);
}

function checkFields (form)
{
	var ok = true;
	
	$(form + ' input, ' + form + ' select').each
	(
		function (i)
		{
			if (($(this).attr ('required') == 'required') && ($(this).val () == ''))
			{
				ok = false;
				$(this).addClass ('dontForgetThis');
			}
			else
			{
				$(this).removeClass ('dontForgetThis');
			}
		}
	);
	
	return ok;
}

function foxtailCycle ()
{
	var foxtail = document.getElementById ('foxtail');
	foxtailBgPositionX += 156;
	if (foxtailBgPositionX >= 7020)
		foxtailBgPositionX = 0;
	
	foxtail.style.backgroundPosition = foxtailBgPositionX + 'px 0px';
}

function enableButton (element)
{
	var button = document.getElementById (element);
	button.className = replaceAll (button.className, 'buttonDisabled', '');
}

function enableButtons (elements)
{
	var buttons = document.getElementsByClassName (elements);
	for (var i = 0; i < buttons.length; i++)
		buttons[i].className = replaceAll (buttons[i].className, 'buttonDisabled', '');
}

function disableButton (element)
{
	var button = document.getElementById (element);
	button.className  += ' buttonDisabled';
}

function disableButtons (elements)
{
	var buttons = document.getElementsByClassName (elements);
	for (var i = 0; i < buttons.length; i++)
		buttons[i].className += ' buttonDisabled';
}

function replaceAll (str, search, replace)
{
	while (str.indexOf (search) !== -1)
		str = str.replace (search, replace);
	
	return str;
}
