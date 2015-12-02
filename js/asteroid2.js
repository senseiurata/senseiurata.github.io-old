(function(root) {

    var Asteroids = root.Asteroids = (root.Asteroids || {});

    var Asteroid2 = Asteroids.Asteroid2 = function (pos, vel) {
        Asteroids.MovingObject.call(this, pos, vel, Asteroid2.RADIUS, Asteroid2.COLOR);
    }
    Asteroid2.inherits(Asteroids.MovingObject);

    Asteroid2.COLOR = "blue";
    Asteroid2.RADIUS = 10;
    Asteroid2.VELOCITY = 20;

    Asteroids.randomAsteroid2 = function (dimX, dimY) {
        return new Asteroid2(Asteroids.randomPos(dimX, dimY),
            Asteroids.randomVec());
    }

})(this);