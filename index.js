fetch('https://rashadapp0.herokuapp.com/data')
  .then(response => response.json())
  .then(json => {
          SelectStudent = document.getElementById('Students');
      json.Sheet1.forEach(element => {
          var option = document.createElement('option');
          option.innerHTML = element.A;
          SelectStudent.appendChild(option);

      });
  })
