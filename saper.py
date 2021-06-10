import matrixFunctions
import random
from tkinter import *


FIELD = []
MINEFIELD = []
SIZE_X = 10
SIZE_Y = 10
MINE_COUNT = 10
TILE_SIZE = 50

class Tile():
    def __init__(self,row,cell):
        global TILE_SIZE
        self.tile = c.create_rectangle(row*TILE_SIZE,
        cell*TILE_SIZE,
        (row+1)*TILE_SIZE,
        (cell+1)*TILE_SIZE,
        fill = 'gray',
        outline="black")
        self.text = c.create_text((row+0.5)*TILE_SIZE,(cell+0.5)*TILE_SIZE,text="")
        self.row = row
        self.cell = cell
        return None

    def open_cell(self):
        global MINEFIELD
        content = MINEFIELD[self.row][self.cell]
        if content =='m':
            c.itemconfig(self.tile,fill='red')
        elif content:
            c.itemconfig(self.tile,fill='green')
        else:
            c.itemconfig(self.tile,fill='white')
        root.update()

root = Tk()
c = Canvas(root,width = TILE_SIZE*SIZE_X,height = TILE_SIZE*SIZE_Y,bg="white")
c.pack()


mines = random.sample(range(SIZE_X*SIZE_Y),MINE_COUNT)
MINEFIELD = [['m' if row*SIZE_X+cell in mines else 0 for cell in range(SIZE_X)]for row in range(SIZE_Y)]

for row in range(SIZE_X):
    for cell in range(SIZE_Y):
        if MINEFIELD[row][cell] != 'm':
            MINEFIELD[row][cell] = len(matrixFunctions.find_neighbours_equal(MINEFIELD,cell,row,'m'))

FIELD = [[Tile(row,cell) for cell in range(SIZE_X)] for row in range(SIZE_Y)]
print(*MINEFIELD,sep = '\n')
for row in range(SIZE_X):
    for cell in range(SIZE_Y):
        FIELD[row][cell].open_cell()
root.mainloop()