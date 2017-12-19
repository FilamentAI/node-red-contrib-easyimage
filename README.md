EasyImage
------------------
 
 A <a href="http://nodered.org" target="_new">Node-RED</a> that wraps the functionality provided by <a href="https://www.npmjs.com/package/easyimage">easyimage</a>.

Install
-------

Run the following command in the root directory of your Node-RED install

    npm install node-red-contrib-easyimage

Pre-reqs
--------

You will need have installed ImageMagick. <a href="https://www.npmjs.com/package/easyimage">The documentation</a> for EasyImage explains the various commands for different platforms that will allow you to install it correctly. 

Config
------

In the node configuration you will need to set the API you wish to call. 

Usage
-----

The msg.payload property is expected to be an object containing the properties relevant to the API that you've selected in the configuration. #

The EasyImage options object can have these properties depending on the method. Unrelated options are ignored.
~~~~
src - path to source image.
dst - path to destination image.
width - width of resized image.
height - height of resized image.
degree - degree of rotation.
cropwidth - width of cropped image, if missing, width will be used instead.
cropheight - height of cropped image, if missing, height will be used instead.
x - x offset for cropping, defaults to 0.
y - y offset for cropping, defaults to 0.
quality - quality of processed image, 1 to 100.
gravity - crop position [NorthWest | North | NorthEast | West | Center | East | SouthWest | South | SouthEast], defaults to Center.
fill - fill area flag, image is resized to completely fill the target crop dimensions, defaults to false.
background - background color, defaults to "white". If specified, automatically flattens the image.
flatten - if present, the image will be flattened (flattening removes alpha channel). Defaults to false.
ignoreAspectRatio - if set to true, resize will ignore aspect ratio
~~~~
