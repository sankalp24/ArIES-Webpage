import cv2
img20 = cv2.imread("img/img8.JPG",cv2.IMREAD_COLOR)
M=cv2.resize(img20,(516,516))
cv2.imwrite("8.jpg",M)