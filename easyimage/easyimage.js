var easyimg = require('easyimage');

module.exports = function(RED) {
    
    function EasyImage(config) {

        RED.nodes.createNode(this,config);
        var node = this;

        node.on('input', function(msg) {
            if ( config.api == "info" ) { 
                easyimg.info(msg.payload).then(
                    function(file) {
                        node.send(file);
                    }, function (err) {
                        node.error("EasyImage error", msg);
                    }
                );
            } else if ( config.api == "convert" ) { 
                easyimg.convert(msg.payload).then(
                    function(file) {
                        node.send(file);
                    }, function (err) {
                        node.error("EasyImage error", msg);
                    }
                );
            } else if ( config.api == "resize" ) { 
                easyimg.resize(msg.payload).then(
                    function(file) {
                        node.send(file);
                    }, function (err) {
                        node.error("EasyImage error", msg);
                    }
                );
            } else if ( config.api == "crop" ) { 
                easyimg.crop(msg.payload).then(
                    function(file) {
                        node.send(file);
                    }, function (err) {
                        node.error("EasyImage error", msg);
                    }
                );
            } else if ( config.api == "thumbnail" ) { 
                easyimg.thumbnail(msg.payload).then(
                    function(file) {
                        node.send(file);
                    }, function (err) {
                        node.error("EasyImage error", msg);
                    }
                );
            } else if ( config.api == "rescrop" ) { 
                easyimg.rescrop(msg.payload).then(
                    function(file) {
                        node.send(file);
                    }, function (err) {
                        node.error("EasyImage error", msg);
                    }
                );
            } else if ( config.api == "rotate" ) { 
                easyimg.rotate(msg.payload).then(
                    function(file) {
                        node.send(file);
                    }, function (err) {
                        node.error("EasyImage error", msg);
                    }
                );
            } else if ( config.api == "exec" ) { 
                easyimg.exec(msg.payload).then(
                    function(file) {
                        node.send(file);
                    }, function (err) {
                        node.error("EasyImage error", msg);
                    }
                );
            } else { 
                this.status({fill:"red",shape:"dot",text:"API not set."});
                console.log(msg);
            }
        })
    }
    
    RED.nodes.registerType("easyimage", EasyImage);
}