class Star{
  constructor(){
    this.x = random(-width/2, width/2);
    this.y = random(-height/2, height/2);
    this.z = random(width);

    this.pz;
  }

  update(){
    this.z = this.z - speed;

    if(this.z < 1){
      this.x = random(-width/2, width/2);
      this.y = random(-height/2, height/2);
      this.z = random(width);

      this.pz = this.z;
    }
  }

  show(){
    fill(255);
    noStroke();

    var sx = map(this.x / this.z, 0, 1, 0, width);
    var sy = map(this.y / this.z, 0, 1, 0, height);
    var px = map(this.x / this.pz, 0, 1, 0, width);
    var py = map(this.y / this.pz, 0, 1, 0, height);
    this.pz = this.z;
    stroke(255);
    line(px, py, sx, sy);

  }
}
