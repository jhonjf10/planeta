  window.onload=function()
  {

	inicio();  	
  }    

  function inicio () 
  {
  
    //variables
      var cam, esc, generador;
      var ventana;
      var container=document.getElementById('container');

      
      init();
      animate();
      function init() 
      {

       //ancho y largo de la ventana para la camara
        cam = new THREE.PerspectiveCamera( 60, window.innerWidth / window.innerHeight, 1, 2000 );
        cam.position.z = 510;
        esc = new THREE.Scene();
        ventana = new THREE.Object3D();
        esc.add(ventana);

        // marte
        var loader = new THREE.TextureLoader();
        loader.load( 'imagen/mar.jpg', function ( texture ) {

          //Creacion de esfera
          var geometry = new THREE.SphereGeometry(245,25, 25 );
          var material = new THREE.MeshBasicMaterial({map:texture,overdraw:0.6});
          var mesh = new THREE.Mesh(geometry,material);
          ventana.add(mesh);

        } );
        //Canvas
        generador = new THREE.CanvasRenderer();
        generador.setSize(window.innerWidth,window.innerHeight);
        container.appendChild(generador.domElement);
      }
       //animacion
      function animate() {

        requestAnimationFrame(animate);
        render();
      }

      function render()
      {
        //Rotacion del mundo
        ventana.rotation.y += 0.005;
        ventana.rotation.x += 0.0010;
        generador.render(esc,cam);
      }
};