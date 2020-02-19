import { filterBy } from '@ember/object/computed';
import EmberObject,{computed} from '@ember/object';

export default EmberObject.extend({
  init:function(){
    var filtre = '';
  },
  contacts:computed('filtre','datas.@each.isDeleted',function(){
      return this.get('store').query('contact',{
        filter:{
          isDeleted:false,
          name:this.get('filtre')
        }
      })
    }),
  deleteds: filterBy('datas', 'isDeleted', true)
  ,
  deletedsCount:computed('deleteds',function(){
    return this.get('deleteds').length
    }
  )
});
