// Climbing Stairs.

/**
 * @param {number} n
 * @return {number}
 */
 var climbStairs = function(n) {
    switch (n) {
      case 2:
        console.log('There are two ways to climb to the top.');
        console.log('firstway: 1 step + 1 step');
        console.log('secondway: 2 steps.');
        return n;
        break;
    
        case 3:
        console.log('There are three ways to climb to the top.');
        console.log('firstway: 1 step + 1 step + 1 step');
        console.log('secondway: 1 step + 2 steps.');
        console.log('thirdway: 2 steps + 1 steps.');
        return n;
        break;
            
      default:
        console.log('Lo lamentamos, por el momento no disponemos de ' + n + '.');
    }
    };