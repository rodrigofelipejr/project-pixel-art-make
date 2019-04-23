// Select color input
// Select size input

// When size is submitted by the user, call makeGrid()

const pixel = {
  // initialization
  init: function () {
    document.getElementById('sizePicker').addEventListener('submit', pixel.draw_board, false);
  },
  // building grid
  draw_board: function makeGrid(e) {
    e.preventDefault();
    const table = document.querySelector('#pixelCanvas');
    const rows = document.querySelector('#inputHeight').value;
    const cells = document.querySelector('#inputWidth').value;

    if (rows > 30 || cells > 40) {
      window.alert(`Attention\nThe maximum value for the Grid Height is 40 and for Grid Width is 60.\nPlease check the reported values.`);
    } else {
      for (let i = 0; i <= rows; i++) {
        let rowsHtml = document.createElement('tr');

        for (let i = 0; i <= cells; i++) {
          cellsHtml = document.createElement('td');

          cellsHtml.addEventListener('click', function () {
            pixel.to_paint(this);
          })

          rowsHtml.appendChild(cellsHtml);
        }

        table.appendChild(rowsHtml);
      }
    }
  },
  // get color pick
  pick_color: function () {
    return document.getElementById('colorPicker').value;
  },
  // painting cell
  to_paint: function (e) { 
    e.style.backgroundColor = pixel.pick_color();
  }
}

document.addEventListener('DOMContentLoaded', pixel.init, false);
