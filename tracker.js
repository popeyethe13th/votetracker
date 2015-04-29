$(function() {
  var Picture = function (url) {
    this.url   = url;
    this.votes = 0;
  }
  var Tracker = function (leftVotes, rightVotes) {
    this.leftVotes    = leftVotes;
    this.rightVotes   = rightVotes;
    this.catPictures  = [];
    this.randomCatPic = function
    this.initailize   = function () {
      catUrls.forEach(function (url) {
        this.catPictures.push(new Picture(url));
      });



    }

  }
  var catUrls = ["1.jpg", "2.jpg", "3.jpg", "4.jpg", "5.jpg", "6.jpg", "7.jpg", "8.jpg", "9.jpg", "10.jpg", "11.jpg", "12.jpg", "13.jpg", "14.jpg" ];
} );
