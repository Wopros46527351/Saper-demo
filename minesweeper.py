from tkinter import Tk,Canvas
from matrixFunctions import *

class Minesweeper():

    class Tile():
        def __init__(self,row,cell,is_mine,canvas,tile_size) -> None:
            self.parent_canvas=canvas
            self.row = row
            self.cell = cell
            self.is_mine = is_mine
            self.is_open = False
            self.is_marked = False
            self.tile = self.parent_canvas.create_rectangle(cell*tile_size+2,row*tile_size+2,(cell+1)*tile_size+2,(row+1)*tile_size+2,
            fill = "gray",outline = "black")

    def __init__(self,size_y,size_x,mine_dencity) -> None:
        self.TILE_SIZE = 20
        self.window = Tk()
        self.canvas = Canvas(self.window,width=self.TILE_SIZE*size_y +2,height = self.TILE_SIZE*size_x+2)
        self.canvas.pack()
        self.SIZE_X = size_x
        self.SIZE_Y = size_y
        self.MINE_COUNT = int(size_y*size_x*(mine_dencity/100))
        self.tiles = self.Tile(0,0,True,self.canvas,self.TILE_SIZE)
    
    





if __name__=="__main__":
    m = Minesweeper(10,10,10)
    m.window.mainloop()