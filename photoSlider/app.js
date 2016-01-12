'use strict';
var myApp = angular.module('loadImage', ['ngAnimate', 'ui.bootstrap']);


myApp.controller('ModalDemoCtrl', ['$scope','$uibModal', function($scope , $uibModal) {

    $scope.animationsEnabled = true;

    $scope.open = function () {
        var modalInstance = $uibModal.open({
            animation: $scope.animationsEnabled,
            templateUrl: 'myModalContent.html',
            controller: 'ModalInstanceCtrl',
        });
    };

    $scope.toggleAnimation = function () {
        $scope.animationsEnabled = !$scope.animationsEnabled;
    };

}]);

myApp.controller('ModalInstanceCtrl', ['$scope','$http','$uibModalInstance', function($scope,$http ,$uibModalInstance) {

        $scope.sendPost = function() {
            $uibModalInstance.close();


        //
        }
    $scope.cancel = function () {
        $uibModalInstance.dismiss('cancel');
    };
}]);



myApp.controller('imgCtrl', ['$scope', function ($scope) {
    
    $scope.photos= 
        // localStorage.getItem("Images")?localStorage.getItem("Images"):
    [
    { src: 'Images/home-page-feature-thumbnail-image-front-featured-films-slider-1.jpg', description: 'ICE AGE: COLLISION COURSE', title: 'july 22,2016' },
    { src: 'Images/home-page-feature-thumbnail-image-front-featured-films-slider-2(2).jpg', description: 'THE OTHER SIDE OF THE DOOR', title: 'march 11,2016' },
    { src: 'Images/home-page-feature-thumbnail-image-front-featured-films-slider-2.jpg', description: 'ALVIN AND THE CHIPMUNKS', title: 'now playing' },
    { src: 'Images/home-page-feature-thumbnail-image-front-featured-films-slider-3.jpg',description: 'DEADPOOL', title: 'february 12,2016' },
    { src: 'Images/home-page-feature-thumbnail-image-front-featured-films-slider-4(1).jpg',description: 'THE REVENT', title: 'january 8,2016'   },
    { src: 'Images/home-page-feature-thumbnail-image-front-featured-films-slider-4.jpg', description: 'JOY', title: 'now playing' },
    { src: 'Images/home-page-feature-thumbnail-image-front-featured-films-slider-6.jpg', description: 'THE PEANUTS MOVIE', title: 'now playing' },
    { src: 'Images/home-page-feature-thumbnail-image-front-featured-films-slider-7 (1).jpg', description: 'INDEPENDENCE DAY: RESURGENCE', title: 'summer 2016' },
     { src: 'Images/home-page-feature-thumbnail-image-front-featured-films-slider-7.jpg', description: 'VICTOR FRANKENSTEIN', title: 'now playing' },
     { src: 'Images/home-page-feature-thumbnail-image-front-featured-films-slider-2(1).jpg', description: 'VICTOR DOES KOKUALE', title: 'january 8,2016' },
];
//$scope.bindPhoto = function (event) {
//    $scope.photo.image = event.target.value.split('\\').pop();
//};
$scope.photo = {
    src: '',
    title: '',
    description: '',
    image: ''
};
    //class condition to design the photo
$scope.imageMode = 1;

 // $scope.photos = getImages();


// initial image index
$scope._Index =2;

// if a current image is the same as requested image
$scope.isActive = function (index) {
    return $scope._Index === index;
};


// show prev image
$scope.showPrev = function () {
    $scope._Index = ($scope._Index > 0) ? --$scope._Index : $scope.photos.length - 1;
   
};
    
// show next image
$scope.showNext = function () {
  $scope._Index = ($scope._Index < $scope.photos.length - 1) ? ++$scope._Index : 0;
  
};

// show a certain image
$scope.showPhoto = function (index) {
    $scope._Index = index;
};
//wich photo to display
$scope.displayPhoto = function (photo) {
    var index = $scope.photos.indexOf(photo);
    //var limitPhotos = 5;
    var firstPhoto = $scope._Index - 2;
    var lastPhoto = $scope._Index + 2;
       
 
    return firstPhoto <= index && lastPhoto >= index;
}; 
         
//add photo to gallery
$scope.add = function () {
   
    alert("save an image");
   // loadImage();
   $scope.photos.push($scope.photo);
   
   
  saveToLocalStorage();
};
 
    //remave photo from gallery
$scope.removePhoto = function (photo) {
    var index = $scope.photos.indexOf(photo);
    $scope.photos.splice(index, 1);
  
};





//$scope.loadImage=function () {
//    var f = document.getElementById('file').files[0],
//        r = new FileReader();
//    r.onloadend = function (e) {
//        var data = e.target.result;
// }
//    r.readAsBinaryString(f);

//};


    //function loadImage(image)
//{
//    console.log('here');
//    var reader = new FileReader();
//    reader.onload = function (event) {

//        //the_url = image;
//        //_url = the_url;
//    };

//    //when the file is read it triggers the onload event above.
//    reader.readAsDataURL(document.getElementById("loadFile").files[0]);
//    //window["renderImage"] = $scope.loadImage;
//}



//$scope.scrollTo = function (photo) {
//    var index = $scope.photos.indexOf(photo);
//    $scope.listposition = { left: (IMAGE_WIDTH * index * -1) + "px" };
//    $scope.selected =photo;
//}

//// local storge section
//var Images = [];
////localStorage.clear();

//function saveToLocalStorage() {

//    var Images = JSON.parse(localStorage.getItem("Images")) ? JSON.parse(localStorage.getItem("Images")) : [];
//    Images.push($scope.photo);
//    $scope.photos = Images;
//    console.log(Images);
//   localStorage.setItem("Images", JSON.stringify(Images));
//}

//function addImage(image) {
//    //Images = [];

//    //localStorage.clear();
//    //save in local storage
//    Images = loadFromlocalstorage();
//    Images.push(image);
//    localStorage.setItem("Images", JSON.stringify(Images));
//    // saveTolocalstorage(Images);
//    // JSON=parse.toLocaleString.getItem("Images");
//    //console.log(localStorage);
//    return Images;
//};

//function removeImage(index) {

    
//   // Images = loadFromlocalstorage();
//    Images.splice(index, 1);

//    //localStorage.removeItem(index);
//    ////save in local storage
//    //localStorage.setItem("Images", JSON.stringify(Images));
//    //return Images;
//    ////saveTolocalstorage(Images);
//};


//function getImages () {
//    //return Images;
//    //   load from localstorage
//    Images = loadFromlocalstorage();
//    return Images;
//};


}]);




