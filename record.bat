REM Doesn't work on emulator
adb shell rm /sdcard/demo*.mp4
adb shell screenrecord --time 17 /sdcard/demo.mp4 --verbose
REM weird output name issue
adb shell mv /sdcard/demo*.mp4 /sdcard/demo.mp4
del demo.mp4
adb pull /sdcard/demo.mp4 .
del palette.png
ffmpeg -i demo.mp4 -vf fps=15,scale=320:-1:flags=lanczos,palettegen palette.png
del demo.gif
ffmpeg -i demo.mp4 -i palette.png -filter_complex "fps=15,scale=400:-1:flags=lanczos[x];[x][1:v]paletteuse" demo.gif