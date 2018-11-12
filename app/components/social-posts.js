"use strict";

const socialPosts = {
    template: `
    <p class="my-thoughts">My Thoughts</p>
    <button class="newpost-btn" ng-click="showform=true">New Post</button>
    <post-form ng-show="showform"></post-form>
    <section class="posts-container">
    <post post="post" ng-repeat="post in $ctrl.postList track by $index"></post>
    </section>
    
    `,
    controller: [function () {
        const vm = this;
        vm.postList = [
            {
                title: "Hello, Here's A Post!",
                content: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Commodi necessitatibus adipisci veritatis."
            },
            {
                title: "Another Post",
                content: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Commodi necessitatibus adipisci veritatis."
            },
            {
                title: "And Another One",
                content: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Commodi necessitatibus adipisci veritatis."
            },
        ];

        vm.onSubmit = (post) => {
            vm.postList.push(angular.copy(post));
        };

        vm.removePost = (index) => {
            vm.postList.splice(index, 1);
        };

        vm.setPost = (post) => {
            vm.post = post;
        };

        vm.getPost = () => {
            return vm.post;
        };

    }]
};``

angular
    .module("App")
    .component("socialPosts", socialPosts);