

import matrixFunctions
import random
from tkinter import *


FIELD = []
MINEFIELD = []
SIZE_X = 50
SIZE_Y = 50
MINE_DENCETY=10
MINE_COUNT = int(SIZE_X*SIZE_Y*(MINE_DENCETY/100))
OPEN_COUNT = 0
MARK_COUNT = 0
TILE_SIZE = 10


def item_clicked(event):
    item=c.find_withtag('current')[0]
    for row in range(SIZE_Y):
        for cell in range(SIZE_X):
            if FIELD[row][cell].tile==item:
                FIELD[row][cell].open_cell()


    print(item)


def Victory():
    
    l=Label(root,text="victory")
    l.pack()
    open_all()
    input()

def open_all():
    for row in range(SIZE_Y):
        for cell in range(SIZE_X):
            if MINEFIELD[row][cell]!='m':
                FIELD[row][cell].open_cell()
                root.update()
    



class Tile():
    def __init__(self,row,cell) -> None:
        self.tile=c.create_rectangle(cell*TILE_SIZE,
        row*TILE_SIZE,(cell+1)*TILE_SIZE,(row+1)*TILE_SIZE,
        fill="grey",outline="black")
        self.text=c.create_text((cell+0.5)*TILE_SIZE,(row+0.5)*TILE_SIZE,
        text="")
        self.row=row
        self.cell=cell
        self.open=False
        self.marked=False

    def open_cell(self):
        global MINEFIELD
        content=MINEFIELD[self.row][self.cell]
        if content=='m':
            c.itemconfig(self.tile,fill="red")

        elif content:
            c.itemconfig(self.tile,fill="green")
            c.itemconfig(self.text,text=str(content))

        else:
            c.itemconfig(self.tile,fill="white")
        self.open=True

    def mark_cell(self):
        if not self.marked:
            self.marked=True
            c.itemconfig(self.tile,fill="blue")
            global MINEFIELD,MARK_COUNT
            content=MINEFIELD[self.row][self.cell]
            if content=="m":
                MARK_COUNT+=1
                if MARK_COUNT==MINE_COUNT:
                    Victory()


    def AI_attention(self):
        c.itemconfig(self.tile,fill="yellow")

    def AI_leave(self):
        
        if self.open:
            global MINEFIELD
            content=MINEFIELD[self.row][self.cell]
            if content=='m':
                c.itemconfig(self.tile,fill="red")

            elif content:
                c.itemconfig(self.tile,fill="green")
                

            else:
                c.itemconfig(self.tile,fill="white")

        elif self.marked:
            c.itemconfig(self.tile,fill="blue")  

        else:
            c.itemconfig(self.tile,fill='grey')    


            
        

root = Tk()
c = Canvas(root,width = TILE_SIZE*SIZE_X,height = TILE_SIZE*SIZE_Y,bg="white")   
c.bind("<Button-1>",item_clicked)
c.pack()
mines = random.sample(range(SIZE_X*SIZE_Y),MINE_COUNT)
MINEFIELD = [['m' if row*SIZE_X+cell in mines else 0 for cell in range(SIZE_X)]for row in range(SIZE_Y)]

for row in range(SIZE_Y):
    for cell in range(SIZE_X):
        if MINEFIELD[row][cell]!='m':
            MINEFIELD[row][cell]=len(matrixFunctions.find_neighbours_equal(MINEFIELD,cell,row,'m'))

FIELD = [[Tile(row,cell) for cell in range(SIZE_X)] for row in range(SIZE_Y)]

#root.mainloop()

FIELD[0][0].open_cell()
while True:
    for row in range(SIZE_Y):
        for cell in range(SIZE_X):
            c_tile= FIELD[row][cell]

            if c_tile.open:
                neighbours=matrixFunctions.find_neighbours(MINEFIELD,cell,row)
                neighbours_tiles=[FIELD[m_row][m_cell] for m_row,m_cell in neighbours]
                marks=len([tile for tile in neighbours_tiles if tile.marked ])
                closed=[tile for tile in neighbours_tiles if not tile.open ]

                if closed and len(closed)>marks:

                    FIELD[row][cell].AI_attention()                
                    tile_content=MINEFIELD[row][cell]                    

                    
                    if tile_content==0 :                         
                        for tile in neighbours_tiles:
                            
                            tile.open_cell()
                    elif len(closed)==tile_content :
                        for tile in closed:
                            
                            tile.mark_cell()

                    elif marks==tile_content :
                        for tile in closed :
                            if not tile.marked:
                                tile.open_cell()


                    root.update()
                    FIELD[row][cell].AI_leave()

