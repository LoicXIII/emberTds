// note-class.js
import EmberObject, { computed } from '@ember/object';
import {isEmpty} from '@ember/utils';
export default EmberObject.extend({
  MAX:100,
  content:'',
  info:"",
  save:false,
  clear:false,
  size:computed('content',function(){
    let tmp=this.get('content');
    if( tmp!=""){
      this.set('info','note modifiée');
    }else{
      this.set('info','');
    }
    return this.get('MAX')-this.get('content').length;
    }),
  style:computed('size','save',function(){
    if(this.get('save')){
      this.set('save',false);
      return 'alert-success';
    }
    if(this.get('size')>50){
      return 'alert-info';
    }else if(this.get('size')<20){
       return 'alert-danger';
    }else {
      return 'alert-warning';
    }
  }),
  alertVisible:computed('info',function() {
    //if (this.get('info') != 'Entrez votre texte'){
      if(this.get('content')!="" || this.get('clear')==false){
        return true;
      }return false;

  })
});
