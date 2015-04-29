(function() {
  var catUrls = ["1.jpg", "2.jpg", "3.jpg", "4.jpg", "5.jpg", "6.jpg", "7.jpg", "8.jpg", "9.jpg", "10.jpg", "11.jpg", "12.jpg", "13.jpg", "14.jpg" ];
  var Picture = function (url) {
    this.url   = url;
    this.votes = 0;
  }
  var Tracker = function(leftVotes, rightVotes) {
    this.leftVotes    = leftVotes;
    this.rightVotes   = rightVotes;
    this.currentLeftPic;
    this.currentRightPic;
    this.catPictures  = [];
    this.randomCatPic = function () {
      var randomPic = Math.floor(Math.random() * this.catPictures.length);
      console.lo
      return this.catPictures[randomPic];
    };
    this.initialize   = function () {
      catUrls.forEach(function (url) {
        tracker.catPictures.push(new Picture(url));
      });
    }
    this.newPictures = function () {
      var leftPic = document.getElementById('left_side');
      var rightPic = document.getElementById('right_side');
      console.log(tracker.randomCatPic());
      this.currentLeftPic = tracker.randomCatPic();
      this.currentRightPic = tracker.randomCatPic();
      leftPic.innerHTML = '<img src = "' + this.currentLeftPic.url + '">';
      rightPic.innerHTML = '<img src = "' + this.currentRightPic.url + '">';
      console.log(leftPic.innerHTML);
    };
}
var tracker = new Tracker(0,0);
tracker.initialize();
tracker.newPictures();
var leftSide = document.getElementById('left_side');
var rightSide = document.getElementById('right_side');
var moreCatsButton = document.getElementById('moreCats');
moreCatsButton.addEventListener('click', function() {

  tracker.newPictures();
});
leftSide.addEventListener('click', function() {
  leftSide.style.border = '5px solid red';
  tracker.currentLeftPic.votes++;
});
rightSide.addEventListener('click', function() {
  rightSide.style.border = '5px solid blue';
  tracker.currentRightPic.votes++;
});
var catChart = document.getElementById('cat_Chart').getContext('2d');
catchart = new Chart(catChart).Pie([

  {
    value: 1,
    color: "#92CDCF",
    highlight: "#AAAAAA",
    label: "kittens A"
  },

  {
    value: 1,
    color: "#31353D",
    highlight: "#AAAAAA",
    label: "kittens B"
  }

  ]);

})();
