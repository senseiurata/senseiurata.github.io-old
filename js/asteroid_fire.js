(function (root) {
    var Asteroids = root.Asteroids = (root.Asteroids || {});

    var AsteroidFire = Asteroids.AsteroidFire = function (pos, vel) {
        Asteroids.MovingObject.call(
            this,
            pos,
            vel,
            AsteroidFire.RADIUS,
            AsteroidFire.COLOR
          );
    };

    AsteroidFire.inherits(Asteroids.MovingObject);

    AsteroidFire.COLOR = "pink";
    AsteroidFire.RADIUS = 4;
    AsteroidFire.VELOCITY = 20;

    Asteroids.randomAsteroidFire = function (pos) {
        return new AsteroidFire(pos,
            [
                Math.random() * AsteroidFire.VELOCITY - AsteroidFire.VELOCITY / 2,
                Math.random() * AsteroidFire.VELOCITY - AsteroidFire.VELOCITY / 2,
        ]);
    }

})(this);