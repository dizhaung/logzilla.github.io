// called using:
//  head.load({ jsincludes: "/assets/js/jsincludes.js" },
// this loads asynchronously & in parallel
// and names the file loaded in case we want to callback with head.ready()
head.load(
        { jquery: "/assets/plugins/jquery-1.12.3.min.js"},
        { bootstrap: "/assets/plugins/bootstrap/js/bootstrap.min.js" },
        { bshover: "/assets/plugins/bootstrap-hover-dropdown.min.js" }, 
        { back2top: "/assets/plugins/back-to-top.js" }, 
        { placeholder: "/assets/plugins/jquery-placeholder/jquery.placeholder.js" }, 
        { fitvids: "/assets/plugins/FitVids/jquery.fitvids.js" }, 
        { flexslider: "/assets/plugins/flexslider/jquery.flexslider-min.js" }, 
        { main: "/assets/js/main.js" },
        { imgFullScreen: "/assets/js/image-fullscreen.js" },
        { newsletter: "/assets/js/newsletter.js" },
        { emailTrans: "/assets/js/email-transform.js" },
        function() {
            //console.log("JS Loaded");
});
