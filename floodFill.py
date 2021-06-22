import os
from tkinter import *
from minesweeper import Tile


def show(matrix):
    
    [print(*x) for x in matrix]
    print("-"*14)


def flood_fill_rec(matrix,y,x,match,fill):
    limit_y = len(matrix)
    limit_x = len(matrix[0])
    if matrix[y][x] == match:
        matrix[y][x] = fill
        for dy,dx in ((1,0),(-1,0),(0,1),(0,-1)):
            if 0<=x+dx<limit_x and 0<=y+dy<limit_y:
                flood_fill_rec(matrix,y+dy,x+dx,match,fill)
        return matrix
    else:
        return matrix

def flood_fill_stack(matrix,y,x,match,fill):
    limit_y = len(matrix)
    limit_x = len(matrix[0])
    stack = [(y,x)]
    while stack:
        ty,tx = stack.pop()
        if matrix[ty][tx] == match:
            matrix[ty][tx] = fill
            for dy,dx in ((1,0),(-1,0),(0,1),(0,-1)):
                if 0<=tx+dx<limit_x and 0<=ty+dy<limit_y:
                    stack.append((ty+dy,tx+dx))
    return matrix

#def flood_fill_rec_visual():

#def flood_fill_span(matrix,y,x,match,fill):
#    seeds = [(y,x)]
#    while

if __name__ == "__main__":
    test_matrix = [
    [0,0,0,1,0,0,0],
    [0,0,0,1,0,0,0],
    [0,0,0,1,0,0,0],
    [1,1,0,1,0,1,1],
    [0,0,0,1,0,0,0],
    [0,0,0,1,0,0,0],
    [0,0,0,1,0,0,0]]
    show(test_matrix)
    test_matrix = flood_fill_rec(test_matrix,0,0,0,2)
    show(test_matrix)
    test_matrix = flood_fill_stack(test_matrix,0,6,0,3)
    show(test_matrix)
    root = Tk()
    c = Canvas(root,width=600,height=600,bg = "white")
    c.pack()
    for row in range(7):
        for cell in range(7):
            value = test_matrix[row][cell]
            test_matrix[row][cell] = Tile(row,cell,True if value == 1 else False,c,50)
    for row in range(7):
        for cell in range(7):
            test_matrix[row][cell].open()
    root.mainloop()
