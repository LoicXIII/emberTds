import Controller from '@ember/controller';

export default Controller.extend({
actions: {
  save(note) {
    note.set('info','Enregistrement de la note : '+note.get('content'));
    note.set('save',true);
  },
  clear(note){
    note.set('content','');
    note.set('info', '');
    note.set('clear',true);

  }
}
});
