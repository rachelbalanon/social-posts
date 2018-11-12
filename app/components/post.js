"use strict";

const post = {
    template:`
   <section class="single-post">
    <h3>{{$ctrl.post.title}}</h3>
    <section class="content-container">
    <p class="post-content">{{$ctrl.post.content}}</p>
    <i class="material-icons" ng-click="$ctrl.removePost($index)">clear</i>
    </section>
   </section>
    `,
    bindings: {
        post:"<",
        removePost: "&"
    }
};

angular
    .module("App")
    .component("post", post);