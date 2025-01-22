(() => {
    'use strict'
  
    const forms = document.querySelectorAll('.needs-validation')
  
    Array.from(forms).forEach(form => {
      form.addEventListener('submit', event => {
        if (!form.checkValidity()) {
          event.preventDefault()
          event.stopPropagation()
        }
  
        form.classList.add('was-validated')
      }, false)
    })
  })()

/*function validarFormulario(event) {
    var nombre = document.getElementById("nombre").value;
    var correo = document.getElementById("correo").value;
    var telefono = document.getElementById("telefono").value;
    var direccion = document.getElementById("direccion").value;
    var fechaNacimiento = document.getElementById("fechaNacimiento").value;
    var redesSociales = document.getElementById("redesSociales").value;
    var notas = document.getElementById("notas").value;
    var foto = document.getElementById("inputGroupFile01").value;
    var check = document.getElementById("exampleCheck1").checked;

    if (!nombre || !correo || !telefono || !direccion || !fechaNacimiento || !redesSociales || !notas || !foto || !check) {
        alert("Todos los campos son obligatorios.");
        event.preventDefault(); 
        return false;
    }

    document.getElementById("advertencia").style.display = "none";
            return true;

    
} */