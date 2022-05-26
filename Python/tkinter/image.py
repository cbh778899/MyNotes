# for displaying image in tkinter for various extensions...
# Author: lililele https://github.com/cbh778899

from tkinter import Canvas
from PIL.Image import open, ANTIALIAS
from PIL.ImageTk import PhotoImage

'''
needs a pass parameter: root
this is the root where canvas(image) at
for example, Tk() object or Frame()...
'''
class ImageEx:
    def __init__(self, root):
        # img should be relatively global
        self.__img = None
        # photoimage is the real image displayed
        self.__photoImage = None
        # canvas to display image
        self.__canvas = Canvas(root)
        # tells image at the top left corner of canvas
        self.__image_container = self.__canvas.create_image(0, 0, anchor='nw')
        # contains the size of current image
        # use in update function, set in resize function
        self.__size = {'w': 0, 'h': 0}

    # return the canvas, call this function for packing into frame
    def getCanvas(self):
        return self.__canvas

    # the real entrance for displaying image
    def openImage(self, path):
        self.__img = open(path)
        self.__resizeImg()
        self.__photoImage = PhotoImage(self.__img)
        # after image prepared, update content in canvas
        self.__update()

    # update image displayed in canvas
    def __update(self):
        self.__canvas.itemconfig(self.__image_container, image=self.__photoImage)
        self.__canvas.config(width=self.__size['w'], height=self.__size['h'])

    # resizing / do nothing and set global variable __size
    def __resizeImg(self):
        # an example of how to resize
        # self.__img.resize((w, h), ANTIALIAS)
        self.__size['w'] = self.__img.width()
        self.__size['h'] = self.__img.height()