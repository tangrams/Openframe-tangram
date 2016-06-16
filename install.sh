#!/bin/bash
#
# Be VERY Careful. This script may be executed with admin privileges.

echo "Installing Tangram..."

if ! [ -z "$TRAVIS" ]; then
    echo "TRAVIS env, don't install"
    exit 0
fi

os=$(uname)
arq=$(uname -m)

if [ $os == "Linux" ]; then

    # on Linux distributions
    # sudo apt-get update
    # do we want to upgrade? this could take a damn long time.
    # sudo apt-get upgrade
    sudo apt-get install cmake libcurl4-openssl-dev
    export CXX=/usr/bin/g++-4.9

    # on RaspberryPi
    if [ $arq == "armv7l" ]; then
        # on RaspberryPi 2 or higher
        echo "armv7l"
        sudo cp bin/tangram /usr/local/bin/

    elif [ $arq == "armv6l" ]; then
        # on RaspberryPi 1 (A+, B+)
        echo "armv6l"

        git clone --depth=1 --recursive --branch=rpi_arguments git@github.com:tangrams/tangram-es.git tangram-es
        cd tangram-es
        make rpi
        sudp cp build/rpi/bin/tangram /usr/local/bin/
    else
        # Non-arm7 Debian...
        echo "non armv7l"
    fi

elif [ $os == "Darwin" ]; then

    # ON MacOX
    echo "osx"

fi
