// Select color input
// Select size input

// When size is submitted by the user, call makeGrid()

const pixel = {
  // initialization
  init: function () {
    document.getElementById('sizePicker').addEventListener('submit', pixel.draw, false);
  },
  // building grid
  draw: function makeGrid(e) { 
    e.preventDefault();
    const table = document.querySelector('#pixelCanvas');
    const rows = document.querySelector('#inputHeight').value;
    const cells = document.querySelector('#inputWidth').value;
    const button = document.getElementById('sizePicker');

    if (rows > 30 || cells > 40) {
      window.alert(`Attention\nThe maximum value for the Grid Height is 40 and for Grid Width is 60.\nPlease check the reported values.`);
    } else {
      //rows
      for (let i = 1; i <= rows; i++) {
        let rowsHtml = document.createElement('tr');
        //cells
        for (let i = 1; i <= cells; i++) {
          cellsHtml = document.createElement('td');
          //add fn in click
          cellsHtml.addEventListener('click', function () {
            pixel.paint(this);
          })
          rowsHtml.appendChild(cellsHtml);
        }
        table.appendChild(rowsHtml);
      }
      //new fn in submit
      button.addEventListener('click', pixel.clear);
    }
  },
  // get color pick
  color: function () {
    return document.getElementById('colorPicker').value;
  },
  // painting cell
  paint: function (e) {
    e.style.backgroundColor = pixel.color();
  },
  // clear grid
  clear: function () { 
    const rows = document.querySelectorAll('#pixelCanvas tr');
    rows.forEach(function (row) {
      row.remove();
    })
  }
}

document.addEventListener('DOMContentLoaded', pixel.init, false);
