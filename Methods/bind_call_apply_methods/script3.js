let runner = {
  name: 'Runner',
  run: function(speed){
    console.log(this.name + ' ' + 'runs at' + ' ' + speed +  'mph.');
  }
};

let flyer ={
  name: 'Flyer',
  fly: function(speed){
  console.log(`${this.name} flies at ${speed} mph.`)
  }
}

let run = runner.run.bind(flyer, 20)
console.log(run())