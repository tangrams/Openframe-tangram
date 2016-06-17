#!/bin/bash
#
# Be VERY Careful. This script may be executed with admin privileges.

echo "Uninstalling Tangram..."

os=$(uname)
arq=$(uname -m)

if [ $os == "Linux" ]; then

    # on Debian Linux distributions

    if [ $arq == "armv7l" ]; then
        # on RaspberryPi

        echo "armv7l"
        sudo rm /usr/local/bin/tangram

    elif [ $arq == "armv6l" ]; then
        # on RaspberryPi 1 (A+, B+)
        echo "armv6l"
        sudo rm /usr/local/bin/tangram

    else
        # Non-arm7 Debian...
        echo "non armv7l"
        sudo rm /usr/local/bin/tangram

    fi

elif [ $os == "Darwin" ]; then
    # OSX
    echo "osx"
    sudo rm /usr/local/bin/tangram
    
fi
