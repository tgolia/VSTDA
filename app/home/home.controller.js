// SHORTCUT: ngcontroller angular.controller
(function() {
    'use strict';

    angular
        .module('app')
        .controller('HomeController', HomeController);

    HomeController.$inject = [];

    /* @ngInject */
    function HomeController() {
    	var vm = this;

    	vm.todos = [];

    	vm.addTodo = addTodo;


    	//////////////// There's a short cut to create a line break like this ('line-break').... might need to add files to Sublime package like I did with John Papa Angular Snippets (video in Resilio)

    	function addTodo() {
    		vm.todos.push(vm.newTodo); // unshift to put at opposite side
            console.log(vm.newTodo);
    	}
    }
})();