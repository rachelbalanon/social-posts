"use strict";

const postForm = {
    template:`
    <section class="form-container">
    <form class="post-form" ng-submit="$ctrl.onSubmit($ctrl.post);">
    <p class="title">Title</p>
    <input type="text" placeholder="Post title" ng-model="$ctrl.post.title">
    <p class="title">Thought</p>
    <textarea ng-model="$ctrl.post.content"></textarea>
    <button class="addpost-btn" ng-click="showform=false">Add Post</button>
    </form>
    </section>
    `,
    bindings:{
        onSubmit:"&"
    }
};

angular
    .module("App")
    .component("postForm", postForm);