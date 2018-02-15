var app=angular.module('app',['ngRoute']);

app.config(function($routeProvider){
   $routeProvider
    //Страница по умолчанию
       .when('/',{
           templateURL:'pages/homepage.html',
           controller: 'Homepage'
       })
    //Страница "Контакты"
       .when('/contacts',{
           templateURL: 'pages/contacts.html',
           controller: 'Contacts'
       })
    //Страница "Турниры"
       .when('/tournaments',{
           templateURL: 'pages/tournaments.html',
           controller: 'Tournaments'
       })
});