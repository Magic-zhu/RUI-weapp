// components/Radio/index.js
Component({
  properties: {
    radioArray:{
      type: Array,
      value: [],
    },
    size:{
      type:"String",
      value:"normal"
    },
    custom:{
      type: "String",
    },
  },
  data: {

  },
  methods: {
    radioChange(e){
      this.triggerEvent('radio',e);
    }
  },
});