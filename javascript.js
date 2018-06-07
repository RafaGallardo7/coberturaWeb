/*
Copyright (c) 2015 Jaramillo Juan Carlos, Gallardo Rafael

        coberturaWerb is free software: you can redistribute it and/or modify
        it under the terms of the GNU General Public License as published by
        the Free Software Foundation, either version 3 of the License, or
        (at your option) any later version.
        
        coberturaWerb is distributed in the hope that it will be useful,
        but WITHOUT ANY WARRANTY; without even the implied warranty of
        MERCHANTABILITY or FITNESS FOR A PARTICULAR PURPOSE.  See the
        GNU General Public License for more details.
        
        You should have received a copy of the GNU General Public License
        along with coberturaWerb.  If not, see <http://www.gnu.org/licenses/>.*/

google.load("visualization", "0", {packages:["corechart"]});
    google.load('visualization', '1', {packages: ['corechart', 'line']});
                var map = null;
                var color;
                //Delta Horizontal
                var delta = 0.00090045;
                //Alfa Vertical
                var alfa = 0.000899322;
                var matAreas = [];
                //number of elements in file
                var cntData = 0;
                var datos;
                var lines;
                var cntAreas = 0;
                //pintar area
                var cuadrado = [];
                //Var for to create a lot of arrays read of file
                var idData = [];
                var hora = [];
                var fecha = [];
                var coord = [];
                var latitud = [];
                var longitud = [];
                var potFile = [];
                var cellId = [];
                var tegn = [];
                var operadora = [];
                var areaData = [];
                //areaDataX and areaDataY both represents location of respective area
                var areaDataX = [];
                var areaDataY = [];
                var cntInArea = 0;
                var potArea = 0;
                var potPromAreaTotal = 0;
                //Var for store potencias byr respective area
                var mPotPromAreaTotal = [];
                var mPotPromAreaClaro = [];
                var mPotPromAreaMovistar = [];
                var mPotPromAreaCnt = [];
                //Variables for	determine stats
                var cntVerde = 0;;
                var cntAmarillo = 0;;
                var cntRojo = 0;;
                var cntNegro = 0;
                var cntMedias = 0;
                var mediaa = 0;
                var varianza = 0;
                var desvEstandar = 0;
                //var for calculate medias of matrices of potencias of areas
                var mediaClaro = 0;
                var mediaMovistar = 0;
                var mediaCnt = 0;
                //var for calculate standar desviation
                var desvEClaro = 0;
                var desvEMovistar = 0;
                var desvECnt = 0;
                var file;
                //Draw Button on Map
                var elementUnivCuenca = document.createElement('div');
                var elementEstadist =  document.createElement('div');
                var elementClaro = document.createElement('div');
                var elementMovistar = document.createElement('div');
                var elementCnt = document.createElement('div');
                var elementShowHideAnt = document.createElement('div');
                var bandClaro = false;
                var bandMovistar = false;
                var bandCnt = false;
                var nAreaX;
                var nAreaY;
                var nArea;
                var numDatos=0;
                var numArea = null;
                var cntArea = 0;
                var cntMarkers = 0;
                var myLatlng = new google.maps.LatLng(-2.898237, -79.012500);
    //Vector for save potencias and number of potencias in same area
    var cntSameArea = [];
    var cntSameAreaClaro = [];
    var cntSameAreaMovistar = [];
    var cntSameAreaCnt = [];
    //Save all potencias de una misma area
    var potSameArea = [];
    var potSameAreaClaro = [];
    var potSameAreaMovistar = [];
    var potSameAreaCnt = [];
    //For search area
    var mPotPromArea = [];
    //Elemetnso HTML
    var lblShowSelectArea = null;
    var lblShowSelectPotProm = null;
    var lblShowSelectNumPots = null;
    var txtAreaPotMedidasSelect = null;
    //For find area
    var numAreaForFind = null;
    var txtNumAreaForFind = 0;
    //Draw puntero search area
    var areaBusqPuntero = null;
    //pos vERtical and horizontal deducidas
    //a partir del area buscada
    var posVareaFind = 0;
    var posHareaFind = 0;
    //Search Navegation (aariba, abajo, izq, derecha)
    var newPosVareaFindDerecha = null;
    var newPosHareaFindDerecha = null;
    var newPosVareaFindIzquierda = null;
    var newPosHareaFindIzquierda = null;
    var newPosVareaFindArriba = null;
    var newPosHareaFindArriba = null;
    var newPosVareaFindAbajo = null;
    var newPosHareaFindAbajo = null;
    //NAvegacion
    var bandIzquierda = false;
    var bandDerecha = false;
    var bandArriba = false;
    var bandAbajo = false;
    //Position puntero en todo momento
    var currentPosV = null;
    var currentPosH = null;
    //InfoWindow
    //For draw polygons
    var coordInfoWindow = [];
    var rectangCoords = [];
    var infoWindow = null;
    //vars for graph histogram
    var vFreqAbs = [];
    var minPotPromArea = 0;
    var deltaHistogram = 0;
    //banderas for search of areas
    var bandFindAreaClaro = false;
    var bandFindAreaMovistar = false;
    var bandFindAreaCnt = false;
    var imgRojo = null;
    //NEW VAR FOR NEW FORMATO OF INPUT FILE
    var posXnew = [];
    var posYnew = [];
    var potPromAreaNew = [];
    var potsPromSameAnew = [];
    var nOperadoraNew = [];
    var cntDatPotsSameA = 0;
    var DataIn = 0;
    var cntDattaa = 0;
    //VAR ALL ANTENAS CLARO
    var posAnt27Febrero = new google.maps.LatLng(-2.913,-79.00741667);
    var posAntIngCiviles = new google.maps.LatLng(-2.906361111,-79.00693611);
    var posAntHerrerias = new google.maps.LatLng(-2.911966667,-78.9952);
    var posAntPucarbamba = new google.maps.LatLng(-2.909111111,-78.99983333);
    var posAntLarga = new google.maps.LatLng(-2.904344444,-78.99999167);
    var posAntPCordoba = new google.maps.LatLng(-2.900086111,-79.0044);
    var posAntMallRioC = new google.maps.LatLng(-2.91955,-79.01605833);
    var posAntBajoTuri = new google.maps.LatLng(-2.919305556,-79.00980556);
    var posAntHitoCruz = new google.maps.LatLng(-2.930722222,-78.99758333);
    var posAntBaroja = new google.maps.LatLng(-2.912277778,-79.02449722);
    var posAnt10AgostoC = new google.maps.LatLng(-2.906905556,-79.020875);
    var posAntYanuncayC = new google.maps.LatLng(-2.917930556,-79.03397222);
    var posAntLasAntillas = new google.maps.LatLng(-2.90525,-79.03199444);
    var posAntPrimeroMayo = new google.maps.LatLng(-2.911130556,-79.01549167);
    var posAntArenalSur = new google.maps.LatLng(-2.900391667,-79.02905278);
    var posAntArenalOeste = new google.maps.LatLng(-2.899111111,-79.03213889);
    var posAntArenalNorte = new google.maps.LatLng(-2.895460,-79.026382);
    var posAntRemigioLike = new google.maps.LatLng(-2.904024, -79.012357);
    var posAntGloria = new google.maps.LatLng(-2.900283333,-79.01908333);
    var posAntConvencion = new google.maps.LatLng(-2.8924167,-79.01672222222223);
    var posAntOroVerdeC = new google.maps.LatLng(-2.8858056,-79.03166388888889);
    var posAntCebollarC = new google.maps.LatLng(-2.8875222,-79.01409444444444);
    var posAntMLamar = new google.maps.LatLng(-2.8953361,-79.00820277777778);
    var posAntSanBlasC = new google.maps.LatLng(-2.8989889,-78.99854722222223);
    var posAntPioBravo2 = new google.maps.LatLng(-2.8949972,-79.00004166666666);
    var posAntHVerdelomaN = new google.maps.LatLng(-2.8881667,-79.00294444444444);
    var posAntMiraflores = new google.maps.LatLng(-2.8844083,-79.00267777777778);
    var posAntAmericasNorte = new google.maps.LatLng(-2.8785444,-78.99580555555556);
    var posAntAereopuertoC = new google.maps.LatLng(-2.8883833,-78.98889166666667);
    var posAntGuapondeliC = new google.maps.LatLng(-2.8988056,-78.99016666666667);
    var posAntPCanaris = new google.maps.LatLng(-2.9026333,-78.98940277777778);
    var posAntTotoracochaC = new google.maps.LatLng(-2.8990444,-78.98170555555556);
    var posAntCdlaIngenieros = new google.maps.LatLng(-2.8930556,-78.96977777777778);
    var posAntHMendoza = new google.maps.LatLng(-2.8863306,-78.97739722222222);
    var posAntPIndustrial = new google.maps.LatLng(-2.876975,-78.9840138888889);
    var posAntMachangaraC = new google.maps.LatLng(-2.8876639,-78.96079722222223);
    var posAntSanPedro = new google.maps.LatLng(-2.877175,-79.02485555555556);
    var posAntUnionAlta = new google.maps.LatLng(-2.9146472,-79.05592222222222);
    var posAntBanosC = new google.maps.LatLng(-2.9249722,-79.06327777777777);
    var posAntSanJoaquin = new google.maps.LatLng(-2.8939139,-79.05394444444444);
    var posAntHercules = new google.maps.LatLng(-2.8634,-78.98790833333334);
    //VAR ALL ANTENAS MOVISTAR
    var posAntElVergel = new google.maps.LatLng(-2.9137806,-78.99501666666667);
    var posAnt10AgostoM = new google.maps.LatLng(-2.9114083,-79.00241944444444);
    var posAntPuentes = new google.maps.LatLng(-2.9158333,-79.01211111111111);
    var posAntQuintaLucrecia = new google.maps.LatLng(-2.91175,-79.01683333333334);
    var posAntSolano = new google.maps.LatLng(-2.9055639,-79.006725);
    var posAntBPichinchaSolano = new google.maps.LatLng(-2.9013611,-79.00552777777777);
    var posAntGonzaloCordero = new google.maps.LatLng(-2.9065306,-79.01353055555556);
    var posAntSucre = new google.maps.LatLng(-2.9033333,-79.01555833333333);
    var posAntMovilUEstatal = new google.maps.LatLng(-2.9014111,-79.01083333333334);
    var posAntLoja = new google.maps.LatLng(-2.9030667,-79.02184722222222);
    var posAntLopeDeVega = new google.maps.LatLng(-2.9144528,-79.02278333333334);
    var posAntYanuncayM = new google.maps.LatLng(-2.9165889,-79.03306111111111);
    var posAntViaBanos = new google.maps.LatLng(-2.9236694,-79.04053055555555);
    var posAntArenal = new google.maps.LatLng(-2.9003083,-79.02916944444445);
    var posAntOroVerdeM = new google.maps.LatLng(-2.8897806,-79.03005833333333);
    var posAntViaRacar = new google.maps.LatLng(-2.88,-79.02805527777778);
    var posAntElPunto = new google.maps.LatLng(-2.8892222,-79.02168333333333);
    var posAntMariscalLamar = new google.maps.LatLng(-2.89445,-79.00808055555555);
    var posAntCebollarM = new google.maps.LatLng(-2.8833361,-79.01667222222223);
    var posAntMovilMerc3Nov = new google.maps.LatLng(-2.8915306,-79.01139444444445);
    var posAntSanSebastian = new google.maps.LatLng(-2.8922472,-79.01945833333333);
    var posAntBellaVistaM = new google.maps.LatLng(-2.8848361,-79.00028333333333);
    var posAntGranColombia = new google.maps.LatLng(-2.8961278,-79.00335555555556);
    var posAntMovilLasAmericas = new google.maps.LatLng(-2.8858583,-79.00314166666666);
    var posAntHVerdeloma = new google.maps.LatLng(-2.8878,-79.00428055555555);
    var posAntCuencaCentral = new google.maps.LatLng(-2.8983972,-79.00474166666666);
    var posAntFedArtesanos = new google.maps.LatLng(-2.89335,-79.00222222222222);
    var posAntMovilHuaynacapac = new google.maps.LatLng(-2.9034194,-78.99878055555556);
    var posAntColegValse = new google.maps.LatLng(-2.9028028,-78.99739166666667);
    var posAntSanBlan = new google.maps.LatLng(-2.9058472,-78.99741944444445);
    var posAntCasaFranklin = new google.maps.LatLng(-2.9070306,-78.99355833333334);
    var posAntCuencaNorte = new google.maps.LatLng(-2.8897639,-78.990575);
    var posAntTuri = new google.maps.LatLng(-2.9297861,-78.99751944444445);
    var posAntParaiso = new google.maps.LatLng(-2.9063611,-78.98758333333333);
    var posAntMonay = new google.maps.LatLng(-2.9002917,-78.98238333333333);
    var posAntMonayShopping = new google.maps.LatLng(-2.8977222,-78.97847222222222);
    var posAntTotoracochaM = new google.maps.LatLng(-2.8908528,-78.98064166666667);
    var posAntParqueTelefo = new google.maps.LatLng(-2.8987528,-78.98778055555556);
    var posAntHuaynacapacM = new google.maps.LatLng(-2.8965028,-78.99891944444444);
    var posAntAltiplano = new google.maps.LatLng(-2.8923083,-78.97002222222223);
    var posAntPolitecSaleciana = new google.maps.LatLng(-2.8827944,-78.98778055555556);
    var posAntParqueIndustrialM = new google.maps.LatLng(-2.8839389,-78.96890555555555);
    var posAntRioAmarillo = new google.maps.LatLng(-2.8797278,-79.05002499999999);
    //VAR ALL ANTENAS CNT
    var posAntBanosT = new google.maps.LatLng(-2.9145,-79.05594444444444);
    var posAntYanuncayT1 = new google.maps.LatLng(-2.9166528,-79.03276111111111);
    var posAntEstadio = new google.maps.LatLng(-2.9051389,-79.01344444444445);
    var posAntBatan = new google.maps.LatLng(-2.90085,-79.02833333333334);
    var posAntBatan1 = new google.maps.LatLng(-2.9004,-79.0299111111111);
    var posAntOroVerdeT = new google.maps.LatLng(-2.8897222,-79.03);
    var posAntRamirezDavalos = new google.maps.LatLng(-2.8948611,-79.01363888888889);
    var posAntHuaynacapacT = new google.maps.LatLng(-2.9058389,-78.99723888888889);
    var posAntBellaVistaT = new google.maps.LatLng(-2.8898694,-79.0035);
    var posAntAereopuertoT = new google.maps.LatLng(-2.8952722,-78.98646111111111);
    var posAntTerminalTerrestre = new google.maps.LatLng(-2.8911694,-78.99395);
    var posAntRedondel = new google.maps.LatLng(-2.8955083,-78.9957111111111);
    var posAntParqueIndustrialT = new google.maps.LatLng(-2.88355,-78.96931944444445);
    var posAntTarqui = new google.maps.LatLng(-2.8944306,-79.00816944444445);
    var posAntCentro = new google.maps.LatLng(-2.8985,-79.00469444444444);
    var posAntRemigio = new google.maps.LatLng(-2.9021306,-79.02285277777777);
    var posAntPolitecnica = new google.maps.LatLng(-2.8843889,-78.98747222222222);
    var posAntRepHitoCruz = new google.maps.LatLng(-2.9301417,-78.99719444444445);
    var posAllAntenasClaro = [posAnt27Febrero,posAntIngCiviles,posAntHerrerias,posAntPucarbamba,posAntLarga,posAntPCordoba,posAntMallRioC,posAntBajoTuri,posAntHitoCruz,posAntBaroja,posAnt10AgostoC,posAntYanuncayC,posAntLasAntillas,posAntPrimeroMayo,posAntArenalSur,posAntArenalOeste,posAntArenalNorte,posAntRemigioLike,posAntGloria,posAntConvencion,posAntOroVerdeC,posAntCebollarC,posAntMLamar,posAntSanBlasC,posAntPioBravo2,posAntHVerdelomaN,posAntMiraflores,posAntAmericasNorte,posAntAereopuertoC,posAntGuapondeliC,posAntPCanaris,posAntTotoracochaC,posAntCdlaIngenieros,posAntHMendoza,posAntPIndustrial,posAntMachangaraC,posAntSanPedro,posAntUnionAlta,posAntBanosC,posAntSanJoaquin,posAntHercules];
    var posAllAntenasMovistar = [posAntElVergel,posAnt10AgostoM,posAntPuentes,posAntQuintaLucrecia,posAntSolano,posAntBPichinchaSolano,posAntGonzaloCordero,posAntSucre,posAntMovilUEstatal,posAntLoja,posAntLopeDeVega,posAntYanuncayM,posAntViaBanos,posAntArenal,posAntOroVerdeM,posAntViaRacar,posAntElPunto,posAntMariscalLamar,posAntCebollarM,posAntMovilMerc3Nov,posAntSanSebastian,posAntBellaVistaM,posAntGranColombia,posAntMovilLasAmericas,posAntHVerdeloma,posAntCuencaCentral,posAntFedArtesanos,posAntMovilHuaynacapac,posAntColegValse,posAntSanBlan,posAntCasaFranklin,posAntCuencaNorte,posAntTuri,posAntParaiso,posAntMonay,posAntMonayShopping,posAntTotoracochaM,posAntParqueTelefo,posAntHuaynacapacM,posAntAltiplano,posAntPolitecSaleciana,posAntParqueIndustrialM,posAntRioAmarillo];
    var posAllAntenasCnt= [posAntBanosT,posAntYanuncayT1,posAntEstadio,posAntBatan,posAntBatan1,posAntOroVerdeT,posAntRamirezDavalos,posAntHuaynacapacT,posAntBellaVistaT,posAntAereopuertoT,posAntTerminalTerrestre,posAntRedondel,posAntParqueIndustrialT,posAntTarqui,posAntCentro,posAntRemigio,posAntPolitecnica,posAntRepHitoCruz];
    //VAR ALL ANTENAS CLARO
    var markerAntena;
    var markersAntenasClaro = [];
    var markersAntenasMovistar = [];
    var markersAntenasCnt = [];
    var bandShowAntenas = false;
    var imgColoresBarLatDerecha = {url: 'http://4.bp.blogspot.com/-XbQx10J6TdQ/VYmGsjU7p_I/AAAAAAAABWQ/oWcIfzr8uEU/s1600/colores.png'};
                                   //Function initialize on program
                                   function initialize() {
                                   numAreaForFind = document.getElementById('txtFindArea');
                                   imgRojo =  {url: 'https://qelwig-ch3302.files.1drv.com/y2psSHsYw6DD4FAGdj2lkiKS7uV_pog1LE0ybwK6EGXOTb2xe6qmcTqLr-FqI4QUiFSsomM48rWvn-Qd1pGnnI-q3rTzZYrzEwTg4bLvW2CDACLw6d2giSzcjaCU5gv2vXgUJRtzYHuIVNBhhJgPwnxnQ/ro20.png'};
                                   var mapOptions = {
                                   zoom: 13,
                                   center: myLatlng,
                                   mapTypeId:google.maps.MapTypeId.ROADMAP
                                  };
    map=new google.maps.Map(document.getElementById("googleMap"),mapOptions);
    proccessData();
    createButtons();
    }  
    google.maps.event.addDomListener(window, 'load', initialize);
  
          //function cuando se presiona el boton Buscar Area
        function buscarArea () {
          map.setZoom(13);
          //Reset all variables for animation of movement of search area
          posVareaFind = 0;
          posHareaFind = 0;
          newPosVareaFindDerecha = 0;
          newPosHareaFindDerecha = 0;
          newPosVareaFindIzquierda = 0;
          newPosHareaFindIzquierda = 0;
          newPosVareaFindArriba = 0;
          newPosHareaFindArriba = 0;
          newPosVareaFindAbajo = 0;
          newPosHareaFindAbajo = 0;
          currentPosV = 0;
          currentPosH = 0;
          txtNumAreaForFind = numAreaForFind.value;
          //close infoWindow
          infoWindow.close();
          var posVaux = 0;
          //To get posV and posH of the Area buscada
          var numAreaForFindAux = txtNumAreaForFind/120;
          posVareaFind = Math.ceil(numAreaForFindAux);
          posVaux = Math.ceil(numAreaForFindAux) - 1;
          posHareaFind = txtNumAreaForFind - posVaux*120;  
          //Load values of current positions
          currentPosV = posVareaFind;
          currentPosH = posHareaFind;
          //Load variables with de new condition for the position of the puntero on measured areas
          //For determine the operadora over which work
          //For fill of data the html elements
          if (bandFindAreaClaro == true) {
            //Completa el Div Resultado o Detalles
            fillHtmlElements(mPotPromAreaClaro, cntSameAreaClaro, potSameAreaClaro);
            //Draw a marker on Area searched
            drawAreaSearched(currentPosV, currentPosH);
          } else if (bandFindAreaMovistar == true) {
            //Completa el Div Resultado o Detalles
            fillHtmlElements(mPotPromAreaMovistar, cntSameAreaMovistar, potSameAreaMovistar);
            //Draw a marker on Area searched
            drawAreaSearched(currentPosV, currentPosH);
          } else if (bandFindAreaCnt == true) {
            //Completa el Div Resultado o Detalles
            fillHtmlElements(mPotPromAreaCnt, cntSameAreaCnt, potSameAreaCnt);
            //Draw a marker on Area searched
            drawAreaSearched(currentPosV, currentPosH);
          } 
          //Completa el Div Resultado o Detalles
          function fillHtmlElements (mPotPromArea, cntSameArea, potSameArea) {
            lblShowSelectArea.innerHTML = txtNumAreaForFind;
            mPotPromArea[posVareaFind][posHareaFind] = toFixed(mPotPromArea[posVareaFind][posHareaFind], 2);
            lblShowSelectPotProm.innerHTML = mPotPromArea[posVareaFind][posHareaFind] +" dB";
            lblShowSelectNumPots.innerHTML = cntSameArea[posVareaFind][posHareaFind];
            txtAreaPotMedidasSelect.innerHTML = potSameArea[posVareaFind][posHareaFind];
          }
        }
        function drawAreaSearched (posVe, posHo) {
          if (areaBusqPuntero != null) {
            cleanPuntero();
          } 
          //Draw a polygon azul sobre el area buscada
          areaBusqPuntero = new google.maps.Polygon({
            paths: rectangCoords[posVe][posHo],
            strokeColor: '#0000FF',
            strokeOpacity: 1,
            strokeWeight: 3,
            fillColor: 'transparent',
            fillOpacity: 0.5
          });
          areaBusqPuntero.setMap(map);
        }
        //<![CDATA[
        //function called when buttons of navegation are pushed
        //Rellena el Div Resultado o Detalles
        function fillHtmlElementsNavegation (mPotPromArea, cntSameArea, potSameArea, posV, posH) {
          var index = (posV-1)*120 + posH;
          //SetValue txtFindArea
          numAreaForFind.value = index;
          lblShowSelectArea.innerHTML = index; 
          mPotPromArea[posV][posH] = toFixed(mPotPromArea[posV][posH], 3);
          lblShowSelectPotProm.innerHTML = mPotPromArea[posV][posH]+" dB";
          lblShowSelectNumPots.innerHTML = cntSameArea[posV][posH];
          txtAreaPotMedidasSelect.innerHTML = potSameArea[posV][posH];
        }
        //Cut decimals of largee Values
        function toFixed( number, precision ) {
          var multiplier = Math.pow( 10, precision );
          return Math.round( number * multiplier ) / multiplier;
        }
        //Se encarga de rellenar el campo detalles al presionar los botones correspondientes para cada operadora al 
        //presionar los botones de navegacion (arriba, abajo, izq, derecha).
        function askForOperadora () {
          //For determine the operadora over which work
          //For fill of data the html elements
          if (bandFindAreaClaro == true) {
            //Completa el Div Resultado o Detalles
            fillHtmlElementsNavegation(mPotPromAreaClaro, cntSameAreaClaro, potSameAreaClaro, currentPosV, currentPosH);
            //Draw a marker on Area searched
          } else if (bandFindAreaMovistar == true) {
            //Completa el Div Resultado o Detalles
            fillHtmlElementsNavegation(mPotPromAreaMovistar, cntSameAreaMovistar, potSameAreaMovistar, currentPosV, currentPosH);
          } else if (bandFindAreaCnt == true) {
            //Completa el Div Resultado o Detalles
            fillHtmlElementsNavegation(mPotPromAreaCnt, cntSameAreaCnt, potSameAreaCnt, currentPosV, currentPosH);
          } 
        }	
        function moveIzquierda() {
          cleanPuntero();
          //update values of last position
          currentPosV = currentPosV;
          currentPosH = currentPosH-1;
          //reDraw for new area
          drawAreaSearched(currentPosV, currentPosH);
          //Detalles for cada operadora
          askForOperadora();	
        }
        function moveDerecha() {
          cleanPuntero();
          //update values of last position
          currentPosV = currentPosV;
          currentPosH = currentPosH+1;
          //reDraw for new area
          drawAreaSearched(currentPosV, currentPosH);
          //Detalles for cada operadora
          askForOperadora();
        }
        function moveArriba() {
          cleanPuntero();
          //update values of last position
          currentPosV = currentPosV-1;
          currentPosH = currentPosH;
          //reDraw for new area
          drawAreaSearched(currentPosV, currentPosH);
          //Detalles for cada operadora
          askForOperadora();
        }
        function moveAbajo() {
          cleanPuntero();
          //update values of last position
          currentPosV = currentPosV+1;
          currentPosH = currentPosH;
          //reDraw for new area
          drawAreaSearched(currentPosV, currentPosH);
          //Detalles for cada operadora
          askForOperadora();
        }
        //BOrrar puntero de area buscada
        function cleanPuntero () {
          areaBusqPuntero.setVisible(false);
        }
        //Function that load all data from file to vector on the program
        //cntData couter for all data from file
        //latitud[] all latitudes from file
        //longitud[] all longitudes from file
        //potFile[] all potencias from file
        //
        //
        //getNumArea() function to determinate in which area is some data from file
        //areaDataX, areaDataY positions (numer of area) return from getNumArea
        //function to create matrices of pot prom for each operadora (mPotPromAreaClaro, mPotPromAreaMovistar, mPotPromAreaCnt)
        function proccessData () {
          var cntDat = 0;
          for (var i=0; i<=txtFile.length-2; i=i+5) {
            cntData = cntData + 1;
            //get number of area for lat and long respective nAreaX and nAreaY
            //getNumArea(latitud[cntData], longitud[cntData]);
            //areaDataX and areaDataY both represents location of respective area
            //Load New Variables
            posXnew[cntData-1] = txtFile[i];
            posYnew[cntData-1] = txtFile[i+1];
            potPromAreaNew[cntData-1] = txtFile[i+2];
            potsPromSameAnew[cntData-1] = txtFile[i+3];
            nOperadoraNew[cntData-1] = txtFile[i+4];
            areaDataX[cntData-1] = posXnew[cntData-1];
            areaDataY[cntData-1] = posYnew[cntData-1];
          }
          //Load all matrices with datas (Potencia Promedio all mesaured areas). For all operadoras
          manageData(mPotPromAreaClaro, "Claro", cntSameAreaClaro, potSameAreaClaro);
          manageData(mPotPromAreaMovistar, "Movistar", cntSameAreaMovistar, potSameAreaMovistar);
          manageData(mPotPromAreaCnt, "CNT", cntSameAreaCnt, potSameAreaCnt);
        }		
        //Final Method for Draw All Areas on the map
        //latA, lngA, latB, lngB, latC, lngC, latD, lngD --> variables tha determine the perimeter for each area
        //rectangCoords all coord of the areas
        //cntAreas couter that determine the number of drawn areas
        //cuadrado[] vector that contains all drawn areas
        function draw0Area (matPotPromArea, cntSameArea, potSameArea) {
          //Make reference to label creates in html code
          lblShowSelectArea = document.getElementById('lblShowAreaSelect');
          lblShowSelectPotProm = document.getElementById('lblShowPotPromSelect');
          lblShowSelectNumPots = document.getElementById('lblShowNumPotsSelect');
          txtAreaPotMedidasSelect = document.getElementById('txtAreaPotMedidas');
          for (var i=1; i<=60; i++) {
            coordInfoWindow[i] = [];
            rectangCoords[i] = [];
            for (var j=1; j<=120; j++) {
              //Call method getColour which return a color depending of the potencia was sended
              getColour(matPotPromArea[i][j]);
              var posV = i;
              var posH = j;
              //Var for rectangCoord	
              var latA = -2.8725318-posV*alfa;
              var lngA = -79.065116+posH*delta;
              var latB = -2.8725318-posV*alfa;
              var lngB = -79.065116+(posH+1)*delta;
              var latC = -2.8725318-(posV+1)*alfa;
              var lngC = -79.065116+(posH+1)*delta;
              var latD = -2.8725318-(posV+1)*alfa;
              var lngD = -79.065116+posH*delta;
              //Cnt is used for recovery porperties of area when user make click on area in the map
              cntAreas = cntAreas + 1;
              // Define the LatLng coordinates for the polygon's path.
              rectangCoords[i][j] = [
                new google.maps.LatLng(latA, lngA),
                new google.maps.LatLng(latB, lngB),
                new google.maps.LatLng(latC, lngC),
                new google.maps.LatLng(latD, lngD)
              ];
              var latMedia = (latA+latC)/2;
              var lngMedia = (lngA+lngC)/2;
              //Var for obtener position of area select
              coordInfoWindow[i][j] = new google.maps.LatLng(latMedia, lngMedia);
              //create infoWindow para agregar detalles en el mapa al presionar una area
              infoWindow = new google.maps.InfoWindow();
              // Construct the polygon.
              //matPotPromArea[][] contain the pot prom of areas medidas
              //cntSameArea[][] cuenta cuantas potencias se han medida dentro de cada area
              //potSameArea[][][] guarda cada una de las potencias medidas detro de cada area
              cuadrado[cntAreas] = new google.maps.Polygon({
                paths: rectangCoords[i][j],
                strokeColor: color,
                strokeOpacity: 0.5,
                strokeWeight: 0,
                fillColor: color,
                fillOpacity: 0.5,
                index: cntAreas,
                potProm: matPotPromArea[i][j],
                numPotMed: cntSameArea[i][j],
                potsMedidas: potSameArea[i][j],
                coordInfoWind: coordInfoWindow[i][j],
                map, map
              });
                cuadrado[cntAreas].setMap(map);
                //}
                //reset variable foor doesn't keed the last value.
                color = null;
                // Creating InfoWindow object
                //Event when click in any polygon (area)
                //index id del area seleccionada
                //potProm del area seleccionada
                //numPotMed dentro de una misma area select
                //potsMedidas All potencias medidas dentro del area select
                google.maps.event.addListener(cuadrado[cntAreas], 'click', function () {
                var potProm = this.potProm;
                //BORRADO
                potProm = toFixed(potProm, 2);
                lblShowSelectArea.innerHTML = this.index;
                lblShowSelectPotProm.innerHTML = potProm+' dB';
                lblShowSelectNumPots.innerHTML = this.numPotMed;
                txtAreaPotMedidasSelect.innerHTML = this.potsMedidas;
                //SetValue txtFindArea
                numAreaForFind.value = this.index;
                //Add features to infoWindow on click area
                var content1 = "<b>Potencias</b>: "+this.potsMedidas+" dB";
                var position1 = this.coordInfoWind;
                infoWindow.setContent(content1);
                infoWindow.setPosition(position1);
                infoWindow.open(map, cuadrado[cntAreas]);
              });
              }
              }
                //Reset variable of 7200 areas	        
                cntAreas = 0;
              }
                //This function allows recorrer the read file and create the respectives vectors.
                //matPotPromArea[][] save Potencia Prom in only measured area
                //cntSameArea[][] save number of measured potencias for each area
                //potSameArea[][][] save all potencias medidas de cada area
                //cntInArea --> saber cuantas mediciones dentro d la misma area
                function manageData (matPotPromArea, nOperadora, cntSameArea, potSameArea) {
                var cntDataInArea = 0;
                var potSameArea2D = [];
                //This function allow us to create a matriz (mPotPromArea[][]) of average potencia for all areas.
                getAllPotPromArea(matPotPromArea, nOperadora);
                //}
                //Allows ur to create a matriz (mPotPromArea[][]) of average of potencias for all areas.
                function getAllPotPromArea (matPotPromArea, nOperadora) {
                for (var i=1; i<=60; i++) {
                matPotPromArea[i] = [];
                //Create matrices of data
                cntSameArea[i] = [];
                potSameArea[i] = [];
                potSameArea2D[i] = [];
                for (var j=1; j<=120; j++) {
                potSameArea[i][j] = [];
                //This function allows to get an average of the coordinates that belong to the same area.
                var posV = i;
                var posH = j;
                for (var t=0; t<cntData+1; t++) {
                if (areaDataX[t] == posV && areaDataY[t] == posH && nOperadoraNew[t] == nOperadora) {
                cntDataInArea = 0;
                matPotPromArea[i][j] = potPromAreaNew[t];
                potSameArea2D[i][j] = potsPromSameAnew[t];				
                getNumPotsSameA(i,j,potSameArea);
                cntSameArea[i][j] = cntDatPotsSameA;
                //potSameArea[][][] save all potencias medidas de cada area
                for (var m=0; m<=DataIn.length-2; m++) {
                cntDataInArea++;
                potSameArea[i][j][cntDataInArea-1] = DataIn[m];
              }
              }
              }
              }
              }
              }
                //this function allow us get the average potencia that belong to the same area.
                //Pamameters pos vertical y horizontal que representan una area respectiva
                //potFile[] --> vector that contains all potencias reads of file
                //cntInArea --> saber cuantas mediciones dentro d la misma area
                //cntData --> number of elements in file
                //areaDataX[] and areaDataY[] both contains the location for measured areas.
                //potSameArea[] save potencias belongs same area
                //cntSameArea[] save number of potencias in same area
                function getPotPromArea (posV, posH, nOperadora) {
                //cntInArea = 0;
              }
                function getNumPotsSameA (posV, posH, potSameA) {
                DataIn = potSameArea2D[posV][posH].split(";");
                cntDatPotsSameA = DataIn.length-1;
              }
              }
                //Method return coords of respective area for a determinate lat and lng
                //delta represents the variation (tamano area) in the horizontal plane
                //alfa represents the variation (tamano area) in the vertical plane
                function getNumArea (lat, long) {
                for (var i=0; i<=60; i++) {
                for (var j=0; j<=120; j++) {	
                if ((lat <= -2.8725318-i*alfa && lat > -2.8725318-(i+1)*alfa) && (long >= -79.065116+j*delta && long < -79.065116+(j+1)*delta)) {
                nAreaX = i;
                nAreaY = j;
              }
              }
              }
              }
                //Return color for respective potencia
                function getColour (pot) {
                //verde
                if (pot < 0 && pot >= -50) {
                color = '#00FF00';
              } else if (pot < -50 && pot >= -60) {
                color = '#00E600';	
              } else if (pot < -60 && pot >= -70) {
                color = '#00CC00';	
              } else if (pot < -70 && pot >= -80) {
                color = '#00B200';	
              } else if (pot < -80 && pot >= -85) {
                color = '#009900';	
              } 
                //amarillo
                else if (pot < -85 && pot >= -88) {
                color = '#FFFF00';	
              } else if (pot < -88 && pot >= -91) {
                color = '#E6E600';	
              } else if (pot < -91 && pot >= -94) {
                color = '#CCCC00';	
              } else if (pot < -94 && pot >= -96) {
                color = '#B2B200';	
              } else if (pot < -96 && pot >= -98) {
                color = '#999900';	
              } 
                //rojo
                else if (pot < -98 && pot >= -101) {
                color = '#FF0000';	
              } else if (pot < -101 && pot >= -104) {
                color = '#E60000';	
              } else if (pot < -104 && pot >= -106) {
                color = '#CC0000';	
              } else if (pot < -106 && pot >= -108) {
                color = '#B20000';	
              } else if (pot < -107 && pot >= -110) {
                color = '#990000';	
              } 
                //negro
                else if (pot < -110 && pot >= -11111) {
                color = '#000000';	
              } else {
                color = '#CCD6E0';
                //color = 'transparent';
              }
              }
                //Method to create Buttons on the Google Map
                //elementClaro, Movistar, Cnt determina el button wrote in html code
                function createButtons () {
                var buttonClaro = buttonsOnMap('#4775FF', 'CLARO', '20px', '0px', '0.60', '160%', '250%', '18', elementClaro, google.maps.ControlPosition.TOP);
                var buttonMovistar = buttonsOnMap('#4775FF', 'MOVISTAR', '20px', '25px', '0.60', '80%', '250%', '18', elementMovistar, google.maps.ControlPosition.TOP);
                var buttonCnt = buttonsOnMap('#4775FF', 'CNT', '20px', '15px', '0.60', '120%', '250%', '18', elementCnt, google.maps.ControlPosition.TOP);
                var labelEstadisticas = buttonsOnMap('#4775FF', 'ESTADISTICAS', '-245px', '-5px', '0.60', '160%', '200%', '14', elementEstadist, google.maps.ControlPosition.CENTER);
                var buttonShowHideAntenas = buttonsOnMap('#4775FF', 'MOSTRAR ANTENAS', '-35px', '0px', '0.60', '120%', '200%', '14', elementShowHideAnt, google.maps.ControlPosition.BOTTOM);
                function buttonsOnMap(color, name, mrgTop, mrgLeft, opacity, widthBtn, heightBtn, sizeFont, controlUI, controlPos) {
                var centerControlDiv = document.createElement('div');
                var centerControl = new CenterControl(centerControlDiv, map);
                centerControlDiv.index = 1;
                map.controls[controlPos].push(centerControlDiv);
                //Function for draw All Buttons
                function CenterControl(controlDiv, map) {
                // Set CSS for the control border BOTON
                controlUI.style.backgroundColor = color;
                controlUI.style.borderRadius = '3px';
                controlUI.style.cursor = 'pointer';
                controlUI.style.marginTop = mrgTop;
                controlUI.style.marginRight = '0px';
                controlUI.style.marginLeft = mrgLeft;
                controlUI.style.textAlign = 'center';
                controlUI.style.width = widthBtn;
                controlUI.title = 'Click to generate a Celular Coberture Map';
                controlUI.style.opacity = opacity;
                controlDiv.appendChild(controlUI);
                // Set CSS for the control interior TEXTO
                var controlText = document.createElement('div');
                controlText.style.color = '#FFFFFF';
                controlText.style.fontFamily = 'Roboto,Arial,sans-serif';
                controlText.style.fontSize = sizeFont;
                //Altura de los botones
                controlText.style.lineHeight = heightBtn;
                controlText.style.paddingLeft = '0px';
                controlText.style.paddingRight = '0px';
                controlText.innerHTML = name;
                controlUI.appendChild(controlText);
                // Setup the click event listeners: simply set the map to
                //Code for listening CLick of Buttons on Google Maps
                //bandClaro, bandMovistar, bandCnt determinan si algun botton fue presionado
                //cleanMap() method called when i want to erase all markers in tha map
                google.maps.event.addDomListener(controlUI, 'click', function() {
                if (controlUI == elementClaro) {
                //banderas for search areas
                bandFindAreaClaro = true;
                bandFindAreaMovistar = false;
                bandFindAreaCnt = false;
                //Borra las antenas dibujadas
                if (markersAntenasMovistar.length != 0) {
                cleanAntenas(posAllAntenasMovistar, markersAntenasMovistar);
                bandShowAntenas = !bandShowAntenas;
              }
                if (markersAntenasCnt.length != 0) {
                cleanAntenas(posAllAntenasCnt, markersAntenasCnt);
                bandShowAntenas = !bandShowAntenas;
              }
                bandClaro = !bandClaro;
                if (bandClaro == true && bandMovistar == false && bandCnt == false) {
                map.setCenter(myLatlng);
                map.setZoom(13);
                controlUI.style.backgroundColor = "#3252B2";
                draw0Area(mPotPromAreaClaro, cntSameAreaClaro, potSameAreaClaro);
              } else if (bandClaro == false && bandMovistar == false && bandCnt == false) {
                controlUI.style.backgroundColor = "#5983FF";
                //Oculta el mapa de cobertura
                cleanMap();
              } else if (bandClaro == true && (bandMovistar == true || bandCnt == true)) {
                bandClaro = false;
              }
              } if (controlUI == elementMovistar) {
                //banderas for search areas
                bandFindAreaClaro = false;
                bandFindAreaMovistar = true;
                bandFindAreaCnt = false;
                //Borra antenas dibujadas
                if (markersAntenasClaro.length != 0) {
                cleanAntenas(posAllAntenasClaro, markersAntenasClaro);
                bandShowAntenas = !bandShowAntenas;
              }
                if (markersAntenasCnt.length != 0) {
                cleanAntenas(posAllAntenasCnt, markersAntenasCnt);
                bandShowAntenas = !bandShowAntenas;
              }
                bandMovistar = !bandMovistar;
                if (bandMovistar == true && bandClaro == false && bandCnt == false) {
                map.setCenter(myLatlng);
                map.setZoom(13);
                controlUI.style.backgroundColor = "#3252B2";
                draw0Area(mPotPromAreaMovistar, cntSameAreaMovistar, potSameAreaMovistar);
              } else if (bandMovistar == false && bandClaro == false && bandCnt == false) {
                controlUI.style.backgroundColor = "#5983FF";
                //Oculta el mapa de cobertura
                cleanMap();
              } else if (bandMovistar == true && (bandClaro == true || bandCnt == true)) {
                bandMovistar = false;
              }
              } if (controlUI == elementCnt) {
                //banderas for search areas
                bandFindAreaClaro = false;
                bandFindAreaMovistar = false;
                bandFindAreaCnt = true;
                //Borra antenas dibujadas
                if (markersAntenasClaro.length != 0) {
                cleanAntenas(posAllAntenasClaro, markersAntenasClaro);
                bandShowAntenas = !bandShowAntenas;
              }
                if (markersAntenasMovistar.length != 0) {
                cleanAntenas(posAllAntenasMovistar, markersAntenasMovistar);
                bandShowAntenas = !bandShowAntenas;
              }
                bandCnt = !bandCnt;
                if (bandCnt == true && bandClaro == false && bandMovistar == false) {
                map.setCenter(myLatlng);
                map.setZoom(13);
                controlUI.style.backgroundColor = "#3252B2";
                draw0Area(mPotPromAreaCnt, cntSameAreaCnt, potSameAreaCnt);
              } else if (bandCnt == false && bandClaro == false && bandMovistar == false) {
                controlUI.style.backgroundColor = "#5983FF";
                //Oculta el mapa de cobertura
                cleanMap();
              } else if (bandCnt == true && (bandClaro == true && bandMovistar == true)) {
                bandCnt = false;
              }
              } if (controlUI == elementEstadist) {
                //Code BLock for generate Pie and Dougnuts grafics
                //get the value for all couters cntVerde cntAmarillo cntRojo cntNegro
                getStats(mPotPromAreaClaro);
                //Code for draw Dougnuts in the Div
                manageStats(cntVerde, cntAmarillo, cntRojo, cntNegro, 'CLARO', 'divClaro');
                //get the value for all couters cntVerde cntAmarillo cntRojo cntNegro
                getStats(mPotPromAreaMovistar);
                manageStats(cntVerde, cntAmarillo, cntRojo, cntNegro, 'MOVISTAR', 'divMovistar');
                //get the value for all couters cntVerde cntAmarillo cntRojo cntNegro
                getStats(mPotPromAreaCnt);
                manageStats(cntVerde, cntAmarillo, cntRojo, cntNegro, 'CNT', 'divCnt');
                //Moved automatic pantalla vertical --> MAas conocido como Ancla!!
                document.location.href = "#divMediaDesvE";
                //Code Block for generate LineGraph in Canvas (Media, EstandarDesviation)--> Claro
                getMedia(mPotPromAreaClaro);
                mediaClaro = mediaa;
                getDesvEstandar(mPotPromAreaClaro, mediaClaro);
                desvEClaro = desvEstandar;
                //Code Block for generate LineGraph in Canvas (Media, EstandarDesviation)--> Movistar
                getMedia(mPotPromAreaMovistar);
                mediaMovistar = mediaa;
                getDesvEstandar(mPotPromAreaMovistar, mediaMovistar);
                desvEMovistar = desvEstandar;
                //Code Block for generate LineGraph in Canvas (Media, EstandarDesviation)--> Cnt
                getMedia(mPotPromAreaCnt);
                mediaCnt = mediaa;
                getDesvEstandar(mPotPromAreaCnt, mediaCnt);
                desvECnt = desvEstandar;
                //Draw LineGraph Claro Initial()
                drawLine(mPotPromAreaClaro, mediaClaro, desvEClaro);
                //function to get variables for Histogram
                //mPotPromAreaClaro is a vector of the potencias prom in the areas medidas
                getHistogram(mPotPromAreaClaro, mediaClaro, desvEClaro);
              } if (controlUI == elementShowHideAnt) {
                bandShowAntenas = !bandShowAntenas;
                if (bandShowAntenas == true) {
                controlUI.style.backgroundColor = "#3252B2";
                if (bandClaro == true && bandMovistar == false && bandCnt == false) {
                drawAntenas(posAllAntenasClaro, markersAntenasClaro);
              } else  if (bandClaro == false && bandMovistar == true && bandCnt == false) {
                drawAntenas(posAllAntenasMovistar, markersAntenasMovistar);
              } else  if (bandClaro == false && bandMovistar == false && bandCnt == true) {
                drawAntenas(posAllAntenasCnt, markersAntenasCnt);
              }
              } else if (bandShowAntenas == false) {
                controlUI.style.backgroundColor = "#5983FF";
                if (bandClaro == true && bandMovistar == false && bandCnt == false) {
                cleanAntenas(posAllAntenasClaro, markersAntenasClaro);
              } else  if (bandClaro == false && bandMovistar == true && bandCnt == false) {
                cleanAntenas(posAllAntenasMovistar, markersAntenasMovistar);
              } else  if (bandClaro == false && bandMovistar == false && bandCnt == true) {
                cleanAntenas(posAllAntenasCnt, markersAntenasCnt);
              }
              }		
              }
              });
              }
              }
              }
                //Function to draw all Antenas Over map
                function drawAntenas (posAllAntenas, markersAntenas) {
                infoWindow = new google.maps.InfoWindow();
                for (var i=0; i<=posAllAntenas.length-1; i++) {
                markersAntenas[i] = new google.maps.Marker({
                position: posAllAntenas[i],
                icon: {
                  path: google.maps.SymbolPath.CIRCLE,
                  scale: 5,
                  strokeColor: '#0000FF',
                  strokeOpacity: 0.90,
                  strokeWeight: 0.95,
                  fillColor: '#CC0066',
                  fillOpacity: 0.50
                },
                map: map
              });
              markersAntenas[i].setMap(map);
              google.maps.event.addListener(markersAntenas[i], 'click', function() {
                var position = this.position;
                infoWindow.setPosition(position);
              });
            }
          }
          //CleanMarkers of Painted Areas
          //cuadrado[] contain a list of the polygon (areas) drawn
          function cleanAntenas (posAllAntenas, markersAntenas) {
            for(var i=0; i<=posAllAntenas.length-1; i++) {
              markersAntenas[i].setVisible(false);
            }
          }
          //Function to get values for graph histogram
          //mPotPromedio[][] is the matrix (Claro, Movi, Cnt) over which will calculate the histogram
          //cntDataPot allow count number of areas which have beeen measured
          //vPotPromArea[] save only potencias Prom of areas medidas from mPotPromedio[][] (Claro, Movi, Cnt)
          //maxPotPromArea
          //distMaxMin calculate the difference between max and min potencias medida
          //cntHistograms[] save number of potencias medidas for each area.
          //deltaHistogram is a constant which allow us obtain the separation for the histogram
          function getHistogram (mPotPromedio, media, desvE) {
            //for to get max and min value of vector of data of areas
            var cntDataPot = 0;
            var vPotPromArea = [];
            var maxPotPromArea = 0;
            var distMaxMin = 0;
            //Num Barras of Histogram
            var numDivHistogram = 10;
            //init vector of counters for freq absoluta
            var cntHistograms = Array.apply(null, new Array(numDivHistogram)).map(Number.prototype.valueOf,0);
            for (var i=1; i<=60; i++) {
              for (var j=1; j<=120; j++) {
                if (mPotPromedio[i][j] <=0 && mPotPromedio[i][j] > -11111) {
                  cntDataPot = cntDataPot+1;
                  vPotPromArea[cntDataPot-1] = mPotPromedio[i][j];
                }
              }
            }
            //to get max and min value of vector of average potencias
            maxPotPromArea = Math.max.apply(Math, vPotPromArea);
            minPotPromArea = Math.min.apply(Math, vPotPromArea);
            distMaxMin = maxPotPromArea-minPotPromArea;
            //Calculate spacing between barras of histogram
            deltaHistogram = distMaxMin/numDivHistogram;
            //Load a vector of counters for each divition of histogram
            for (var t=0; t<=vPotPromArea.length; t++) {
              for (var z=0; z<=numDivHistogram-1; z++) {
                if (vPotPromArea[t] >= minPotPromArea+z*deltaHistogram && vPotPromArea[t] < (minPotPromArea+(z+1)*deltaHistogram)+0.00001) {
                  cntHistograms[z] = cntHistograms[z]+1;
                }
              }
            }
            //Recorte el vector cntHistograms to vFreqAbs
            for (var u=0; u<=numDivHistogram-1; u++) {
              vFreqAbs[u] = cntHistograms[u];
            }
            //Call function to draw histogram
            drawColunm();
            drawLine(mPotPromedio, media, desvE);
            //Function to draw Barra for histogram
            //man and men contains the limits for each bar in the histogra
            function drawColunm () {
              var rows = new Array();
              var data = new google.visualization.DataTable();
              data.addColumn('number', 'Potencia (dB)');
              data.addColumn('number', 'Frec. Abs.');
              for (var v=0; v<=vFreqAbs.length-1; v++) {
                var men = minPotPromArea+v*deltaHistogram;
                var mas = minPotPromArea+(v+1)*deltaHistogram;
                men = toFixed(men, 3);
                mas = toFixed(mas, 3);
                rows.push([{v:(minPotPromArea+v*deltaHistogram), f:men+' A '+mas+' dB'}, vFreqAbs[v]]);
              }
              data.addRows(rows); 
              var options = {
                title: 'Histograma',
                hAxis: {
                  title: 'Potencia (dB)',
                },
                vAxis: {
                  title: 'Frecuencia Absoluta'
                },
                colors: ['#333333']
              };
              var divHistograma = document.getElementById('divHistograma');
              //Move divLineChart toward down
              divHistograma.style.marginTop = "200px";
              var chart = new google.visualization.ColumnChart(divHistograma);
              chart.draw(data, options);
            }
          }	
          //CleanMap of Painted Areas
          //cuadrado[] contain a list of the polygon (areas) drawn
          function cleanMap () {
            for(var i=1; i<=7200; i++) {
              cuadrado[i].setVisible(false);
            }
          }
          //get value of counters for generate stats.
          //cntVerde, cntAmarillo, etc: couter for determinate stats
          //mPotPromArea[][] contains all pot prom measured
          //cntStats() allow analize the potencias promedio medidas
          //return the value of couters
          function getStats (mPotPromArea) {
            cntVerde = 0;
            cntAmarillo = 0;
            cntRojo = 0;
            cntNegro = 0;
            for (var i=1; i<=60; i++) {
              for (var j=1; j<=120; j++) {
                cntStats(mPotPromArea[i][j]);
              }
            }
          }
          //return value of counters for generate stats
          function cntStats (pot) {
            if (pot < 0 && pot >= -85) {
              cntVerde = cntVerde + 1;
            } else if (pot < -85 && pot >= -98) {
              cntAmarillo = cntAmarillo + 1;	
            } else if (pot < -98 && pot >= -110) {
              cntRojo = cntRojo + 1;	
            } else if (pot < -110 && pot >= -11111) {
              cntNegro = cntNegro + 1;	
            } 
          }
          //Dougnout Graficos Stats
          //Generate the stats Dougnout for each operadora
          //vVerde, vAmarillo, vRojo, vNegro represent the value of couters,
          //nOperadora name operadora: Claro, Movi, Cnt
          //divOperadora determine in that space (html code) draw the dougnouts stats
          function manageStats(vVerde, vAmarillo, vRojo, vNegro, nOperadora, divOperadora) {
            var data = google.visualization.arrayToDataTable([
              ['Nivel', 'Porcentaje'],
              [''+vVerde+' Area(s)', vVerde],
              [''+vAmarillo+' Area(s)', vAmarillo],
              [''+vRojo+' Area(s)', vRojo],
              [''+vNegro+' Area(s)', vNegro]
            ]);
            var options = {
              title: nOperadora,
              pieHole: 0.4,
              slices: {0: {color: '#00FF00'}, 1:{color: '#FFFF00'}, 2:{color: '#FF0000'}, 3: {color: '#000000'}}
            };
            var chart = new google.visualization.PieChart(document.getElementById(divOperadora));
            chart.draw(data, options);
          }	
          //Function to get the value of standar desviation for all Operadoras
          //mPotPromArea[][] contain pot prom for all areas medidas
          //media for each operadora
          function getDesvEstandar (mPotPromArea, media) {
            var cnt = 0;
            var varianz = 0;
            varianza = 0;
            desvEstandar = 0;
            for(var i=1; i<=60; i++) {
              for (var j=1; j<=120; j++) {
                if (mPotPromArea[i][j] <= 10 && mPotPromArea[i][j] >= -11111) {
                  cnt = cnt + 1;
                  varianz = Math.pow((mPotPromArea[i][j] - media), 2);
                  varianza = varianza + varianz;
                }
              }
            }
            varianza = varianza/cnt;
            desvEstandar = Math.sqrt(varianza);
          }
          //Function ro fet the value of media (prom) of data at all operadoras
          //mPotPromArea[][] contain pot prom for all areas medidas 
          //cntMedias determinate hosw much areas have been measured
          function getMedia(mPotPromArea) {
            mediaa = 0;
            cntMedias = 0;
            for(var i=1; i<=60; i++) {
              for (var j=1; j<=120; j++) {
                if (mPotPromArea[i][j] <= 10 && mPotPromArea[i][j] >= -11111) {
                  cntMedias = cntMedias + 1;
                  mediaa = (mediaa - mPotPromArea[i][j]);
                }
              }
            }
            mediaa = -mediaa/cntMedias;
          }
          //Method to draw LineGraph for each operadora (matriz de potencias, media of data, desvEstandar of data)
          //mPotPromArea[][] contain pot prom for all areas medidas
          //media
          //desvE
          //posX, posY, posZ, posDEp, posDEn for draw lines on div
          function drawLine(mPotPromArea, media, desvE) {
            var posX = 0;
            var posY = 0;
            var posZ = 0;
            var posDEp = 0;
            var posDEn = 0;
            var rows = [];
            var data = new google.visualization.DataTable();
            data.addColumn('number', 'X');
            data.addColumn('number', 'Potencia');
            data.addColumn('number', 'Media');
            data.addColumn('number', 'Desv Est.');
            data.addColumn('number', 'Desv Est.');
            for(var i=1; i<=60; i++) {
              for (var j=1; j<=120; j++) {
                if (mPotPromArea[i][j] <=0 && mPotPromArea[i][j] >= -11111) {
                  posX = ((i-1)*120)+j;
                  posY = mPotPromArea[i][j];
                  posZ = media;
                  posDEp = desvE;
                  posDEn = -desvE; 
                  posY = toFixed(posY, 2);
                  posZ = toFixed(posZ, 2);
                  posDEp = toFixed(posDEp, 2);
                  posDEn = toFixed(posDEn, 2);
                  rows.push([posX, posY, posZ, posZ+posDEp, posZ+posDEn]);
                } 
              }
            }
            data.addRows(rows);
            var options = {
              title: 'Parámetros Importantes',
              hAxis: {
                title: 'Areas'
              },
              vAxis: {
                title: 'Potencia (dB)'
              }, 
              colors: ['#000000', '#FF0000', '#0066FF', '#0066FF']
            };
            var divMediaDesvE = document.getElementById('divMediaDesvE');
            //Move divLineChart toward down
            var chart = new google.visualization.LineChart(divMediaDesvE);
            chart.draw(data, options);
          }

  
