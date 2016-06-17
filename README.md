![](imgs/00.gif)

# Tangram extension for [Openframe](http://openframe.io/)

[Openframe](http://openframe.io/) is an open source platform for artists, curators and art enthusiasts to share, discover and display digital art.  Anyone can set up a frame using an HDMI display and a [Raspberry Pi](https://www.raspberrypi.org/).

This provides an extention for [Openframe](http://openframe.io/) to display maps via [Tangram ES](https://github.com/tangrams/tangram-es).

## How to install

Follow [this installation guide to install openframe](https://github.com/OpenframeProject/Openframe/wiki/Openframe-user-guide)

1. [Create an OpenFrame account](https://github.com/OpenframeProject/Openframe/wiki/Openframe-user-guide#1-create-a-user-account)
2. [Install Raspbian in a RaspberryPi](https://github.com/OpenframeProject/Openframe/wiki/Openframe-user-guide#20-initial-setup)
3. [Install OpenFrame on it](https://github.com/OpenframeProject/Openframe/wiki/Openframe-user-guide#21-install-openframe) using this script ```bash -c "$(curl http://openframe.io/install.sh)"```
4. [Setup your frame](https://github.com/OpenframeProject/Openframe/wiki/Openframe-user-guide#22-start-the-frame)

Once you have your frame working is time to install the extension for [Tangram ES](https://github.com/tangrams/tangram-es). For that in the console type:

```bash
openframe -i openframe-tangram 
```

Once the script finish you can push tangram maps to it.

## How add Tangram Maps as artworks

First you will need to create a Tangram Map scene file. For that you can use [**TangramPlay**](https://mapzen.com/tangram/play/). There are a lot of resources to learn about Tangram ```.yaml``` scene files. Probably the first place to start is the [tangram **documentation**](https://mapzen.com/documentation/tangram/). Once you are confortable with it you can use [tangram **blocks**](http://tangrams.github.io/blocks/).

![](imgs/02.png) 

Take a screenshot

Once you have it you need to put it the `.yaml` file and the screenshot somewhere in the clouds... I use Dropbox for example. 

Then enter to your [openFrame.io account](http://openframe.io) and click on **"Add artwork"**.

![](imgs/01.png) 

Fill the values with your Name and Title of the map. In the format section choose **Other** and then specify the format as ```openframe-tangram```.

Then you need to provide the urls for the ```.yaml``` scene file and the screenshot of the map.

