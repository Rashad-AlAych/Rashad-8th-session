fetch('https://rashadapp0.herokuapp.com/services')
  .then(response => response.json())
  .then(json => {
          Selectdiv = document.getElementById('Maincontainer');
          console.log(json.Services)
          var originalcontent = `
            <div class="icon"><i class=[ICON]></i></div>
            <h4 class="title"><a href="">[Title]</a></h4>
            <p class="description">[Description]</p>
          </div>`

     json.Services.forEach(element => {
           var currentcontent = originalcontent;
           currentcontent = currentcontent.replace('[Title]', element.A)
           currentcontent = currentcontent.replace('[Description]', element.B)
           currentcontent = currentcontent.replace('[ICON]', element.C)
           var div = document.createElement('div');
           div.className = "col-lg-4 col-md-6 icon-box";
           div.innerHTML = currentcontent;
           Selectdiv.appendChild(div);
     })

    });
