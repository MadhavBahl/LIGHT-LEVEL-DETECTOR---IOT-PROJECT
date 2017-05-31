var config = {
  apiKey: "AIzaSyC3Qyl1vjIQGgc98EjQDK6TVQSNOJqK_CY",
  authDomain: "light-level-detector.firebaseapp.com",
  databaseURL: "https://light-level-detector.firebaseio.com",
  projectId: "light-level-detector",
  storageBucket: "light-level-detector.appspot.com",
  messagingSenderId: "234081632770"
};
firebase.initializeApp(config);

var database = firebase.database();
var ref= database.ref('ledLevel');
var ledLevel;
var bkgn;

function mainFunction(){
  ref.on('value',getData,errData);
  function getData(data){
    ledLevel=data.val();
    console.log(data.val());
    if(ledLevel>10 && ledLevel<70)
    {
      bkgn = document.getElementById("mainScreen");
      bkgn.style.background = 'url(bkg2.jpg)';
      bkgn.style.backgroundRepeat = 'no-repeat';
      bkgn.style.backgroundSize = '100% 100%';
    }
    else if(ledLevel>=70 && ledLevel<150)
    {
      bkgn = document.getElementById("mainScreen");
      bkgn.style.background = 'url(bkg3.jpg)';
      bkgn.style.backgroundRepeat = 'no-repeat';
      bkgn.style.backgroundSize = '100% 100%';
    }
    else if(ledLevel>=150 && ledLevel<=255)
    {
      bkgn = document.getElementById("mainScreen");
      bkgn.style.background = 'url(bkg4.jpg)';
      bkgn.style.backgroundRepeat = 'no-repeat';
      bkgn.style.backgroundSize = '100% 100%';
    }
    else{
      bkgn = document.getElementById("mainScreen");
      bkgn.style.background = 'url(bkg.jpg)';
      bkgn.style.backgroundRepeat = 'no-repeat';
      bkgn.style.backgroundSize = '100% 100%';
    }

  }
  function errData(data){
    console.log('Error!');
    console.log(err);
  }
}
