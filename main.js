
function btnclick ()  {
    // assign values 
    let xvals = document.getElementById('xvalues').value.split(" ").map(Number);
    let yvals = document.getElementById('yvalues').value.split(" ").map(Number);
    let xval = document.getElementById('xvalue').value;
    let n = xvals.length
    // sum of values 
    let xsum = xvals.reduce(function (a, b) { return a + b; }, 0);
    let ysum = yvals.reduce(function (a, b) { return a + b; }, 0);
    // functions
    // sqaured function
    function sqaured(num) {
        return num ** 2;
    }
    // multiply x and y (not a function but...)
    const mularrays = (xarr, yarr) =>{
        return xarr.map((e, index) => e * yarr[index]);
    }
    // calling of functions
    // call for calculating squared
    let x_squared = xvals.map(sqaured);
    let y_squared = yvals.map(sqaured);
    // call for x multiplied by y (together with their sum)
    let x_mul_y = mularrays(xvals, yvals);
    let sumx_mul_y = x_mul_y.reduce(function (a, b) { return a + b; }, 0);
    // sum of squared values
    let x_squared_total = x_squared.reduce(function (a, b) { return a + b; }, 0);
    let y_squared_total = y_squared.reduce(function (a, b) { return a + b; }, 0);
    const a = ((ysum * x_squared_total - (xsum * sumx_mul_y))/((n * x_squared_total) - Math.pow(xsum, 2)));
    const b = (((n * sumx_mul_y) - (xsum * ysum))/((n * x_squared_total) - Math.pow(xsum, 2)));
    const y = b * xval + a;

    const time = setTimeout(createTable, 5000);

    function createTable(tableData) {
        var table = document.createElement('table');
        var row = {};
        var cell = {};
      
        tableData.forEach(function(rowData) {
          row = table.insertRow(-1);
          rowData.forEach(function(cellData) {
            cell = row.insertCell();
            cell.textContent = cellData;
          });
        });
        document.body.appendChild(table);
    }

    const myTimeout = setTimeout(putdata, 3000);

    function putdata(){
        var tableData = [["X Values:", xvals], ["Y Values:", yvals], ["X Value:", xval], ["Sum of X:", xsum], ["Sum of Y:", ysum], ["X Squared:", x_squared], ["Y Squared:", y_squared], ["Sum X Squared:", x_squared_total], ["Sum Y Squared:", y_squared_total], ["X * Y:", x_mul_y], ["Sum X * Y:", sumx_mul_y], ["a", a], ["b", b], ["y", y]] 
        createTable(tableData);
      }
}