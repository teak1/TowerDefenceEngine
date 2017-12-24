const TowerDefence = {
  p5:null,
  v2:{
    create:function(a,b,c){this.x=a,this.y=b,this.z=c;return this;};
  },
  render:function(){},
  setGridSize:function setPlayground(){
    this.p5 = null;
    if(p5){console.warn('p5 detected, running rendering in p5 mode');this.p5=p5;}
    
  },
};
