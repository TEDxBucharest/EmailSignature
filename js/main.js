new Vue({
  el: '#TEDxBucharestSignatureGenerator',
  data: {
    imgBase:  'http://www.tedxbucharest.ro/wp-content/uploads/2015/10',

    name:     'Prenume Nume',
    position: 'Voluntar',
    phone:    '+40 123 456 789',
    email:    'prenume.nume@tedxbucharest.ro'
  }
})

new Clipboard('#selectButton');
