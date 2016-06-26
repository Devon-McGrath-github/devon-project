#Talking Points

- background image css
- inline styles with react
- Pexel Api - api header.
- Image compression/load times

----------------------------------------

##cover and contain

BOTH FIRST AND FOREMOST:
MAINTAIN THE ASPECT RATIOS OF THE IMAGES.

Contain wants to show the ENTIRE image, contained within the viewport (screen/display)

contain is like *watching a  movie on a screen that isn't the right size, think of the black bars at the top and bottom of the screen so that the image is in the center*.

Cover wants to cover the entire area it is assigned with the image provided. It does so, by not always displaying the entire image. It maintains the aspect ratio of the image whilst showing as much of that image as possible on the screen, hiding whatever doesn't fit.

--------------------------------------

##Inline Styling

you will note I have both inline styles and an external css file

Benefits of inline styling
-can be included directly from your component modules
    eliminates any file management with css, all styling can be done inside that module, so when it's called its ready to go. everything is self contained.
-nothing overwrites inline styles.

cons/what css offers:
cons-
  - nothing overwrites inline syles,
