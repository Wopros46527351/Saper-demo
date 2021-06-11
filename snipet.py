from tkinter import *

root = Tk()

def key(event):
    print ("pressed", repr(event.char))

def callback(event):
    print ("clicked at", event.x, event.y)

canvas= Canvas(root, width=100, height=100)
canvas.bind("<Button-1>", key)
canvas.bind("<Button-1>", callback)
canvas.pack()

root.mainloop()

from tkinter import *

root = Tk()
canvas = Canvas(root)
canvas.pack()

def itemClicked(event):
    canvas_item_id = event.widget.find_withtag('current')[0]
    print('Item', canvas_item_id, 'Clicked!')

def add_canvas_item(x,y):
    canvas_item_id = canvas.create_oval(x-50,y-50,x+50,y+50, fill='green')
    canvas.tag_bind(canvas_item_id ,'<ButtonPress-1>', itemClicked)

add_canvas_item(100,100)    # Test item 1
add_canvas_item(250,150)    # Test item 2

root.mainloop()