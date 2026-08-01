document.addEventListener( 'DOMContentLoaded', function() {
	const input = document.querySelector( 'input[name="startEndDates"]' );
	if ( input ) {
		new Litepicker( {
			 element: input
			,singleMode: false
			,format: 'DD-MMM-YYYY'
			,delimiter: ' - '
			,firstDay: 1
			,allowRepick: true
		} );
	}
} );
