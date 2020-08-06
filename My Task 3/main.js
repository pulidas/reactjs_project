function showDataWithImages() {

        var oXHR = window.XMLHttpRequest ? new XMLHttpRequest() : new ActiveXObject('Microsoft.XMLHTTP');

        function reportStatus() {
            if (oXHR.readyState == 4)              
                showTheList(this.responseText);     
        }

        oXHR.onreadystatechange = reportStatus;
        oXHR.open("GET", "../../library/data-with-image.json", true);   
        oXHR.send();

        function showTheList(json) {
            var arrItems = [];
            arrItems = JSON.parse(json); 	

            var div = document.getElementById('birds');     
            div.innerHTML = '';

            for (i = 0; i <= arrItems.length - 1; i++) {
                
                var divLeft = document.createElement('div');
                divLeft.innerHTML = arrItems[i].Name;

                var img = document.createElement('img');    
                img.src = arrItems[i].Image;                
                var divRight = document.createElement('div');
                divRight.setAttribute('style', 'border-left: solid 1px #ddd;');
                divRight.appendChild(img);
                
                div.appendChild(divLeft);
                div.appendChild(divRight);

                
            }
        }
    }