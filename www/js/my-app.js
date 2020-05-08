var $$ = Dom7;
var app = new Framework7({
    root: '#app',
    name: 'EmpleoVGG',
    id: 'com.myapp.test',
    panel: {
      swipe: 'left',
    },
    routes: [
      { path: '/index/', url: 'index.html', options: { transition: 'f7-flip',},},
      { path: '/about/', url: 'about.html', options: { transition: 'f7-flip',},},
      { path: '/registro_persona/', url: 'registro_persona.html', options: { transition: 'f7-flip',},},
      { path: '/login_persona/', url: 'login_persona.html', options: { transition: 'f7-flip',},},
      { path: '/menu_persona/', url: 'menu_persona.html', options: { transition: 'f7-flip',},},
      { path: '/perfil_persona/', url: 'perfil_persona.html', options: { transition: 'f7-flip',},},
      { path: '/buscar_ofertas/', url: 'buscar_ofertas.html', options: { transition: 'f7-flip',},},
      { path: '/ver_oferta/', url: 'ver_oferta.html', options: { transition: 'f7-flip',},},
      { path: '/postularse/', url: 'postularse.html', options: { transition: 'f7-flip',},},
      { path: '/ver_postulaciones/', url: 'ver_postulaciones.html', options: { transition: 'f7-flip',},},
      { path: '/estado_postulacion/', url: 'estado_postulacion.html', options: { transition: 'f7-flip',},},
      { path: '/experiencia_laboral/', url: 'experiencia_laboral.html', options: { transition: 'f7-flip',},},
      { path: '/estudios/', url: 'estudios.html', options: { transition: 'f7-flip',},},
      { path: '/registro_empresa/', url: 'registro_empresa.html', options: { transition: 'f7-flip',},},
      { path: '/login_empresa/', url: 'login_empresa.html', options: { transition: 'f7-flip',},},
      { path: '/menu_empresa/', url: 'menu_empresa.html', options: { transition: 'f7-flip',},},
      { path: '/perfil_empresa/', url: 'perfil_empresa.html', options: { transition: 'f7-flip',},},
      { path: '/publicar_oferta/', url: 'publicar_oferta.html', options: { transition: 'f7-flip',},},
      { path: '/ver_recien_publicada/', url: 'ver_recien_publicada.html', options: { transition: 'f7-flip',},},
      { path: '/ver_lista_publicaciones/', url: 'ver_lista_publicaciones.html', options: { transition: 'f7-flip',},},
      { path: '/ver_publicacion/', url: 'ver_publicacion.html', options: { transition: 'f7-flip',},},
      { path: '/ver_lista_postulados/', url: 'ver_lista_postulados.html', options: { transition: 'f7-flip',},},
      { path: '/ver_perfil_postulado/', url: 'ver_perfil_postulado.html', options: { transition: 'f7-flip',},},
    ]
  });

var mainView = app.views.create('.view-main');
/*variables globales*/
//registro - login
var usuario;
var clave;
var verificar;
var tipo;
//base de datos
var db;
var id = "0";

$$(document).on('deviceready', function() {
console.log("El dispositivo esta listo")
db=firebase.firestore();
});

$$(document).on('page:init', function (e) {
  console.log("page init el ID es : "+id);
})

$$(document).on('page:init', '.page[data-name="about"]', function (e) {
//en el about no hago nada por ahora, mas adelante boton para sugerencias
})

/*PAGES INITS DE PERSONA*/
$$(document).on('page:init', '.page[data-name="registro_persona"]', function (e) {
  $$("#registrar_persona").on("click" , registrarPersona);
})

$$(document).on('page:init', '.page[data-name="login_persona"]', function (e) {
  $$("#iniciar_sesion").on("click" , loginPersona);
})

$$(document).on('page:init', '.page[data-name="menu_persona"]', function (e) {

  mostrarPerfil();
  mostrarEstudios();
  mostrarLaboral();

})

$$(document).on('page:init', '.page[data-name="perfil_persona"]', function (e) {
  $$("#actualizar_perfil").on("click" , actualizarDatosPersona);
})

$$(document).on('page:init', '.page[data-name="estudios"]', function (e) {
  $$("#agregar_estudios").on("click" , agregarEstudios);
})

$$(document).on('page:init', '.page[data-name="experiencia_laboral"]', function (e) {
  $$("#agregar_trabajo").on("click" , agregarExperienciaLaboral);

})

$$(document).on('page:init', '.page[data-name="buscar_ofertas"]', function (e) {

})

$$(document).on('page:init', '.page[data-name="ver_oferta"]', function (e) {

})

$$(document).on('page:init', '.page[data-name="postularse"]', function (e) {

})

$$(document).on('page:init', '.page[data-name="ver_postulaciones"]', function (e) {

})

$$(document).on('page:init', '.page[data-name="estado_postulacion"]', function (e) {

})

/*PAGES INITS EMPRESA*/

$$(document).on('page:init', '.page[data-name="registro_empresa"]', function (e) {
  $$("#registrar_empresa").on("click" , registrarEmpresa);
})

$$(document).on('page:init', '.page[data-name="login_empresa"]', function (e) {
  $$("#iniciar_sesion_empresa").on("click" , loginEmpresa);
})

$$(document).on('page:init', '.page[data-name="menu_empresa"]', function (e) {
 mostrarPerfilEmpresa();
 $$("#ver_lista_publicaciones").on("click" , mostrarTodasOfertas);
})

$$(document).on('page:init', '.page[data-name="perfil_empresa"]', function (e) {
  $$("#actualizar_perfil_empresa").on("click" , actualizarDatosEmpresa);
})

$$(document).on('page:init', '.page[data-name="publicar_oferta"]', function (e) {
  $$("#publicar_oferta").on("click" , publicarOferta);
})

$$(document).on('page:init', '.page[data-name="ver_recien_publicada"]', function (e) {
  mostrarDetalleOferta();
})

$$(document).on('page:init', '.page[data-name="ver_lista_publicaciones"]', function (e) {
  mostrarTodasOfertas();
  
})

$$(document).on('page:init', '.page[data-name="ver_publicacion"]', function (e) {
  mostrarOfertaElegida();
})

$$(document).on('page:init', '.page[data-name="ver_lista_postulados"]', function (e) {

})

$$(document).on('page:init', '.page[data-name="ver_perfil_postulado"]', function (e) {

})

/*
* FUNCIONES DE PERSONA
*/
//REGISTRO DE PERSONA
function registrarPersona(){
  verificar=0;
  usuario=$$("#usuarioreg").val();
  console.log(usuario);
  clave=$$("#clavereg").val();
  console.log(clave);
  if (usuario=="") {
    alert("Ingrese su correo electronico");
  } else {
    if (clave=="") {
      alert("Ingrese su contraseña");
    } else {
        firebase.auth().createUserWithEmailAndPassword(usuario, clave).catch(function(error) {
        // Handle Errors here.
        var errorCode = error.code;
        var errorMessage = error.message;
        // [START_EXCLUDE]
        if (errorCode == 'auth/weak-password') {
          alert("contraseña debil");
          verificar=1;
        } else {
          if (errorCode=="auth/invalid-email") {
          alert("mail invalido");
          verificar=1;
          }
        }
        // [END_EXCLUDE]
      }).then(function(){
        if (verificar==0) {
          app.views.main.router.navigate("/menu_persona/");
        } else {
          alert("error al registrar");
        }
      });
    }
  }
}
//LOGIN DE PERSONA
function loginPersona(){
verificar=0;
usuario = $$("#usuario").val();
clave = $$("#clave").val();
if (usuario=="") {
  alert("Ingrese su correo electronico");
  } else {
    if (clave=="") {
      alert("Ingrese su contraseña");
    } else {

      firebase.auth().signInWithEmailAndPassword(usuario, clave).catch(function(error){
      //Si hubo algun error, ponemos un valor referenciable en la variable huboError
      var errorCode = error.code;
      var errorMessage = error.message;
      if (errorCode === 'auth/wrong-password') {
        app.dialog.alert("Contraseña incorrecta");
        } else {
          app.dialog.alert("Correo y/o contraseña no registrados");
        }
        verificar = 1;
        }).then(function(){
        //En caso de que esté correcto el inicio de sesión y no haya errores, se dirige a la siguiente página
        if(verificar == 0){
            app.views.main.router.navigate("/menu_persona/");
        }
      });
    }
  } 
}
//CARGA DE DATOS PERSONA
function actualizarDatosPersona(){
  nombre=$$(".idnombre").val();
  cuil=$$(".idcuil").val();
  fechaNac=$$(".idfechaNac").val();
  tel=$$(".idtel").val();
  if (nombre=="") {
    app.dialog.alert("nombre vacio");
  } else {
    if (cuil=="") {
      app.dialog.alert("cuil vacio");
    } else {
      if (fechaNac=="") {
        app.dialog.alert("fecha de nacimiento vacio");
      } else {
        if (tel=="") {
          app.dialog.alert("Telefono vacio");
        } else {
          guardarPerfildb(nombre,cuil,fechaNac,tel,usuario);
          app.views.main.router.navigate("/menu_persona/");
        }
      }
    }
  }
}
//AGREGA EXPERIENCIA LABORAL
function agregarExperienciaLaboral(){
  empresa=$$(".idempresa").val();
  puesto=$$(".idpuesto").val();
  tiempo=$$(".idtiempo").val();
  detalle=$$(".iddetalle").val();
    if (empresa=="") {
      app.dialog.alert("Indique el nombre de la empresa");
    } else {
      if (puesto=="") {
        app.dialog.alert("Indique el puesto que ocupaba");
      } else {
        if (tiempo=="") {
          app.dialog.alert("Indique el tiempo trabajado");
        } else {
          if (detalle=="") {
            app.dialog.alert("Indique las tareas que realizaba");
          } else {
            guardarExperienciaLaboraldb(empresa,puesto,tiempo,detalle,usuario);
            app.views.main.router.navigate("/menu_persona/"); 
          }
        }
      }
    }
}
//AGREGA ESTUDIOS CURSADOS
function agregarEstudios(){
institucion=$$(".idinstitucion").val();
titulo=$$(".idtitulo").val();
tiempoestudio=$$(".idtiempoestudio").val();
estadoestudio=$$(".idestadoestudio").val();
if (institucion=="") {
    app.dialog.alert("Indique el nombre de la institucion");
  } else {
    if (titulo=="") {
      app.dialog.alert("Indique el titulo obtenido / cursando");
    } else {
      if (tiempoestudio=="") {
        app.dialog.alert("Indique la duracion del curso / carrera");
      } else {
        if (estadoestudio=="") {
          app.dialog.alert("Indique si esta finalizado o cursando");
        } else {
          vestudios=1;
          guardarEstudiosdb(institucion,titulo,tiempoestudio,estadoestudio,usuario);
          app.views.main.router.navigate("/menu_persona/");
        }
      }
    }
  }
}
//AGREGA OTROS

//GUARDA DATOS PERSONA EN FIRESTORE
function guardarPerfildb(a,b,c,d,e){
  var registro = {
    nombre: a, 
    cuil: b,
    fechaNacimiento: c,
    telefono: d,
  }
db.collection("USUARIOS").doc(e).set(registro);
}
//GUARDA EXPERIENCIA LABORAL EN FIRESTORE
function guardarExperienciaLaboraldb(a,b,c,d,e){
  var registro = {
    empresa: a, 
    puesto: b,
    tiempo: c,
    detalle: d,
  }
db.collection("USUARIOS").doc(e).collection("TRABAJO").doc(a+b).set(registro);
}
//GUARDA ESTUDIOS CURSADOS EN FIRESTORE
function guardarEstudiosdb(a,b,c,d,e){
  var registro = {
    institucion: a, 
    titulo: b,
    tiempoestudio: c,
    estadoestudio: d,
  }
db.collection("USUARIOS").doc(e).collection("ESTUDIOS").doc(b).set(registro);
}
//GUARDA OTROS DATOS EN FIRESTORE

//RECUPERA DATOS DE PERSONA Y MUESTRA EN HTML
function mostrarPerfil(){
db.collection("USUARIOS").doc(usuario).get().then(function(doc) {
    if (doc.exists) {
        nombre=doc.data().nombre;
        cuil=doc.data().cuil;
        fechaNac=doc.data().fechaNacimiento;
        tel=doc.data().telefono;
        vperfil=1;
          $$(".datos_usuario").append(
          "<ul>"+
          "<li>Nombre : "+nombre+"</li>"+
          "<li>DNI / CUIL : "+cuil+"</li>"+
          "<li>Fecha de Nacimiento : "+fechaNac+"</li>"+
          "<li>Telefono : "+tel+"</li>"+
          "<li>eMail : "+usuario+"</li>"+
          "</ul>");
    } else {
        vperfil=0;
        app.dialog.alert("Su perfil se encuentra vacio");
    }
  }).catch(function(error) {
    vperfil=0;
    app.dialog.alert("Error al recuperar datos document: \n"+error);
  }); 
}
//RECUPERA EXPERIENCIA LABORAL Y MUESTRA EN HTML
function mostrarLaboral(){
  db.collection("USUARIOS").doc(usuario).collection("TRABAJO").get().then((querySnapshot) => {
    querySnapshot.forEach((doc) => {
        //console.log(`${doc.id} => ${doc.data().empresa} ${doc.data().puesto} ${doc.data().tiempo} ${doc.data().detalle}`);
        $$(".datos_trabajo").append(
          "<ul>"+
          "<li>Nombre de la empresa : "+`${doc.data().empresa}`+"</li>"+
          "<li>Puesto ocupado : "+`${doc.data().puesto}`+"</li>"+
          "<li>Tiempo trabajado : "+`${doc.data().tiempo}`+"</li>"+
          "<li>Tareas realizadas : "+`${doc.data().detalle}`+"</li>"+
          "</ul>");
    });
  });
}
//RECUPERA ESTUDIOS CURSADOS Y MUESTRA EN HTML
function mostrarEstudios(){
    db.collection("USUARIOS").doc(usuario).collection("ESTUDIOS").get().then((querySnapshot) => {
    querySnapshot.forEach((doc) => {
        $$(".datos_estudios").append(
          "<ul>"+
          "<li>Nombre de la institucion : "+`${doc.data().institucion}`+"</li>"+
          "<li>Puesto ocupado : "+`${doc.data().titulo}`+"</li>"+
          "<li>Tiempo trabajado : "+`${doc.data().tiempoestudio}`+"</li>"+
          "<li>Tareas realizadas : "+`${doc.data().estadoestudio}`+"</li>"+
          "</ul>");
    });
  });
}
//RECUPERA OTROS DATOS Y MUESTRA EN HTML

//BUSCA OFERTAS LABORALES

//MUESTRA UNA OFERTA LABORAL

//SE POSTULA EN UNA OFERTA LABORAL

//MUESTRA PUSTULACIONES REALIZADAS

//MUESTRA EL ESTADO DE TAL POSTULACION

/*
* FUNCIONES DE EMPRESA
*/
//REGISTRO DE EMPRESA
function registrarEmpresa(){
verificar=0;
  usuario=$$("#usuario_empresa_reg").val();
  console.log(usuario);
  clave=$$("#clave_empresa_reg").val();
  console.log(clave);
  if (usuario=="") {
    alert("Ingrese su correo electronico");
  } else {
    if (clave=="") {
      alert("Ingrese su contraseña");
    } else {
        firebase.auth().createUserWithEmailAndPassword(usuario, clave).catch(function(error) {
        // Handle Errors here.
        var errorCode = error.code;
        var errorMessage = error.message;
        // [START_EXCLUDE]
        if (errorCode == 'auth/weak-password') {
          alert("contraseña debil");
          verificar=1;
        } else {
          if (errorCode=="auth/invalid-email") {
          alert("mail invalido");
          verificar=1;
          }
        }
        // [END_EXCLUDE]
      }).then(function(){
        if (verificar==0) {
          app.views.main.router.navigate("/menu_empresa/");
        } else {
          alert("error al registrar");
        }
      });
    }
  }
}
//LOGIN DE EMPRESA
function loginEmpresa(){
verificar=0;
usuario = $$("#usuario_empresa").val();
clave = $$("#clave_empresa").val();
if (usuario=="") {
  alert("Ingrese su correo electronico");
  } else {
    if (clave=="") {
      alert("Ingrese su contraseña");
    } else {
      firebase.auth().signInWithEmailAndPassword(usuario, clave).catch(function(error){
      //Si hubo algun error, ponemos un valor referenciable en la variable huboError
      var errorCode = error.code;
      var errorMessage = error.message;
      if (errorCode === 'auth/wrong-password') {
        app.dialog.alert("Contraseña incorrecta");
        } else {
          app.dialog.alert("Correo y/o contraseña no registrados");
        }
        verificar = 1;
        }).then(function(){
        //En caso de que esté correcto el inicio de sesión y no haya errores, se dirige a la siguiente página
        if(verificar == 0){
            app.views.main.router.navigate("/menu_empresa/");
        }
      });
    }
  } 
}
//CARGA DE DATOS DE LA EMPRESA
function actualizarDatosEmpresa(){
  nombreempresa=$$(".nombre").val();
  cuit=$$(".cuit").val();
  telefono=$$(".telefono").val();
  web=$$(".web").val();
  if (nombreempresa=="") {
    app.dialog.alert("nombre vacio");
  } else {
    if (cuit=="") {
      app.dialog.alert("cuit vacio");
    } else {
      if (telefono=="") {
        app.dialog.alert("telefono vacio");
      } else {
        if (web=="") {
          app.dialog.alert("pagina web vacia");
        } else {
          guardarPerfilEmpresadb(nombreempresa,cuit,telefono,web,usuario);
          app.views.main.router.navigate("/menu_empresa/"); 
        }
      }
    }
  }
}
//GUARDA LOS DATOS DE LA EMPRESA EN FIRESTORE
function guardarPerfilEmpresadb(a,b,c,d,e){
  var registro = {
    nombreempresa: a, 
    cuit: b,
    telefono: c,
    web: d,
  }
db.collection("EMPRESAS").doc(e).set(registro);
}
//RECUPERA DATOS DE LA EMPRESA
function mostrarPerfilEmpresa(){
  db.collection("EMPRESAS").doc(usuario).get().then(function(doc) {
    if (doc.exists) {
        nombreempresa=doc.data().nombreempresa;
        cuit=doc.data().cuit;
        telefono=doc.data().telefono;
        web=doc.data().web;
        vperfilempresa=1;
          $$(".datos_empresa").append(
          "<ul>"+
          "<li>Nombre : "+nombreempresa+"</li>"+
          "<li>CUIT : "+cuit+"</li>"+
          "<li>Telefono : "+telefono+"</li>"+
          "<li>Pagina Web : "+web+"</li>"+
          "</ul>");
    } else {
        vperfilempresa=0;
        app.dialog.alert("Su perfil se encuentra vacio");
    }
  }).catch(function(error) {
    vperfilempresa=0;
    app.dialog.alert("Error al recuperar datos document: \n"+error);
  }); 
}
//PUBLICAR UNA OFERTA
function publicarOferta(){
  titulo_oferta=$$("#titulo_oferta").val();
  rubro=$$("#rubro").val();
  descripcion_puesto=$$("#descripcion_puesto").val();
  puestos_vacantes=$$("#puestos_vacantes").val();
  requisito_edad=$$("#requisito_edad").val();
  nivel_educacion=$$("#nivel_educacion").val();
  anos_experiencia=$$("#anos_experiencia").val();
  guardarOfertadb(id,titulo_oferta,nombreempresa,rubro,descripcion_puesto,puestos_vacantes,requisito_edad,nivel_educacion,anos_experiencia,usuario);
  app.views.main.router.navigate("/ver_recien_publicada/");
}
//GUARDAR OFERTA EN LA BASE DE DATOS
function guardarOfertadb(a,b,c,d,e,f,g,h,i,j){
  var registro = {
    titulo_oferta : b,
    nombreempresa : c,
    rubro : d,
    descripcion_puesto : e,
    puestos_vacantes : f,
    requisito_edad : g,
    nivel_educacion : h,
    anos_experiencia : i,
  }
db.collection("OFERTAS").doc(a+" "+j).set(registro);
db.collection("EMPRESAS").doc(j).collection("MIS_PUBLICACIONES").doc(a).set(registro);
}
//MUESTRA EN DETALLE OFERTA RECIEN PUBLICADA
function mostrarDetalleOferta(){

$$(".publicacion").append(
  "<h2>"+titulo_oferta+"</h2>"+
  "Fecha de publicacion : <br>"+
  "<h1>"+nombreempresa+"</h1>"+
  "Rubro / Categoria : "+rubro+"<br><br>"+
  descripcion_puesto+"<br><br>"+
  "Puestos bacantes : "+puestos_vacantes+"<br>"+
  "Requisitos : <br>"+
  "<ul>"+
  "<li>Edad : "+requisito_edad+"</li>"+
  "<li>Nivel de educacion : "+nivel_educacion+"</li>"+
  "<li>Años de experiencia : "+anos_experiencia+"</li>"+
  "</ul>");
}

function mostrarTodasOfertas(){
  console.log("muestra lista de publicaciones");
var enlace = '"/ver_publicacion/"';
  db.collection("EMPRESAS").doc(usuario).collection("MIS_PUBLICACIONES").get().then((querySnapshot) => {
    querySnapshot.forEach((doc) => {
        $$(".lista_ofertas").append(
          ""+`${doc.data().titulo_oferta}`+"<br>"+
          "<a id="+`${doc.data().titulo_oferta}`+" href="+enlace+">ver publicacion</a><br>"
          );
    });
  });
}

function mostrarOfertaElegida(){

}

//GENERAR FECHA
function fecha(){
var date = new Date();
var dia = date.getDay();
var mes;
var año;
var hora;
}