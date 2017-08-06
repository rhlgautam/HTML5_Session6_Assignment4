//Create a JavaScript logic to dynamically display the number of table row and column.

// Function takes table id as parameter and display rows count and columns count.
function getRowsAndColumnsCount(TableId){
	var table= document.getElementById(TableId);
	var rowsCount= table.rows.length;
	var columnCount= table.rows[0].cells.length;

	var pResult= document.getElementById("tableCount");
	pResult.innerHTML="Table has "+ rowsCount +" rows and "+ columnCount +" columns";
	pResult.style.display="block";
}
