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
            self.text = self.parent_canvas.create_text((cell+0.5)*tile_size+2,(row+0.5)*tile_size+2,text="")
            self.content = 0
            self.mates = []
        
        def open(self):
            if self.is_mine:
                self.parent_canvas.itemconfig(self.tile,fill="red")
            elif self.content:
                self.parent_canvas.itemconfig(self.tile,fill="green")
                self.parent_canvas.itemconfig(self.text,text = self.content)
            else:
                self.parent_canvas.itemconfig(self.tile,fill="white")
            self.is_open=True

    def __init__(self,size_y,size_x,mine_dencity) -> None:
        self.TILE_SIZE = 20
        self.window = Tk()
        self.canvas = Canvas(self.window,width=self.TILE_SIZE*size_y +2,height = self.TILE_SIZE*size_x+2)
        self.canvas.pack()
        self.SIZE_X = size_x
        self.SIZE_Y = size_y
        self.MINE_COUNT = int(size_y*size_x*(mine_dencity/100))

        #<------------------------------------------------------------------------->
        #rewrite to use decorators
        mines = random.sample(range(size_x*size_y),self.MINE_COUNT)
        self.tiles = [[self.Tile(row,cell,row*size_x+cell in mines,self.canvas,self.TILE_SIZE) for cell in range(size_x)] for row in range(size_y)]
        for row in range(size_y):
            for cell in range(size_x):
                self.tiles[row][cell].mates = find_neighbours(self.tiles,cell,row)
                self.tiles[row][cell].content = len([0 for m_row,m_cell in self.tiles[row][cell].mates if self.tiles[m_row][m_cell].is_mine])

    





if __name__=="__main__":
    m = Minesweeper(10,10,10)
    for row,x in enumerate(m.tiles):
        for cell,_ in enumerate(x):
            m.tiles[row][cell].open()
            m.window.update()
    m.window.mainloop()