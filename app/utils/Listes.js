import EmberObject, { computed } from '@ember/object';
import {isEmpty} from '@ember/utils';
export default EmberObject.extend({

  dispoItems:[],
  includedItems:[],
  dispoItemsIds_:[],
  includedItemsIds_:[],
  dispoItems_:computed('dispoItemsIds_',function(){
    let listItems=[];
    let item=this.get('dispoItems');
    for(let i=0;i<this.get('dispoItemsIds_').length;i++)
    {
        listItems.push(item.find(item => item.id===this.get('dispoItemsIds_')[i]));
    }
    return listItems;
  }),
  includedItems_:computed('includedItemsIds_',function(){
    let list=[];
    let item=this.get('includedItems');
    for(let i=0;i<this.get('includedItemsIds_');i++){
      list.push(item.find(item=>item.id===this.get('includedItemsIds_')[i]));
    }
    return list;
  })
});
